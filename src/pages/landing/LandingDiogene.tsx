import { Phone, Mail, CheckCircle, Shield, Heart, Clock, ArrowRight, Star } from "lucide-react";
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
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Intervention discrète & respectueuse
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Nettoyage <span className="text-primary">Syndrome de Diogène</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Intervention spécialisée dans les situations d'accumulation compulsive avec respect et discrétion totale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
                  Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a href="tel:+33605310199">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    06 05 31 01 99
                  </Button>
                </a>
              </div>
              <div className="flex items-center justify-center gap-1 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">4.9/5 — Avis vérifiés</span>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
              Pourquoi nous choisir ?
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Phone, title: "Évaluation gratuite", desc: "Évaluation gratuite par téléphone pour estimer vos besoins et vous proposer un plan adapté." },
                { icon: Heart, title: "Respect de la dignité", desc: "Notre équipe est formée pour intervenir avec empathie, respect et sans jugement." },
                { icon: CheckCircle, title: "Plan personnalisé", desc: "Chaque situation est unique. Nous établissons un plan d'intervention sur mesure." },
              ].map((item, i) => (
                <Card key={i} className="p-6 text-center space-y-4 border-border/50">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
              Notre processus en 4 étapes
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Appel gratuit", desc: "Évaluation de votre situation par téléphone" },
                { step: "2", title: "Visite & devis", desc: "Déplacement gratuit et devis détaillé" },
                { step: "3", title: "Intervention", desc: "Nettoyage complet par notre équipe formée" },
                { step: "4", title: "Suivi", desc: "Vérification et garantie de satisfaction" },
              ].map((item, i) => (
                <div key={i} className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Réassurance */}
        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Intervention dans tout le Sud de la France
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Montpellier", "Marseille", "Nîmes", "Béziers", "Sète", "Perpignan", "Aix-en-Provence", "Toulon"].map(city => (
                <span key={city} className="bg-card border border-border/50 px-4 py-2 rounded-full text-sm text-foreground font-medium">
                  {city}
                </span>
              ))}
            </div>
            <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* Contact */}
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default LandingDiogene;
