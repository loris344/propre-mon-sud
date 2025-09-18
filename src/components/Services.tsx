import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Trash2, 
  ShieldCheck, 
  Clock, 
  Users, 
  Award,
  Phone,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Nettoyage Syndrome de Diogène",
      description: "Intervention spécialisée dans les situations d'accumulation compulsive avec respect et discrétion totale.",
      features: ["Évaluation gratuite par téléphone", "Plan d'intervention personnalisé", "Respect de la dignité"]
    },
    {
      icon: Trash2,
      title: "Débarras Gros Volumes",
      description: "Évacuation et tri de tous types d'objets, meubles et déchets en respectant l'environnement.",
      features: ["Tri sélectif", "Recyclage maximal", "Évacuation complète"]
    },
    {
      icon: ShieldCheck,
      title: "Désinfection & Insalubrité",
      description: "Traitement des environnements insalubres avec des produits professionnels et techniques adaptées.",
      features: ["Désinfection totale", "Traitement anti-nuisibles", "Remise en état"]
    }
  ];

  const advantages = [
    { icon: Clock, title: "Disponibilité 7j/7", desc: "Intervention rapide et flexible" },
    { icon: Users, title: "Équipe experte", desc: "Professionnels formés et équipés" },
    { icon: Award, title: "Discrétion assurée", desc: "Confidentialité et respect total" },
    { icon: ShieldCheck, title: "Assurance complète", desc: "Intervention sécurisée et assurée" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 id="services-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Nos Services Spécialisés
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Une approche professionnelle et humaine pour chaque situation, 
            avec la discrétion et l'expertise que vous méritez.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Advantages */}
        <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-foreground">
            Pourquoi Nous Choisir ?
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="text-center space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mx-auto">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">{advantage.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{advantage.desc}</p>
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
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
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

export default Services;