import { SITE_CONFIG, SERVICES, CITIES, extractCityFromPath, extractServiceFromPath } from "../config/site-config";

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  structuredData?: object;
  noIndex?: boolean;
}

// Configuration SEO par défaut
const defaultSEO: SEOConfig = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: "nettoyage professionnel, débarras, syndrome diogène, insalubrité, désinfection, montpellier, sud france",
  canonical: SITE_CONFIG.baseUrl,
  ogImage: SITE_CONFIG.defaultImages.ogImage
};

// Fonction pour générer le SEO d'une page de service
export const generateServiceSEO = (pathname: string): SEOConfig => {
  const cityId = extractCityFromPath(pathname);
  const serviceId = extractServiceFromPath(pathname);
  
  const city = CITIES[cityId as keyof typeof CITIES] || CITIES.montpellier;
  const service = SERVICES[serviceId as keyof typeof SERVICES] || SERVICES.diogene;
  
  const title = `${service.name} ${city.name} | ${SITE_CONFIG.name}`;
  const description = `${service.description} Intervention spécialisée à ${city.name} et sa région. ${SITE_CONFIG.availability}. Devis gratuit.`;
  const keywords = `${service.name.toLowerCase()}, ${city.name.toLowerCase()}, ${city.region.toLowerCase()}, nettoyage professionnel, débarras, intervention spécialisée`;
  
  return {
    title,
    description,
    keywords,
    canonical: `${SITE_CONFIG.baseUrl}${pathname}`,
    ogImage: city.images.hero,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": SITE_CONFIG.name,
        "telephone": SITE_CONFIG.phone,
        "email": SITE_CONFIG.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": city.region,
          "addressCountry": "FR"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": city.name
      },
      "serviceType": service.name,
      "offers": {
        "@type": "Offer",
        "description": "Devis gratuit et sans engagement",
        "priceCurrency": "EUR"
      }
    }
  };
};

// Fonction principale pour obtenir la config SEO
export const getSEOConfig = (pathname: string): SEOConfig => {
  // Page d'accueil
  if (pathname === "/") {
    return {
      ...defaultSEO,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": SITE_CONFIG.name,
        "alternateName": SITE_CONFIG.tagline,
        "description": SITE_CONFIG.description,
        "url": SITE_CONFIG.baseUrl,
        "telephone": SITE_CONFIG.phone,
        "email": SITE_CONFIG.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Montpellier",
          "addressRegion": "Hérault",
          "addressCountry": "FR",
          "postalCode": "34000"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.611",
          "longitude": "3.8767"
        },
        "areaServed": Object.values(CITIES).map(city => ({
          "@type": "City",
          "name": city.name
        })),
        "serviceType": Object.values(SERVICES).map(service => service.name),
        "openingHours": "Mo-Su 08:00-20:00",
        "priceRange": "€€",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "currenciesAccepted": "EUR",
        "sameAs": [
          SITE_CONFIG.social.facebook,
          SITE_CONFIG.social.linkedin
        ],
        "image": SITE_CONFIG.defaultImages.ogImage,
        "logo": SITE_CONFIG.defaultImages.logo
      }
    };
  }
  
  // Pages de service
  if (pathname.includes('nettoyage-syndrome-diogene') || 
      pathname.includes('debarras-gros-volumes') || 
      pathname.includes('desinfection-insalubrite') ||
      pathname.includes('nettoyage-apres-deces') ||
      pathname.includes('nettoyage-insalubre')) {
    return generateServiceSEO(pathname);
  }
  
  // Page 404
  if (pathname === "/404") {
    return {
      title: "Page Non Trouvée | " + SITE_CONFIG.name,
      description: "La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos services de nettoyage et débarras.",
      keywords: defaultSEO.keywords,
      canonical: `${SITE_CONFIG.baseUrl}/404`,
      noIndex: true
    };
  }
  
  // Par défaut
  return defaultSEO;
};
