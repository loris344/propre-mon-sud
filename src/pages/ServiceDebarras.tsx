import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "../components/SEOHead";
import { useSEO } from "../hooks/useSEO";
import { 
  Trash2, 
  Recycle, 
  Truck, 
  Clock,
  CheckCircle,
  Phone,
  MapPin,
  Leaf
} from "lucide-react";

const ServiceDebarras = () => {
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
              Débarras Gros Volumes
              <span className="block text-primary">Montpellier</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Évacuation et tri de tous types d'objets, meubles et déchets en respectant l'environnement. 
              Service professionnel pour particuliers et professionnels dans tout le Sud de la France.
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

      {/* Types de débarras */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Types de Débarras Réalisés
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Trash2 className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Débarras Particuliers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Greniers et caves</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Garages encombrés</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Déménagements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Successions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">Débarras Professionnels</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Bureaux et locaux</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Entrepôts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Restaurants</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Commerces</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Recycle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Tri et Recyclage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Tri sélectif</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Recyclage maximal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Don d'objets réutilisables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Évacuation éco-responsable</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Notre Processus de Débarras
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Évaluation Gratuite</h3>
                  <p className="text-muted-foreground">
                    Visite sur site pour évaluer le volume et le type d'objets à évacuer. 
                    Devis détaillé et personnalisé selon vos besoins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Tri et Sélection</h3>
                  <p className="text-muted-foreground">
                    Tri minutieux des objets : réutilisables, recyclables, déchets. 
                    Respect de vos choix et conseils pour optimiser la valorisation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Évacuation Complète</h3>
                  <p className="text-muted-foreground">
                    Évacuation avec matériel adapté. Respect de l'environnement et 
                    traçabilité complète des déchets selon la réglementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages écologiques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Notre Engagement Écologique
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Leaf className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Recyclage Maximisé</h3>
                  <p className="text-muted-foreground text-sm">
                    Plus de 80% des objets sont recyclés, réutilisés ou donnés à des associations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Leaf className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Transport Optimisé</h3>
                  <p className="text-muted-foreground text-sm">
                    Planification des trajets pour minimiser l'impact carbone
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Leaf className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Partenaires Éco-responsables</h3>
                  <p className="text-muted-foreground text-sm">
                    Collaboration avec des centres de tri et associations locales
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Leaf className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Traçabilité Complète</h3>
                  <p className="text-muted-foreground text-sm">
                    Attestation de destruction et certificats de recyclage fournis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un Débarras à Montpellier ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Devis gratuit et intervention rapide dans l'Hérault
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8">
            <Phone className="w-5 h-5" />
            07 67 13 54 58
          </Button>
        </div>
      </section>
      </div>
    </>
  );
};

export default ServiceDebarras;
