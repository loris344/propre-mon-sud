import { Helmet } from "react-helmet-async";
import { SEOConfig } from "@/lib/seo-config";

interface SEOHeadProps extends SEOConfig {
  customTitle?: string;
  customDescription?: string;
  structuredData?: object;
}

const SEOHead = ({ 
  title,
  description,
  canonical,
  ogImage = "https://sosnettoyagediogene.fr/images/logos/p1.png",
  structuredData,
  noIndex = false,
  customTitle,
  customDescription,
}: SEOHeadProps) => {
  const finalTitle = customTitle || title;
  const finalDescription = customDescription || description;
  const finalCanonical = canonical ? `https://sosnettoyagediogene.fr${canonical}` : `https://sosnettoyagediogene.fr${window.location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalCanonical} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SOS Nettoyage Diogène" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;