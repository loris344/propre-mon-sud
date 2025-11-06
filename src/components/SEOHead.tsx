import { Helmet } from "react-helmet-async";
import { SEOConfig } from "@/lib/seo-config";

interface SEOHeadProps extends SEOConfig {
  // Props optionnelles pour override
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
  structuredData?: object;
}

const SEOHead = ({ 
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://sosnettoyagediogene.fr/p1.png",
  structuredData,
  noIndex = false,
  customTitle,
  customDescription,
  customKeywords
}: SEOHeadProps) => {
  const finalTitle = customTitle || title;
  const finalDescription = customDescription || description;
  const finalKeywords = customKeywords || keywords;
  const finalCanonical = canonical ? `https://sosnettoyagediogene.fr${canonical}` : `https://sosnettoyagediogene.fr${window.location.pathname}`;

  return (
    <Helmet>
      {/* Google Tag Manager */}
      <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2V8JRGG');`}</script>
      
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
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
      <meta name="twitter:image:alt" content="SOS Nettoyage Diogène - Services de nettoyage professionnel" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="SOS Nettoyage Diogène" />
      <meta name="language" content="fr" />
      <meta name="geo.region" content="FR-34" />
      <meta name="geo.placename" content="Montpellier" />
      <meta name="geo.position" content="43.611;3.8767" />
      <meta name="ICBM" content="43.611, 3.8767" />
      
      {/* Business Meta Tags */}
      <meta name="business:contact_data:phone_number" content="+33767135458" />
      <meta name="business:contact_data:country_name" content="France" />
      <meta name="business:contact_data:locality" content="Montpellier" />
      <meta name="business:contact_data:region" content="Hérault" />
      
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
