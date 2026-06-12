import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ExamplesGallery from "@/components/ExamplesGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerReviews from "@/components/CustomerReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getServiceHubs, getSecondaryHubs } from "@/lib/seo-pages";
import LandingFAQ from "@/components/LandingFAQ";
import HashScroll from "@/components/HashScroll";
import { buildMetadata } from "@/lib/metadata";
import { jsonLd, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata("/");

const faqItems = [
  {
    question: "Quel est le prix d'une intervention et comment est-il calculé ?",
    answer:
      "Pour une intervention complète en lieu insalubre ou syndrome de Diogène (débarras + nettoyage + désinfection), le tarif varie de 1 500 € à 5 000 € en moyenne. Pour un simple débarras (sans insalubrité, sans désinfection), les tarifs sont différents et calculés au volume. L'évaluation se fait gratuitement sur description, photos et vidéos. Le prix est calculé selon : le volume d'encombrants à débarrasser et à évacuer (m³), les frais de déchetterie professionnelle, la superficie, le niveau d'insalubrité (besoin de désinfection/désinsectisation) et l'accessibilité du logement.",
  },
  {
    question: "Comment se déroule le tri des papiers importants et des objets de valeur ?",
    answer:
      "Le tri sélectif est systématique lors du débarras. Durant l'évacuation des gros volumes, l'équipe applique un protocole rigoureux pour isoler et sécuriser les documents administratifs, pièces d'identité, photos de famille, argent liquide et objets de valeur. Tous ces éléments sont conservés et vous sont intégralement restitués après le débarras.",
  },
  {
    question: "Vos interventions et vos véhicules sont-ils discrets pour le voisinage ?",
    answer:
      "Oui. La discrétion est totale et garantie, y compris lors des débarras. Les véhicules utilisés ne portent aucun flocage publicitaire ni mention de nettoyage extrême ou de Diogène. Les techniciens arrivent sur place en tenue civile et revêtent leurs équipements de protection individuelle (EPI) uniquement une fois entrés à l'intérieur du logement.",
  },
  {
    question:
      "Le service comprend-il le débarras, la désinfection, le traitement des odeurs et des nuisibles ?",
    answer:
      "Oui. L'intervention comprend le débarras complet et l'évacuation des déchets, le lessivage, la désinfection totale des pièces (normes virucides/bactéricides en collaboration avec l'ARS), le traitement anti-nuisibles (cafards, punaises de lit, rongeurs) et la remise en état des surfaces pour supprimer les odeurs tenaces.",
  },
  {
    question:
      "Quels sont les délais d'intervention et combien de temps durent les travaux ?",
    answer:
      "L'envoi du devis gratuit est immédiat après l'évaluation par photos et vidéos. Notre équipe est disponible 7j/7 pour planifier le débarras et l'intervention rapidement dans toute l'Occitanie et la région PACA. Un chantier standard de type appartement (T2/T3) dure en moyenne 1 à 2 jours ; comptez 3 à 4 jours pour les maisons ou gros volumes.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Entité LocalBusiness du site — émise ICI uniquement (reco Google).
          Pas de markup FAQPage : les rich results FAQ ont été supprimés par
          Google en mai 2026 ; la FAQ reste visible plus bas pour les visiteurs. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(localBusinessSchema)}
      />
      <HashScroll />
      <main role="main">
        <section id="accueil" aria-labelledby="hero-title">
          <Hero />
        </section>
        <section id="exemples" aria-labelledby="exemples-title" className="scroll-mt-24">
          <ExamplesGallery />
        </section>
        <section id="services" aria-labelledby="services-title" className="scroll-mt-24">
          <Services />
        </section>
        <WhyChooseUs />
        <section id="avis" aria-labelledby="avis-title" className="scroll-mt-24">
          <CustomerReviews />
        </section>
        <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24">
          <LandingFAQ
            title="Questions fréquentes"
            subtitle="Tout ce qu'il faut savoir avant de nous contacter."
            items={faqItems}
          />
        </section>
        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer services={getServiceHubs()} secondary={getSecondaryHubs()} />
    </>
  );
}
