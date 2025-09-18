import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration des pages statiques à générer
const staticPages = [
  {
    route: '/nettoyage-syndrome-diogene-montpellier',
    title: 'Nettoyage Syndrome de Diogène Montpellier | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive. Notre équipe formée intervient avec discrétion et bienveillance à Montpellier et sa région.',
    keywords: 'nettoyage syndrome diogène, montpellier, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection',
    content: 'ServiceDiogene'
  },
  {
    route: '/debarras-gros-volumes-montpellier',
    title: 'Débarras Gros Volumes Montpellier | Évacuation Professionnelle',
    description: 'Évacuation et tri de tous types d\'objets, meubles et déchets en respectant l\'environnement. Service professionnel pour particuliers et professionnels dans tout le Sud de la France.',
    keywords: 'débarras gros volumes, montpellier, évacuation déchets, tri sélectif, recyclage, nettoyage professionnel',
    content: 'ServiceDebarras'
  },
  {
    route: '/desinfection-insalubrite-montpellier',
    title: 'Désinfection & Insalubrité Montpellier | Traitement Professionnel',
    description: 'Traitement des environnements insalubres avec des produits professionnels et techniques adaptées. Intervention spécialisée pour restaurer un environnement sain et sécurisé.',
    keywords: 'désinfection, insalubrité, montpellier, traitement professionnel, nettoyage extrême, désinfection virale',
    content: 'ServiceDesinfection'
  }
];

// Template HTML de base
const htmlTemplate = (page) => `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords}" />
    <meta name="author" content="SOS Nettoyage Diogène - Nettoyage Professionnel" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://sosnettoyagediogene.fr${page.route}" />
    
    <!-- Language and Geo Tags -->
    <meta name="language" content="fr" />
    <meta name="geo.region" content="FR-34" />
    <meta name="geo.placename" content="Montpellier" />
    <meta name="geo.position" content="43.611;3.8767" />
    <meta name="ICBM" content="43.611, 3.8767" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://sosnettoyagediogene.fr${page.route}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="https://sosnettoyagediogene.fr/hero-cleaning.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Équipe professionnelle de nettoyage spécialisé syndrome de Diogène" />
    <meta property="og:site_name" content="SOS Nettoyage Diogène" />
    <meta property="og:locale" content="fr_FR" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://sosnettoyagediogene.fr${page.route}" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="https://sosnettoyagediogene.fr/hero-cleaning.jpg" />
    <meta name="twitter:image:alt" content="Équipe professionnelle de nettoyage spécialisé syndrome de Diogène" />
    
    <!-- Business/Local SEO -->
    <meta name="business:contact_data:phone_number" content="+33767135458" />
    <meta name="business:contact_data:country_name" content="France" />
    <meta name="business:contact_data:locality" content="Montpellier" />
    <meta name="business:contact_data:region" content="Hérault" />
    
    <!-- Additional SEO -->
    <meta name="theme-color" content="#1e40af" />
    <meta name="msapplication-TileColor" content="#1e40af" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="SOS Nettoyage Diogène" />
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <!-- DNS Prefetch for external resources -->
    <link rel="dns-prefetch" href="//www.google-analytics.com" />
    <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VDZL4FT7QQ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VDZL4FT7QQ');
    </script>
    
    <!-- Resource hints -->
    <link rel="preload" href="/hero-cleaning.jpg" as="image" type="image/jpeg" />
    
    <!-- Performance optimizations -->
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    
    <!-- Structured Data JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SOS Nettoyage Diogène",
      "alternateName": "SOS Nettoyage Diogène Montpellier",
      "description": "${page.description}",
      "url": "https://sosnettoyagediogene.fr${page.route}",
      "telephone": "+33767135458",
      "email": "contact@sosnettoyagediogene.fr",
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
      "areaServed": [
        {
          "@type": "City",
          "name": "Montpellier"
        },
        {
          "@type": "City", 
          "name": "Sète"
        },
        {
          "@type": "City",
          "name": "Béziers"
        },
        {
          "@type": "City",
          "name": "Nîmes"
        },
        {
          "@type": "City",
          "name": "Perpignan"
        }
      ],
      "serviceType": [
        "Nettoyage Syndrome de Diogène",
        "Débarras Gros Volumes", 
        "Désinfection et Insalubrité",
        "Nettoyage Extrême",
        "Évacuation Déchets"
      ],
      "openingHours": "Mo-Su 08:00-20:00",
      "priceRange": "€€",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "currenciesAccepted": "EUR",
      "sameAs": [
        "https://www.facebook.com/propremonsud",
        "https://www.linkedin.com/company/propre-mon-sud"
      ],
      "image": "https://sosnettoyagediogene.fr/hero-cleaning.jpg",
      "logo": "https://sosnettoyagediogene.fr/logo.png"
    }
    </script>
    
    <!-- CSS identique à l'application React -->
    <link rel="stylesheet" href="/assets/index-D6doAFu4.css" />
    <style>
      /* Styles de base pour la cohérence */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: hsl(var(--background));
        color: hsl(var(--foreground));
        line-height: 1.6;
        min-height: 100vh;
      }
      
      .min-h-screen {
        min-height: 100vh;
      }
      
      .bg-gradient-to-b {
        background: linear-gradient(to bottom, hsl(var(--background)), hsl(var(--secondary) / 0.2));
      }
      
      .bg-gradient-to-br {
        background: linear-gradient(to bottom right, hsl(var(--background)), hsl(var(--secondary) / 0.3), hsl(var(--background)));
      }
      
      .bg-gradient-to-r {
        background: linear-gradient(to right, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05));
      }
      
      .container { 
        max-width: 1200px;
        margin: 0 auto; 
        padding: 0 1rem;
      }
      
      .py-16 {
        padding-top: 4rem;
        padding-bottom: 4rem;
      }
      
      .py-20 {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }
      
      .text-center {
        text-align: center;
      }
      
      .max-w-4xl {
        max-width: 56rem;
      }
      
      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }
      
      .space-y-6 > * + * {
        margin-top: 1.5rem;
      }
      
      .space-y-8 > * + * {
        margin-top: 2rem;
      }
      
      .mb-12 {
        margin-bottom: 3rem;
      }
      
      .mb-16 {
        margin-bottom: 4rem;
      }
      
      h1 {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.1;
        color: hsl(var(--foreground));
        margin-bottom: 1.5rem;
      }
      
      h2 {
        font-size: 2.25rem;
        font-weight: 700;
        color: hsl(var(--foreground));
        margin-bottom: 1rem;
      }
      
      .text-primary {
        color: hsl(var(--primary));
      }
      
      .text-muted-foreground {
        color: hsl(var(--muted-foreground));
      }
      
      .text-lg {
        font-size: 1.125rem;
      }
      
      .text-xl {
        font-size: 1.25rem;
      }
      
      .leading-relaxed {
        line-height: 1.625;
      }
      
      .leading-tight {
        line-height: 1.25;
      }
      
      .block {
        display: block;
      }
      
      .flex {
        display: flex;
      }
      
      .flex-col {
        flex-direction: column;
      }
      
      .justify-center {
        justify-content: center;
      }
      
      .gap-4 {
        gap: 1rem;
      }
      
      .pt-4 {
        padding-top: 1rem;
      }
      
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.2s;
        text-decoration: none;
        border: none;
        cursor: pointer;
        padding: 0.75rem 1.5rem;
        gap: 0.5rem;
      }
      
      .btn-hero {
        background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.9));
        color: hsl(var(--primary-foreground));
      }
      
      .btn-hero:hover {
        background: linear-gradient(135deg, hsl(var(--primary) / 0.9), hsl(var(--primary) / 0.8));
        transform: translateY(-1px);
        box-shadow: 0 10px 25px hsl(var(--primary) / 0.3);
      }
      
      .btn-lg {
        padding: 1rem 2rem;
        font-size: 1.125rem;
      }
      
      .grid {
        display: grid;
      }
      
      .grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      
      .grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      
      .grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      
      .gap-6 {
        gap: 1.5rem;
      }
      
      .gap-8 {
        gap: 2rem;
      }
      
      .card {
        background: hsl(var(--card));
        border: 1px solid hsl(var(--border));
        border-radius: 0.75rem;
        padding: 1.5rem;
        box-shadow: 0 1px 3px hsl(var(--border) / 0.1);
        transition: all 0.3s ease;
      }
      
      .card:hover {
        box-shadow: 0 20px 25px -5px hsl(var(--border) / 0.1), 0 10px 10px -5px hsl(var(--border) / 0.04);
        transform: translateY(-2px);
      }
      
      .text-center {
        text-align: center;
      }
      
      .pb-4 {
        padding-bottom: 1rem;
      }
      
      .mb-4 {
        margin-bottom: 1rem;
      }
      
      .w-12 {
        width: 3rem;
      }
      
      .h-12 {
        height: 3rem;
      }
      
      .w-16 {
        width: 4rem;
      }
      
      .h-16 {
        height: 4rem;
      }
      
      .bg-gradient-to-br {
        background: linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--primary) / 0.8));
      }
      
      .rounded-xl {
        border-radius: 0.75rem;
      }
      
      .flex {
        display: flex;
      }
      
      .items-center {
        align-items: center;
      }
      
      .justify-center {
        justify-content: center;
      }
      
      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }
      
      .text-primary-foreground {
        color: hsl(var(--primary-foreground));
      }
      
      .text-lg {
        font-size: 1.125rem;
      }
      
      .text-xl {
        font-size: 1.25rem;
      }
      
      .font-semibold {
        font-weight: 600;
      }
      
      .space-y-2 > * + * {
        margin-top: 0.5rem;
      }
      
      .text-left {
        text-align: left;
      }
      
      .text-sm {
        font-size: 0.875rem;
      }
      
      .text-base {
        font-size: 1rem;
      }
      
      .flex {
        display: flex;
      }
      
      .items-center {
        align-items: center;
      }
      
      .gap-2 {
        gap: 0.5rem;
      }
      
      .w-3 {
        width: 0.75rem;
      }
      
      .h-3 {
        height: 0.75rem;
      }
      
      .w-4 {
        width: 1rem;
      }
      
      .h-4 {
        height: 1rem;
      }
      
      .text-accent {
        color: hsl(var(--accent));
      }
      
      .flex-shrink-0 {
        flex-shrink: 0;
      }
      
      .text-muted-foreground {
        color: hsl(var(--muted-foreground));
      }
      
      .bg-card {
        background: hsl(var(--card));
      }
      
      .py-16 {
        padding-top: 4rem;
        padding-bottom: 4rem;
      }
      
      .py-20 {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }
      
      .max-w-6xl {
        max-width: 72rem;
      }
      
      .max-w-3xl {
        max-width: 48rem;
      }
      
      .space-y-4 > * + * {
        margin-top: 1rem;
      }
      
      .mb-12 {
        margin-bottom: 3rem;
      }
      
      .mb-16 {
        margin-bottom: 4rem;
      }
      
      .text-2xl {
        font-size: 1.5rem;
      }
      
      .text-3xl {
        font-size: 1.875rem;
      }
      
      .text-4xl {
        font-size: 2.25rem;
      }
      
      .font-bold {
        font-weight: 700;
      }
      
      .text-foreground {
        color: hsl(var(--foreground));
      }
      
      .text-muted-foreground {
        color: hsl(var(--muted-foreground));
      }
      
      .text-base {
        font-size: 1rem;
      }
      
      .text-lg {
        font-size: 1.125rem;
      }
      
      .group:hover .group-hover\\:scale-110 {
        transform: scale(1.1);
      }
      
      .transition-all {
        transition: all 0.3s ease;
      }
      
      .duration-300 {
        transition-duration: 300ms;
      }
      
      .hover\\:shadow-xl:hover {
        box-shadow: 0 20px 25px -5px hsl(var(--border) / 0.1), 0 10px 10px -5px hsl(var(--border) / 0.04);
      }
      
      .border-border\\/50 {
        border-color: hsl(var(--border) / 0.5);
      }
      
      .hover\\:border-primary\\/30:hover {
        border-color: hsl(var(--primary) / 0.3);
      }
      
      .transition-transform {
        transition: transform 0.3s ease;
      }
      
      .group-hover\\:scale-110 {
        transform: scale(1);
      }
      
      .group:hover .group-hover\\:scale-110 {
        transform: scale(1.1);
      }
      
      .transition-colors {
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      
      .hover\\:bg-card\\/50:hover {
        background: hsl(var(--card) / 0.5);
      }
      
      .p-4 {
        padding: 1rem;
      }
      
      .rounded-lg {
        border-radius: 0.5rem;
      }
      
      .w-5 {
        width: 1.25rem;
      }
      
      .h-5 {
        height: 1.25rem;
      }
      
      .w-6 {
        width: 1.5rem;
      }
      
      .h-6 {
        height: 1.5rem;
      }
      
      .mt-1 {
        margin-top: 0.25rem;
      }
      
      .mb-2 {
        margin-bottom: 0.5rem;
      }
      
      .text-xs {
        font-size: 0.75rem;
      }
      
      .text-sm {
        font-size: 0.875rem;
      }
      
      .text-base {
        font-size: 1rem;
      }
      
      .font-semibold {
        font-weight: 600;
      }
      
      .text-foreground {
        color: hsl(var(--foreground));
      }
      
      .text-muted-foreground {
        color: hsl(var(--muted-foreground));
      }
      
      .grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      
      .grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      
      .grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      
      .gap-3 {
        gap: 0.75rem;
      }
      
      .gap-4 {
        gap: 1rem;
      }
      
      .gap-6 {
        gap: 1.5rem;
      }
      
      .gap-8 {
        gap: 2rem;
      }
      
      .mb-8 {
        margin-bottom: 2rem;
      }
      
      .mb-12 {
        margin-bottom: 3rem;
      }
      
      .w-3 {
        width: 0.75rem;
      }
      
      .h-3 {
        height: 0.75rem;
      }
      
      .w-4 {
        width: 1rem;
      }
      
      .h-4 {
        height: 1rem;
      }
      
      .text-accent {
        color: hsl(var(--accent));
      }
      
      .flex-shrink-0 {
        flex-shrink: 0;
      }
      
      .text-muted-foreground {
        color: hsl(var(--muted-foreground));
      }
      
      .p-2 {
        padding: 0.5rem;
      }
      
      .rounded-lg {
        border-radius: 0.5rem;
      }
      
      .hover\\:bg-card\\/50:hover {
        background: hsl(var(--card) / 0.5);
      }
      
      .transition-colors {
        transition: background-color 0.3s ease;
      }
      
      .duration-300 {
        transition-duration: 300ms;
      }
      
      .text-xs {
        font-size: 0.75rem;
      }
      
      .text-sm {
        font-size: 0.875rem;
      }
      
      .bg-gradient-to-br {
        background: linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--primary) / 0.9));
      }
      
      .text-primary-foreground {
        color: hsl(var(--primary-foreground));
      }
      
      .border-0 {
        border: 0;
      }
      
      .shadow-xl {
        box-shadow: 0 20px 25px -5px hsl(var(--border) / 0.1), 0 10px 10px -5px hsl(var(--border) / 0.04);
      }
      
      .p-6 {
        padding: 1.5rem;
      }
      
      .p-8 {
        padding: 2rem;
      }
      
      .w-10 {
        width: 2.5rem;
      }
      
      .h-10 {
        height: 2.5rem;
      }
      
      .w-12 {
        width: 3rem;
      }
      
      .h-12 {
        height: 3rem;
      }
      
      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }
      
      .mb-4 {
        margin-bottom: 1rem;
      }
      
      .text-xl {
        font-size: 1.25rem;
      }
      
      .text-2xl {
        font-size: 1.5rem;
      }
      
      .font-bold {
        font-weight: 700;
      }
      
      .mb-2 {
        margin-bottom: 0.5rem;
      }
      
      .text-lg {
        font-size: 1.125rem;
      }
      
      .text-xl {
        font-size: 1.25rem;
      }
      
      .font-semibold {
        font-weight: 600;
      }
      
      .mb-4 {
        margin-bottom: 1rem;
      }
      
      .text-primary-foreground\\/90 {
        color: hsl(var(--primary-foreground) / 0.9);
      }
      
      .text-sm {
        font-size: 0.875rem;
      }
      
      .text-base {
        font-size: 1rem;
      }
      
      /* Responsive */
      @media (min-width: 640px) {
        .sm\\:py-20 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        
        .sm\\:space-y-8 > * + * {
          margin-top: 2rem;
        }
        
        .sm\\:text-4xl {
          font-size: 2.25rem;
        }
        
        .sm\\:text-5xl {
          font-size: 3rem;
        }
        
        .sm\\:text-6xl {
          font-size: 3.75rem;
        }
        
        .sm\\:text-xl {
          font-size: 1.25rem;
        }
        
        .sm\\:px-8 {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        
        .sm\\:py-6 {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }
        
        .sm\\:text-lg {
          font-size: 1.125rem;
        }
        
        .sm\\:mb-16 {
          margin-bottom: 4rem;
        }
        
        .sm\\:text-3xl {
          font-size: 1.875rem;
        }
        
        .sm\\:text-4xl {
          font-size: 2.25rem;
        }
        
        .sm\\:grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        
        .sm\\:grid-cols-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        
        .sm\\:grid-cols-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        
        .sm\\:gap-4 {
          gap: 1rem;
        }
        
        .sm\\:gap-8 {
          gap: 2rem;
        }
        
        .sm\\:w-16 {
          width: 4rem;
        }
        
        .sm\\:h-16 {
          height: 4rem;
        }
        
        .sm\\:w-8 {
          width: 2rem;
        }
        
        .sm\\:h-8 {
          height: 2rem;
        }
        
        .sm\\:text-xl {
          font-size: 1.25rem;
        }
        
        .sm\\:text-base {
          font-size: 1rem;
        }
        
        .sm\\:w-4 {
          width: 1rem;
        }
        
        .sm\\:h-4 {
          height: 1rem;
        }
        
        .sm\\:w-5 {
          width: 1.25rem;
        }
        
        .sm\\:h-5 {
          height: 1.25rem;
        }
        
        .sm\\:w-6 {
          width: 1.5rem;
        }
        
        .sm\\:h-6 {
          height: 1.5rem;
        }
        
        .sm\\:text-base {
          font-size: 1rem;
        }
        
        .sm\\:text-sm {
          font-size: 0.875rem;
        }
        
        .sm\\:gap-8 {
          gap: 2rem;
        }
        
        .sm\\:mb-12 {
          margin-bottom: 3rem;
        }
        
        .sm\\:p-8 {
          padding: 2rem;
        }
        
        .sm\\:w-12 {
          width: 3rem;
        }
        
        .sm\\:h-12 {
          height: 3rem;
        }
        
        .sm\\:text-2xl {
          font-size: 1.5rem;
        }
        
        .sm\\:text-base {
          font-size: 1rem;
        }
      }
      
      @media (min-width: 768px) {
        .md\\:text-5xl {
          font-size: 3rem;
        }
        
        .md\\:text-6xl {
          font-size: 3.75rem;
        }
        
        .md\\:text-4xl {
          font-size: 2.25rem;
        }
      }
      
      @media (min-width: 1024px) {
        .lg\\:text-6xl {
          font-size: 3.75rem;
        }
        
        .lg\\:grid-cols-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        
        .lg\\:grid-cols-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        
        .lg\\:col-span-1 {
          grid-column: span 1 / span 1;
        }
      }
      
      /* Variables CSS pour la cohérence */
      :root {
        --background: 0 0% 100%;
        --foreground: 222.2 84% 4.9%;
        --card: 0 0% 100%;
        --card-foreground: 222.2 84% 4.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 222.2 84% 4.9%;
        --primary: 221.2 83.2% 53.3%;
        --primary-foreground: 210 40% 98%;
        --secondary: 210 40% 96%;
        --secondary-foreground: 222.2 84% 4.9%;
        --muted: 210 40% 96%;
        --muted-foreground: 215.4 16.3% 46.9%;
        --accent: 210 40% 96%;
        --accent-foreground: 222.2 84% 4.9%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 210 40% 98%;
        --border: 214.3 31.8% 91.4%;
        --input: 214.3 31.8% 91.4%;
        --ring: 221.2 83.2% 53.3%;
        --radius: 0.5rem;
      }
      
      .dark {
        --background: 222.2 84% 4.9%;
        --foreground: 210 40% 98%;
        --card: 222.2 84% 4.9%;
        --card-foreground: 210 40% 98%;
        --popover: 222.2 84% 4.9%;
        --popover-foreground: 210 40% 98%;
        --primary: 217.2 91.2% 59.8%;
        --primary-foreground: 222.2 84% 4.9%;
        --secondary: 217.2 32.6% 17.5%;
        --secondary-foreground: 210 40% 98%;
        --muted: 217.2 32.6% 17.5%;
        --muted-foreground: 215 20.2% 65.1%;
        --accent: 217.2 32.6% 17.5%;
        --accent-foreground: 210 40% 98%;
        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 210 40% 98%;
        --border: 217.2 32.6% 17.5%;
        --input: 217.2 32.6% 17.5%;
        --ring: 224.3 76.3% 94.1%;
      }
    </style>
  </head>

  <body>
    <div class="min-h-screen bg-gradient-to-b">
      <!-- Hero Section -->
      <section class="relative py-16 sm:py-20 bg-gradient-to-br">
        <div class="absolute inset-0 bg-gradient-to-r"></div>
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              ${page.title.split(' | ')[0]}
              <span class="block text-primary">Montpellier</span>
            </h1>
            <p class="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              ${page.description}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:0767135458" class="btn btn-hero btn-lg">
                📞 Devis Gratuit - 07 67 13 54 58
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="py-16 sm:py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Nos Services Spécialisés
              </h2>
              <p class="text-base sm:text-lg text-muted-foreground">
                Une approche professionnelle et humaine pour chaque situation, avec la discrétion et l'expertise que vous méritez.
              </p>
            </div>
            
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div class="card group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                <div class="pb-4">
                  <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-primary-foreground text-2xl">🏠</span>
                  </div>
                  <h3 class="text-lg sm:text-xl font-semibold">Nettoyage Syndrome de Diogène</h3>
                </div>
                <div>
                  <p class="text-muted-foreground text-sm sm:text-base">
                    Intervention spécialisée dans les situations d'accumulation compulsive avec respect et discrétion totale.
                  </p>
                </div>
              </div>

              <div class="card group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                <div class="pb-4">
                  <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-primary-foreground text-2xl">🗑️</span>
                  </div>
                  <h3 class="text-lg sm:text-xl font-semibold">Débarras Gros Volumes</h3>
                </div>
                <div>
                  <p class="text-muted-foreground text-sm sm:text-base">
                    Évacuation et tri de tous types d'objets, meubles et déchets en respectant l'environnement.
                  </p>
                </div>
              </div>

              <div class="card group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center sm:col-span-2 lg:col-span-1">
                <div class="pb-4">
                  <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-primary-foreground text-2xl">🛡️</span>
                  </div>
                  <h3 class="text-lg sm:text-xl font-semibold">Désinfection & Insalubrité</h3>
                </div>
                <div>
                  <p class="text-muted-foreground text-sm sm:text-base">
                    Traitement des environnements insalubres avec des produits professionnels et techniques adaptées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Avantages Section -->
      <section class="py-16 sm:py-20 bg-card">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Pourquoi Nous Choisir ?
              </h2>
              <p class="text-base sm:text-lg text-muted-foreground">
                Une expertise reconnue et une approche humaine pour chaque intervention.
              </p>
            </div>
            
            <div class="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <div class="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 class="font-semibold text-foreground mb-2 text-sm sm:text-base">Disponibilité 7j/7</h3>
                  <p class="text-muted-foreground text-xs sm:text-sm">
                    Intervention rapide et flexible
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <div class="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 class="font-semibold text-foreground mb-2 text-sm sm:text-base">Équipe experte</h3>
                  <p class="text-muted-foreground text-xs sm:text-sm">
                    Professionnels formés et équipés
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <div class="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 class="font-semibold text-foreground mb-2 text-sm sm:text-base">Discrétion assurée</h3>
                  <p class="text-muted-foreground text-xs sm:text-sm">
                    Confidentialité et respect total
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <div class="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 class="font-semibold text-foreground mb-2 text-sm sm:text-base">Assurance complète</h3>
                  <p class="text-muted-foreground text-xs sm:text-sm">
                    Intervention sécurisée et assurée
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Final -->
      <section class="py-16 sm:py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Besoin d'une Intervention ?
              </h2>
              <p class="text-base sm:text-lg text-muted-foreground">
                Contactez-nous pour un devis gratuit et une intervention rapide.
              </p>
            </div>

            <div class="bg-gradient-to-br text-primary-foreground border-0 shadow-xl p-6 sm:p-8 rounded-xl">
              <div class="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-4xl">📞</div>
              <h3 class="text-xl sm:text-2xl font-bold mb-2">Intervention d'Urgence</h3>
              <p class="text-lg sm:text-xl font-semibold mb-4">07 67 13 54 58</p>
              <p class="text-primary-foreground/90 text-sm sm:text-base">
                Disponible 7j/7 de 8h à 20h pour tout le Sud de la France
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Script pour rediriger vers l'application React -->
    <script>
      // Redirection vers l'application React après un court délai
      setTimeout(function() {
        window.location.href = '${page.route}';
      }, 3000);
      
      // Redirection immédiate si JavaScript est activé
      if (window.location.pathname !== '${page.route}') {
        window.location.replace('${page.route}');
      }
    </script>
  </body>
</html>`;

// Fonction pour créer les dossiers nécessaires
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Fonction pour générer les pages statiques
function generateStaticPages() {
  const distPath = path.join(__dirname, '..', 'dist');
  ensureDirectoryExists(distPath);
  
  console.log('🚀 Génération des pages statiques pour le SEO...');
  
  staticPages.forEach(page => {
    const routePath = page.route.slice(1); // Enlever le slash initial
    const pageDir = path.join(distPath, routePath);
    
    // Créer le dossier pour la route
    ensureDirectoryExists(pageDir);
    
    // Générer le fichier index.html pour cette route
    const htmlContent = htmlTemplate(page);
    const indexPath = path.join(pageDir, 'index.html');
    
    fs.writeFileSync(indexPath, htmlContent, 'utf8');
    
    console.log(`✅ Page générée: ${page.route} -> ${indexPath}`);
  });
  
  console.log(`🎉 ${staticPages.length} pages statiques générées avec succès !`);
  console.log('📋 Pages créées:');
  staticPages.forEach(page => {
    console.log(`   - ${page.route}`);
  });
}

// Exécuter la génération
generateStaticPages();
