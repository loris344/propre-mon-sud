import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { memo } from "react";

const CustomerReviews = memo(() => {
  // Avis cohérents avec les données JSON-LD (les 3 premiers correspondent exactement)
  const reviews = [
    {
      id: 1,
      name: "Marie L.",
      location: "Montpellier",
      rating: 5,
      date: "2024-01-15",
      text: "Service exceptionnel ! Équipe très professionnelle et discrète. Intervention rapide et efficace. Je recommande vivement.",
      service: "Nettoyage Syndrome de Diogène"
    },
    {
      id: 2,
      name: "Jean-Pierre M.",
      location: "Sète",
      rating: 5,
      date: "2024-01-10",
      text: "Très satisfait du service. Respect total de la situation et intervention dans les délais. Prix correct pour la qualité.",
      service: "Débarras Gros Volumes"
    },
    {
      id: 3,
      name: "Michel R.",
      location: "Nîmes",
      rating: 5,
      date: "2024-01-05",
      text: "Excellent service ! L'équipe a su comprendre notre situation et nous accompagner avec bienveillance. Le résultat dépasse nos attentes.",
      service: "Nettoyage Syndrome de Diogène"
    },
    {
      id: 4,
      name: "Catherine B.",
      location: "Perpignan",
      rating: 5,
      date: "2024-01-02",
      text: "Service professionnel et humain. L'équipe a su gérer une situation complexe avec beaucoup de délicatesse. Je recommande sans hésitation.",
      service: "Débarras Gros Volumes"
    },
    {
      id: 5,
      name: "Alain T.",
      location: "Toulouse",
      rating: 5,
      date: "2023-12-28",
      text: "Très bon service, équipe compétente et discrète. Le nettoyage a été fait dans les règles de l'art. Merci pour votre professionnalisme.",
      service: "Désinfection Insalubrité"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Avis Clients Vérifiés
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les témoignages de nos clients satisfaits dans le Sud de la France
          </p>
          
          {/* Note globale */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">4,7</span>
            </div>
            <div className="text-muted-foreground">
              <span className="font-semibold">94 avis</span> vérifiés
            </div>
          </div>
        </div>

        {/* Grille des avis */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="shadow-lg border-border/50 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                {/* En-tête de l'avis */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < review.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
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
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                  <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                    {review.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
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
