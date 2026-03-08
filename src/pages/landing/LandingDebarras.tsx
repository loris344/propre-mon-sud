import { Phone, Recycle, CheckCircle, ArrowRight, Star, Truck, Clock, Home, Building2, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const LandingDebarras = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Débarras Gros Volumes | Devis Gratuit 7j/7"
        description="Évacuation et tri de tous types d'objets, meubles et déchets. Recyclage maximal, tri sélectif. Devis gratuit dans le Sud de la France."
        canonical="/landing/debarras-gros-volumes"
        noIndex={true}
      />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-foreground px-5 py-2.5 rounded-full text-sm font-medium mb-6">
                  <Truck className="w-4 h-4 text-accent" />
                  Évacuation complète & recyclage
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                  Besoin de{" "}
                  <span className="text-primary">tout évacuer</span> ?
                  <br />On s'occupe de tout.
                </h1>
                
                <p className="text-lg text-muted-foreground mt-5 leading-relaxed">
                  Maison, appartement, cave, grenier, local pro — nous vidons, trions et recyclons 
                  vos encombrants rapidement et dans le respect de l'environnement.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6 shadow-lg">
                    Devis Gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <a href="tel:+33605310199">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full border-2">
                      <Phone className="w-5 h-5 mr-2" />
                      06 05 31 01 99
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-1 font-medium">4.9/5</span>
                  </div>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 7j/7</span>
                  <span className="flex items-center gap-1.5"><Recycle className="w-4 h-4" /> Tri & recyclage</span>
                </div>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-3">
                <img src="/images/examples/nettoyage1.jpg" alt="Débarras gros volumes - évacuation" className="rounded-xl object-cover w-full h-48 sm:h-56" loading="lazy" />
                <img src="/images/examples/nettoyage2.jpg" alt="Débarras - tri et recyclage" className="rounded-xl object-cover w-full h-48 sm:h-56" loading="lazy" />
                <img src="/images/examples/nettoyage3.jpg" alt="Évacuation d'encombrants" className="rounded-xl object-cover w-full h-48 sm:h-56 col-span-2" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Ce qu'on débarrasse */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4">
              On débarrasse tout, partout
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Quel que soit le volume ou le type de bien, notre équipe gère l'intégralité de l'évacuation.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Home, title: "Habitations", desc: "Maisons, appartements, studios. Vidage complet ou partiel après succession, déménagement ou expulsion." },
                { icon: Warehouse, title: "Annexes & stockage", desc: "Caves, greniers, garages, box de stockage. Même les espaces les plus encombrés ne nous font pas peur." },
                { icon: Building2, title: "Locaux professionnels", desc: "Bureaux, commerces, entrepôts. Évacuation de mobilier, archives et équipements en toute discrétion." },
              ].map((item, i) => (
                <Card key={i} className="p-6 sm:p-8 border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement éco */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Un débarras responsable
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous ne jetons pas tout en décharge. Chaque objet est trié : ce qui peut être recyclé, 
                donné ou valorisé l'est systématiquement.
              </p>
              <div className="space-y-3">
                {[
                  "Tri sélectif sur place par notre équipe",
                  "Partenariats avec des filières de recyclage",
                  "Dons aux associations locales quand possible",
                  "Évacuation conforme à la réglementation",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Situations */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
              Dans quelles situations intervient-on ?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Succession & héritage",
                "Déménagement ou expulsion",
                "Fin de bail locatif",
                "Logement insalubre",
                "Décès d'un proche",
                "Liquidation de local pro",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 sm:p-5 bg-background rounded-xl border border-border/50">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Prêt à libérer votre espace ?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
              Devis gratuit et sans engagement. Intervention rapide dans tout le Sud de la France.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-10 py-6 shadow-lg">
                Demander un Devis Gratuit
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

export default LandingDebarras;
