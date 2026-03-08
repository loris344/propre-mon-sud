import React from 'react';
import SEOHead from '../components/SEOHead';

export default function PrixDiogene() {
  const images = [
    {
      src: '/images/examples/cl1.jpg',
      alt: 'Intervention nettoyage syndrome de Diogène - SOS Nettoyage Diogène',
      caption: 'Intervention professionnelle syndrome de Diogène'
    },
    {
      src: '/images/examples/cl2.webp',
      alt: 'Débarras et nettoyage extrême - SOS Nettoyage Diogène',
      caption: 'Débarras complet et nettoyage en profondeur'
    },
    {
      src: '/images/examples/cl3.jpg',
      alt: 'Désinfection et remise en état - SOS Nettoyage Diogène',
      caption: 'Désinfection professionnelle et remise en état'
    }
  ];

  return (
    <>
      <SEOHead
        title="Prix Nettoyage Diogène | Tarifs & Devis Gratuit"
        description="Tarifs nettoyage syndrome de Diogène. Devis gratuit et transparent. Expertise, discrétion et approche humaine dans le Sud de la France."
        canonical="/prix-diogene"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-white pt-40 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-foreground">
                Prix Diogène : L'Expertise de SOS Nettoyage Diogène
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pour les Interventions Extrêmes et le Nettoyage d'Insalubrité
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Introduction */}
          <div className="bg-card rounded-lg shadow-lg p-6 mb-8 border">
            <p className="text-foreground leading-relaxed mb-4">
              Le syndrome de Diogène, caractérisé par une accumulation compulsive et un délaissement de l'hygiène, 
              exige une intervention spécialisée. Chez <strong>SOS Nettoyage Diogène</strong>, nous sommes les experts reconnus 
              pour le nettoyage d'insalubrité et de l'extrême, offrant une approche humaine, discrète et professionnelle 
              pour ces situations délicates.
            </p>
            <p className="text-muted-foreground">
              Chaque <strong>devis Diogène</strong> est établi sur mesure, en tenant compte de la complexité unique de chaque situation.
            </p>
          </div>

          {/* Section Tarifs */}
          <div className="bg-card rounded-lg shadow-lg p-6 mb-8 border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Comprendre le Coût d'une Intervention Spécialisée
            </h2>
            <p className="text-foreground mb-6">
              Le coût d'une intervention de nettoyage Diogène avec SOS Nettoyage Diogène est déterminé par plusieurs facteurs clés, 
              garantissant une prestation adaptée et juste.
            </p>

            {/* Image d'intervention */}
            <div className="mb-6 max-w-md mx-auto">
              <img 
                src={images[0].src}
                alt={images[0].alt}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Facteurs Influençant le Prix</h3>
            <ul className="space-y-3 text-foreground mb-6">
              <li className="flex items-start">
                <span className="text-gray-600 mr-2">•</span>
                <span><strong>L'Ampleur de l'Encombrement :</strong> La quantité et la nature des objets accumulés influencent directement le temps de travail et les coûts d'évacuation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-2">•</span>
                <span><strong>Le Degré d'Insalubrité :</strong> Le niveau de saleté, la présence de moisissures, de déjections ou de nuisibles nécessitent des protocoles de désinfection spécifiques.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-2">•</span>
                <span><strong>L'Accessibilité du Site :</strong> Des contraintes d'accès peuvent augmenter la durée et la complexité de l'intervention.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-2">•</span>
                <span><strong>L'Urgence :</strong> Nous sommes disponibles 7j/7 pour les urgences, ce qui peut influencer le coût.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-4">Tarifs Indicatifs par Superficie</h3>
            <p className="text-muted-foreground mb-4">Interventions complètes (débarras, nettoyage, désinfection)</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex justify-between items-center p-3 bg-muted rounded border">
                <span className="font-medium text-foreground">20-30 m²</span>
                <span className="font-bold text-foreground">800€ - 1 500€</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded border">
                <span className="font-medium text-foreground">~70 m²</span>
                <span className="font-bold text-foreground">1 500€ - 2 500€</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded border">
                <span className="font-medium text-foreground">~100 m²</span>
                <span className="font-bold text-foreground">2 000€ - 3 500€</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded border">
                <span className="font-medium text-foreground">~150 m²</span>
                <span className="font-bold text-foreground">3 000€ - 5 000€</span>
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded border">
              <p className="text-sm text-foreground">
                <strong>Note :</strong> Ces chiffres sont des estimations et peuvent varier en fonction de l'état exact du logement et des services spécifiques requis.
              </p>
            </div>
          </div>

          {/* Services Inclus */}
          <div className="bg-card rounded-lg shadow-lg p-6 mb-8 border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Services Spécialisés Inclus
            </h2>
            <p className="text-foreground mb-6">
              Chez SOS Nettoyage Diogène, nos interventions incluent systématiquement :
            </p>

            {/* Image des services */}
            <div className="mb-6 max-w-md mx-auto">
              <img 
                src={images[1].src}
                alt={images[1].alt}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Débarras Complet :</strong> Tri minutieux et évacuation écologique de tous les objets et déchets.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Désinfection et Assainissement :</strong> Traitement en profondeur avec des produits professionnels.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Traitement Anti-Nuisibles :</strong> Désinsectisation ou dératisation complète si nécessaire.</span>
                </li>
              </ul>
              
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Nettoyage Extrême :</strong> Nettoyage approfondi des sols, murs, plafonds et vitres.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Nettoyage Après Décès :</strong> Une approche respectueuse et discrète pour la remise en état.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Disponibilité 7j/7 :</strong> Intervention rapide et flexible pour répondre à tous vos besoins urgents.</span>
                </li>
              </ul>
            </div>
          </div>


          {/* Devis et Ressources */}
          <div className="bg-card rounded-lg shadow-lg p-6 mb-8 border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Obtenir un Devis Personnalisé et Transparent
            </h2>
            
            <p className="text-foreground mb-6">
              Pour vous offrir une estimation précise et sans surprise, SOS Nettoyage Diogène propose :
            </p>

            {/* Image de fin d'intervention */}
            <div className="mb-6 max-w-md mx-auto">
              <img 
                src={images[2].src}
                alt={images[2].alt}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Notre Process</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">1.</span>
                    <span><strong>Devis Gratuit et Sans Engagement :</strong> Contactez-nous pour une première évaluation par téléphone.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">2.</span>
                    <span><strong>Analyse Approfondie :</strong> Pour les situations complexes, une visite sur site peut être organisée.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">3.</span>
                    <span><strong>Devis Détaillé :</strong> Nous nous engageons à une transparence totale sur nos tarifs.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Pourquoi Choisir SOS Nettoyage Diogène ?</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span><strong>Équipe Experte :</strong> Professionnels formés aux situations les plus difficiles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span><strong>Discrétion Assurée :</strong> Confidentialité totale et bienveillance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span><strong>Intervention Rapide :</strong> Disponibles 7j/7 dans tout le Sud de la France</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span><strong>Approche Humaine :</strong> Accompagnement respectueux de la dignité</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ressources Utiles */}
            <div className="bg-muted p-4 rounded border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Ressources Utiles
              </h3>
              <p className="text-foreground mb-3">
                Si vous êtes locataire, propriétaire ou bailleur et que vous rencontrez des désordres dans un logement 
                qui n'ont pas été pris en charge malgré vos démarches, vous pouvez utiliser la plateforme Signal Logement 
                pour constituer et suivre votre dossier auprès des services compétents.
              </p>
              <a 
                href="https://signal-logement.beta.gouv.fr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Signal Logement : https://signal-logement.beta.gouv.fr/
              </a>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-card rounded-lg shadow-lg p-6 text-center border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Besoin d'un Devis pour une Intervention Diogène ?
            </h2>
            <p className="text-foreground mb-6">
              Contactez <strong>SOS Nettoyage Diogène</strong> pour une estimation gratuite et personnalisée. 
              Notre expertise unique dans le nettoyage d'insalubrité et de l'extrême vous garantit une intervention professionnelle et respectueuse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:0605310199"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors duration-300"
              >
                📞 06 05 31 01 99
              </a>
              <a 
                href="/#contact-title" 
                className="inline-block bg-secondary text-secondary-foreground border border-border px-6 py-3 rounded-lg font-bold hover:bg-secondary/80 transition-colors duration-300"
              >
                📝 Demander un devis
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
