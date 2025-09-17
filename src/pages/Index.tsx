import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import SEOHead from "../components/SEOHead";
import { useSEO } from "../hooks/useSEO";

const Index = () => {
  const seoConfig = useSEO();

  return (
    <>
      <SEOHead {...seoConfig} />
      <main role="main">
        <section id="accueil" aria-labelledby="hero-title">
          <Hero />
        </section>
        <section id="services" aria-labelledby="services-title">
          <Services />
        </section>
        <section id="contact" aria-labelledby="contact-title">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Index;
