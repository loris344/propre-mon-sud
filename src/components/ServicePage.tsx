import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "./SEOHead";
import Contact from "./Contact";
import CustomerReviews from "./CustomerReviews";
import { useSEO } from "../hooks/useSEO";
import { useLocation } from "react-router-dom";
import { 
  Heart, 
  Shield, 
  Users, 
  Clock,
  CheckCircle,
  Phone,
  MapPin,
  Star,
  Home,
  Trash2,
  Recycle,
  Truck,
  Leaf,
  Zap,
  Droplets,
  AlertTriangle
} from "lucide-react";
import { SITE_CONFIG, SERVICES, CITIES, extractCityFromPath, extractServiceFromPath } from "../config/site-config";

// Mapping des icônes
const iconMap = {
  Heart,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Phone,
  MapPin,
  Star,
  Home,
  Trash2,
  Recycle,
  Truck,
  Leaf,
  Zap,
  Droplets,
  AlertTriangle
};

const ServicePage = () => {
  const seoConfig = useSEO();
  const location = useLocation();
  
  // Extraire les informations depuis l'URL
  const cityId = extractCityFromPath(location.pathname);
  const serviceId = extractServiceFromPath(location.pathname);
  
  // Récupérer les données
  const city = CITIES[cityId as keyof typeof CITIES] || CITIES.montpellier;
  const service = SERVICES[serviceId as keyof typeof SERVICES] || SERVICES.diogene;
  
  // Récupérer l'icône du service
  const ServiceIcon = iconMap[service.icon as keyof typeof iconMap] || Heart;

  return (
    <>
      <SEOHead {...seoConfig} />
      <main role="main">
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-20 sm:pt-24">
      
          {/* Hero Section */}
          <section className="relative py-16 sm:py-20 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
            {/* Image de fond de la ville */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{ backgroundImage: `url(${city.images.hero})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {service.name}
                  <span className="block text-primary">{city.name}</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {service.description} 
                  Notre équipe formée intervient avec discrétion et bienveillance à {city.name} et sa région.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Devis Gratuit - {SITE_CONFIG.phone}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Processus d'intervention */}
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Notre Processus d'Intervention
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Une approche professionnelle et humaine pour chaque situation, 
                    avec la discrétion et l'expertise que vous méritez.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {service.process.map((step, index) => {
                    const StepIcon = iconMap[step.icon as keyof typeof iconMap] || Heart;
                    return (
                      <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                        <CardHeader className="pb-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <StepIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                          </div>
                          <CardTitle className="text-lg sm:text-xl font-semibold">{step.step}. {step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Types d'interventions */}
          <section className="py-16 sm:py-20 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Nos Services {service.shortName}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Des solutions adaptées à chaque situation, avec l'expertise et la bienveillance nécessaires.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {service.features.map((feature, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                      <CardHeader className="text-center pb-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <ServiceIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-semibold">{feature}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm sm:text-base">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">Service professionnel</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Avantages spécifiques */}
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Pourquoi Choisir Notre Expertise ?
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Une expertise reconnue et une approche humaine pour chaque intervention.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  {[
                    { title: "Formation Spécialisée", desc: "Équipe formée aux techniques de nettoyage extrême et à l'accompagnement psychologique" },
                    { title: "Discrétion Totale", desc: "Respect absolu de la vie privée et confidentialité garantie" },
                    { title: "Intervention Rapide", desc: "Disponibilité 7j/7, intervention sous 24h en cas d'urgence" },
                    { title: "Équipement Professionnel", desc: "Matériel spécialisé pour le nettoyage et la désinfection des environnements insalubres" }
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{advantage.title}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {advantage.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Galerie d'images de la ville */}
          <section className="py-16 sm:py-20 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Nos Interventions à {city.name}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Découvrez {city.name} et nos interventions spécialisées dans cette belle ville du Sud de la France.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {city.images.gallery.slice(0, 3).map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <img
                        src={image}
                        alt={`${city.name} - Vue ${index + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm font-medium">{city.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Zone d'intervention */}
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Zone d'Intervention - Sud de la France
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Nous intervenons dans tout le Sud de la France avec la même qualité de service.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
                  {Object.values(CITIES).map((cityItem, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground p-2 rounded-lg hover:bg-card/50 transition-colors duration-300">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{cityItem.name}</span>
                    </div>
                  ))}
                </div>

                <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 shadow-xl">
                  <CardContent className="p-6 sm:p-8">
                    <Phone className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Intervention d'Urgence</h3>
                    <p className="text-lg sm:text-xl font-semibold mb-4">{SITE_CONFIG.phone}</p>
                    <p className="text-primary-foreground/90 text-sm sm:text-base">
                      Disponible 7j/7 de 8h à 20h pour tout le Sud de la France
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Avis clients */}
          <section id="avis" aria-labelledby="avis-title">
            <CustomerReviews />
          </section>

          {/* Contact */}
          <section id="contact" aria-labelledby="contact-title">
            <Contact />
          </section>
        </div>
      </main>
    </>
  );
};

export default ServicePage;
