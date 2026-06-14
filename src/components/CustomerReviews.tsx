"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { memo, useState, useEffect } from "react";
import { REVIEWS } from "@/data/reviews";

const CustomerReviews = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = REVIEWS;

  // Défilement automatique des avis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Change d'avis toutes les 4 secondes

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 id="avis-title" className="text-3xl md:text-4xl font-bold text-foreground">
            Avis Clients Vérifiés
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les témoignages de nos clients satisfaits dans le Sud de la France
          </p>
          
          {/* Note globale */}
           <div className="flex items-center justify-center gap-4 pt-4">
             <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
             </svg>
             <div className="flex items-center gap-2">
               <div className="flex">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                 ))}
               </div>
               <span className="text-2xl font-bold text-foreground">5</span>
             </div>
             <div className="text-muted-foreground">
               Avis vérifiés
             </div>
           </div>
        </div>

        {/* Avis qui défile automatiquement */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <Card className="shadow-lg border-border/50">
                    <CardContent className="p-6">
                      {/* En-tête de l'avis */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{review.name}</h3>
                          <p className="text-sm text-muted-foreground">{review.location}</p>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                              i < review.rating 
                                ? 'fill-amber-400 text-amber-400' 
                                : 'text-muted-foreground/30'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>

                      {/* Service */}
                      <div className="mb-3">
                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {review.service}
                        </span>
                      </div>

                      {/* Texte de l'avis */}
                      <div className="relative">
                        <Quote className="absolute -top-1 -left-1 w-5 h-5 text-primary/20" />
                        <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                          {review.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicateurs de progression */}
          <div className="flex justify-center mt-4 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Note de bas de page */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Tous nos avis sont vérifiés et proviennent de clients réels ayant utilisé nos services.
          </p>
        </div>
      </div>
    </section>
  );
});

CustomerReviews.displayName = 'CustomerReviews';

export default CustomerReviews;
