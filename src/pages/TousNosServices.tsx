import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  Users, 
  Home,
  FileText,
  Building,
  Heart
} from 'lucide-react';
import { SEO_CONFIGS } from '@/lib/seo-config';

// Interface pour une page de service
interface ServicePage {
  url: string;
  title: string;
  description: string;
  category: string;
  city?: string;
  icon: React.ReactNode;
}

// Fonction pour extraire les pages de services depuis la config SEO
function getServicePages(): ServicePage[] {
  const pages: ServicePage[] = [];
  
  Object.entries(SEO_CONFIGS).forEach(([url, config]) => {
    // Exclure les pages non pertinentes
    if (url === '/' || url === '/404' || url.startsWith('/blog/') || url === '/blog') {
      return;
    }
    
    // Déterminer la catégorie et l'icône
    let category = 'Services';
    let icon = <Home className="h-5 w-5" />;
    let city = '';
    
    if (url.includes('syndrome-diogene')) {
      category = 'Syndrome de Diogène';
      icon = <Shield className="h-5 w-5" />;
      
      // Extraire la ville
      if (url.includes('montpellier')) city = 'Montpellier';
      else if (url.includes('sete')) city = 'Sète';
      else if (url.includes('beziers')) city = 'Béziers';
      else if (url.includes('nimes')) city = 'Nîmes';
      else if (url.includes('perpignan')) city = 'Perpignan';
      else if (url.includes('marseille')) city = 'Marseille';
    } else if (url.includes('apres-deces')) {
      category = 'Nettoyage après décès';
      icon = <Heart className="h-5 w-5" />;
      
      if (url.includes('marseille')) city = 'Marseille';
    } else if (url.includes('debarras-gros-volumes')) {
      category = 'Débarras gros volumes';
      icon = <Building className="h-5 w-5" />;
    } else if (url.includes('desinfection-insalubrite')) {
      category = 'Désinfection & Insalubrité';
      icon = <Shield className="h-5 w-5" />;
    } else if (url.includes('partenariat')) {
      category = 'Partenariats';
      icon = <Users className="h-5 w-5" />;
    }
    
    pages.push({
      url,
      title: config.title.split(' | ')[0], // Prendre seulement la première partie du titre
      description: config.description.substring(0, 150) + '...',
      category,
      city,
      icon
    });
  });
  
  return pages;
}

// Fonction pour grouper les pages par catégorie
function groupPagesByCategory(pages: ServicePage[]) {
  const grouped: Record<string, ServicePage[]> = {};
  
  pages.forEach(page => {
    if (!grouped[page.category]) {
      grouped[page.category] = [];
    }
    grouped[page.category].push(page);
  });
  
  return grouped;
}

const TousNosServices: React.FC = () => {
  const servicePages = getServicePages();
  const groupedPages = groupPagesByCategory(servicePages);
  
  return (
    <>
      <Helmet>
        <title>Tous nos Services | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse</title>
        <meta name="description" content="Découvrez tous nos services de nettoyage spécialisé : syndrome de Diogène, nettoyage après décès, débarras gros volumes, désinfection. Intervention professionnelle dans tout le Sud de la France." />
        <meta name="keywords" content="tous nos services, nettoyage spécialisé, syndrome diogène, nettoyage après décès, débarras, désinfection, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse" />
        <link rel="canonical" href="/tous-nos-services" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tous nos Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Découvrez l'ensemble de nos services de nettoyage spécialisé et d'intervention professionnelle
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <MapPin className="h-4 w-4 mr-1" />
                  Tout le Sud de la France
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Clock className="h-4 w-4 mr-1" />
                  Intervention 7j/7
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Shield className="h-4 w-4 mr-1" />
                  Équipe certifiée
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Services par catégorie */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {Object.entries(groupedPages).map(([category, pages]) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pages.map((page) => (
                  <Card key={page.url} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                          {page.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {page.title}
                          </CardTitle>
                          {page.city && (
                            <Badge variant="outline" className="mt-1">
                              <MapPin className="h-3 w-3 mr-1" />
                              {page.city}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <CardDescription className="mb-4">
                        {page.description}
                      </CardDescription>
                      
                      <Button asChild className="w-full">
                        <a href={page.url}>
                          Découvrir le service
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Contact */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Besoin d'un devis ou d'informations ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Appelez-nous</h3>
                  <p className="text-gray-600 mb-4">Disponible 7j/7</p>
                  <a 
                    href="tel:0767135458" 
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    07 67 13 54 58
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Écrivez-nous</h3>
                  <p className="text-gray-600 mb-4">Réponse rapide</p>
                  <a 
                    href="mailto:contact@sosnettoyagediogene.fr" 
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    contact@sosnettoyagediogene.fr
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Devis gratuit</h3>
                  <p className="text-gray-600 mb-4">Sans engagement</p>
                  <Button asChild>
                    <a href="/#contact">
                      Demander un devis
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TousNosServices;
