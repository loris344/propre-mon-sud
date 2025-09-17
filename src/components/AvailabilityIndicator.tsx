import { useState, useEffect } from "react";

const AvailabilityIndicator = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mettre à jour l'heure toutes les minutes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 60 secondes

    return () => clearInterval(timer);
  }, []);

  // Vérifier la disponibilité selon les horaires
  useEffect(() => {
    const hour = currentTime.getHours();
    const day = currentTime.getDay(); // 0 = dimanche, 1 = lundi, etc.
    
    // Disponible 7j/7 de 8h à 20h
    const isWorkingHours = hour >= 8 && hour < 20;
    const isWorkingDay = true; // 7j/7
    
    setIsAvailable(isWorkingHours && isWorkingDay);
  }, [currentTime]);

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        {/* Point vert clignotant */}
        <div 
          className={`w-3 h-3 rounded-full ${
            isAvailable 
              ? 'bg-green-500 animate-pulse' 
              : 'bg-gray-400'
          }`}
        />
        {/* Anneau de clignotement pour l'effet "pulse" */}
        {isAvailable && (
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
        )}
      </div>
      
      <span className={`text-xs font-medium whitespace-nowrap ${
        isAvailable ? 'text-green-600' : 'text-gray-500'
      }`}>
        {isAvailable ? 'Disponible maintenant' : 'Hors horaires'}
      </span>
    </div>
  );
};

export default AvailabilityIndicator;
