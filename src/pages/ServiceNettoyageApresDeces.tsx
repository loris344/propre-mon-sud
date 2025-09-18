import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "../components/SEOHead";
import Contact from "../components/Contact";
import CustomerReviews from "../components/CustomerReviews";
import { useSEO } from "../hooks/useSEO";
import { useLocation } from "react-router-dom";
import { 
  Heart, 
  Shield, 
  Clock, 
  Users,
  CheckCircle,
  Phone,
  MapPin,
  AlertTriangle,
  FileText,
  Lock
} from "lucide-react";

const ServiceNettoyageApresDeces = () => {
  const seoConfig = useSEO();
  const location = useLocation();

  // Extraire le nom de la ville depuis l'URL
  const getCityName = () => {
    if (location.pathname.includes('nimes')) return 'Nîmes';
    if (location.pathname.includes('montpellier')) return 'Montpellier';
    return 'Montpellier';
  };

  // Images par ville
  const getCityImages = () => {
    if (location.pathname.includes('nimes')) {
      return {
        hero: 'https://images.unsplash.com/photo-1702174653587-c5e10d5a2aa3?w=1200&h=630&fit=crop&crop=center',
        gallery: [
          'https://images.unsplash.com/photo-1702174653587-c5e10d5a2aa3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmltZXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1729086871923-36fee2e2f9f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmltZXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1706233674922-febe573ad52f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmltZXN8ZW58MHx8MHx8fDA%3D',
          'https://images.unsplash.com/photo-1627376086893-4908c2692389?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmltZXN8ZW58MHx8MHx8fDA%3D'
        ]
      };
    }
    return {
      hero: 'https://images.unsplash.com/photo-1613283850334-9219c5fb7143?w=1200&h=630&fit=crop&crop=center',
      gallery: [
        'https://images.unsplash.com/photo-1613283850334-9219c5fb7143?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1608728212004-04441ea6e3cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1690132007585-1ef4b16f49d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1666886677737-2cd1f108e080?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D'
      ]
    };
  };

  const cityName = getCityName();
  const cityImages = getCityImages();

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
          style={{ backgroundImage: `url(${cityImages.hero})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Nettoyage Après Décès
              <span className="block text-primary">{cityName}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Service spécialisé de nettoyage et remise en état après décès avec respect, discrétion et bienveillance. 
              Intervention professionnelle et humaine à {cityName} et sa région.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Intervention Respectueuse - 07 67 13 54 58
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Message de compassion */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Notre Engagement Humain
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Nous comprenons la difficulté de cette période. Notre équipe intervient avec la plus grande 
              délicatesse, le respect total de votre deuil et la discrétion absolue. Chaque intervention 
              est unique et adaptée à votre situation personnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Types d'interventions */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Types d'Interventions Après Décès
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Des solutions complètes et respectueuses pour chaque situation.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">Nettoyage Sanitaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Désinfection complète</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Traitement des surfaces</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Élimination des odeurs</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Protocoles sanitaires</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">Remise en État</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Nettoyage en profondeur</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Rénovation si nécessaire</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Remise en état complète</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Prêt pour nouvelle occupation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">Discrétion Totale</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Intervention discrète</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Respect de l'intimité</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Confidentialité absolue</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Accompagnement bienveillant</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'intervention */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Notre Processus Respectueux
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Un processus structuré et humain pour chaque intervention après décès.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Écoute et Évaluation</h3>
                  <p className="text-muted-foreground">
                    Premier contact par téléphone avec écoute attentive de votre situation. 
                    Évaluation discrète des besoins et établissement d'un plan d'intervention respectueux.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Intervention Discrète</h3>
                  <p className="text-muted-foreground">
                    Intervention avec la plus grande discrétion, respect de vos émotions et de votre deuil. 
                    Équipe formée à l'accompagnement dans ces moments difficiles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Nettoyage Professionnel</h3>
                  <p className="text-muted-foreground">
                    Nettoyage et désinfection complets selon les protocoles sanitaires les plus stricts. 
                    Remise en état complète du logement dans le respect de vos souhaits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Suivi et Accompagnement</h3>
                  <p className="text-muted-foreground">
                    Suivi post-intervention et accompagnement dans les démarches administratives si nécessaire. 
                    Disponibilité pour toute question ou besoin supplémentaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aspects légaux et administratifs */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Aspects Légaux et Administratifs
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Nous vous accompagnons dans toutes les démarches nécessaires.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Certificats et Attestations</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Fourniture de tous les certificats de désinfection et attestations nécessaires pour les assurances et administrations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Conformité Réglementaire</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Respect de toutes les normes sanitaires et réglementations en vigueur pour ce type d'intervention
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Accompagnement Familial</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Soutien et conseils pour les démarches administratives liées au décès et à la succession
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Intervention Rapide</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Intervention dans les 24-48h selon vos besoins et contraintes personnelles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgences */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-destructive/5 to-destructive/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Intervention d'Urgence 24h/24
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                En cas de situation urgente, nous intervenons rapidement avec respect et discrétion.
              </p>
            </div>
            
            <Card className="bg-gradient-to-br from-destructive to-destructive/90 text-destructive-foreground border-0">
              <CardContent className="p-8">
                <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Nettoyage d'Urgence Après Décès</h3>
                <p className="text-lg mb-6 opacity-90">
                  En cas de décès inattendu ou de situation nécessitant une intervention immédiate, 
                  nous sommes disponibles 24h/24 avec la plus grande discrétion.
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

      {/* Galerie d'images de la ville */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Nos Interventions à {cityName}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Découvrez {cityName} et nos interventions de nettoyage après décès dans cette belle ville du Sud de la France.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {cityImages.gallery.slice(0, 3).map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={image}
                    alt={`${cityName} - Vue ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{cityName}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

export default ServiceNettoyageApresDeces;
