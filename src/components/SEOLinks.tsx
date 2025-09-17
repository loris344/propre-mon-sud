import { useEffect } from "react";

const SEOLinks = () => {
  useEffect(() => {
    // Ajouter des liens SEO-friendly dans le head
    const head = document.head;
    
    // Lien vers la page principale
    const homeLink = document.createElement('link');
    homeLink.rel = 'alternate';
    homeLink.href = 'https://sosnettoyagediogene.fr/';
    homeLink.hreflang = 'fr';
    head.appendChild(homeLink);
    
    // Lien vers les services principaux
    const services = [
      '/nettoyage-syndrome-diogene-montpellier',
      '/debarras-gros-volumes-montpellier', 
      '/desinfection-insalubrite-montpellier'
    ];
    
    services.forEach(service => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.href = `https://sosnettoyagediogene.fr${service}`;
      link.hreflang = 'fr';
      head.appendChild(link);
    });
    
    return () => {
      // Cleanup au démontage
      const links = head.querySelectorAll('link[rel="alternate"]');
      links.forEach(link => link.remove());
    };
  }, []);

  return null;
};

export default SEOLinks;
