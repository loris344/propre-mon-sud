import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";
import AvailabilityIndicator from "./AvailabilityIndicator";
import { ResponsiveImage } from "./ResponsiveImage";
import { useState, useEffect, useCallback, memo } from "react";


const Hero = () => {

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
                Entreprise de Nettoyage Extrême et Débarras
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Société spécialisée dans le débarras et nettoyage de l'extrême, insalubrité et gros volumes. 
                <span className="block mt-2 font-medium text-foreground">
                  Intervention en{" "}
                  <span className="text-primary font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Région Occitanie et PACA
                  </span>
                </span>
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:0767135458"
                onClick={() => typeof gtag_report_conversion === 'function' && gtag_report_conversion()}
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full"
                  type="button"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  07 67 13 54 58
                </Button>
              </a>
              <Button 
                variant="accent" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                onClick={scrollToContact}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Discret
              </Button>
            </div>

            {/* Mobile Reviews */}
            <div className="sm:hidden flex justify-center mt-1">
              <div className="flex items-center gap-1">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                    className={`w-4 h-4 ${
                        star <= 4 
                          ? 'text-amber-400 fill-amber-400' 
                          : 'text-amber-400 fill-amber-400 opacity-70'
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground ml-1">4,7 (94 avis)</span>
              </div>
            </div>

            {/* ARS Collaboration */}
            <div className="flex items-center gap-4 mt-1">
              <span className="text-sm sm:text-base text-muted-foreground font-medium">
                En collaboration avec l'ARS
              </span>
              <div className="flex items-center gap-3">
                <img 
                  src="/logos/RF.webp" 
                  alt="République Française" 
                  className="h-12 sm:h-16 w-auto object-contain"
                  loading="eager"
                  width={128}
                  height={116}
                />
                <img 
                  src="/logos/ARS.webp" 
                  alt="Agence Régionale de Santé" 
                  className="h-12 sm:h-16 w-auto object-contain"
                  loading="eager"
                  width={128}
                  height={74}
                />
              </div>
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
          
          {/* Images */}
          <div className="relative order-last lg:order-last">
            <div className="flex flex-col gap-2 rounded-2xl overflow-hidden shadow-2xl bg-card p-2">
              <div className="relative">
                <img
                  src="/images/examples/ex1.webp"
                  alt="Exemple de transformation - Avant/Après nettoyage syndrome de Diogène"
                  className="w-full h-auto rounded-lg"
                  loading="eager"
                  fetchPriority="high"
                  width={800}
                  height={600}
                />
                <div className="absolute bottom-2 left-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded">
                  Avant
                </div>
                <div className="absolute bottom-2 right-2 bg-accent/90 text-accent-foreground text-xs px-2 py-1 rounded">
                  Après
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="/images/examples/ex2.jpg"
                  alt="Exemple de transformation - Résultat après intervention professionnelle"
                  className="w-full h-auto rounded-lg"
                  loading="eager"
                  fetchPriority="high"
                  width={800}
                  height={600}
                />
                <div className="absolute bottom-2 right-2 bg-accent/90 text-accent-foreground text-xs px-2 py-1 rounded">
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
