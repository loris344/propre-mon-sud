import { Button } from "@/components/ui/button";
import { Clock, Users, Award, ShieldCheck, Phone } from "lucide-react";
import { useCallback, memo } from "react";

const ADVANTAGES = [
  { icon: Clock, title: "Disponibilité 7j/7", desc: "Intervention rapide et flexible" },
  { icon: Users, title: "Équipe experte", desc: "Professionnels formés et équipés" },
  { icon: Award, title: "Discrétion assurée", desc: "Confidentialité et respect total" },
  { icon: ShieldCheck, title: "Assurance complète", desc: "Intervention sécurisée et assurée" }
];

const WhyChooseUs = () => {
  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-foreground">
            Pourquoi Nous Choisir ?
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {ADVANTAGES.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base sm:text-lg">{advantage.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{advantage.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="px-6 sm:px-8 text-sm sm:text-base"
              onClick={scrollToContact}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyChooseUs);
