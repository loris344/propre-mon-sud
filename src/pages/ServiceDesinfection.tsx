import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "../components/SEOHead";
import { useSEO } from "../hooks/useSEO";
import { 
  Shield, 
  Zap, 
  Droplets, 
  Clock,
  CheckCircle,
  Phone,
  MapPin,
  AlertTriangle
} from "lucide-react";

const ServiceDesinfection = () => {
  const seoConfig = useSEO();
  return (
    <>
      <SEOHead {...seoConfig} />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Désinfection & Insalubrité
              <span className="block text-primary">Montpellier</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Traitement des environnements insalubres avec des produits professionnels et techniques adaptées. 
              Intervention spécialisée pour restaurer un environnement sain et sécurisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Intervention Urgente - 07 67 13 54 58
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types de désinfection */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Types d'Interventions de Désinfection
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Des solutions professionnelles pour tous types de désinfection et traitement d'insalubrité.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">Désinfection Virale</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>COVID-19 et variants</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Grippe et virus saisonniers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Norovirus et gastro-entérites</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Prévention épidémies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">Désinfection Bactérienne</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Staphylocoques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>E.coli et salmonelles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Legionella</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Bactéries résistantes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">Insalubrité & Nuisances</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Punaises de lit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Cafards et blattes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Rats et souris</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Moisissures et champignons</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques utilisées */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Techniques et Produits Professionnels
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Nébulisation</h3>
                    <p className="text-muted-foreground text-sm">
                      Pulvérisation fine pour atteindre tous les recoins et surfaces difficiles d'accès
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Produits Certifiés</h3>
                    <p className="text-muted-foreground text-sm">
                      Utilisation exclusive de désinfectants certifiés NF EN 14476 et homologués par l'ANSM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Protocole Sécurisé</h3>
                    <p className="text-muted-foreground text-sm">
                      Équipement de protection individuel et protocoles stricts pour la sécurité de tous
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Temps d'Action</h3>
                    <p className="text-muted-foreground text-sm">
                      Produits à action rapide et rémanence longue pour une protection durable
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Zones Ciblées</h3>
                    <p className="text-muted-foreground text-sm">
                      Traitement spécifique selon les zones : cuisine, salle de bain, espaces communs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contrôle Qualité</h3>
                    <p className="text-muted-foreground text-sm">
                      Tests de surface post-traitement pour valider l'efficacité de la désinfection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'intervention */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Déroulement de l'Intervention
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Diagnostic Initial</h3>
                  <p className="text-muted-foreground">
                    Évaluation de la situation, identification des risques et établissement 
                    du protocole de traitement adapté à votre environnement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Préparation</h3>
                  <p className="text-muted-foreground">
                    Mise en sécurité des lieux, protection des biens sensibles et 
                    préparation des produits de désinfection selon le protocole établi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Traitement</h3>
                  <p className="text-muted-foreground">
                    Application des produits de désinfection selon les techniques professionnelles. 
                    Respect des temps de contact et des concentrations optimales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Contrôle & Suivi</h3>
                  <p className="text-muted-foreground">
                    Vérification de l'efficacité du traitement, remise en état des lieux et 
                    conseils pour maintenir un environnement sain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgences */}
      <section className="py-16 bg-gradient-to-br from-destructive/5 to-destructive/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Intervention d'Urgence 24h/24
            </h2>
            
            <Card className="bg-gradient-to-br from-destructive to-destructive/90 text-destructive-foreground border-0">
              <CardContent className="p-8">
                <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Désinfection d'Urgence</h3>
                <p className="text-lg mb-6 opacity-90">
                  En cas de contamination virale, bactérienne ou infestation, 
                  nous intervenons sous 4 heures dans tout le Sud de la France.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" className="text-lg px-8">
                    <Phone className="w-5 h-5" />
                    07 67 13 54 58
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive">
                    <Clock className="w-5 h-5" />
                    Urgence 24h/24
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ServiceDesinfection;
