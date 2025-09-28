import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";
import AvailabilityIndicator from "./AvailabilityIndicator";
import { ResponsiveImage } from "./ResponsiveImage";
import { useState, useEffect, useCallback, memo } from "react";

const Hero = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  
  const cities = [
    "Montpellier", "Sète", "Béziers", "Nîmes", "Perpignan", "Marseille",
    "Toulouse", "Nice", "Aix-en-Provence", 
    "Toulon", "Avignon", "Bordeaux"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => 
        prevIndex === cities.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 id="hero-title" className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Nettoyage et Débarras
                <span className="block text-primary">Syndrome de Diogène</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Société spécialisée dans le débarras et nettoyage de l'extrême, insalubrité et gros volumes. 
                <span className="block mt-2 font-medium text-foreground">
                  Intervention discrète et professionnelle à{" "}
                  <span 
                    key={currentCityIndex}
                    className="inline-block animate-fade-in text-primary font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  >
                    {cities[currentCityIndex]}
                  </span>
                </span>
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                onClick={useCallback(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, [])}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Devis Gratuit
              </Button>
              <Button 
                variant="accent" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                onClick={useCallback(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, [])}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Discret
              </Button>
            </div>
            
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-border/50">
              <AvailabilityIndicator />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium">Intervention 7j/7</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">Discrétion garantie</span>
              </div>
            </div>
          </div>
          
          {/* Images d'exemples de transformations */}
          <div className="relative order-last lg:order-last">
            <div className="flex flex-col gap-2 rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              {/* Image 1 - ex1.png */}
              <div className="relative">
                <img
                  src="/images/examples/ex1.png"
                  alt="Exemple de transformation - Avant/Après nettoyage syndrome de Diogène"
                  className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute bottom-2 left-2 bg-primary/90 text-white text-xs px-2 py-1 rounded">
                  Avant
                </div>
                <div className="absolute bottom-2 right-2 bg-accent/90 text-white text-xs px-2 py-1 rounded">
                  Après
                </div>
              </div>
              
              {/* Image 2 - ex2.jpg */}
              <div className="relative">
                <img
                  src="/images/examples/ex2.jpg"
                  alt="Exemple de transformation - Résultat après intervention professionnelle"
                  className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute bottom-2 right-2 bg-accent/90 text-white text-xs px-2 py-1 rounded">
                  Après
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card p-4 sm:p-6 rounded-xl shadow-lg border border-border max-w-xs">
              <div className="text-center space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-primary">6+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);