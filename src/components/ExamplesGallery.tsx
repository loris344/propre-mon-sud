import { Sparkles } from "lucide-react";

const ExamplesGallery = () => {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
            <Sparkles className="w-3 h-3" />
            Nos réalisations
          </div>
          <h2 id="exemples-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Exemples de <span className="text-primary">transformations</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Découvrez la qualité de nos interventions
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Row 1: 3 avant/après photos */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="group relative">
              <div className="relative bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/examples/toulouse1.webp"
                    alt="Avant/Après nettoyage salon - Syndrome de Diogène"
                    className="w-full h-auto rounded-lg"
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs font-medium text-foreground">Avant / Après - Salon</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="relative bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/examples/toulouse2.webp"
                    alt="Avant/Après nettoyage sanitaires"
                    className="w-full h-auto rounded-lg"
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-xs font-medium text-foreground">Avant / Après - Sanitaires</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="relative bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/examples/toulouse3.webp"
                    alt="Avant/Après nettoyage salle de bain"
                    className="w-full h-auto rounded-lg"
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs font-medium text-foreground">Avant / Après - Salle de bain</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: 2 photos équipe */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="group relative">
              <div className="relative bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/examples/nettoyeurs.png"
                    alt="Équipe de nettoyage en intervention"
                    className="w-full h-auto rounded-lg"
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs font-medium text-foreground">Notre équipe en intervention</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="relative bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/examples/nettoyeur.webp"
                    alt="Professionnel de nettoyage spécialisé"
                    className="w-full h-auto rounded-lg"
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-xs font-medium text-foreground">Intervention professionnelle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesGallery;
