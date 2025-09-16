import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Index = () => {
  return (
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
  );
};

export default Index;
