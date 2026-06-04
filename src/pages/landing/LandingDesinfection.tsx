import { Phone, ShieldCheck, Bug, CheckCircle, ArrowRight, Star, Clock, Sparkles, AlertTriangle, Droplets, Camera, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LandingReviews from "@/components/LandingReviews";
import LandingFAQ from "@/components/LandingFAQ";

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
        <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 text-foreground px-5 py-2.5 rounded-full text-sm font-medium mb-6">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  Urgence insalubrité · Intervention rapide
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                  Logement insalubre ?<br />
                  <span className="text-primary">On assainit tout.</span>
                </h1>
                
                <p className="text-lg text-muted-foreground mt-5 leading-relaxed">
                  Désinfection professionnelle, traitement anti-nuisibles et remise en état complète 
                  des logements contaminés. Intervention discrète dans tout le Sud de la France.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6 shadow-lg">
                    Devis Gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <a href="tel:+33767135458" onClick={() => gtag_report_conversion()}>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full border-2">
                      <Phone className="w-5 h-5 mr-2" />
                      07 67 13 54 58
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 font-medium">4.7/5</span>
                  </div>
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Produits pro homologués</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 7j/7</span>
                </div>

                <div className="flex items-center gap-4 mt-3">
                  <span className="text-sm sm:text-base text-muted-foreground font-medium">
                    En collaboration avec l'ARS
                  </span>
                  <div className="flex items-center gap-3">
                    <img src="/logos/RF.webp" alt="République Française" className="h-12 sm:h-16 w-auto object-contain" width={128} height={116} loading="lazy" />
                    <img src="/logos/ARS.webp" alt="Agence Régionale de Santé" className="h-12 sm:h-16 w-auto object-contain" width={128} height={74} loading="lazy" />
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                  <img src="/images/examples/insalubrite1.webp" alt="Cuisine insalubre avant intervention" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-xs font-medium text-white">Cuisine</span>
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group mt-6">
                  <img src="/images/examples/insalubrite2.webp" alt="Logement insalubre avant nettoyage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-xs font-medium text-white">Salon</span>
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                  <img src="/images/examples/insalubrite3.webp" alt="Remise en état après désinfection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-xs font-medium text-white">Après</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Simple, rapide et sans engagement.
            </p>
            
            <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Contactez-nous", desc: "Par téléphone ou mail, décrivez la situation. On vous écoute et on vous conseille." },
                { step: "2", title: "Quelques infos & photos", desc: "Envoyez-nous quelques photos et décrivez la situation. On établit un devis précis." },
                { step: "3", title: "On intervient", desc: "Désinfection, traitement, remise en état. Votre logement retrouve un environnement sain." },
              ].map((item, i) => (
                <Card key={i} className="p-6 sm:p-8 border-border/50 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4">
              Nos solutions d'assainissement
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Des techniques adaptées à chaque type de contamination.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Sparkles, title: "Désinfection totale", desc: "Élimination des bactéries et virus avec des produits professionnels homologués. Nébulisation et pulvérisation." },
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

        {/* Photo équipe */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Une équipe dédiée à votre projet
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Chaque intervention est réalisée par des professionnels formés, en tenue de protection, 
                  avec du matériel adapté à chaque situation.
                </p>
                <div className="space-y-3">
                  {[
                    "Logement insalubre ou contaminé",
                    "Syndrome de Diogène",
                    "Infestation de nuisibles persistante",
                    "Après un sinistre (incendie, inondation)",
                    "Logement vacant à remettre en location",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <img 
                  src="/images/team/equipe-intervention.webp" 
                  alt="Équipe en tenue de protection lors d'une désinfection" 
                  className="rounded-2xl object-cover w-full h-52 sm:h-72 shadow-lg"
                  loading="lazy"
                />
                <img 
                  src="/images/logos/p1.webp" 
                  alt="L'équipe SOS Nettoyage Diogène" 
                  className="rounded-2xl object-cover w-full h-52 sm:h-72 shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Avis clients */}
        <LandingReviews serviceKey="desinfection" />

        {/* Urgence */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 sm:p-10 bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20 text-center">
                <AlertTriangle className="w-10 h-10 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Situation urgente ?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  En cas de risque sanitaire immédiat, une intervention en urgence 7j/7 est possible. 
                  Appelez-nous directement.
                </p>
                <a href="tel:+33767135458" onClick={() => gtag_report_conversion()}>
                  <Button variant="hero" size="lg" className="text-lg py-6 px-8">
                    <Phone className="w-5 h-5 mr-2" />
                    07 67 13 54 58
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <LandingFAQ
          items={[
            { question: "Qu'est-ce qu'un logement insalubre ?", answer: "C'est un logement présentant des risques sanitaires : accumulation de déchets, infestations, moisissures, odeurs persistantes. On intervient pour le remettre en état." },
            { question: "Quels produits utilisez-vous ?", answer: "Des produits professionnels homologués, adaptés à chaque type de contamination. On respecte les dosages et les temps de sécurité." },
            { question: "Combien de temps faut-il attendre avant de réoccuper le logement ?", answer: "Ça dépend du traitement. Pour une désinfection standard, quelques heures d'aération suffisent. On vous précise les délais sur place." },
            { question: "Traitez-vous aussi les nuisibles ?", answer: "Oui. Cafards, punaises de lit, rongeurs, mites. On fait un diagnostic puis un traitement ciblé pour une élimination durable." },
            { question: "Intervenez-vous en urgence ?", answer: "Oui, 7j/7. En cas de risque sanitaire immédiat, appelez-nous directement au 07 67 13 54 58." },
            { question: "Comment obtenir un devis ?", answer: "Envoyez-nous quelques photos et décrivez la situation par téléphone ou mail. On vous répond avec un devis gratuit et sans engagement." },
          ]}
        />

        {/* CTA final */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ne laissez pas l'insalubrité s'aggraver
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
              Envoyez-nous quelques photos par mail ou téléphone, on vous répond avec un devis gratuit.
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