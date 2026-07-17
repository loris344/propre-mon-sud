"use client";

import { Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LandingReviews from "@/components/LandingReviews";
import LandingFAQ from "@/components/LandingFAQ";
import LandingServices from "@/components/landing/LandingServices";
import LandingZones from "@/components/landing/LandingZones";
import PriceEstimator from "@/components/landing/PriceEstimator";
import ExamplesGallery from "@/components/ExamplesGallery";
import { homepageFaqItems } from "@/data/homepage-faq";

const scrollToForm = () => {
  document.getElementById('devis-gratuit')?.scrollIntoView({ behavior: 'smooth' });
};

const LandingDiogeneMeta = () => {
  return (
    <main className="min-h-screen">
      {/* Hero compact : pensé pour le trafic pub (Meta). Formulaire + estimateur de prix
          visibles quasi immédiatement, sans la galerie avant/après qui rallongeait le hero
          des landing pages Google Ads (déplacée plus bas via ExamplesGallery). */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
              Entreprise de Nettoyage <span className="text-primary">Diogène</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Débarras, nettoyage et désinfection syndrome de Diogène. Intervention discrète en{" "}
              <span className="font-semibold text-foreground">Occitanie et PACA</span>.
            </p>

            <div className="flex justify-center">
              <Button variant="accent" size="lg" className="text-base px-8 py-4" onClick={scrollToForm}>
                <Mail className="w-4 h-4" />
                Devis Gratuit
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-medium text-muted-foreground">4.7/5</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium">Intervention 7j/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">En collaboration avec l'ARS</span>
                <img src="/logos/RF.webp" alt="République Française" className="h-8 w-auto object-contain" width={80} height={72} loading="lazy" />
                <img src="/logos/ARS.webp" alt="Agence Régionale de Santé" className="h-8 w-auto object-contain" width={80} height={46} loading="lazy" />
              </div>
            </div>
          </div>

          {/* Formulaire + estimateur : le coeur de la page, visible sans scroll excessif */}
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
            <PriceEstimator serviceLabel="nettoyage syndrome de Diogène" />
            <div id="devis-gratuit" className="scroll-mt-24">
              <img
                src="/images/examples/avant-apres-nettoyage-diogene-marseille.webp"
                alt="Avant et après nettoyage syndrome de Diogène"
                className="lg:hidden w-full h-auto rounded-xl shadow-lg mb-4"
                loading="lazy"
                width={800}
                height={450}
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça se passe */}
      <section className="py-16 sm:py-20 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4">
            Comment se déroule l'intervention ?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Un processus simple, pensé pour rassurer.
          </p>

          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Échange téléphonique ou par mail", desc: "Vous nous décrivez la situation librement. Nous écoutons, nous comprenons, sans engagement de votre part." },
              { step: "02", title: "Quelques infos, photos & devis gratuit", desc: "Envoyez-nous quelques photos du logement et une description de la situation. Un devis clair et détaillé vous est envoyé rapidement." },
              { step: "03", title: "Débarras et tri complet", desc: "Encombrants, déchets et objets accumulés sont triés puis évacués en décheterie professionnelle. Papiers importants, objets de valeur et souvenirs sont conservés et vous sont restitués." },
              { step: "04", title: "Nettoyage, désinfection & remise en état", desc: "Lessivage et désinfection totale des pièces, en collaboration avec l'ARS. Le logement redevient propre et habitable, avec un suivi de satisfaction." },
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

      {/* Exemples de transformations (avant/après), déplacés hors du hero pour garder le formulaire immédiat */}
      <ExamplesGallery />

      {/* FAQ (1ère question déjà sur le prix, fait écho à l'estimateur) */}
      <LandingFAQ
        title="Questions fréquentes"
        subtitle="Tout ce qu'il faut savoir avant de nous contacter."
        items={homepageFaqItems}
      />

      {/* Nos services */}
      <LandingServices />

      {/* Avis clients */}
      <LandingReviews serviceKey="diogene" />

      {/* Zones d'intervention */}
      <LandingZones />

      <Footer hidePartnerLinks />
    </main>
  );
};

export default LandingDiogeneMeta;
