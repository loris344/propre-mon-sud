import { Phone, ShieldCheck, Bug, CheckCircle, ArrowRight, Star, Clock, Sparkles, AlertTriangle, Droplets } from "lucide-react";
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
        <section className="relative overflow-hidden pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 text-foreground px-5 py-2.5 rounded-full text-sm font-medium">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  Urgence insalubrité — Intervention rapide
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] text-center">
                Logement insalubre ?<br />
                <span className="text-primary">On assainit tout.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-center mt-6 leading-relaxed">
                Désinfection professionnelle, traitement anti-nuisibles et remise en état complète 
                des logements contaminés. Protocoles certifiés, résultats garantis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6 shadow-lg">
                  Devis Gratuit Urgent
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
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Protocoles certifiés</span>
                <span className="hidden sm:block text-border">|</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 7j/7 — Urgences</span>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4">
              Nos solutions d'assainissement
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Des protocoles adaptés à chaque type de contamination pour retrouver un environnement sain.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Sparkles, title: "Désinfection totale", desc: "Élimination de 99,9% des bactéries et virus. Produits professionnels homologués, techniques de nébulisation et pulvérisation." },
                { icon: Bug, title: "Traitement anti-nuisibles", desc: "Cafards, punaises de lit, rongeurs, mites. Diagnostic précis et traitement ciblé pour une élimination durable." },
                { icon: Droplets, title: "Remise en état complète", desc: "Nettoyage en profondeur, désodorisation, traitement des surfaces. Le logement retrouve un état habitable." },
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

        {/* Situations d'urgence */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Quand faut-il intervenir ?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  L'insalubrité représente un risque sanitaire grave. Plus l'intervention est rapide, 
                  plus les dégâts sont limités et les coûts maîtrisés.
                </p>
                <div className="space-y-3">
                  {[
                    "Logement insalubre ou contaminé",
                    "Syndrome de Diogène — accumulation",
                    "Infestation de nuisibles persistante",
                    "Après un sinistre (incendie, inondation)",
                    "Logement vacant à remettre en location",
                    "Locaux professionnels contaminés",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Urgence card */}
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
                <AlertTriangle className="w-10 h-10 text-destructive mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Situation urgente ?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  En cas de risque sanitaire immédiat, nous intervenons en urgence 7j/7. 
                  Appelez-nous directement pour une prise en charge rapide.
                </p>
                <a href="tel:+33605310199">
                  <Button variant="hero" size="lg" className="w-full text-lg py-6">
                    <Phone className="w-5 h-5 mr-2" />
                    06 05 31 01 99
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </section>

        {/* Garanties */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
              Nos garanties
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "99,9%", label: "Bactéries éliminées" },
                { value: "7j/7", label: "Disponibilité" },
                { value: "100%", label: "Confidentiel" },
                { value: "0€", label: "Devis gratuit" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-5 bg-background rounded-xl border border-border/50">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ne laissez pas l'insalubrité s'aggraver
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
              Chaque jour compte. Contactez-nous pour une intervention rapide et efficace.
            </p>
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

export default LandingDesinfection;
