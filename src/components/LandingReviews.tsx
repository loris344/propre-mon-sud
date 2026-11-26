import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { memo, useState, useEffect } from "react";
import { REVIEWS, GOOGLE_REVIEWS_URL, formatGoogleRating } from "@/data/reviews";

const LandingReviews = memo(() => {
  const reviews = REVIEWS;
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
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-foreground font-semibold underline-offset-4 hover:underline"
            >
              {formatGoogleRating()}
            </a>
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
                        ? "fill-amber-400 text-amber-400"
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
                <p className="text-muted-foreground text-xs">Avis Google · {review.date}</p>
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
