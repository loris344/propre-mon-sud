"use client";

import { useState, useEffect, memo } from "react";

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
        {/* Point vert clignotant, affiché en permanence */}
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
        {/* Anneau de clignotement pour l'effet "pulse" */}
        <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
      </div>

      {/* Le texte « Disponible » n'apparaît que pendant les horaires d'ouverture.
          Hors horaires, on ne garde que le point vert, sans mention. */}
      {isAvailable && (
        <span className="text-xs font-medium whitespace-nowrap hidden lg:inline text-green-600">
          Disponible
        </span>
      )}
    </div>
  );
};

export default memo(AvailabilityIndicator);