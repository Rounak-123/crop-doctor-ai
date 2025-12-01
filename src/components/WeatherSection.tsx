import { useState } from "react";
import { Cloud, Droplets, MapPin, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface WeatherData {
  temp: number;
  humidity: number;
  description: string;
  advice: string;
}

interface WeatherSectionProps {
  onWeatherFetched?: (data: WeatherData) => void;
}

export function WeatherSection({ onWeatherFetched }: WeatherSectionProps) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const fetchWeather = async () => {
    if (!city.trim()) {
      toast({
        title: t.enterCityName,
        description: t.enterCityDescription,
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Using OpenWeather API - Add your free API key from openweathermap.org
      const API_KEY = "7025577557f85061fad9508d401538c4"; // Replace with your actual OpenWeather API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found or API error");
      }

      const data = await response.json();
      
      // Generate farming advice based on humidity
      const advice = data.main.humidity > 75
        ? "⚠️ High humidity detected! Avoid spraying in the morning. High fungal infection risk. Consider spraying in evening or wait for drier conditions."
        : "✓ Spraying and irrigation conditions are normal. Good time for field activities.";

      const weatherData: WeatherData = {
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        description: data.weather[0].description,
        advice
      };

      setWeather(weatherData);
      onWeatherFetched?.(weatherData);
      
      toast({
        title: t.weatherUpdated,
        description: `${t.weatherUpdated} ${city}`
      });
    } catch (error) {
      toast({
        title: t.weatherFetchFailed,
        description: t.weatherFetchFailed,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 md:p-8 shadow-medium border-2 bg-gradient-card">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-info/10 flex items-center justify-center">
            <Cloud className="w-6 h-6 text-info" />
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-foreground">
              {t.weatherTitle}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t.weatherSubtitle}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t.enterCity}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
              className="pl-12 h-12 text-base border-2 rounded-xl"
            />
          </div>
          <Button 
            onClick={fetchWeather} 
            disabled={loading} 
            size="lg"
            className="h-12 px-6 font-semibold"
          >
            {loading ? t.loading : t.checkWeather}
          </Button>
        </div>

        {weather && (
          <div className="space-y-5 mt-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Thermometer className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">{t.temperature}</p>
                  <p className="text-3xl font-bold text-foreground">{weather.temp}°</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-5 bg-gradient-to-br from-info/10 to-info/5 rounded-2xl border border-info/20">
                <div className="w-12 h-12 rounded-xl bg-info/20 flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-info" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">{t.humidity}</p>
                  <p className="text-3xl font-bold text-foreground">{weather.humidity}%</p>
                </div>
              </div>
            </div>

            <div className={`p-5 rounded-2xl border-2 ${
              weather.humidity > 75 
                ? 'bg-warning/10 border-warning/30' 
                : 'bg-success/10 border-success/30'
            }`}>
              <h4 className="font-display font-semibold text-foreground mb-2 text-lg">
                {t.farmingAdvice}
              </h4>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {weather.advice}
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
