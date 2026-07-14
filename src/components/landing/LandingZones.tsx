import { MapPin } from "lucide-react";

const DEPARTMENTS = ["Hérault", "Bouches-du-Rhône", "Vaucluse", "Gard"];

const LandingZones = () => (
  <section className="py-16 sm:py-20 bg-card border-y border-border/50">
    <div className="container mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
        Nos zones d'intervention
      </h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 max-w-2xl mx-auto">
        {DEPARTMENTS.map((dept) => (
          <span
            key={dept}
            className="inline-flex items-center gap-1.5 bg-background border border-border/50 px-4 py-2 rounded-full text-sm text-foreground font-medium shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-accent" />
            {dept}
          </span>
        ))}
      </div>
      <p className="text-muted-foreground font-medium">
        + Toute la région Occitanie &amp; PACA
      </p>
    </div>
  </section>
);

export default LandingZones;
