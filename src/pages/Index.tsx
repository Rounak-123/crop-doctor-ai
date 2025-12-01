import { useState, useEffect } from "react";
import { Sprout, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ImageUpload } from "@/components/ImageUpload";
import { DiseaseResult } from "@/components/DiseaseResult";
import { WeatherSection } from "@/components/WeatherSection";
import { DownloadGuide } from "@/components/DownloadGuide";
import { InstallPrompt } from "@/components/InstallPrompt";
import { predict, isModelLoaded, loadDefaultModel } from "@/lib/model";
import { getTreatment } from "@/data/treatments";

export default function Index() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loadingModel, setLoadingModel] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [weatherAdvice, setWeatherAdvice] = useState<string | undefined>();
  const { toast } = useToast();

  useEffect(() => {
    const initModel = async () => {
      try {
        await loadDefaultModel();
        setModelLoaded(true);
      } catch (error) {
        toast({
          title: "Model Loading Failed",
          description: "Could not load the AI model. Please refresh the page.",
          variant: "destructive"
        });
      } finally {
        setLoadingModel(false);
      }
    };

    initModel();
  }, [toast]);

  const handleAnalyze = async () => {
    if (!selectedImage || !selectedFile) {
      toast({
        title: "No Image Selected",
        description: "Please upload a crop image first",
        variant: "destructive"
      });
      return;
    }

    if (!isModelLoaded()) {
      toast({
        title: "Model Not Loaded",
        description: "Please upload and load the AI model first",
        variant: "destructive"
      });
      return;
    }

    setAnalyzing(true);
    try {
      // Create image element for prediction
      const img = new Image();
      img.src = selectedImage;
      
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const prediction = await predict(img);
      const treatment = getTreatment(prediction.className);

      if (!treatment) {
        throw new Error("Unknown disease class");
      }

      setResult({
        disease: prediction.className,
        confidence: prediction.probability,
        treatment
      });

      toast({
        title: "Analysis Complete",
        description: `Detected: ${treatment.disease}`
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyze image",
        variant: "destructive"
      });
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <InstallPrompt />
      
      {/* Header */}
      <header className="glass sticky top-0 z-40 border-b backdrop-blur-xl">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Leaf className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">
                CropGPT
              </h1>
              <p className="text-xs text-muted-foreground">
                AI-Powered Crop Disease Detection
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Loading State */}
          {loadingModel && (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-primary flex items-center justify-center shadow-glow animate-pulse-glow">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <p className="text-2xl text-foreground font-display font-semibold mb-2">
                Loading AI Model
              </p>
              <p className="text-muted-foreground">
                Preparing offline disease detection
              </p>
            </div>
          )}

          {/* Image Upload Section */}
          {!loadingModel && modelLoaded && (
            <div className="space-y-8 animate-fade-in">
              <ImageUpload
                onImageSelected={(file, url) => {
                  setSelectedFile(file);
                  setSelectedImage(url);
                  setResult(null);
                }}
                disabled={analyzing}
              />

              {selectedImage && !result && (
                <Button
                  onClick={handleAnalyze}
                  disabled={analyzing}
                  size="lg"
                  className="w-full h-14 text-lg font-semibold shadow-medium hover:shadow-glow transition-all"
                >
                  {analyzing ? (
                    <>
                      <Sparkles className="w-6 h-6 mr-2 animate-spin" />
                      Analyzing Disease...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6 mr-2" />
                      Analyze Crop Disease
                    </>
                  )}
                </Button>
              )}

              {/* Results Section */}
              {result && (
                <div className="space-y-8 animate-fade-in">
                  <DiseaseResult
                    disease={result.disease}
                    confidence={result.confidence}
                    treatment={result.treatment}
                  />

                  <WeatherSection
                    onWeatherFetched={(data) => setWeatherAdvice(data.advice)}
                  />

                  <DownloadGuide
                    disease={result.disease}
                    confidence={result.confidence}
                    treatment={result.treatment}
                    weatherAdvice={weatherAdvice}
                  />

                  <Button
                    onClick={() => {
                      setSelectedImage(null);
                      setSelectedFile(null);
                      setResult(null);
                      setWeatherAdvice(undefined);
                    }}
                    variant="outline"
                    size="lg"
                    className="w-full h-12 font-semibold"
                  >
                    <Leaf className="w-5 h-5 mr-2" />
                    Analyze Another Crop
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-sm text-muted-foreground">
          <Sprout className="w-4 h-4 text-primary" />
          <span>Built for farmers • Works offline • Always free</span>
        </div>
      </footer>
    </div>
  );
}
