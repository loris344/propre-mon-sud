import { Phone, ShieldCheck, Bug, CheckCircle, ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const LandingDesinfection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Désinfection & Insalubrité | Devis Gratuit 7j/7"
        description="Traitement professionnel des environnements insalubres. Désinfection totale, traitement anti-nuisibles, remise en état. Sud de la France."
        canonical="/landing/desinfection-insalubrite"
        noIndex={true}
      />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                Protocoles certifiés
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Désinfection & <span className="text-primary">Insalubrité</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Traitement des environnements insalubres avec des produits professionnels et techniques adaptées.
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

        {/* Services */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
              Nos solutions de désinfection
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Sparkles, title: "Désinfection totale", desc: "Élimination de 99,9% des bactéries et virus avec des produits homologués." },
                { icon: Bug, title: "Traitement anti-nuisibles", desc: "Élimination de tous types de nuisibles : cafards, punaises, rongeurs." },
                { icon: CheckCircle, title: "Remise en état", desc: "Nettoyage en profondeur et remise en état complète du logement." },
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

        {/* Situations */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
              Situations d'intervention
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                "Logements insalubres",
                "Syndrome de Diogène",
                "Infestations de nuisibles",
                "Après sinistre (incendie, inondation)",
                "Logements vacants à remettre en état",
                "Locaux professionnels contaminés",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Urgence insalubrité ? Nous intervenons 7j/7
            </h2>
            <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
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

export default LandingDesinfection;
