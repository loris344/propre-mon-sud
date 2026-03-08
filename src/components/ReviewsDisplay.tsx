import { Star } from "lucide-react";
import { memo } from "react";

const ReviewsDisplay = () => {
  return (
    <div className="flex items-center gap-1">
      {/* Étoiles */}
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 ${
              star <= 4 
                ? 'text-amber-400 fill-amber-400' 
                : star === 5 
                  ? 'text-amber-400 fill-amber-400 opacity-70' 
                  : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>
      
      {/* Note et nombre d'avis */}
      <div className="flex items-center gap-0.5 text-xs whitespace-nowrap">
        <span className="font-semibold text-foreground">4,7</span>
        <span className="text-muted-foreground hidden sm:inline">(94 avis)</span>
      </div>
    </div>
  );
};

export default memo(ReviewsDisplay);
