import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { memo, useState, useEffect } from "react";

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const REVIEWS_BY_SERVICE: Record<string, Review[]> = {
  diogene: [
    { name: "Marie L.", location: "Montpellier", rating: 5, text: "Équipe très professionnelle et surtout très humaine. Ils ont géré la situation de mon père avec beaucoup de respect. Le logement est redevenu habitable en deux jours." },
    { name: "Michel R.", location: "Nîmes", rating: 5, text: "On ne savait pas vers qui se tourner. Dès le premier appel, on a été rassurés. Travail impeccable, discret, et surtout sans aucun jugement." },
    { name: "Sophie D.", location: "Béziers", rating: 5, text: "Merci pour votre bienveillance. Ma mère n'a pas été brusquée et le résultat est au delà de ce qu'on espérait. Je recommande les yeux fermés." },
    { name: "Éric V.", location: "Marseille", rating: 5, text: "Intervention rapide après mon appel. L'équipe a tout trié, nettoyé, désinfecté. Appartement rendu nickel. Très pro." },
  ],
  debarras: [
    { name: "Jean-Pierre M.", location: "Sète", rating: 5, text: "Maison de succession vidée en une journée. Tout a été trié proprement, rien à redire. Le devis correspondait exactement au prix final." },
    { name: "Catherine B.", location: "Perpignan", rating: 5, text: "Cave et grenier complètement encombrés depuis des années. Ils ont tout évacué sans problème. Efficaces et ponctuels." },
    { name: "Nathalie F.", location: "Montpellier", rating: 5, text: "Débarras complet d'un appartement après une expulsion. Rapide, propre, et bon rapport qualité prix. Je les rappellerai." },
    { name: "Laurent G.", location: "Toulouse", rating: 5, text: "Gros volume à évacuer dans un local commercial. Ils ont tout géré de A à Z, même le tri pour le recyclage. Top." },
  ],
  desinfection: [
    { name: "Alain T.", location: "Toulouse", rating: 5, text: "Appartement infesté de cafards depuis des mois. Une seule intervention et plus rien. Produits efficaces et équipe sérieuse." },
    { name: "Sandrine P.", location: "Nîmes", rating: 5, text: "Logement insalubre remis en état après un locataire parti sans prévenir. Désinfection complète, plus aucune odeur. Merci." },
    { name: "Patrick H.", location: "Marseille", rating: 5, text: "Punaises de lit dans tout l'appartement. Ils ont traité chaque pièce méthodiquement. Problème réglé définitivement." },
    { name: "Isabelle C.", location: "Béziers", rating: 4, text: "Bonne intervention pour un problème d'humidité et de moisissures. L'équipe est arrivée à l'heure et a bien nettoyé. Satisfaite." },
  ],
  deces: [
    { name: "François K.", location: "Montpellier", rating: 5, text: "Moment très difficile pour notre famille. L'équipe a été d'une grande délicatesse. Tout a été nettoyé et désinfecté sans qu'on ait à s'en occuper." },
    { name: "Anne-Marie J.", location: "Sète", rating: 5, text: "Service irréprochable dans une situation très pénible. Discrétion totale, le voisinage n'a rien remarqué. Merci infiniment." },
    { name: "Thierry N.", location: "Perpignan", rating: 5, text: "Le notaire nous a recommandé cette société. Intervention propre et rapide, appartement remis en état pour la vente. Rien à redire." },
    { name: "Véronique S.", location: "Marseille", rating: 5, text: "On redoutait ce moment. Ils ont tout pris en charge avec beaucoup d'humanité. Le logement est redevenu présentable en quelques heures." },
  ],
};

interface LandingReviewsProps {
  serviceKey: "diogene" | "debarras" | "desinfection" | "deces";
}

const LandingReviews = memo(({ serviceKey }: LandingReviewsProps) => {
  const reviews = REVIEWS_BY_SERVICE[serviceKey] || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  if (reviews.length === 0) return null;

  const review = reviews[currentIndex];

  return (
    <section className="py-16 sm:py-20" style={{ touchAction: 'pan-y' }}>
      <div className="container mx-auto px-4 sm:px-6" style={{ touchAction: 'pan-y' }}>
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-foreground font-semibold">4.9/5</span>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border-border/50" style={{ touchAction: 'pan-y' }}>
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-5 italic">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm">{review.name}</p>
                <p className="text-muted-foreground text-xs">{review.location}</p>
              </div>
            </CardContent>
          </Card>

          {/* Dots */}
          <div className="flex justify-center mt-5 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/25 hover:bg-muted-foreground/40"
                }`}
                aria-label={`Avis ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

LandingReviews.displayName = "LandingReviews";

export default LandingReviews;
