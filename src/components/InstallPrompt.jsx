import { useState, useEffect } from 'react';
import { Download, X, Share } from 'lucide-react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showIOSPrompt, setShowIOSPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    if (sessionStorage.getItem('installDismissed')) {
      setDismissed(true);
      return;
    }

    // Check if already installed as PWA
    if (window.matchMedia('(display-mode: standalone)').matches) return;
    if (window.navigator.standalone) return;

    // Android/Chrome: listen for beforeinstallprompt
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    // iOS Safari: show manual instruction
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    if (isIOS && isSafari) {
      setShowIOSPrompt(true);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('installDismissed', 'true');
  };

  if (dismissed) return null;
  if (!deferredPrompt && !showIOSPrompt) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-blue-800 text-white px-4 py-3 shadow-lg safe-top">
      <div className="max-w-lg mx-auto flex items-center gap-3">
        <Download size={20} className="shrink-0" />
        <div className="flex-1 text-sm">
          {deferredPrompt ? (
            <span>Install this app for quick access</span>
          ) : (
            <span>
              Tap <Share size={14} className="inline -mt-0.5" /> then <strong>"Add to Home Screen"</strong>
            </span>
          )}
        </div>
        {deferredPrompt && (
          <button
            onClick={handleInstall}
            className="bg-white text-blue-800 px-3 py-1 rounded-md text-sm font-semibold shrink-0"
          >
            Install
          </button>
        )}
        <button onClick={handleDismiss} className="shrink-0 p-1 hover:bg-blue-700 rounded">
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
