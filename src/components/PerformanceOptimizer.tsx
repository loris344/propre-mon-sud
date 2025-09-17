import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preconnect vers les domaines externes
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch pour les domaines moins critiques
    const dnsPrefetchDomains = [
      'https://maps.googleapis.com',
      'https://www.google.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Resource hints pour les assets critiques
    const criticalAssets = [
      '/hero-cleaning.jpg',
      '/favicon.ico'
    ];

    criticalAssets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = asset;
      link.as = asset.includes('.jpg') ? 'image' : 'image';
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup au démontage
      const addedLinks = document.head.querySelectorAll('link[rel="preconnect"], link[rel="dns-prefetch"], link[rel="preload"]');
      addedLinks.forEach(link => link.remove());
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
