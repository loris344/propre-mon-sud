import { Phone, Shield, Heart, CheckCircle, ArrowRight, Star, Clock, Eye, Award, Users, MapPin, Camera, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const LandingDiogene = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Nettoyage Syndrome de Diogène | Devis Gratuit 7j/7"
        description="Intervention spécialisée syndrome de Diogène. Équipe formée, discrétion totale, devis gratuit. Montpellier, Marseille et Sud de la France."
        canonical="/landing/nettoyage-syndrome-diogene"
        noIndex={true}
      />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-foreground px-5 py-2.5 rounded-full text-sm font-medium mb-6">
                  <Shield className="w-4 h-4 text-accent" />
                  Intervention discrète — Sans jugement
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                  Vous vivez une situation de{" "}
                  <span className="text-primary">syndrome de Diogène</span> ?
                </h1>
                
                <p className="text-lg text-muted-foreground mt-5 leading-relaxed">
                  Que vous soyez directement concerné, un proche, un mandataire ou un notaire — 
                  nous intervenons avec humanité, discrétion et professionnalisme pour retrouver un logement sain.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6 shadow-lg">
                    Obtenir un Devis Gratuit
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
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Sud de la France</span>
                </div>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-3">
                <img src="/images/examples/cl1.jpg" alt="Nettoyage syndrome de Diogène - avant intervention" className="rounded-xl object-cover w-full h-48 sm:h-56" loading="lazy" />
                <img src="/images/examples/cl2.webp" alt="Nettoyage syndrome de Diogène - résultat" className="rounded-xl object-cover w-full h-48 sm:h-56" loading="lazy" />
                <img src="/images/examples/cl3.jpg" alt="Intervention Diogène - débarras complet" className="rounded-xl object-cover w-full h-48 sm:h-56 col-span-2" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Comprendre la situation */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Vous n'êtes pas seul face à cette situation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Le syndrome de Diogène touche des milliers de personnes. Que vous soyez vous-même concerné 
                ou que vous accompagniez un proche, nous comprenons la complexité de ces situations.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Heart, title: "Approche bienveillante", desc: "Notre équipe est formée pour intervenir avec empathie. Nous respectons la personne concernée et son histoire, sans jamais porter de jugement." },
                { icon: Eye, title: "Discrétion totale", desc: "Véhicules banalisés, intervention confidentielle, respect du voisinage. Personne ne saura pourquoi nous sommes là." },
                { icon: Award, title: "Expertise reconnue", desc: "Nous savons gérer les cas les plus complexes avec méthode et professionnalisme. Chaque intervention est unique." },
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

        {/* Comment ça se passe */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4">
              Comment se déroule l'intervention ?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Un processus simple et rapide, sans déplacement inutile pour l'évaluation.
            </p>
            
            <div className="max-w-4xl mx-auto">
              {[
                { step: "01", title: "Échange téléphonique ou par mail", desc: "Vous nous décrivez la situation librement. On écoute, on comprend, sans engagement.", icon: MessageCircle },
                { step: "02", title: "Envoyez-nous quelques photos", desc: "Pas besoin de se déplacer pour évaluer. Quelques photos du logement nous suffisent pour établir un devis précis.", icon: Camera },
                { step: "03", title: "Devis gratuit & intervention sur-mesure", desc: "On vous envoie un devis clair et détaillé. Puis notre équipe intervient : tri, nettoyage, désinfection, évacuation.", icon: CheckCircle },
                { step: "04", title: "Remise en état & suivi", desc: "Le logement est rendu propre et habitable. Nous assurons un suivi de satisfaction.", icon: Award },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 sm:gap-8 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo équipe + réassurance */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10 items-center">
              <img 
                src="/images/team/equipe-intervention.jpeg" 
                alt="Notre équipe en tenue lors d'une intervention" 
                className="rounded-2xl object-cover w-full h-72 sm:h-96 shadow-lg"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Une vraie équipe, sur le terrain
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nous ne sommes pas un call center. Derrière SOS Nettoyage Diogène, il y a une équipe 
                  de terrain qui intervient en tenue professionnelle, avec le matériel adapté à chaque situation.
                </p>
                <div className="space-y-3">
                  {[
                    "Équipe formée aux situations sensibles",
                    "Matériel professionnel & tenues de protection",
                    "Intervention discrète et respectueuse",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
              Nous accompagnons
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Personnes directement concernées",
                "Familles et proches aidants",
                "Mandataires judiciaires (MJPM)",
                "Notaires & études notariales",
                "Bailleurs sociaux et privés",
                "Agences immobilières",
                "Services sociaux et ARS",
                "Syndics de copropriété",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 sm:p-5 bg-card rounded-xl border border-border/50">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zone + CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Intervention dans tout le Sud de la France
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-2xl mx-auto">
              {["Montpellier", "Marseille", "Nîmes", "Béziers", "Sète", "Perpignan", "Aix-en-Provence", "Toulon", "Toulouse", "Bordeaux"].map(city => (
                <span key={city} className="bg-background border border-border/50 px-4 py-2 rounded-full text-sm text-foreground font-medium shadow-sm">
                  {city}
                </span>
              ))}
            </div>
            <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-10 py-6 shadow-lg">
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default LandingDiogene;