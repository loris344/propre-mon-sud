import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { getImagesFromUrl } from '@/lib/imageService';

interface CityHeroProps {
  cityName: string;
  pathname: string;
  title: string;
  description: string;
  showPhoneButton?: boolean;
}

const CityHero: React.FC<CityHeroProps> = ({ 
  cityName, 
  pathname, 
  title,
  description,
  showPhoneButton = true
}) => {
  const cityImages = getImagesFromUrl(pathname);

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
      {/* Image de fond de la ville */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${cityImages.hero})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {title}
            <span className="block text-primary">{cityName}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
          {showPhoneButton && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Devis Gratuit - 07 67 13 54 58
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CityHero;
