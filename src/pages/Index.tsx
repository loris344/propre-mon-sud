import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <main>
      <div id="accueil">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
};

export default Index;
