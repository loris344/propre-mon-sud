import Hero from "../components/Hero";
import Services from "../components/Services";
import ExamplesGallery from "../components/ExamplesGallery";
import CustomerReviews from "../components/CustomerReviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
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
        <section id="services" aria-labelledby="services-title" className="scroll-mt-24">
          <Services />
        </section>
        <section id="exemples" aria-labelledby="exemples-title" className="scroll-mt-24">
          <ExamplesGallery />
        </section>
        <section id="avis" aria-labelledby="avis-title" className="scroll-mt-24">
          <CustomerReviews />
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