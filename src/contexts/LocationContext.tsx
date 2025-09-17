import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserLocation, getUserLocation, formatLocationText, isInServiceArea } from '@/lib/locationService';

interface LocationContextType {
  location: UserLocation | null;
  locationText: string;
  isInServiceArea: boolean;
  isLoading: boolean;
  error: string | null;
  refreshLocation: () => Promise<void>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadLocation = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const userLocation = await getUserLocation();
      setLocation(userLocation);
    } catch (err) {
      setError('Impossible de déterminer votre localisation');
      console.error('Erreur lors du chargement de la localisation:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshLocation = async () => {
    await loadLocation();
  };

  useEffect(() => {
    loadLocation();
  }, []);

  const locationText = location ? formatLocationText(location) : 'Votre ville et région';
  const isInServiceAreaFlag = location ? isInServiceArea(location) : true;

  const value: LocationContextType = {
    location,
    locationText,
    isInServiceArea: isInServiceAreaFlag,
    isLoading,
    error,
    refreshLocation
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
