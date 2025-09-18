import { Star } from "lucide-react";

const ReviewsDisplay = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Étoiles */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= 4 
                ? 'text-yellow-400 fill-yellow-400' 
                : star === 5 
                  ? 'text-yellow-400 fill-yellow-400 opacity-70' 
                  : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Note et nombre d'avis */}
      <div className="flex items-center gap-1 text-xs whitespace-nowrap">
        <span className="font-semibold text-foreground">4,7</span>
        <span className="text-muted-foreground">(94 avis)</span>
      </div>
    </div>
  );
};

export default ReviewsDisplay;
