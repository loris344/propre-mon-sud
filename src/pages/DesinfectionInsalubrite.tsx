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
  Shield, 
  Droplets, 
  Clock, 
  CheckCircle, 
  Phone,
  MapPin,
  Users,
  Home,
  Leaf,
  Zap,
  AlertTriangle,
  FileText,
  ExternalLink
} from "lucide-react";

const DesinfectionInsalubrite = () => {
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
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: `url('/désinfection.jpg')` }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Désinfection & Insalubrité
                <span className="block text-primary">Service Professionnel de Remise en État</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Service spécialisé de désinfection et remise en état de logements insalubres. 
                Intervention professionnelle avec protocoles sanitaires stricts et respect des normes 
                dans les Bouches-du-Rhône, Hérault, Gard et Aveyron.
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
                  Devis Gratuit
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
                  Une approche professionnelle et méthodique pour chaque situation d'insalubrité, 
                  avec le respect des protocoles sanitaires et la sécurité de tous.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <AlertTriangle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">1. Diagnostic Complet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Évaluation approfondie de l'état du logement, identification des risques sanitaires 
                      et établissement d'un protocole d'intervention adapté.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Droplets className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">2. Désinfection Professionnelle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Nettoyage en profondeur et désinfection avec produits certifiés selon les normes sanitaires. 
                      Élimination des nuisibles et traitement des surfaces.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">3. Remise en État Totale</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Restauration complète du logement, vérification de la salubrité et remise des clés 
                      avec certificat de désinfection et conseils de prévention.
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
                  Des solutions adaptées à chaque situation d'insalubrité, avec l'expertise et l'équipement nécessaires.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Syndrome de Diogène", desc: "Nettoyage et désinfection spécialisés", icon: Users },
                  { title: "Logements Insalubres", desc: "Remise en état selon les normes sanitaires", icon: Home },
                  { title: "Désinfection Post-Sinistre", desc: "Traitement après inondation ou incendie", icon: Droplets },
                  { title: "Élimination Nuisibles", desc: "Traitement professionnel des infestations", icon: Shield },
                  { title: "Protocoles Sanitaires", desc: "Respect des normes de santé publique", icon: FileText },
                  { title: "Certification", desc: "Attestation de désinfection officielle", icon: CheckCircle }
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
                  Une expertise reconnue et une approche professionnelle pour chaque intervention.
                </p>
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 mt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Société spécialisée dans le nettoyage et débarras professionnel</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-3 rounded-lg bg-background/50">
                      <h4 className="font-semibold text-primary mb-1">Débarras</h4>
                      <p className="text-sm text-muted-foreground">Gros volumes</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <h4 className="font-semibold text-primary mb-1">Après Décès</h4>
                      <p className="text-sm text-muted-foreground">Service respectueux</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <h4 className="font-semibold text-primary mb-1">Désinfection</h4>
                      <p className="text-sm text-muted-foreground">Insalubrité</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <h4 className="font-semibold text-primary mb-1">Partenariat</h4>
                      <p className="text-sm text-muted-foreground">Maisons de retraite</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Formation Certifiée", desc: "Équipe formée aux protocoles de désinfection et aux normes sanitaires" },
                  { title: "Produits Certifiés", desc: "Utilisation exclusive de produits désinfectants homologués et efficaces" },
                  { title: "Intervention Rapide", desc: "Disponibilité 7j/7, intervention sous 24h en cas d'urgence sanitaire" },
                  { title: "Conformité Réglementaire", desc: "Respect total des normes de santé publique et des réglementations" }
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

        {/* Liens utiles */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Ressources et Informations
                </h2>
                <p className="text-lg text-muted-foreground">
                  Liens utiles pour comprendre nos services et les réglementations en vigueur.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Home className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Nos Services</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Découvrez nos autres services spécialisés
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/debarras-gros-volumes'}
                    >
                      Débarras Gros Volumes
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Information Santé</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Guide professionnel de désinfection des surfaces
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://www.tousergo.com/blog/comment-desinfecter-surfaces/', '_blank')}
                    >
                      Guide Désinfection
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Réglementation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Informations officielles sur l'insalubrité
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://www.service-public.fr/particuliers/vosdroits/F16158', '_blank')}
                    >
                      Service Public
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Zone d'Intervention - Sud de la France
                </h2>
                <p className="text-lg text-muted-foreground">
                  Nous intervenons dans les départements du Sud de la France avec la même qualité de service.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {["Hérault", "Aveyron", "Gard", "Bouches-du-Rhône"].map((department, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground p-3 rounded-lg hover:bg-card/50 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{department}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 shadow-xl">
                <CardContent className="p-8">
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Intervention d'Urgence</h3>
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

export default DesinfectionInsalubrite;
