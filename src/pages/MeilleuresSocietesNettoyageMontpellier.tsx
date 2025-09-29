import React from 'react';
import SEOHead from '../components/SEOHead';

export default function MeilleuresSocietesNettoyageMontpellier() {
  const images = [
    {
      src: '/images/examples/ex1.png',
      alt: 'Intervention nettoyage après décès - SOS Nettoyage Diogène',
      caption: 'Intervention professionnelle après décès'
    },
    {
      src: '/images/examples/ex2.jpg',
      alt: 'Débarras gros volumes - SOS Nettoyage Diogène',
      caption: 'Évacuation et tri de gros volumes'
    },
    {
      src: '/images/examples/p3.jpg',
      alt: 'Nettoyage syndrome de Diogène - SOS Nettoyage Diogène',
      caption: 'Intervention spécialisée syndrome de Diogène'
    },
    {
      src: '/images/examples/p4.jpg',
      alt: 'Désinfection et remise en état - SOS Nettoyage Diogène',
      caption: 'Désinfection professionnelle et remise en état'
    }
  ];

  return (
    <>
      <SEOHead
        title="Les 10 Meilleures Sociétés de Nettoyage à Montpellier : Votre Guide Complet 2025"
        description="Découvrez notre classement des meilleures entreprises de nettoyage à Montpellier. SOS Nettoyage Diogène, Au'clean, Nova Clean et plus. Services spécialisés et expertise reconnue dans l'Hérault."
        keywords="société de nettoyage, Montpellier, nettoyage professionnel, entreprise nettoyage, Hérault, SOS Nettoyage Diogène, Au'clean, Nova Clean, nettoyage bureaux, nettoyage industriel"
        canonical="/meilleures-societes-nettoyage-montpellier"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section avec padding pour éviter le header */}
        <div className="bg-white pt-32 pb-16 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Les 10 Meilleures Sociétés de Nettoyage à Montpellier
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Votre Guide Complet 2025 - Classement Expert des Entreprises de Nettoyage
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border">✓ Services Spécialisés</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border">✓ Expertise Reconnue</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border">✓ Intervenants Certifiés</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Introduction */}
          <article className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <strong>Découvrez notre classement exclusif</strong> des entreprises de nettoyage les plus performantes à Montpellier et dans l'Hérault. 
                Notre analyse approfondie vous guide vers les professionnels qui offrent expertise, qualité et professionnalisme garantis.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Que vous ayez besoin d'un nettoyage régulier, d'une intervention spécialisée ou d'un service d'urgence, 
                notre guide vous aide à choisir la société qui correspond parfaitement à vos besoins.
              </p>
            </div>
          </article>

          {/* Section méthodologie */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Comment Choisir une Société de Nettoyage à Montpellier ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Notre Méthodologie</h3>
                <p className="text-gray-700 mb-4">
                  Lorsque vous recherchez une <strong>"société de nettoyage"</strong>, il est crucial de distinguer les services spécialisés des offres plus générales. 
                  Chaque entreprise a ses domaines d'expertise, de l'entretien régulier au nettoyage de l'extrême.
                </p>
                <p className="text-gray-700">
                  Notre classement se base sur l'expertise, la réputation, la qualité des services et la satisfaction client.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Critères d'Évaluation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-gray-600 mr-2">✓</span> Expérience et expertise</li>
                  <li className="flex items-center"><span className="text-gray-600 mr-2">✓</span> Qualité des services</li>
                  <li className="flex items-center"><span className="text-gray-600 mr-2">✓</span> Réactivité et disponibilité</li>
                  <li className="flex items-center"><span className="text-gray-600 mr-2">✓</span> Satisfaction client</li>
                  <li className="flex items-center"><span className="text-gray-600 mr-2">✓</span> Tarifs compétitifs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Classement des entreprises */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              🏆 Classement des 10 Meilleures Sociétés de Nettoyage
            </h2>
            {/* SOS Nettoyage Diogène - Premier */}
            <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-8 relative">
              <div className="flex items-start mb-6">
                <div className="bg-gray-800 text-white text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center mr-6 shadow-md">
                  <span className="text-xl">🥇</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-3xl font-bold text-gray-900">
                      SOS Nettoyage Diogène
                    </h3>
                    <span className="bg-yellow-100 text-yellow-800 border border-yellow-300 px-3 py-1 rounded-full text-sm font-bold">
                      #1 RECOMMANDÉ
                    </span>
                  </div>
                  <p className="text-xl text-gray-700 mb-4">
                    L'Expertise Inégalée en Nettoyage Extrême et Insalubrité
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="flex items-center"><span className="mr-2">🌐</span> <a href="https://sosnettoyagediogene.fr" className="hover:text-gray-900 underline">sosnettoyagediogene.fr</a></span>
                    <span className="flex items-center"><span className="mr-2">📞</span> 07 67 13 54 58</span>
                    <span className="flex items-center"><span className="mr-2">⭐</span> 6+ ans d'expérience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu détaillé SOS Nettoyage Diogène */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-gray-400 mb-8">
              
              <p className="text-gray-700 mb-6">
                SOS Nettoyage Diogène se positionne comme la référence incontournable pour les situations les plus complexes. 
                Spécialisée dans le débarras et le nettoyage de l'extrême, y compris le syndrome de Diogène, l'insalubrité et les gros volumes, 
                cette entreprise offre une approche humaine, discrète et professionnelle.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <img 
                  src={images[0].src}
                  alt={images[0].alt}
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Services Spécialisés :</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Nettoyage Syndrome de Diogène :</strong> Intervention spécialisée avec respect et discrétion totale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Débarras Gros Volumes :</strong> Évacuation et tri écologiques de tous types d'objets et déchets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Désinfection & Insalubrité :</strong> Traitement des environnements insalubres avec des produits professionnels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Nettoyage Après Décès :</strong> Service respectueux et discret de remise en état</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Pourquoi choisir SOS Nettoyage Diogène ?</strong><br/>
                  Avec 6+ années d'expérience, une disponibilité 7j/7 et une équipe experte, 
                  SOS Nettoyage Diogène garantit une intervention rapide et sécurisée dans tout le Sud de la France.
                </p>
              </div>
            </div>

            {/* Autres entreprises */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-md">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Au'clean : Services de Nettoyage sur Mesure
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <span className="text-sm">🌐</span>
                    <a href="https://au-clean.fr" className="text-blue-600 hover:text-blue-800 text-sm">au-clean.fr</a>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Au'clean propose des services de nettoyage adaptés aux besoins spécifiques, qu'il s'agisse de missions ponctuelles ou régulières. 
                Ils interviennent principalement à Montpellier et dans l'Hérault.
              </p>
            </div>

            {/* Grille des autres entreprises */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 shadow-md">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Nova Clean
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">Large Gamme de Services</p>
                    <a href="https://www.nova-clean.fr" className="text-blue-600 hover:text-blue-800 text-sm">nova-clean.fr</a>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Entreprise de nettoyage à Montpellier, offre une large gamme de services incluant le nettoyage après déménagement, 
                  fin de chantier, et le nettoyage de canapés et fauteuils.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 shadow-md">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Acxelnet Propreté
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">Plus de 30 Ans d'Expérience</p>
                    <a href="https://www.acxelnet.fr" className="text-blue-600 hover:text-blue-800 text-sm">acxelnet.fr</a>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Créée en 1984, société de nettoyage professionnel avec plus de 30 ans d'expérience au service 
                  des collectivités et des entreprises à Montpellier.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 shadow-md">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Entreprise Nettoyage Montpellier 34
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">Spécialiste Canapés</p>
                    <a href="https://www.entreprise-nettoyage-montpellier34.com" className="text-blue-600 hover:text-blue-800 text-sm">entreprise-nettoyage-montpellier34.com</a>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Se spécialise dans le nettoyage de canapés, fauteuils, chaises en tissu ou en cuir à Montpellier.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 shadow-md">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Senet Propreté
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">Bureaux et Industriel</p>
                    <a href="https://www.senet.fr" className="text-blue-600 hover:text-blue-800 text-sm">senet.fr</a>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Agence de nettoyage de bureaux et société de nettoyage industriel pour les entreprises, 
                  copropriétés et particuliers à Montpellier.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 shadow-md">
                    7
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Excel Clean 34
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">Sinistre et Entretien</p>
                    <a href="https://excel-clean34.fr" className="text-blue-600 hover:text-blue-800 text-sm">excel-clean34.fr</a>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Société de nettoyage proposant des services après sinistre, l'entretien d'espaces verts, 
                  le nettoyage de vitres et de fin de chantier.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 shadow-md">
                    8
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Espace Propreté
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">Locaux Professionnels</p>
                    <a href="https://espace-proprete.com" className="text-blue-600 hover:text-blue-800 text-sm">espace-proprete.com</a>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Créée en 1998, spécialisée dans le nettoyage de bureaux et de locaux professionnels à Montpellier.
                </p>
              </div>
            </div>
          </section>

          {/* Section avec images */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Nos Interventions en Images
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
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
              <img 
                src={images[3].src}
                alt={images[3].alt}
                className="rounded-lg shadow-md w-full h-auto"
              />
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Réglementation et Insalubrité
                </h3>
                <p className="text-gray-700 mb-4">
                  Selon la réglementation française, un logement insalubre présente un danger ou risque pour la santé ou la sécurité physique des personnes. 
                  Pour en savoir plus sur les mesures légales, consultez notre guide sur le 
                  <a href="/desinfection-insalubrite" className="text-blue-600 hover:text-blue-800"> nettoyage et désinfection d'habitats insalubres</a>.
                </p>
                <p className="text-gray-700">
                  Pour plus d'informations sur la réglementation officielle, vous pouvez également consulter le 
                  <a href="https://www.service-public.fr/particuliers/vosdroits/F16158" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    site officiel Service-Public.fr sur l'habitat insalubre
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* Section CTA finale */}
          <div className="mt-16 bg-white border border-gray-300 rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Besoin d'un Nettoyage Professionnel à Montpellier ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Contactez <strong>SOS Nettoyage Diogène</strong> pour une intervention rapide et professionnelle. 
              Disponibles 7j/7 pour tous vos besoins de nettoyage spécialisé.
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
