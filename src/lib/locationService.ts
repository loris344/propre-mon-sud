// Service de géolocalisation pour adapter le contenu selon la localisation de l'utilisateur

export interface UserLocation {
  city: string;
  region: string;
  department: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Cache pour éviter les appels répétés
let locationCache: UserLocation | null = null;
let locationPromise: Promise<UserLocation> | null = null;

// Service de géocodage inverse (gratuit)
const getLocationFromCoordinates = async (lat: number, lng: number): Promise<UserLocation> => {
  try {
    // Utilisation de l'API Nominatim (OpenStreetMap) - gratuite
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=fr`
    );
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de la localisation');
    }
    
    const data = await response.json();
    
    // Extraction des informations de localisation
    const address = data.address || {};
    
    return {
      city: address.city || address.town || address.village || address.municipality || 'Votre ville',
      region: address.state || address.region || 'Votre région',
      department: address.county || address.state_district || 'Votre département',
      coordinates: { lat, lng }
    };
  } catch (error) {
    console.error('Erreur lors du géocodage:', error);
    return getDefaultLocation();
  }
};

// Localisation par défaut si la géolocalisation échoue
const getDefaultLocation = (): UserLocation => ({
  city: 'Montpellier',
  region: 'Occitanie',
  department: 'Hérault'
});

// Obtenir la géolocalisation de l'utilisateur
export const getUserLocation = async (): Promise<UserLocation> => {
  // Retourner le cache si disponible
  if (locationCache) {
    return locationCache;
  }
  
  // Retourner la promesse en cours si elle existe
  if (locationPromise) {
    return locationPromise;
  }
  
  // Créer une nouvelle promesse de géolocalisation
  locationPromise = new Promise((resolve) => {
    // Vérifier si la géolocalisation est supportée
    if (!navigator.geolocation) {
      console.log('Géolocalisation non supportée, utilisation de la localisation par défaut');
      resolve(getDefaultLocation());
      return;
    }
    
    // Demander la position de l'utilisateur
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const location = await getLocationFromCoordinates(latitude, longitude);
          locationCache = location;
          resolve(location);
        } catch (error) {
          console.error('Erreur lors de la récupération de la localisation:', error);
          resolve(getDefaultLocation());
        }
      },
      (error) => {
        console.log('Géolocalisation refusée ou échouée:', error.message);
        resolve(getDefaultLocation());
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  });
  
  return locationPromise;
};

// Obtenir la localisation avec fallback
export const getLocationWithFallback = async (): Promise<UserLocation> => {
  try {
    return await getUserLocation();
  } catch (error) {
    console.error('Erreur lors de la récupération de la localisation:', error);
    return getDefaultLocation();
  }
};

// Formater le texte de localisation
export const formatLocationText = (location: UserLocation): string => {
  return location.city;
};

// Vérifier si l'utilisateur est dans une zone de service
export const isInServiceArea = (location: UserLocation): boolean => {
  const serviceRegions = [
    'Occitanie',
    'Provence-Alpes-Côte d\'Azur',
    'Nouvelle-Aquitaine',
    'Auvergne-Rhône-Alpes'
  ];
  
  const serviceDepartments = [
    'Hérault', 'Gard', 'Aude', 'Pyrénées-Orientales', 'Ariège', 'Haute-Garonne',
    'Tarn', 'Tarn-et-Garonne', 'Lot', 'Aveyron', 'Lozère',
    'Bouches-du-Rhône', 'Var', 'Alpes-Maritimes', 'Vaucluse', 'Alpes-de-Haute-Provence',
    'Gironde', 'Dordogne', 'Lot-et-Garonne', 'Pyrénées-Atlantiques', 'Landes',
    'Rhône', 'Isère', 'Drôme', 'Ardèche', 'Haute-Savoie', 'Savoie'
  ];
  
  return serviceRegions.includes(location.region) || 
         serviceDepartments.includes(location.department);
};
