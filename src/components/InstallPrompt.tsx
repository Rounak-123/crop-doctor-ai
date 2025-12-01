import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Only show if not already dismissed
      const dismissed = localStorage.getItem("pwa-prompt-dismissed");
      if (!dismissed) {
        setShowPrompt(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowPrompt(false);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === "accepted") {
      setShowPrompt(false);
    }
    
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-prompt-dismissed", "true");
  };

  if (!showPrompt) return null;

  return (
    <Card className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm p-4 shadow-medium animate-slide-up z-50 glass">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
          <Download className="w-6 h-6 text-primary-foreground" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1">
            {t.installTitle}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {t.installDescription}
          </p>
          
          <div className="flex gap-2">
            <Button 
              onClick={handleInstall} 
              size="sm"
              className="flex-1"
            >
              {t.install}
            </Button>
            <Button 
              onClick={handleDismiss} 
              variant="ghost" 
              size="sm"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
