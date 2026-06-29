import { Sparkles } from "lucide-react";

const beforeAfter = [
  {
    src: "/images/examples/avant-apres-nettoyage-diogene-insalubre-perpignan.webp",
    alt: "Avant et après nettoyage syndrome de Diogène et logement insalubre à Perpignan",
    label: "Avant / Après - Diogène, Perpignan",
  },
  {
    src: "/images/examples/avant-apres-remise-en-etat-accumulation-extreme-montpellier.webp",
    alt: "Avant et après remise en état d'un logement en accumulation extrême à Montpellier",
    label: "Avant / Après - Remise en état, Montpellier",
  },
  {
    src: "/images/examples/avant-apres-nettoyage-diogene-marseille.webp",
    alt: "Avant et après nettoyage syndrome de Diogène à Marseille",
    label: "Avant / Après - Diogène, Marseille",
  },
];

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
          {/* Row 1: avant/après (vraies réalisations, nommées par service + ville) */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {beforeAfter.map((item, i) => (
              <div key={item.src} className="group relative">
                <div className="relative bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto rounded-lg"
                      width={1200}
                      height={900}
                      draggable="false"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-primary" : "bg-accent"}`}></div>
                    <span className="text-xs font-medium text-foreground">{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 photos équipe */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="group relative">
              <div className="relative bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/examples/equipe-nettoyage-diogene-combinaisons-protection.webp"
                    alt="Équipe de nettoyage en combinaisons de protection à l'arrière du camion d'intervention"
                    className="w-full h-auto rounded-lg"
                    width={1400}
                    height={920}
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
                    src="/images/examples/debarras-evacuation-objets-encombrants.webp"
                    alt="Évacuation d'objets encombrants par notre équipe en combinaison de protection"
                    className="w-full h-auto rounded-lg"
                    width={1200}
                    height={900}
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-xs font-medium text-foreground">Débarras et évacuation</span>
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
