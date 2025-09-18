// Service d'images pour gérer les photos par ville
// Utilise Unsplash et d'autres sources pour des images contextuelles

export interface CityImage {
  hero: string;
  gallery: string[];
  landmarks: string[];
  description: string;
}

export interface ImageService {
  getCityImages(city: string): CityImage;
  getHeroImage(city: string): string;
  getGalleryImages(city: string): string[];
  getLandmarkImages(city: string): string[];
}

// Configuration des images par ville
const cityImages: Record<string, CityImage> = {
  montpellier: {
    hero: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&crop=center"
    ],
    landmarks: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center"
    ],
    description: "Montpellier, ville dynamique du Sud de la France"
  },
  sete: {
    hero: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop&crop=center"
    ],
    landmarks: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
    ],
    description: "Sète, la Venise du Languedoc"
  },
  beziers: {
    hero: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center"
    ],
    landmarks: [
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
    ],
    description: "Béziers, ville historique de l'Hérault"
  },
  nimes: {
    hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center"
    ],
    landmarks: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop&crop=center"
    ],
    description: "Nîmes, la Rome française"
  },
  perpignan: {
    hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center"
    ],
    landmarks: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop&crop=center"
    ],
    description: "Perpignan, capitale du Roussillon"
  }
};

// Images par défaut pour les villes non configurées
const defaultImages: CityImage = {
  hero: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop&crop=center",
  gallery: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&crop=center"
  ],
  landmarks: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center"
  ],
  description: "Ville du Sud de la France"
};

// Fonction pour normaliser le nom de la ville
const normalizeCityName = (city: string): string => {
  return city.toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .trim();
};

// Fonction pour extraire la ville depuis l'URL
export const extractCityFromUrl = (url: string): string => {
  const urlParts = url.split('/');
  const lastPart = urlParts[urlParts.length - 1];
  
  // Extraire la ville depuis les URLs comme "nettoyage-syndrome-diogene-montpellier"
  const cityMatch = lastPart.match(/(?:nettoyage-syndrome-diogene-|debarras-gros-volumes-|desinfection-insalubrite-)(.+)/);
  
  if (cityMatch) {
    return normalizeCityName(cityMatch[1]);
  }
  
  return 'montpellier'; // Ville par défaut
};

// Service d'images
export const imageService: ImageService = {
  getCityImages: (city: string): CityImage => {
    const normalizedCity = normalizeCityName(city);
    return cityImages[normalizedCity] || defaultImages;
  },

  getHeroImage: (city: string): string => {
    const normalizedCity = normalizeCityName(city);
    return cityImages[normalizedCity]?.hero || defaultImages.hero;
  },

  getGalleryImages: (city: string): string[] => {
    const normalizedCity = normalizeCityName(city);
    return cityImages[normalizedCity]?.gallery || defaultImages.gallery;
  },

  getLandmarkImages: (city: string): string[] => {
    const normalizedCity = normalizeCityName(city);
    return cityImages[normalizedCity]?.landmarks || defaultImages.landmarks;
  }
};

// Hook React pour utiliser le service d'images
export const useCityImages = (city: string) => {
  return imageService.getCityImages(city);
};

// Fonction utilitaire pour obtenir les images d'une ville depuis l'URL
export const getImagesFromUrl = (url: string) => {
  const city = extractCityFromUrl(url);
  return imageService.getCityImages(city);
};

// Configuration des images pour le SEO (Open Graph, Twitter, etc.)
export const getSEOImages = (city: string) => {
  const images = imageService.getCityImages(city);
  return {
    ogImage: images.hero,
    twitterImage: images.hero,
    heroImage: images.hero,
    galleryImages: images.gallery,
    landmarkImages: images.landmarks
  };
};
