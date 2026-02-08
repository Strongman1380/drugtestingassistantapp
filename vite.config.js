import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/.*\/api\/(chat|vision)$/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                networkTimeoutSeconds: 10,
                expiration: { maxEntries: 32, maxAgeSeconds: 86400 },
              },
            },
          ],
        },
        manifest: {
          name: 'Field Testing Assistant',
          short_name: 'Field Testing',
          description: 'Drug testing education, AI assistant, and SVT color matching tool',
          start_url: '/',
          display: 'standalone',
          background_color: '#f9fafb',
          theme_color: '#1e40af',
          orientation: 'portrait',
          categories: ['medical', 'utilities'],
          icons: [
            { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
            { src: '/apple-touch-icon-180.png', sizes: '180x180', type: 'image/png' },
          ],
        },
      }),
      {
        name: 'api-proxy',
        configureServer(server) {
          // Chat API proxy
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            const apiKey = env.OPENAI_API_KEY;
            if (!apiKey) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'OPENAI_API_KEY not set in .env file' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => { body += chunk; });
            req.on('end', async () => {
              try {
                const { messages } = JSON.parse(body);
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                  },
                  body: JSON.stringify({
                    model: 'gpt-4o-mini',
                    messages,
                    temperature: 0.7,
                    max_tokens: 1000,
                  }),
                });

                if (!response.ok) {
                  const err = await response.json().catch(() => ({}));
                  res.statusCode = response.status;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.error?.message || 'OpenAI API error' }));
                  return;
                }

                const data = await response.json();
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: data.choices[0].message.content }));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Internal server error' }));
              }
            });
          });

          // Vision API proxy
          server.middlewares.use('/api/vision', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            const apiKey = env.OPENAI_API_KEY;
            if (!apiKey) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'OPENAI_API_KEY not set in .env file' }));
              return;
            }

            let body = '';
            let bodySize = 0;
            const MAX_SIZE = 5 * 1024 * 1024; // 5MB

            req.on('data', (chunk) => {
              bodySize += chunk.length;
              if (bodySize > MAX_SIZE) {
                res.statusCode = 413;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Image too large. Max 5MB.' }));
                return;
              }
              body += chunk;
            });
            req.on('end', async () => {
              if (bodySize > MAX_SIZE) return;
              try {
                const { image } = JSON.parse(body);
                if (!image || typeof image !== 'string') {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Base64 image is required' }));
                  return;
                }

                const svtPrompt = `You are analyzing a photo of an SVT (Specimen Validity Test) strip on an iCUP drug testing cup. The strip has 4 color pads. Analyze each pad and return the closest matching value.

The 4 parameters and their possible values are:
1. OX/PCC (Oxidants) - pad ID: "oxpcc" - values: "negative" (white/cream), "low" (light green), "high" (dark blue/navy)
2. CRE (Creatinine) - pad ID: "creatinine" - values: "0" (tan/beige), "10" (light peach), "20" (pink), "50" (medium pink/mauve), "100" (dark pink/magenta), "200" (deep purple/maroon)
3. S.G. (Specific Gravity) - pad ID: "specificGravity" - values: "1.000" (dark blue), "1.003" (teal), "1.005" (green-teal), "1.010" (medium green), "1.015" (yellow-green), "1.020" (light green), "1.025" (lime), "1.030" (gold), "1.035" (dark gold/amber)
4. pH - pad ID: "ph" - values: "2" (red), "3" (coral), "4" (orange), "5" (amber), "6" (mustard), "7" (olive), "8" (dark olive), "9" (dark brown), "10" (purple), "11" (dark purple), "12" (very dark purple)

Return ONLY valid JSON: {"results":{"oxpcc":{"value":"<value>","confidence":"high|medium|low"},"creatinine":{"value":"<value>","confidence":"high|medium|low"},"specificGravity":{"value":"<value>","confidence":"high|medium|low"},"ph":{"value":"<value>","confidence":"high|medium|low"}}}
If a pad is unreadable, set value to null and confidence to "low".`;

                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                  },
                  body: JSON.stringify({
                    model: 'gpt-4o-mini',
                    messages: [
                      { role: 'system', content: svtPrompt },
                      {
                        role: 'user',
                        content: [
                          { type: 'text', text: 'Analyze the SVT strip color pads in this photo and return the JSON results.' },
                          { type: 'image_url', image_url: { url: image, detail: 'high' } },
                        ],
                      },
                    ],
                    temperature: 0.1,
                    max_tokens: 500,
                  }),
                });

                if (!response.ok) {
                  const err = await response.json().catch(() => ({}));
                  res.statusCode = response.status;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.error?.message || 'OpenAI API error' }));
                  return;
                }

                const data = await response.json();
                const content = data.choices[0].message.content;

                let parsed;
                try {
                  const jsonMatch = content.match(/\{[\s\S]*\}/);
                  parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
                } catch {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Failed to parse vision response' }));
                  return;
                }

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(parsed));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Internal server error' }));
              }
            });
          });
        },
      },
    ],
    server: {
      port: 5173,
      host: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});
