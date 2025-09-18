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
  Users, 
  Clock,
  CheckCircle,
  Phone,
  MapPin,
  Star,
  Home
} from "lucide-react";

const ServiceDiogene = () => {
  const seoConfig = useSEO();
  const location = useLocation();
  
  // Extraire le nom de la ville depuis l'URL
  const getCityName = () => {
    if (location.pathname.includes('montpellier')) return 'Montpellier';
    if (location.pathname.includes('sete')) return 'Sète';
    if (location.pathname.includes('beziers')) return 'Béziers';
    if (location.pathname.includes('nimes')) return 'Nîmes';
    if (location.pathname.includes('perpignan')) return 'Perpignan';
    return 'Montpellier';
  };
  
     // Images par ville
     const getCityImages = () => {
       if (location.pathname.includes('montpellier')) {
         return {
           hero: 'https://images.unsplash.com/photo-1613283850334-9219c5fb7143?w=1200&h=630&fit=crop&crop=center',
           gallery: [
             'https://images.unsplash.com/photo-1613283850334-9219c5fb7143?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D',
             'https://images.unsplash.com/photo-1608728212004-04441ea6e3cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D',
             'https://images.unsplash.com/photo-1690132007585-1ef4b16f49d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D',
             'https://images.unsplash.com/photo-1666886677737-2cd1f108e080?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D'
           ]
         };
       }
       if (location.pathname.includes('sete')) {
         return {
           hero: 'https://images.unsplash.com/photo-1646676125144-cad4fcea488c?w=1200&h=630&fit=crop&crop=center',
           gallery: [
             'https://images.unsplash.com/photo-1646676125144-cad4fcea488c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UyVDMyVBOHRlfGVufDB8fDB8fHww',
             'https://images.unsplash.com/photo-1683791886181-68f3a1d1a7c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFMlQzMlQTh0ZXxlbnwwfHwwfHx8MA%3D%3D',
             'https://images.unsplash.com/photo-1683791885269-6c1a78ae97fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UyVDMyVBOHRlfGVufDB8fDB8fHww',
             'https://images.unsplash.com/photo-1541493304174-39545bc85815?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
           ]
         };
       }
       if (location.pathname.includes('beziers')) {
         return {
           hero: 'https://images.unsplash.com/photo-1723911490474-f9d1ce7a057a?w=1200&h=630&fit=crop&crop=center',
           gallery: [
             'https://images.unsplash.com/photo-1723911490474-f9d1ce7a057a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YiVDMyVBOXppZXJzfGVufDB8fDB8fHww',
             'https://images.unsplash.com/photo-1596812069451-ccca1e62b66d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YiVDMyVBOXppZXJzfGVufDB8fDB8fHww',
             'https://images.unsplash.com/photo-1723911489123-64c6490e7818?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGIlQzMlQTl6aWVyc3xlbnwwfHwwfHx8MA%3D%3D',
             'https://images.unsplash.com/photo-1709483068799-a5b790cc5dc8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGIlQzMlQTl6aWVyc3xlbnwwfHwwfHx8MA%3D%3D'
           ]
         };
       }
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
       if (location.pathname.includes('perpignan')) {
         return {
           hero: 'https://images.unsplash.com/photo-1722605266573-e981c2ffed30?w=1200&h=630&fit=crop&crop=center',
           gallery: [
             'https://images.unsplash.com/photo-1722605266573-e981c2ffed30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVycGlnbmFufGVufDB8fDB8fHww',
             'https://images.unsplash.com/photo-1722605267546-22242cd6ed4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVycGlnbmFufGVufDB8fDB8fHww',
             'https://images.unsplash.com/photo-1722605268092-462b90839596?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVycGlnbmFufGVufDB8fDB8fHww',
             'https://images.unsplash.com/photo-1722605267383-812e07e593a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnBpZ25hbnxlbnwwfHwwfHx8MA%3D%3D'
           ]
         };
       }
       // Par défaut Montpellier
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
              Nettoyage Syndrome de Diogène
              <span className="block text-primary">{cityName}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Intervention spécialisée et respectueuse pour les situations d'accumulation compulsive. 
              Notre équipe formée intervient avec discrétion et bienveillance à {cityName} et sa région.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Devis Gratuit - 07 67 13 54 58
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
                Notre Processus d'Intervention Respectueux
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Une approche professionnelle et humaine pour chaque situation, 
                avec la discrétion et l'expertise que vous méritez.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">1. Évaluation Bienveillante</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Évaluation gratuite et confidentielle par téléphone ou email pour analyser la situation 
                    et établir un plan d'intervention personnalisé.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">2. Intervention Respectueuse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Équipe formée aux techniques spécialisées et à l'accompagnement 
                    psychologique. Tri minutieux et respect des objets personnels.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">3. Suivi et Accompagnement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Nettoyage et désinfection complets. Suivi post-intervention 
                    et conseils pour maintenir un environnement sain.
                  </p>
                </CardContent>
              </Card>
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
                Types d'Interventions Syndrome de Diogène
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Des solutions adaptées à chaque situation, avec l'expertise et la bienveillance nécessaires.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">Intervention Complète</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Évaluation psychologique par téléphone</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Tri respectueux des objets</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Nettoyage en profondeur</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Désinfection complète</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">Accompagnement Familial</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Support psychologique</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Conseils post-intervention</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Suivi personnalisé</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Réseau d'aide</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 sm:col-span-2 lg:col-span-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">Intervention d'Urgence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Dégagement d'urgence</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Évacuation sanitaire</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Intervention 24h/24</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Sécurisation immédiate</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Formation Spécialisée</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Équipe formée aux techniques de nettoyage extrême et à l'accompagnement psychologique
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Discrétion Totale</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Respect absolu de la vie privée et confidentialité garantie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Intervention Rapide</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Disponibilité 7j/7, intervention sous 24h en cas d'urgence
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Équipement Professionnel</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Matériel spécialisé pour le nettoyage et la désinfection des environnements insalubres
                  </p>
                </div>
              </div>
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
                Nos Interventions à {cityName}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Découvrez {cityName} et nos interventions spécialisées dans cette belle ville du Sud de la France.
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
              {['Montpellier', 'Sète', 'Béziers', 'Nîmes', 'Perpignan', 'Toulouse', 'Marseille', 'Nice', 'Bordeaux', 'Aix-en-Provence', 'Toulon', 'Avignon'].map((ville, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground p-2 rounded-lg hover:bg-card/50 transition-colors duration-300">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{ville}</span>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <Phone className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Intervention d'Urgence</h3>
                <p className="text-lg sm:text-xl font-semibold mb-4">07 67 13 54 58</p>
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

export default ServiceDiogene;
