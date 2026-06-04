import Hero from "../components/Hero";
import Services from "../components/Services";
import ExamplesGallery from "../components/ExamplesGallery";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomerReviews from "../components/CustomerReviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import LandingFAQ from "../components/LandingFAQ";
import { useSEO } from "../hooks/useSEO";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const seoConfig = useSEO();
  const location = useLocation();

  // Gérer les ancres dans l'URL
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEOHead {...seoConfig} />
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
            items={[
              {
                question: "Quels types d'interventions proposez-vous ?",
                answer: "Nous intervenons pour le nettoyage et débarras de logements en situation de syndrome de Diogène, la désinfection après décès ou infestation, le traitement des odeurs et nuisibles, et le nettoyage profond de locaux insalubres."
              },
              {
                question: "Comment obtenir un devis ?",
                answer: "Vous nous contactez par téléphone ou via notre formulaire. Après échange sur votre situation, nous vous envoyons un devis personnalisé sous 24h, sans engagement."
              },
              {
                question: "Intervenez-vous en urgence ?",
                answer: "Oui, nous avons une équipe disponible 7j/7 pour les cas urgents : décès, infestation, ou situation sanitaire critique."
              },
              {
                question: "Comment garantissez-vous la discrétion ?",
                answer: "Nos véhicules sont banalisés, nos équipes sont formées à la confidentialité, et nous adaptons nos horaires pour préserver votre tranquillité."
              },
              {
                question: "Dans quels départements travaillez-vous ?",
                answer: "Nous couvrons l'Hérault, le Gard, l'Aude, les Bouches-du-Rhône, le Var, le Vaucluse, et plus largement toute l'Occitanie et la région PACA."
              }
            ]}
          />
        </section>
        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;