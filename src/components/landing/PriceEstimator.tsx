"use client";

import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Surface = "studio" | "t2t3" | "maison";
type Niveau = "leger" | "moyen" | "severe";

const SURFACES: { id: Surface; label: string; sub: string }[] = [
  { id: "studio", label: "Studio / T1", sub: "jusqu'à 30 m²" },
  { id: "t2t3", label: "T2 / T3", sub: "30 à 70 m²" },
  { id: "maison", label: "T4+ / Maison", sub: "plus de 70 m²" },
];

const NIVEAUX: { id: Niveau; label: string; sub: string }[] = [
  { id: "leger", label: "Léger", sub: "Quelques pièces touchées, peu de désinfection" },
  { id: "moyen", label: "Moyen", sub: "Logement entier encombré, désinfection partielle" },
  { id: "severe", label: "Sévère", sub: "Accumulation totale, désinfection et désinsectisation complètes" },
];

const PRICE_MATRIX: Record<Surface, Record<Niveau, [number, number]>> = {
  studio: { leger: [1500, 2200], moyen: [2000, 2800], severe: [2800, 3800] },
  t2t3: { leger: [2200, 3200], moyen: [3000, 4500], severe: [4200, 6000] },
  maison: { leger: [3200, 4500], moyen: [4500, 6500], severe: [6000, 9000] },
};

const scrollToForm = () => {
  document.getElementById("devis-gratuit")?.scrollIntoView({ behavior: "smooth" });
};

const formatPrice = (n: number) => `${n.toLocaleString("fr-FR")} €`;

const PriceEstimator = ({ serviceLabel }: { serviceLabel: string }) => {
  const [surface, setSurface] = useState<Surface | null>(null);
  const [niveau, setNiveau] = useState<Niveau | null>(null);

  const range = surface && niveau ? PRICE_MATRIX[surface][niveau] : null;

  return (
    <Card className="border-border/50 shadow-lg p-5 sm:p-6 space-y-5">
      <div className="flex items-center gap-2">
        <Calculator className="w-5 h-5 text-primary flex-shrink-0" />
        <h2 className="text-lg sm:text-xl font-bold text-foreground">
          Estimez le prix de votre {serviceLabel}
        </h2>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Surface du logement</p>
        <div className="grid grid-cols-3 gap-2">
          {SURFACES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSurface(s.id)}
              className={cn(
                "rounded-lg border px-2 py-3 text-center transition-colors",
                surface === s.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/50 hover:border-primary/50",
              )}
            >
              <span className="block text-sm font-semibold">{s.label}</span>
              <span className="block text-[11px] text-muted-foreground mt-0.5">{s.sub}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Niveau d'encombrement</p>
        <div className="grid gap-2">
          {NIVEAUX.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setNiveau(n.id)}
              className={cn(
                "rounded-lg border px-3 py-2.5 text-left transition-colors",
                niveau === n.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/50 hover:border-primary/50",
              )}
            >
              <span className="block text-sm font-semibold">{n.label}</span>
              <span className="block text-xs text-muted-foreground mt-0.5">{n.sub}</span>
            </button>
          ))}
        </div>
      </div>

      {range && (
        <div className="rounded-xl bg-primary/5 border border-primary/20 p-4 space-y-3 text-center">
          <p className="text-sm text-muted-foreground">Estimation indicative</p>
          <p className="text-2xl sm:text-3xl font-bold text-primary">
            {formatPrice(range[0])} – {formatPrice(range[1])}
          </p>
          <p className="text-xs text-muted-foreground">
            Cette fourchette est donnée à titre indicatif. Le devis exact est établi gratuitement sur description, photos et vidéos.
          </p>
          <Button variant="accent" size="lg" className="w-full" onClick={scrollToForm}>
            Obtenir mon devis exact gratuit
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      <button
        type="button"
        onClick={scrollToForm}
        className="block w-full text-center text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
      >
        Passer directement au formulaire
      </button>
    </Card>
  );
};

export default PriceEstimator;
