import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';

const SyndromeDiogeneBeziers: React.FC = () => {
  const seoConfig = {
    title: "Nettoyage Syndrome de Diogène Béziers | Service Historique & Expert | SOS Nettoyage Diogène",
    description: "Service professionnel de nettoyage syndrome de Diogène à Béziers (Hérault). Expertise dans les logements historiques du centre-ville, protocoles adaptés aux contraintes architecturales. Partenaire de la CCAS de Béziers et des services de santé publique.",
    keywords: "nettoyage syndrome diogène beziers, syndrome diogène centre historique, nettoyage spécialisé beziers, CCAS beziers, contraintes architecturales beziers, services santé publique beziers",
    canonical: "/nettoyage-syndrome-diogene-beziers"
  };

  return (
    <>
      <SEOHead {...seoConfig} />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 overflow-hidden">
          {/* Image de fond de la ville */}
          <div className="absolute inset-0">
            <img 
              src="/images/cities/bézier.webp" 
              alt="Vue de Béziers, ville historique de l'Hérault"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-800/30"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nettoyage Syndrome de Diogène à Béziers</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Service spécialisé de nettoyage et débarras pour les situations de syndrome de Diogène dans la ville historique de Béziers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                📧 Devis Gratuit
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          {/* Définition */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu'est-ce que le Syndrome de Diogène ?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Le syndrome de Diogène est un <strong>trouble comportemental</strong> caractérisé par une accumulation compulsive d'objets et une négligence de l'hygiène personnelle et de l'habitat. Cette condition touche principalement les personnes âgées et nécessite une intervention professionnelle spécialisée.
              </p>
              <p className="text-gray-700 mb-6">
                À Béziers, notre équipe intervient avec discrétion et respect pour nettoyer et remettre en état les logements concernés par ce syndrome, en respectant les contraintes architecturales du centre historique.
              </p>
            </div>
          </div>

          {/* Notre service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Service à Béziers</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Nettoyage patrimonial</h3>
                    <p className="text-gray-700 text-sm">Intervention respectueuse dans les logements historiques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Débarras complet</h3>
                    <p className="text-gray-700 text-sm">Tri, évacuation et recyclage des objets accumulés</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Désinfection</h3>
                    <p className="text-gray-700 text-sm">Traitement sanitaire adapté aux bâti ancien</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Équipement adapté</h3>
                    <p className="text-gray-700 text-sm">Matériel compact pour les escaliers étroits</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Processus</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Devis gratuit</h3>
                    <p className="text-gray-700 text-sm">Évaluation des lieux et estimation des travaux nécessaires</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Intervention</h3>
                    <p className="text-gray-700 text-sm">Nettoyage, débarras et désinfection par une équipe formée</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Remise en état</h3>
                    <p className="text-gray-700 text-sm">Nettoyage final et conseils de prévention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spécificités Béziers */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Spécificités à Béziers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Contraintes architecturales</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Escaliers étroits et pentus</li>
                  <li>• Accès difficiles</li>
                  <li>• Bâtiments historiques</li>
                  <li>• Contraintes de circulation</li>
                  <li>• Réglementation patrimoine</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Nos solutions</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Équipement compact</li>
                  <li>• Techniques adaptées</li>
                  <li>• Respect du bâti ancien</li>
                  <li>• Évacuation manuelle</li>
                  <li>• Protocoles spécialisés</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zone d'Intervention à Béziers</h2>
            <p className="text-gray-700 mb-6">
              Nous intervenons dans tous les quartiers de Béziers :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Centre historique</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Cité médiévale</li>
                  <li>• Allées Paul-Riquet</li>
                  <li>• Place du Forum</li>
                  <li>• Rue du Capus</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Quartiers résidentiels</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Devèze</li>
                  <li>• Saint-Aphrodise</li>
                  <li>• Centre-ville</li>
                  <li>• Saint-Jacques</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Périphérie</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Les Pradettes</li>
                  <li>• Crouzette</li>
                  <li>• Montblanc</li>
                  <li>• Saint-Saëns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Liens utiles */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ressources Utiles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Informations officielles</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.ville-beziers.fr/sante-et-hygiene/hygiene-habitat-et-cadre-de-vie/linsalubrite" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Ville de Béziers - Hygiène et Habitat
                    </a>
                    <span className="text-gray-600 text-sm block">Informations sur l'insalubrité et les démarches municipales</span>
                  </li>
                  <li>
                    <a href="https://www.ville-beziers.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Mairie de Béziers
                    </a>
                    <span className="text-gray-600 text-sm block">Services sociaux et aides aux personnes fragiles</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Nos autres services</h3>
                <ul className="space-y-2">
                  <li><Link to="/nettoyage-apres-deces" className="text-blue-600 hover:underline">Nettoyage après décès</Link></li>
                  <li><Link to="/desinfection-insalubrite" className="text-blue-600 hover:underline">Désinfection insalubrité</Link></li>
                  <li><Link to="/debarras-gros-volumes" className="text-blue-600 hover:underline">Débarras gros volumes</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin d'une Intervention ?</h2>
            <p className="text-xl mb-6">
              Notre équipe spécialisée intervient rapidement dans toute la ville de Béziers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                📧 Demande de Devis
              </Link>
            </div>
          </div>

          {/* Liens connexes */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pages Connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/nettoyage-syndrome-diogene-sete" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Nettoyage Syndrome de Diogène à Sète</h3>
                <p className="text-gray-700 text-sm">Découvrez nos services dans la ville maritime voisine</p>
              </Link>
              <Link to="/blog/syndrome-diogene-identifier-gerer" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Identifier et Gérer le Syndrome de Diogène</h3>
                <p className="text-gray-700 text-sm">Conseils et informations sur la détection précoce</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SyndromeDiogeneBeziers;