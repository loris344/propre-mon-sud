import { Home, Trash2, ShieldCheck, Heart, KeyRound, SprayCan, Sparkles, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const SERVICES: { icon: LucideIcon; label: string; url: string }[] = [
  { icon: Sparkles, label: "Nettoyage extrême", url: "/nettoyage-extreme/" },
  { icon: Trash2, label: "Débarras complet", url: "/debarras/" },
  { icon: ShieldCheck, label: "Désinfection logement", url: "/desinfection-logement/" },
  { icon: Heart, label: "Nettoyage après décès", url: "/nettoyage-apres-deces/" },
  { icon: KeyRound, label: "Nettoyage après squat", url: "/nettoyage-apres-squat/" },
  { icon: Home, label: "Nettoyage Diogène", url: "/nettoyage-diogene/" },
  { icon: SprayCan, label: "Nettoyage insalubre", url: "/nettoyage-insalubre/" },
];

const LandingServices = () => (
  <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/20">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          Nos Services Spécialisés
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          Une approche professionnelle et humaine pour chaque situation,
          avec la discrétion et l'expertise que vous méritez.
        </p>
      </div>

      <Card className="max-w-5xl mx-auto border-border/50 shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {SERVICES.map((service) => (
              <Link
                key={service.url}
                href={service.url}
                className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-secondary/50"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.label}
                </h3>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default LandingServices;
