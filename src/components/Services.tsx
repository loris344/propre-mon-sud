import { Card, CardContent } from "@/components/ui/card";
import {
  Home, Trash2, ShieldCheck, Heart, KeyRound, SprayCan, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { memo } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/seo-pages";

// Métadonnées d'affichage par hub de service. La LISTE des services affichés
// vient de getServiceHubs() (= menu « Services ») ; cette table ne fait
// qu'enrichir le rendu (icône, et libellé plus court si le titre de la page
// fait bizarre dans ce contexte). Un hub sans entrée ici reste affiché (icône
// de repli + libellé du plan), donc rien à maintenir pour qu'il apparaisse.
const SERVICE_META: Record<string, { icon: LucideIcon; label?: string }> = {
  "/nettoyage-diogene/": { icon: Home },
  "/debarras/": { icon: Trash2, label: "Débarras complet" },
  "/desinfection-logement/": { icon: ShieldCheck },
  "/nettoyage-apres-deces/": { icon: Heart },
  "/nettoyage-apres-squat/": { icon: KeyRound },
  "/nettoyage-insalubre/": { icon: SprayCan },
  "/nettoyage-extreme/": { icon: Sparkles },
};

const Services = ({ services = [] }: { services?: NavLink[] }) => {
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

        {/* Tous les services réunis dans un seul bloc. La liste suit le menu
            « Services » (hubs publiés) : chaque service renvoie vers sa page. */}
        <Card className="max-w-5xl mx-auto border-border/50 shadow-lg">
          <CardContent className="p-4 sm:p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {services.map((service) => {
                const meta = SERVICE_META[service.url];
                const Icon = meta?.icon ?? Sparkles;
                const label = meta?.label ?? service.label;
                return (
                  <Link
                    key={service.url}
                    href={service.url}
                    className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-secondary/50"
                  >
                    <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {label}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default memo(Services);
