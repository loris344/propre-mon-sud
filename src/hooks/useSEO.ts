import { useLocation } from "react-router-dom";
import { getSEOConfig, SEOConfig } from "@/lib/seo-config";

/**
 * Hook personnalisé pour gérer le SEO dynamique
 * Utilise la route actuelle pour récupérer la configuration SEO appropriée
 */
export const useSEO = (): SEOConfig => {
  const location = useLocation();
  return getSEOConfig(location.pathname);
};

/**
 * Hook pour obtenir la configuration SEO d'une route spécifique
 * Utile pour les composants qui ont besoin de connaître le SEO d'autres pages
 */
export const useSEOForRoute = (pathname: string): SEOConfig => {
  return getSEOConfig(pathname);
};
