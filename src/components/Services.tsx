import { Card, CardContent } from "@/components/ui/card";
import {
  Home, Trash2, ShieldCheck, Heart, KeyRound, SprayCan, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { memo } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/seo-pages";

// Métadonnées d'affichage (icône + accroche) par hub de service. La LISTE des
// services affichés vient de getServiceHubs() (= menu « Services ») ; cette table
// ne fait qu'enrichir le rendu. Un nouveau hub sans entrée ici reste affiché
// (icône + description de repli), donc rien à maintenir pour qu'il apparaisse.
const SERVICE_META: Record<string, { icon: LucideIcon; description: string }> = {
  "/nettoyage-diogene/": {
    icon: Home,
    description:
      "Intervention spécialisée dans les situations d'accumulation compulsive, avec respect et discrétion totale.",
  },
  "/debarras/": {
    icon: Trash2,
    description:
      "Évacuation et tri de tous types d'objets, meubles et déchets, dans le respect de l'environnement.",
  },
  "/desinfection-logement/": {
    icon: ShieldCheck,
    description:
      "Traitement des environnements insalubres avec des produits professionnels et des techniques adaptées.",
  },
  "/nettoyage-apres-deces/": {
    icon: Heart,
    description:
      "Nettoyage et remise en état après décès, avec une approche bienveillante, discrète et professionnelle.",
  },
  "/nettoyage-apres-squat/": {
    icon: KeyRound,
    description:
      "Remise en état complète d'un logement après une occupation illégale ou un squat.",
  },
  "/nettoyage-insalubre/": {
    icon: SprayCan,
    description:
      "Nettoyage et assainissement des logements très dégradés ou déclarés insalubres.",
  },
  "/nettoyage-extreme/": {
    icon: Sparkles,
    description:
      "Nettoyage en profondeur des situations les plus extrêmes, du sol au plafond.",
  },
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
          <CardContent className="p-4 sm:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
              {services.map((service) => {
                const meta = SERVICE_META[service.url];
                const Icon = meta?.icon ?? Sparkles;
                return (
                  <Link
                    key={service.url}
                    href={service.url}
                    className="group flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-secondary/50"
                  >
                    <div className="w-11 h-11 flex-shrink-0 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.label}
                      </h3>
                      {meta?.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {meta.description}
                        </p>
                      )}
                    </div>
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
