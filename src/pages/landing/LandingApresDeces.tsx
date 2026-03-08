import { Phone, Heart, CheckCircle, ArrowRight, Star, Clock, Eye, Shield, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const LandingApresDeces = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Nettoyage Après Décès | Service Discret 7j/7"
        description="Service spécialisé de nettoyage après décès. Intervention respectueuse, discrète et professionnelle. Devis gratuit dans le Sud de la France."
        canonical="/landing/nettoyage-apres-deces"
        noIndex={true}
      />
      <main className="min-h-screen">
        {/* Hero — Ton empathique */}
        <section className="relative overflow-hidden pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/4" />
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary text-foreground px-5 py-2.5 rounded-full text-sm font-medium">
                  <Heart className="w-4 h-4 text-primary" />
                  Service bienveillant & confidentiel
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] text-center">
                Nous prenons en charge le{" "}
                <span className="text-primary">nettoyage après décès</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-center mt-6 leading-relaxed">
                Dans ces moments difficiles, vous ne devriez pas avoir à gérer ça seul. 
                Notre équipe intervient avec humanité, discrétion et professionnalisme.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6 shadow-lg">
                  Nous Contacter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a href="tel:+33605310199">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full border-2">
                    <Phone className="w-5 h-5 mr-2" />
                    06 05 31 01 99
                  </Button>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1 font-medium">4.9/5</span>
                </div>
                <span className="hidden sm:block text-border">|</span>
                <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" /> Discrétion absolue</span>
                <span className="hidden sm:block text-border">|</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Intervention 7j/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Une épreuve que personne ne devrait affronter seul
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Perdre un proche est déjà suffisamment douloureux. Nous sommes là pour vous soulager 
                de la partie matérielle, avec tout le respect que la situation exige.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Heart, title: "Humanité avant tout", desc: "Notre équipe est spécialement formée à ces situations sensibles. Nous intervenons avec empathie, patience et sans jamais brusquer." },
                { icon: Eye, title: "Discrétion absolue", desc: "Véhicules banalisés, pas de marquage visible. Le voisinage n'a pas à savoir. Votre vie privée est notre priorité." },
                { icon: Shield, title: "Prise en charge totale", desc: "Bio-nettoyage, désinfection, désodorisation, évacuation. Vous n'avez rien à faire, on gère tout de A à Z." },
              ].map((item, i) => (
                <Card key={i} className="p-6 sm:p-8 border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ce qu'on fait */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Ce que comprend notre intervention
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Chaque situation est unique. Nous adaptons notre intervention à vos besoins 
                  et à l'état du logement.
                </p>
                <div className="space-y-3">
                  {[
                    "Bio-nettoyage complet certifié",
                    "Désinfection & désodorisation",
                    "Traitement des fluides corporels",
                    "Évacuation des déchets spéciaux",
                    "Tri respectueux des effets personnels",
                    "Remise en état des sols et murs",
                    "Traitement anti-nuisibles si nécessaire",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Qui nous contacte */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-2">Qui fait appel à nous ?</h3>
                {[
                  { icon: Users, title: "Familles endeuillées", desc: "Nous vous épargnons cette étape douloureuse." },
                  { icon: Shield, title: "Notaires & mandataires", desc: "Remise en état avant succession ou revente." },
                  { icon: MapPin, title: "Bailleurs & agences", desc: "Logement prêt à relouer rapidement." },
                ].map((item, i) => (
                  <Card key={i} className="p-5 border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final — ton doux */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary/10 to-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <Heart className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Nous sommes là pour vous accompagner
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg leading-relaxed">
              Prenez le temps qu'il vous faut. Quand vous serez prêt, nous serons là. 
              Premier échange confidentiel et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-10 py-6 shadow-lg">
                Nous Contacter en Toute Discrétion
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a href="tel:+33605310199">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full border-2">
                  <Phone className="w-5 h-5 mr-2" />
                  06 05 31 01 99
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default LandingApresDeces;
