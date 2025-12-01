import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Treatment } from "@/data/treatments";
import { useLanguage } from "@/contexts/LanguageContext";

interface DiseaseResultProps {
  disease: string;
  confidence: number;
  treatment: Treatment;
}

export function DiseaseResult({ disease, confidence, treatment }: DiseaseResultProps) {
  const { t } = useLanguage();
  const getStatusIcon = () => {
    if (treatment.severity === "healthy") {
      return <CheckCircle2 className="w-8 h-8 text-success" />;
    } else if (treatment.severity === "mild") {
      return <Info className="w-8 h-8 text-warning" />;
    } else {
      return <AlertCircle className="w-8 h-8 text-destructive" />;
    }
  };

  const getSeverityColor = () => {
    if (treatment.severity === "healthy") return "bg-success/10 text-success border-success/20";
    if (treatment.severity === "mild") return "bg-warning/10 text-warning border-warning/20";
    return "bg-destructive/10 text-destructive border-destructive/20";
  };

  const getSeverityLabel = () => {
    if (treatment.severity === "healthy") return t.healthy;
    if (treatment.severity === "mild") return t.mild;
    return t.severe;
  };

  return (
    <Card className="p-6 md:p-8 shadow-medium border-2 bg-gradient-card animate-fade-in">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {getStatusIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 leading-tight">
              {treatment.disease}
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Badge className={`${getSeverityColor()} px-3 py-1 text-sm font-semibold`}>
                {getSeverityLabel()}
              </Badge>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{t.confidence}</span>
                <span className="text-xl font-bold text-foreground">
                  {confidence.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment */}
        <div className="space-y-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
          <h4 className="text-lg font-display font-semibold text-foreground flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            {t.treatmentInstructions}
          </h4>
          <p className="text-base text-foreground/90 leading-relaxed pl-5">
            {treatment.treatment}
          </p>
        </div>

        {/* Prevention */}
        <div className="space-y-3 p-4 rounded-xl bg-secondary/5 border border-secondary/10">
          <h4 className="text-lg font-display font-semibold text-foreground flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            {t.preventionTips}
          </h4>
          <p className="text-base text-foreground/90 leading-relaxed pl-5">
            {treatment.prevention}
          </p>
        </div>
      </div>
    </Card>
  );
}
