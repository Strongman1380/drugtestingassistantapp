export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
};

const SVT_SYSTEM_PROMPT = `You are analyzing a photo of an SVT (Specimen Validity Test) strip on an iCUP drug testing cup. The strip has 4 color pads that indicate specimen validity. Analyze each pad and return the closest matching value.

The 4 parameters and their possible values are:

1. OX/PCC (Oxidants) - pad ID: "oxpcc"
   - "negative" = white/cream (no color change)
   - "low" = light green
   - "high" = dark blue/navy

2. CRE (Creatinine) - pad ID: "creatinine"
   - "0" = tan/beige
   - "10" = light peach/salmon
   - "20" = pink
   - "50" = medium pink/mauve
   - "100" = dark pink/magenta
   - "200" = deep purple/maroon

3. S.G. (Specific Gravity) - pad ID: "specificGravity"
   - "1.000" = dark blue
   - "1.003" = teal
   - "1.005" = green-teal
   - "1.010" = medium green
   - "1.015" = yellow-green
   - "1.020" = light green
   - "1.025" = lime/chartreuse
   - "1.030" = gold/dark yellow
   - "1.035" = dark gold/amber

4. pH - pad ID: "ph"
   - "2" = red
   - "3" = light red/coral
   - "4" = orange
   - "5" = light orange/amber
   - "6" = dark yellow/mustard
   - "7" = olive/brown-yellow
   - "8" = dark olive/brown
   - "9" = dark brown
   - "10" = purple
   - "11" = dark purple
   - "12" = very dark purple

IMPORTANT: Return ONLY valid JSON with no other text. Use this exact format:
{
  "results": {
    "oxpcc": { "value": "<value>", "confidence": "high|medium|low" },
    "creatinine": { "value": "<value>", "confidence": "high|medium|low" },
    "specificGravity": { "value": "<value>", "confidence": "high|medium|low" },
    "ph": { "value": "<value>", "confidence": "high|medium|low" }
  }
}

If a pad is not visible or unreadable, set value to null and confidence to "low".
Use "high" confidence when the color clearly matches one option.
Use "medium" when the color is between two options.
Use "low" when the pad is hard to see, blurry, or the lighting is poor.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }

  try {
    const { image } = req.body;

    if (!image || typeof image !== 'string') {
      return res.status(400).json({ error: 'Base64 image is required' });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SVT_SYSTEM_PROMPT },
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Analyze the SVT strip color pads in this photo and return the JSON results.',
              },
              {
                type: 'image_url',
                image_url: {
                  url: image,
                  detail: 'high',
                },
              },
            ],
          },
        ],
        temperature: 0.1,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return res.status(response.status).json({
        error: errorData.error?.message || 'OpenAI API error',
      });
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Parse JSON from response (handle markdown code blocks)
    let parsed;
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
    } catch {
      return res.status(500).json({ error: 'Failed to parse vision response' });
    }

    return res.status(200).json(parsed);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
