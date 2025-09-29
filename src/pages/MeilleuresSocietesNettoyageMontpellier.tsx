import React from 'react';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { useSEO } from '../hooks/useSEO';

export default function MeilleuresSocietesNettoyageMontpellier() {
  const seoConfig = useSEO({
    title: "Les 10 Meilleures Sociétés de Nettoyage à Montpellier : Votre Guide Complet 2025",
    description: "Découvrez notre classement des meilleures entreprises de nettoyage à Montpellier. SOS Nettoyage Diogène, Au'clean, Nova Clean et plus. Services spécialisés et expertise reconnue dans l'Hérault.",
    keywords: "société de nettoyage, Montpellier, nettoyage professionnel, entreprise nettoyage, Hérault, SOS Nettoyage Diogène, Au'clean, Nova Clean, nettoyage bureaux, nettoyage industriel",
    canonical: "https://sosnettoyagediogene.fr/meilleures-societes-nettoyage-montpellier",
    ogTitle: "Les 10 Meilleures Sociétés de Nettoyage à Montpellier : Guide Complet",
    ogDescription: "Classement des meilleures entreprises de nettoyage à Montpellier. Expertise reconnue et services spécialisés dans l'Hérault.",
    ogImage: "https://sosnettoyagediogene.fr/images/examples/nettoyage1.jpg"
  });
  const images = [
    {
      src: '/images/examples/nettoyage1.jpg',
      alt: 'Services de nettoyage professionnel à Montpellier',
      caption: 'Équipe de nettoyage professionnel en action'
    },
    {
      src: '/images/examples/nettoyage2.jpg',
      alt: 'Nettoyage industriel et bureaux Montpellier',
      caption: 'Nettoyage de locaux professionnels'
    },
    {
      src: '/images/examples/nettoyage3.jpg',
      alt: 'Services de débarras et nettoyage extrême',
      caption: 'Intervention spécialisée en nettoyage extrême'
    },
    {
      src: '/images/examples/nettoyage4.webp',
      alt: 'Entreprises de nettoyage à Montpellier',
      caption: 'Services de propreté professionnels'
    }
  ];

  return (
    <>
      {seoConfig}
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Les 10 Meilleures Sociétés de Nettoyage à Montpellier : Votre Guide Complet
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez notre classement des entreprises de nettoyage les plus performantes à Montpellier et dans l'Hérault. 
              Expertise, qualité et professionnalisme garantis.
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Comment Choisir une Société de Nettoyage à Montpellier ?
            </h2>
            <p className="text-gray-700 mb-4">
              Lorsque vous recherchez une "société de nettoyage", il est crucial de distinguer les services spécialisés des offres plus générales. 
              Chaque entreprise a ses domaines d'expertise, de l'entretien régulier au nettoyage de l'extrême.
            </p>
            <p className="text-gray-700">
              Voici notre classement des meilleures entreprises, en mettant en lumière leurs domaines d'expertise spécifiques.
            </p>
          </div>

          <div className="space-y-8">
            {/* SOS Nettoyage Diogène */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-start mb-6">
                <span className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">1</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    SOS Nettoyage Diogène : L'Expertise Inégalée en Nettoyage Extrême et Insalubrité
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Site web :</strong> <a href="https://sosnettoyagediogene.fr" className="text-blue-600 hover:text-blue-800">SOS Nettoyage Diogène</a><br/>
                    <strong>Contact :</strong> 07 67 13 54 58
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                SOS Nettoyage Diogène se positionne comme la référence incontournable pour les situations les plus complexes. 
                Spécialisée dans le débarras et le nettoyage de l'extrême, y compris le syndrome de Diogène, l'insalubrité et les gros volumes, 
                cette entreprise offre une approche humaine, discrète et professionnelle.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <ResponsiveImage 
                  src={images[0].src}
                  alt={images[0].alt}
                  className="rounded-lg shadow-md"
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
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <span className="bg-gray-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">2</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Au'clean : Services de Nettoyage sur Mesure
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Site web :</strong> <a href="https://au-clean.fr" className="text-blue-600 hover:text-blue-800">Au'clean</a>
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Au'clean propose des services de nettoyage adaptés aux besoins spécifiques, qu'il s'agisse de missions ponctuelles ou régulières. 
                Ils interviennent principalement à Montpellier et dans l'Hérault.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <span className="bg-gray-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">3</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Nova Clean : Large Gamme de Services de Propreté
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Site web :</strong> <a href="https://www.nova-clean.fr" className="text-blue-600 hover:text-blue-800">Nova Clean</a>
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Nova Clean, entreprise de nettoyage à Montpellier, offre une large gamme de services incluant le nettoyage après déménagement, 
                fin de chantier, et le nettoyage de canapés et fauteuils.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <span className="bg-gray-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">4</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Acxelnet Propreté : Plus de 30 Ans d'Expérience
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Site web :</strong> <a href="https://www.acxelnet.fr" className="text-blue-600 hover:text-blue-800">Acxelnet Propreté</a>
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Créée en 1984, Acxelnet Propreté est une société de nettoyage professionnel avec plus de 30 ans d'expérience au service 
                des collectivités et des entreprises à Montpellier.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <span className="bg-gray-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">5</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Entreprise Nettoyage Montpellier 34 : Spécialiste du Nettoyage de Canapés
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Site web :</strong> <a href="https://www.entreprise-nettoyage-montpellier34.com" className="text-blue-600 hover:text-blue-800">Entreprise Nettoyage Montpellier 34</a>
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Cette entreprise, également connue sous le nom de Nova Clean, se spécialise dans le nettoyage de canapés, 
                fauteuils, chaises en tissu ou en cuir à Montpellier.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <span className="bg-gray-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">6</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Senet Propreté : Nettoyage de Bureaux et Industriel
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Site web :</strong> <a href="https://www.senet.fr" className="text-blue-600 hover:text-blue-800">Senet Propreté</a>
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Senet Propreté intervient comme agence de nettoyage de bureaux et société de nettoyage industriel pour les entreprises, 
                copropriétés et particuliers à Montpellier.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <span className="bg-gray-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">7</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Excel Clean 34 : Nettoyage Après Sinistre et Entretien
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Site web :</strong> <a href="https://excel-clean34.fr" className="text-blue-600 hover:text-blue-800">Excel Clean 34</a>
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Excel Clean est une société de nettoyage à Montpellier et ses environs, proposant des services après sinistre, 
                l'entretien d'espaces verts, le nettoyage de vitres et de fin de chantier.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <span className="bg-gray-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">8</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Espace Propreté : Spécialiste des Locaux Professionnels
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Site web :</strong> <a href="https://espace-proprete.com" className="text-blue-600 hover:text-blue-800">Espace Propreté</a>
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Créée en 1998, Espace Propreté est spécialisée dans le nettoyage de bureaux et de locaux professionnels à Montpellier.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <span className="bg-gray-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">9</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Planète Grandes Écoles : Classement des Meilleures Entreprises
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Site web :</strong> <a href="https://www.planetegrandesecoles.com" className="text-blue-600 hover:text-blue-800">Planète Grandes Écoles</a>
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Planète Grandes Écoles propose un classement et une analyse des meilleures entreprises de nettoyage à Montpellier, 
                offrant une perspective sur les acteurs du marché.
              </p>
            </div>
          </div>

          {/* Section avec images */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Nos Interventions en Images
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ResponsiveImage 
                src={images[1].src}
                alt={images[1].alt}
                className="rounded-lg shadow-md"
              />
              <ResponsiveImage 
                src={images[2].src}
                alt={images[2].alt}
                className="rounded-lg shadow-md"
              />
              <ResponsiveImage 
                src={images[3].src}
                alt={images[3].alt}
                className="rounded-lg shadow-md"
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

          {/* Section CTA */}
          <div className="mt-12 bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Besoin d'un Nettoyage Professionnel à Montpellier ?
            </h2>
            <p className="text-blue-100 mb-6">
              Contactez SOS Nettoyage Diogène pour une intervention rapide et professionnelle. 
              Disponibles 7j/7 pour tous vos besoins de nettoyage spécialisé.
            </p>
            <a 
              href="tel:0767135458" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              07 67 13 54 58
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
