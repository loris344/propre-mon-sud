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
        title="Prix Diogène : L'Expertise de SOS Nettoyage Diogène pour les Interventions Extrêmes"
        description="Découvrez nos tarifs pour le nettoyage syndrome de Diogène. Devis gratuit et transparent pour interventions spécialisées. SOS Nettoyage Diogène : expertise, discrétion et approche humaine dans tout le Sud de la France."
        keywords="prix diogène, tarif nettoyage syndrome diogène, devis nettoyage insalubrité, coût intervention diogène, prix nettoyage extrême, SOS nettoyage diogène, montpellier, sete, beziers, nimes, perpignan, marseille, herault, gard, pyrenees-orientales"
        canonical="/prix-diogene"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white pt-32 pb-16 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Prix Diogène : L'Expertise de SOS Nettoyage Diogène
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Pour les Interventions Extrêmes et le Nettoyage d'Insalubrité
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border">✓ Devis Gratuit</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border">✓ Transparence Totale</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border">✓ Intervention 7j/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Introduction */}
          <article className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Le syndrome de Diogène, caractérisé par une accumulation compulsive et un délaissement de l'hygiène, 
                exige une intervention spécialisée. Chez <strong>SOS Nettoyage Diogène</strong>, nous sommes les experts reconnus 
                pour le nettoyage d'insalubrité et de l'extrême, offrant une approche humaine, discrète et professionnelle 
                pour ces situations délicates.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Le <strong>"prix Diogène"</strong> est une estimation personnalisée, reflétant la complexité unique de chaque cas.
              </p>
            </div>
          </article>

          {/* Section Facteurs de Prix */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comprendre le Coût d'une Intervention Spécialisée
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              Le coût d'une intervention de nettoyage Diogène avec SOS Nettoyage Diogène est déterminé par plusieurs facteurs clés, 
              garantissant une prestation adaptée et juste. Voici des fourchettes de prix indicatives, sachant que chaque situation 
              est unique et nécessite un devis personnalisé :
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Facteurs influençant le prix */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Facteurs Influençant le Prix</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">L'Ampleur de l'Encombrement</h4>
                    <p className="text-gray-700">
                      La quantité et la nature des objets accumulés (déchets, meubles, etc.) influencent directement 
                      le temps de travail et les coûts d'évacuation.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Le Degré d'Insalubrité</h4>
                    <p className="text-gray-700">
                      Le niveau de saleté, la présence de moisissures, de déjections ou de nuisibles (insectes, rongeurs) 
                      nécessitent des protocoles de désinfection et de traitement spécifiques.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">L'Accessibilité du Site</h4>
                    <p className="text-gray-700">
                      Des contraintes d'accès (étages élevés sans ascenseur, passages étroits, difficultés de stationnement) 
                      peuvent augmenter la durée et la complexité de l'intervention.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">L'Urgence de l'Intervention</h4>
                    <p className="text-gray-700">
                      Nous sommes disponibles 7j/7 pour les urgences, ce qui peut influencer le coût en fonction de la réactivité demandée.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarifs indicatifs */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tarifs Indicatifs par Superficie</h3>
                <p className="text-gray-600 mb-6">Interventions complètes (débarras, nettoyage, désinfection)</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                    <span className="font-medium text-gray-800">20-30 m²</span>
                    <span className="text-lg font-bold text-gray-900">800€ - 1 500€</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                    <span className="font-medium text-gray-800">~70 m²</span>
                    <span className="text-lg font-bold text-gray-900">1 500€ - 2 500€</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                    <span className="font-medium text-gray-800">~100 m²</span>
                    <span className="text-lg font-bold text-gray-900">2 000€ - 3 500€</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                    <span className="font-medium text-gray-800">~150 m²</span>
                    <span className="text-lg font-bold text-gray-900">3 000€ - 5 000€</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Note :</strong> Ces chiffres sont des estimations et peuvent varier en fonction de l'état exact du logement et des services spécifiques requis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Inclus */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Services Spécialisés Inclus
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              Chez SOS Nettoyage Diogène, nos interventions incluent systématiquement :
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">🧹 Débarras Complet</h3>
                <p className="text-gray-700 text-sm">
                  Tri minutieux et évacuation écologique de tous les objets et déchets.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">🦠 Désinfection et Assainissement</h3>
                <p className="text-gray-700 text-sm">
                  Traitement en profondeur des surfaces avec des produits professionnels pour éliminer germes, bactéries et mauvaises odeurs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">🐭 Traitement Anti-Nuisibles</h3>
                <p className="text-gray-700 text-sm">
                  Si nécessaire, désinsectisation ou dératisation complète pour un environnement sain.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">✨ Nettoyage Extrême</h3>
                <p className="text-gray-700 text-sm">
                  Nettoyage approfondi des sols, murs, plafonds et vitres, avec des techniques adaptées aux salissures les plus tenaces.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">❤️ Nettoyage Après Décès</h3>
                <p className="text-gray-700 text-sm">
                  Une approche respectueuse et discrète pour la remise en état des lieux.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">⏰ Disponibilité 7j/7</h3>
                <p className="text-gray-700 text-sm">
                  Intervention rapide et flexible pour répondre à tous vos besoins urgents.
                </p>
              </div>
            </div>
          </section>

          {/* Section Images */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <img 
                src={images[0].src}
                alt={images[0].alt}
                className="rounded-lg shadow-md w-full h-auto"
              />
              <img 
                src={images[1].src}
                alt={images[1].alt}
                className="rounded-lg shadow-md w-full h-auto"
              />
              <img 
                src={images[2].src}
                alt={images[2].alt}
                className="rounded-lg shadow-md w-full h-auto"
              />
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Ressources Utiles
                </h3>
                <p className="text-gray-700 mb-4">
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
          </div>

          {/* Devis Personnalisé */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Obtenir un Devis Personnalisé et Transparent
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Notre Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-gray-800 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Devis Gratuit et Sans Engagement</h4>
                      <p className="text-gray-700 text-sm">Contactez-nous pour une première évaluation par téléphone.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-gray-800 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Analyse Approfondie</h4>
                      <p className="text-gray-700 text-sm">Pour les situations complexes, une visite sur site peut être organisée pour évaluer précisément les besoins.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-gray-800 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Devis Détaillé</h4>
                      <p className="text-gray-700 text-sm">Nous nous engageons à une transparence totale sur nos tarifs, en vous expliquant chaque poste de dépense.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Pourquoi Choisir SOS Nettoyage Diogène ?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span><strong>Équipe Experte :</strong> Professionnels formés spécifiquement aux situations les plus difficiles</span>
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
          </section>

          {/* CTA Final */}
          <div className="mt-16 bg-white border border-gray-300 rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Besoin d'un Devis pour une Intervention Diogène ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Contactez <strong>SOS Nettoyage Diogène</strong> pour une estimation gratuite et personnalisée. 
              Notre expertise unique dans le nettoyage d'insalubrité et de l'extrême vous garantit une intervention professionnelle et respectueuse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:0767135458" 
                className="inline-block bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                📞 07 67 13 54 58
              </a>
              <a 
                href="https://sosnettoyagediogene.fr" 
                className="inline-block bg-gray-100 text-gray-800 border border-gray-300 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                🌐 Voir le site web
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
