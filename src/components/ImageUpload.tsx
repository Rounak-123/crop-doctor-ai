import { useState, useRef } from "react";
import { Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface ImageUploadProps {
  onImageSelected: (image: File, imageUrl: string) => void;
  disabled?: boolean;
}

export function ImageUpload({ onImageSelected, disabled }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onImageSelected(file, url);
    }
  };

  return (
    <Card className="p-6 md:p-8 shadow-medium border-2 bg-gradient-card">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Camera className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground">
              {t.uploadTitle}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t.uploadSubtitle}
            </p>
          </div>
        </div>

        {preview ? (
          <div className="space-y-5">
            <div className="relative group">
              <img
                src={preview}
                alt="Leaf preview"
                className="w-full h-80 object-cover rounded-2xl border-2 border-border shadow-medium transition-transform group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => cameraInputRef.current?.click()}
                variant="outline"
                size="lg"
                disabled={disabled}
                className="h-12 font-semibold"
              >
                <Camera className="w-5 h-5 mr-2" />
                {t.retake}
              </Button>
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                size="lg"
                disabled={disabled}
                className="h-12 font-semibold"
              >
                <Upload className="w-5 h-5 mr-2" />
                {t.chooseFile}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="relative border-2 border-dashed border-border/60 rounded-2xl p-12 text-center bg-muted/20 hover:bg-muted/30 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg font-semibold text-foreground mb-2">
                {t.captureLeaf}
              </p>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {t.captureDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => cameraInputRef.current?.click()}
                size="lg"
                disabled={disabled}
                className="h-14 font-semibold text-base shadow-soft"
              >
                <Camera className="w-5 h-5 mr-2" />
                {t.takePhoto}
              </Button>
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                size="lg"
                disabled={disabled}
                className="h-14 font-semibold text-base"
              >
                <Upload className="w-5 h-5 mr-2" />
                {t.uploadFile}
              </Button>
            </div>
          </div>
        )}

        {/* Camera input - opens camera on mobile */}
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          className="hidden"
          disabled={disabled}
        />
        
        {/* File input - opens gallery */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          disabled={disabled}
        />
      </div>
    </Card>
  );
}
