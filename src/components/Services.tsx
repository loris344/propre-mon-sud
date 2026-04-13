import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, Trash2, ShieldCheck, Heart, CheckCircle
} from "lucide-react";
import { memo } from "react";

const SERVICES = [
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
  },
  {
    icon: Heart,
    title: "Nettoyage Après Décès",
    description: "Service spécialisé de nettoyage et remise en état après décès. Intervention respectueuse, discrète et professionnelle.",
    features: ["Approche bienveillante", "Discrétion absolue", "Remise en état complète"]
  }
];

const Services = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 id="services-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Nos Services Spécialisés
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Une approche professionnelle et humaine pour chaque situation, 
            avec la discrétion et l'expertise que vous méritez.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
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
      </div>
    </section>
  );
};

export default memo(Services);
