"use client";

import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallLink from "@/components/CallLink";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LandingReviews from "@/components/LandingReviews";
import LandingFAQ from "@/components/LandingFAQ";
import LandingServices from "@/components/landing/LandingServices";
import LandingZones from "@/components/landing/LandingZones";
import { homepageFaqItems } from "@/data/homepage-faq";

const PHONE = "0767135458";
const PHONE_DISPLAY = "07 67 13 54 58";

const scrollToForm = () => {
  document.getElementById('devis-gratuit')?.scrollIntoView({ behavior: 'smooth' });
};

const LandingDiogene = () => {
  return (
    <main className="min-h-screen">
      {/* Hero : même structure que la homepage (titre, boutons, avis Google, images avant/après) + formulaire complet en 2e colonne */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                  Entreprise de Nettoyage <span className="text-primary">Diogène</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mt-4">
                  Société spécialisée dans le nettoyage et débarras syndrome de Diogène, insalubrité et gros volumes.
                  <span className="block mt-2 font-medium text-foreground">
                    Intervention en{" "}
                    <span className="text-primary font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Région Occitanie et PACA
                    </span>
                  </span>
                </p>
              </div>

              {/* CTA Buttons */}
              <p className="text-xs text-muted-foreground">
                Numéro non surtaxé, appel au tarif normal.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <CallLink phone={PHONE}>
                  <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    {PHONE_DISPLAY}
                  </Button>
                </CallLink>
                <Button variant="accent" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" onClick={scrollToForm}>
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Devis Gratuit
                </Button>
              </div>

              {/* Avis Google */}
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm font-medium text-muted-foreground">4.7/5</span>
              </div>

              {/* ARS */}
              <div className="flex items-center gap-4">
                <span className="text-sm sm:text-base text-muted-foreground font-medium">
                  En collaboration avec l'ARS
                </span>
                <div className="flex items-center gap-3">
                  <img src="/logos/RF.webp" alt="République Française" className="h-12 sm:h-16 w-auto object-contain" width={128} height={116} loading="lazy" />
                  <img src="/logos/ARS.webp" alt="Agence Régionale de Santé" className="h-12 sm:h-16 w-auto object-contain" width={128} height={74} loading="lazy" />
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground pt-2 border-t border-border/50">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium">Intervention 7j/7</span>
              </div>

              {/* Images : mêmes photos que la homepage */}
              <div className="relative">
                <div className="flex flex-col gap-2 rounded-2xl overflow-hidden shadow-2xl bg-card p-2">
                  <div className="relative">
                    <img
                      src="/images/examples/ex1.webp"
                      alt="Exemple de transformation - Avant/Après nettoyage syndrome de Diogène"
                      className="w-full h-auto rounded-lg"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute bottom-2 left-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded">Avant</div>
                    <div className="absolute bottom-2 right-2 bg-accent/90 text-accent-foreground text-xs px-2 py-1 rounded">Après</div>
                  </div>
                  <div className="relative">
                    <img
                      src="/images/examples/ex2.jpg"
                      alt="Exemple de transformation - Résultat après intervention professionnelle"
                      className="w-full h-auto rounded-lg"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute bottom-2 right-2 bg-accent/90 text-accent-foreground text-xs px-2 py-1 rounded">Après</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card p-4 sm:p-6 rounded-xl shadow-lg border border-border max-w-xs">
                  <div className="text-center space-y-2">
                    <div className="text-xl sm:text-2xl font-bold text-primary">6+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Années d'expérience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sur mobile uniquement : la FAQ s'intercale ici, avant le formulaire (desktop : masquée, la FAQ desktop est plus bas) */}
            <div className="lg:hidden">
              <LandingFAQ
                title="Questions fréquentes"
                subtitle="Tout ce qu'il faut savoir avant de nous contacter."
                items={homepageFaqItems}
              />
            </div>

            <div id="devis-gratuit" className="scroll-mt-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ desktop (les mêmes questions que la homepage : prix, tri, discrétion, délais). Sur mobile, une copie est déjà affichée avant le formulaire dans le hero. */}
      <div className="hidden lg:block">
        <LandingFAQ
          title="Questions fréquentes"
          subtitle="Tout ce qu'il faut savoir avant de nous contacter."
          items={homepageFaqItems}
        />
      </div>

      {/* Nos services */}
      <LandingServices />

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

      {/* Avis clients */}
      <LandingReviews serviceKey="diogene" />

      {/* Zones d'intervention */}
      <LandingZones />

      <Footer hidePartnerLinks />
    </main>
  );
};

export default LandingDiogene;
