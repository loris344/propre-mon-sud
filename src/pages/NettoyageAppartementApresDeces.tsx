import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import { useSEO } from "../hooks/useSEO";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone,
  ExternalLink,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Heart
} from "lucide-react";

const NettoyageAppartementApresDeces = () => {
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

  const seoConfig = useSEO({
    title: "Nettoyage Appartement Après Décès - Service Professionnel et Discret",
    description: "Service spécialisé de nettoyage d'appartement après décès. Bio-nettoyage, désinfection et remise en état avec protocoles sanitaires stricts. Intervention rapide et discrète dans tout le Sud de la France.",
    keywords: "nettoyage appartement après décès, bio-nettoyage, désinfection après décès, remise en état, protocoles sanitaires, intervention discrète",
    canonical: "https://sosnettoyagediogene.fr/nettoyage-appartement-apres-deces",
    ogTitle: "Nettoyage Appartement Après Décès - Service Professionnel",
    ogDescription: "Service spécialisé de nettoyage d'appartement après décès avec protocoles sanitaires stricts. Intervention discrète et respectueuse dans tout le Sud de la France.",
    ogImage: "https://sosnettoyagediogene.fr/images/examples/décès1.avif"
  });

  return (
    <>
      <SEOHead {...seoConfig} />
      <main role="main">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Nettoyage Appartement Après Décès
                <span className="block text-primary">Service Professionnel et Discret</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Un nettoyage d'appartement après décès n'est pas un simple "ménage renforcé". 
                C'est une opération de <strong className="text-foreground">bio‑nettoyage</strong> qui traite des risques sanitaires réels 
                avec une méthodologie rigoureuse dans tout le Sud de la France.
              </p>
              
              {/* Une seule image dans le hero */}
              <div className="mb-8">
                <img
                  src="/images/examples/décès1.avif"
                  alt="Nettoyage appartement après décès - Intervention professionnelle"
                  className="w-full max-w-2xl mx-auto h-64 object-cover rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-3">Intervention professionnelle et discrète</p>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-6 py-4"
              >
                <Phone className="w-5 h-5" />
                Devis Gratuit - 07 67 13 54 58
              </Button>
            </div>
          </div>
        </section>

        {/* Section Bio-nettoyage */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Bio-Nettoyage Professionnel
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Un nettoyage d'appartement après décès n'est pas un simple "ménage renforcé". 
                  C'est une opération de <strong className="text-foreground">bio‑nettoyage</strong> qui traite des risques sanitaires réels.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Shield className="w-4 h-4 text-primary" />
                        </div>
                        Méthodologie Rigoureuse
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Diagnostic discret et sécurisation des lieux avec EPI et balisage</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Tri conservatoire des effets personnels</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Nettoyage en profondeur des surfaces</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Désinfection avec produits conformes aux normes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Neutralisation des odeurs par procédés techniques</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <img
                    src="/images/examples/décès2.webp"
                    alt="Bio-nettoyage et désinfection après décès"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                          <AlertCircle className="w-4 h-4 text-accent" />
                        </div>
                        Traitement Matériaux Poreux
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Lorsque des matériaux poreux ont été pénétrés (plinthes, sous‑couches de parquet, cloisons), 
                        une dépose localisée ou l'application d'une sous‑couche isolante bloquante peut être nécessaire 
                        pour empêcher les remontées d'odeurs.
                      </p>
                      <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                        <p className="text-sm text-muted-foreground font-medium">
                          <strong>Risques traités :</strong> Fluides biologiques, contamination microbienne, odeurs incrustées
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Informations Pratiques */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Informations Pratiques et Ressources
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Dans cette période difficile, vous pouvez vous appuyer sur des informations pratiques et fiables.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Démarches Administratives</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      En parallèle de notre intervention technique et discrète, vous pouvez vous appuyer sur des informations 
                      pratiques et fiables concernant les démarches à accomplir après un décès.
                    </p>
                    <a 
                      href="https://www.service-public.fr/particuliers/vosdroits/F16507" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Service-Public.fr - "Un proche est décédé"
                    </a>
                    <p className="text-xs text-muted-foreground mt-3">
                      Article vérifié le 02 juillet 2025 par la Direction de l'information légale et administrative
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Accompagnement Humain</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      D'un point de vue humain, il est également utile de disposer de repères sur le deuil et d'un 
                      accompagnement adapté pour mieux comprendre les réactions possibles.
                    </p>
                    <a 
                      href="https://www.vivre-son-deuil.com/aide-au-deuil/deuil-informations-pratiques/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Vivre son Deuil - Informations pratiques
                    </a>
                    <p className="text-xs text-muted-foreground mt-3">
                      Ressources pour identifier des formes d'aide pertinentes
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section Durées d'intervention */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Durées d'Intervention
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Nos interventions s'adaptent à chaque situation pour garantir un résultat optimal.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">T2 Standard (45-60 m²)</h3>
                    </div>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-primary mb-2">1 journée complète</div>
                      <p className="text-muted-foreground leading-relaxed">
                        Protection des parties communes, tri conservatoire (documents, souvenirs), évacuation en flux séparés, 
                        nettoyage méthodique pièce par pièce, désinfection normée puis traitement des odeurs et vérifications finales.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Logement assaini et désinfecté</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Prêt pour réintégration familiale</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Rapport d'intervention fourni</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col justify-center">
                  <img
                    src="/images/examples/décès3.jpg"
                    alt="Remise en état complète après décès"
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                  />
                  <p className="text-center text-sm text-muted-foreground">Remise en état complète</p>
                </div>

                <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/30">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Cas Complexes</h3>
                    </div>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-accent mb-2">2 à 4 jours</div>
                      <p className="text-muted-foreground leading-relaxed">
                        En présence de fluides étendus, d'insalubrité ou d'infestations. 
                        Déposes localisées et phases d'ozonation avec aération contrôlée si nécessaire.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-accent" />
                        <span className="text-muted-foreground">Fluides biologiques étendus</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-accent" />
                        <span className="text-muted-foreground">Matériaux poreux contaminés</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-accent" />
                        <span className="text-muted-foreground">Odeurs incrustées persistantes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section Recommandations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Recommandations Avant Notre Intervention
                </h2>
                <p className="text-xl text-muted-foreground">
                  Quelques conseils importants pour préparer au mieux notre venue.
                </p>
              </div>

              <Card className="shadow-xl border-border/50">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg">Évitez d'aérer longuement</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Si l'odeur est très marquée, vous risqueriez de diffuser les composés volatils dans d'autres pièces 
                          ou vers les communs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg">Ne manipulez pas les zones souillées</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Sans protections adaptées, vous pourriez vous exposer à des risques sanitaires. 
                          Notre équipe procédera à un tri conservatoire respectueux et rigoureux.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg">Mettez de côté les documents importants</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Si vous avez déjà identifié des documents importants, mettez-les simplement de côté. 
                          Notre équipe s'occupera du reste avec le plus grand respect.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section Devis */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <Phone className="w-8 h-8" />
                      <h3 className="text-2xl font-bold">Devis Gratuit et Transparent</h3>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Le devis est transparent et dépend de l'état sanitaire initial, de la surface et de la configuration 
                      (accès, étage, ascenseur), des volumes à évacuer, des besoins techniques (ozone, nébulisation, 
                      éventuelles déposes/reposes) et du niveau d'urgence.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">24-48h</div>
                        <p className="text-primary-foreground/90">Délai de démarrage habituel</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">Gratuit</div>
                        <p className="text-primary-foreground/90">Devis sans frais cachés</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">7j/7</div>
                        <p className="text-primary-foreground/90">Disponibilité</p>
                      </div>
                    </div>
                    <div className="pt-6">
                      <p className="text-primary-foreground/90 mb-4">
                        Après un bref échange et, si possible, quelques photos, nous établissons un chiffrage clair.
                      </p>
                      <Button 
                        variant="secondary" 
                        size="lg" 
                        className="text-lg px-8 py-4"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        07 67 13 54 58
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default NettoyageAppartementApresDeces;
