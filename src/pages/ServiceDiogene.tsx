import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "../components/SEOHead";
import { useSEO } from "../hooks/useSEO";
import { 
  Heart, 
  Shield, 
  Users, 
  Clock,
  CheckCircle,
  Phone,
  MapPin,
  Star
} from "lucide-react";

const ServiceDiogene = () => {
  const seoConfig = useSEO();
  return (
    <>
      <SEOHead {...seoConfig} />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Nettoyage Syndrome de Diogène
              <span className="block text-primary">Montpellier</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Intervention spécialisée et respectueuse pour les situations d'accumulation compulsive. 
              Notre équipe formée intervient avec discrétion et bienveillance à Montpellier et sa région.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5" />
                Devis Gratuit - 07 67 13 54 58
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'intervention */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Notre Processus d'Intervention Respectueux
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">1. Évaluation Bienveillante</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Visite gratuite et confidentielle pour évaluer la situation 
                    et établir un plan d'intervention personnalisé.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">2. Intervention Respectueuse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Équipe formée aux techniques spécialisées et à l'accompagnement 
                    psychologique. Tri minutieux et respect des objets personnels.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">3. Suivi et Accompagnement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nettoyage et désinfection complets. Suivi post-intervention 
                    et conseils pour maintenir un environnement sain.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages spécifiques */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Pourquoi Choisir Notre Expertise ?
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Formation Spécialisée</h3>
                  <p className="text-muted-foreground text-sm">
                    Équipe formée aux techniques de nettoyage extrême et à l'accompagnement psychologique
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Discrétion Totale</h3>
                  <p className="text-muted-foreground text-sm">
                    Respect absolu de la vie privée et confidentialité garantie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Intervention Rapide</h3>
                  <p className="text-muted-foreground text-sm">
                    Disponibilité 7j/7, intervention sous 24h en cas d'urgence
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Équipement Professionnel</h3>
                  <p className="text-muted-foreground text-sm">
                    Matériel spécialisé pour le nettoyage et la désinfection des environnements insalubres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Zone d'Intervention - Sud de la France
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {['Montpellier', 'Sète', 'Béziers', 'Nîmes', 'Perpignan', 'Toulouse', 'Marseille', 'Nice', 'Bordeaux', 'Aix-en-Provence', 'Toulon', 'Avignon'].map((ville, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{ville}</span>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0">
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
      </div>
    </>
  );
};

export default ServiceDiogene;
