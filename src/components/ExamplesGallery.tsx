import { Sparkles } from "lucide-react";

const ExamplesGallery = () => {
  return (
    <section className="py-8 sm:py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
            <Sparkles className="w-3 h-3" />
            Nos réalisations
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
            Exemples de <span className="text-primary">transformations</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Découvrez la qualité de nos interventions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 pb-4">
            {/* Image 1 - ex1.png */}
            <div className="group relative">
              <div className="relative bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="rounded-lg">
                  <img
                    src="/ex1.png"
                    alt="Exemple de transformation 1"
                    className="w-full h-48 sm:h-56 object-cover"
                    draggable="false"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs font-medium text-foreground">Intervention professionnelle</span>
                </div>
              </div>
            </div>

            {/* Image 2 - ex2.jpg */}
            <div className="group relative">
              <div className="relative bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="rounded-lg">
                  <img
                    src="/ex2.jpg"
                    alt="Exemple de transformation 2"
                    className="w-full h-48 sm:h-56 object-cover"
                    draggable="false"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-xs font-medium text-foreground">Résultat exceptionnel</span>
                </div>
              </div>
            </div>

            {/* Image 3 - p1.png */}
            <div className="group relative">
              <div className="relative bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="rounded-lg">
                  <img
                    src="/p1.png"
                    alt="Équipe professionnelle de nettoyage spécialisé"
                    className="w-full h-48 sm:h-56 object-cover"
                    draggable="false"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs font-medium text-foreground">Équipe experte</span>
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