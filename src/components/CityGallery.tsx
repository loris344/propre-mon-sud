import React from 'react';
import { getImagesFromUrl } from '@/lib/imageService';

interface CityGalleryProps {
  cityName: string;
  pathname: string;
  title?: string;
  description?: string;
}

const CityGallery: React.FC<CityGalleryProps> = ({ 
  cityName, 
  pathname, 
  title = `Nos Interventions à ${cityName}`,
  description = `Découvrez ${cityName} et nos interventions spécialisées dans cette belle ville du Sud de la France.`
}) => {
  const cityImages = getImagesFromUrl(pathname);

  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cityImages.gallery.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={image} 
                  alt={`${cityName} - Vue ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{cityName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityGallery;
