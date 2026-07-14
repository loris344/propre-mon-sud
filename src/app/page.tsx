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
import { homepageFaqItems } from "@/data/homepage-faq";

export const metadata: Metadata = buildMetadata("/");

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
          <Services services={getServiceHubs()} />
        </section>
        <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24">
          <LandingFAQ
            title="Questions fréquentes"
            subtitle="Tout ce qu'il faut savoir avant de nous contacter."
            items={homepageFaqItems}
          />
        </section>
        <WhyChooseUs />
        <section id="avis" aria-labelledby="avis-title" className="scroll-mt-24">
          <CustomerReviews />
        </section>
        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer services={getServiceHubs()} secondary={getSecondaryHubs()} />
    </>
  );
}
