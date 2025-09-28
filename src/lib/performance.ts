// Configuration des optimisations de performance

export const PERFORMANCE_CONFIG = {
  // Configuration des images
  images: {
    // Formats supportés par ordre de préférence
    formats: ['webp', 'avif', 'jpg', 'png'],
    // Qualité par défaut
    quality: 85,
    // Tailles d'images responsives
    sizes: {
      mobile: 480,
      tablet: 768,
      desktop: 1200,
      large: 1920
    }
  },
  
  // Configuration du lazy loading
  lazyLoading: {
    // Distance de préchargement (en pixels)
    rootMargin: '50px',
    // Seuil de visibilité
    threshold: 0.1
  },
  
  // Configuration des animations
  animations: {
    // Durée par défaut
    duration: 300,
    // Fonction d'easing
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Réduction de mouvement pour l'accessibilité
    respectMotionPreference: true
  },
  
  // Configuration du cache
  cache: {
    // Durée de cache pour les assets statiques (en secondes)
    staticAssets: 31536000, // 1 an
    // Durée de cache pour les données API (en secondes)
    apiData: 3600, // 1 heure
    // Durée de cache pour les images (en secondes)
    images: 2592000 // 30 jours
  }
};

// Fonction utilitaire pour optimiser les images
export const optimizeImageUrl = (url: string, width?: number, quality?: number): string => {
  if (!url) return url;
  
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (quality) params.set('q', quality.toString());
  
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.toString()}`;
};

// Fonction pour précharger les ressources critiques
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/images/logos/logo.png',
    '/images/logos/p1.png',
    '/images/examples/ex1.png',
    '/images/examples/ex2.jpg'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Fonction pour optimiser les performances de scroll
export const optimizeScrollPerformance = () => {
  let ticking = false;
  
  const updateScrollPosition = () => {
    // Logique d'optimisation du scroll
    ticking = false;
  };
  
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', requestTick, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', requestTick);
  };
};

// Fonction pour mesurer les performances
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

// Configuration des observateurs d'intersection
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: PERFORMANCE_CONFIG.lazyLoading.rootMargin,
    threshold: PERFORMANCE_CONFIG.lazyLoading.threshold,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};
