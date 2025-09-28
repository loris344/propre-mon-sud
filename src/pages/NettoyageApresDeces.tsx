import Hero from "../components/Hero";
import Services from "../components/Services";
import ExamplesGallery from "../components/ExamplesGallery";
import CustomerReviews from "../components/CustomerReviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import { useSEO } from "../hooks/useSEO";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone,
  MapPin,
  Users,
  Home,
  Leaf,
  Zap,
  Droplets
} from "lucide-react";

const NettoyageApresDeces = () => {
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

  const seoConfig = useSEO();

  return (
    <>
      <SEOHead {...seoConfig} />
      <main role="main">
        {/* Hero Section spécialisé */}
        <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: `url('/images/examples/ex2.jpg')` }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Nettoyage Après Décès
                <span className="block text-primary">Service Respectueux et Discret</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Service spécialisé de nettoyage et remise en état après décès. 
                Intervention respectueuse, discrète et professionnelle avec protocoles sanitaires stricts 
                dans tout le Sud de la France.
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
                  Notre Processus d'Intervention
                </h2>
                <p className="text-lg text-muted-foreground">
                  Une approche professionnelle et humaine pour chaque situation, 
                  avec la discrétion et l'expertise que vous méritez.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">1. Évaluation Respectueuse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Évaluation par téléphone avec tact et discrétion. Compréhension de la situation 
                      et établissement d'un protocole adapté dans le respect de la famille.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">2. Intervention Discrète</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Intervention avec véhicules discrets, équipement professionnel et protocoles sanitaires stricts. 
                      Respect total de l'intimité et de la dignité.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">3. Remise en État Complète</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Nettoyage approfondi, désinfection professionnelle et remise en état des lieux. 
                      Certificat de désinfection et suivi post-intervention.
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
                  Nos Services Spécialisés
                </h2>
                <p className="text-lg text-muted-foreground">
                  Des solutions adaptées à chaque situation, avec l'expertise et la bienveillance nécessaires.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Intervention Discrète", desc: "Véhicules discrets et respect total de l'intimité", icon: Users },
                  { title: "Respect de la Famille", desc: "Approche humaine et bienveillante", icon: Heart },
                  { title: "Protocoles Sanitaires", desc: "Traitement selon les normes les plus strictes", icon: Shield },
                  { title: "Remise en État Complète", desc: "Nettoyage et désinfection professionnelle", icon: Home },
                  { title: "Désinfection Professionnelle", desc: "Produits certifiés et techniques adaptées", icon: Droplets },
                  { title: "Équipe Formée", desc: "Personnel spécialisé et expérimenté", icon: Users }
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
                  Pourquoi Choisir Notre Expertise ?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Une expertise reconnue et une approche humaine pour chaque intervention.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Formation Spécialisée", desc: "Équipe formée aux techniques de nettoyage post-décès et à l'accompagnement psychologique" },
                  { title: "Discrétion Totale", desc: "Respect absolu de la vie privée et confidentialité garantie" },
                  { title: "Intervention Rapide", desc: "Disponibilité 7j/7, intervention sous 24h en cas d'urgence" },
                  { title: "Protocoles Stricts", desc: "Désinfection selon les normes sanitaires les plus élevées" }
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

export default NettoyageApresDeces;
