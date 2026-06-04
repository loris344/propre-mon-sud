import { Phone, ShieldCheck, Bug, CheckCircle, ArrowRight, Star, Clock, Wind, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LandingReviews from "@/components/LandingReviews";
import LandingFAQ from "@/components/LandingFAQ";

const LandingOdeursNuisibles = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Traitement des Odeurs & Nuisibles | Intervention 7j/7"
        description="Traitement des mauvaises odeurs et des nuisibles (cafards, punaises, rongeurs, mites). Intervention professionnelle dans le Sud de la France. Devis gratuit."
        canonical="/landing/traitement-odeurs-nuisibles"
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
                  Odeurs persistantes · Nuisibles · Intervention rapide
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                  Mauvaises odeurs ou nuisibles ?<br />
                  <span className="text-primary">On s'en occupe.</span>
                </h1>

                <p className="text-lg text-muted-foreground mt-5 leading-relaxed">
                  Traitement des odeurs tenaces et élimination des nuisibles (cafards, punaises de lit,
                  rongeurs, mites). Intervention discrète dans tout le Sud de la France.
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
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Matériel pro</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 7j/7</span>
                </div>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src="/images/examples/odeurs-nuisibles-van.png"
                    alt="Équipe SOS Nettoyage Diogène équipée pour le traitement des odeurs et nuisibles"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group mt-6">
                  <img
                    src="/images/examples/p3.jpg"
                    alt="Traitement par nébulisation pour éliminer les odeurs"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
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
                { step: "1", title: "Contactez-nous", desc: "Par téléphone ou mail, expliquez la situation. On vous écoute et on vous conseille." },
                { step: "2", title: "Quelques infos & photos", desc: "Envoyez quelques photos du lieu. On établit un devis précis adapté au problème." },
                { step: "3", title: "On intervient", desc: "Traitement des odeurs et/ou des nuisibles, jusqu'à disparition complète." },
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
              Ce que l'on traite
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Odeurs et nuisibles, on s'occupe des deux.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Wind, title: "Odeurs tenaces", desc: "Odeurs de tabac, animaux, humidité, déchets, après décès. Traitement par nébulisation et neutralisation." },
                { icon: Bug, title: "Nuisibles", desc: "Cafards, punaises de lit, rongeurs, mites. Diagnostic puis traitement ciblé jusqu'à élimination." },
                { icon: ShieldCheck, title: "Désinfection des lieux", desc: "Nettoyage et désinfection des surfaces après traitement, pour repartir sur une base saine." },
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

        {/* Pour qui */}
        <section className="py-16 sm:py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Pour qui ?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Particuliers, propriétaires, syndics, agences immobilières, notaires ou bailleurs :
                  on intervient dès que le problème devient invivable.
                </p>
                <div className="space-y-3">
                  {[
                    "Logement avec odeur persistante",
                    "Appartement infesté de nuisibles",
                    "Remise en location ou en vente",
                    "Après un sinistre ou un départ de locataire",
                    "Locaux professionnels et commerces",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <img
                  src="/images/examples/odeurs-nuisibles-van.png"
                  alt="Véhicule d'intervention SOS Nettoyage Diogène"
                  className="rounded-2xl object-cover w-full h-64 sm:h-80 shadow-lg"
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
                  Odeurs invivables ou infestation qui s'aggrave ? Intervention possible 7j/7,
                  appelez-nous directement.
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
            { question: "Quels types d'odeurs traitez-vous ?", answer: "Odeurs de tabac, animaux, humidité, moisissure, déchets accumulés, après décès. On intervient sur toute odeur persistante dans un logement, avec débarras des sources d'odeur si nécessaire." },
            { question: "Quels nuisibles éliminez-vous ?", answer: "Cafards, punaises de lit, rongeurs, mites et autres insectes. On fait d'abord un diagnostic, puis on traite de façon ciblée jusqu'à élimination. Le débarras des nids et des déchets contaminés est inclus." },
            { question: "Le traitement est-il dangereux pour les habitants ?", answer: "Non. On utilise des produits professionnels en respectant les temps de sécurité. Les habitants peuvent rentrer après aération, selon le produit utilisé." },
            { question: "Combien de temps dure une intervention ?", answer: "Ça dépend de la surface et du problème. Une désodorisation peut prendre 2 à 4 heures. Un traitement anti-nuisibles peut nécessiter plusieurs passages. On vous précise tout dans le devis." },
            { question: "Intervenez-vous en urgence ?", answer: "Oui, 7j/7. Si l'odeur est invivable ou l'infestation avancée, appelez-nous directement au 07 67 13 54 58." },
            { question: "Comment obtenir un devis ?", answer: "Envoyez-nous quelques photos et vidéos en décrivant la situation. On vous répond rapidement avec un devis gratuit et sans engagement." },
          ]}
        />

        {/* CTA final */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Reprenez possession d'un lieu sain
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

export default LandingOdeursNuisibles;