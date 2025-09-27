import Hero from "../components/Hero";
import Services from "../components/Services";
import ExamplesGallery from "../components/ExamplesGallery";
import CustomerReviews from "../components/CustomerReviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Trash2, 
  Recycle, 
  Truck, 
  Leaf, 
  Clock, 
  CheckCircle, 
  Phone,
  MapPin,
  Shield,
  Home,
  Building2,
  Package
} from "lucide-react";

const DebarrasGrosVolumes = () => {
  const location = useLocation();

  // Remettre le scroll en haut de page à chaque navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gérer les ancres dans l'URL
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  const seoConfig = {
    title: "Débarras Gros Volumes | Évacuation Professionnelle Sud de la France",
    description: "Service professionnel de débarras et évacuation gros volumes. Greniers, caves, garages, déménagements, successions. Tri et recyclage respectueux de l'environnement. Devis gratuit 7j/7.",
    keywords: "débarras gros volumes, évacuation déchets, tri sélectif, recyclage, greniers caves, déménagements, successions, nettoyage professionnel, sud france",
    canonical: "/debarras-gros-volumes",
    ogImage: "https://sosnettoyagediogene.fr/ex1.png",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Débarras Gros Volumes",
      "description": "Service professionnel de débarras et évacuation gros volumes avec tri et recyclage respectueux de l'environnement.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "SOS Nettoyage Diogène",
        "telephone": "07 67 13 54 58",
        "email": "contact@sosnettoyagediogene.fr"
      },
      "areaServed": [
        { "@type": "City", "name": "Montpellier" },
        { "@type": "City", "name": "Sète" },
        { "@type": "City", "name": "Béziers" },
        { "@type": "City", "name": "Nîmes" },
        { "@type": "City", "name": "Perpignan" }
      ],
      "serviceType": "Débarras Gros Volumes",
      "offers": {
        "@type": "Offer",
        "description": "Devis gratuit et sans engagement",
        "priceCurrency": "EUR"
      }
    }
  };

  return (
    <>
      <SEOHead {...seoConfig} />
      <main role="main">
        {/* Hero Section spécialisé */}
        <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: `url('/ex1.png')` }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Trash2 className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Débarras Gros Volumes
                <span className="block text-primary">Évacuation Professionnelle</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Service professionnel de débarras et évacuation pour greniers, caves, garages, déménagements et successions. 
                Tri et recyclage respectueux de l'environnement dans tout le Sud de la France.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Devis Gratuit - 07 67 13 54 58
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Processus d'intervention */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Notre Processus d'Évacuation
                </h2>
                <p className="text-lg text-muted-foreground">
                  Une approche professionnelle et écologique pour chaque type de débarras, 
                  avec le respect de l'environnement et la valorisation des objets.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Trash2 className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">1. Évaluation Gratuite</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Évaluation par téléphone ou email pour estimer le volume et le type d'objets à évacuer. 
                      Devis détaillé et personnalisé selon vos besoins.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Recycle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">2. Tri et Sélection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Tri minutieux des objets : réutilisables, recyclables, déchets. 
                      Respect de vos choix et conseils pour optimiser la valorisation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Truck className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">3. Évacuation Complète</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Évacuation avec matériel adapté. Respect de l'environnement et traçabilité complète 
                      des déchets selon la réglementation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Types d'interventions */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Nos Services Débarras
                </h2>
                <p className="text-lg text-muted-foreground">
                  Des solutions adaptées à chaque situation, avec l'expertise et l'équipement nécessaires.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Greniers et Caves", desc: "Évacuation complète des objets accumulés", icon: Home },
                  { title: "Garages Encombrés", desc: "Nettoyage et tri des outils et matériaux", icon: Package },
                  { title: "Déménagements", desc: "Aide au tri avant départ", icon: Truck },
                  { title: "Successions", desc: "Accompagnement respectueux du tri", icon: Shield },
                  { title: "Bureaux et Locaux", desc: "Évacuation professionnelle", icon: Building2 },
                  { title: "Tri et Recyclage", desc: "Valorisation écologique", icon: Leaf }
                ].map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                      <CardHeader className="text-center pb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-center">{service.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Pourquoi Choisir Notre Service ?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Une expertise reconnue et une approche écologique pour chaque intervention.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Équipe Professionnelle", desc: "Personnel formé et équipé pour tous types de débarras" },
                  { title: "Respect Environnemental", desc: "Tri sélectif et valorisation maximale des déchets" },
                  { title: "Intervention Rapide", desc: "Disponibilité 7j/7, intervention sous 24h en cas d'urgence" },
                  { title: "Matériel Adapté", desc: "Équipement professionnel pour gros volumes et objets lourds" }
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-lg hover:bg-card/50 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Zone d'Intervention - Sud de la France
                </h2>
                <p className="text-lg text-muted-foreground">
                  Nous intervenons dans tout le Sud de la France avec la même qualité de service.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {["Montpellier", "Sète", "Béziers", "Nîmes", "Perpignan", "Carcassonne", "Marseille", "Aix-en-Provence"].map((city, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground p-3 rounded-lg hover:bg-background/50 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{city}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 shadow-xl">
                <CardContent className="p-8">
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Intervention d'Urgence</h3>
                  <p className="text-xl font-semibold mb-4">07 67 13 54 58</p>
                  <p className="text-primary-foreground/90">
                    Disponible 7j/7 de 8h à 20h pour tout le Sud de la France
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Galerie d'exemples */}
        <section id="exemples" aria-labelledby="exemples-title">
          <ExamplesGallery />
        </section>

        {/* Avis clients */}
        <section id="avis" aria-labelledby="avis-title">
          <CustomerReviews />
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DebarrasGrosVolumes;
