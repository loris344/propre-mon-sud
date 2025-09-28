import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';

const SyndromeDiogeneSete: React.FC = () => {
  const seoConfig = {
    title: "Nettoyage Syndrome de Diogène Sète | Intervention Marine & Professionnelle | SOS Nettoyage Diogène",
    description: "Service expert de nettoyage syndrome de Diogène à Sète (Hérault). Spécialisé dans les logements côtiers, équipe formée aux risques sanitaires marins et urbains. Partenaire de la mairie de Sète et des services sociaux. Intervention 24h/24.",
    keywords: "nettoyage syndrome diogène sete, syndrome diogène ville maritime, nettoyage spécialisé sete, mairie sete partenariat, services sociaux sete, risques sanitaires marins",
    canonical: "/nettoyage-syndrome-diogene-sete"
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
              src="/images/cities/sete.jpg" 
              alt="Vue de Sète, ville maritime de l'Hérault"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-800/30"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nettoyage Syndrome de Diogène à Sète</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Service spécialisé de nettoyage et débarras pour les situations de syndrome de Diogène dans la ville maritime de Sète
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0767135458" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📞 07 67 13 54 58
              </a>
              <Link to="/contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
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
                À Sète, notre équipe intervient avec discrétion et respect pour nettoyer et remettre en état les logements concernés par ce syndrome, en tenant compte des spécificités de l'environnement maritime.
              </p>
            </div>
          </div>

          {/* Notre service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Service à Sète</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Nettoyage maritime</h3>
                    <p className="text-gray-700 text-sm">Traitement spécifique des problèmes liés à l'humidité marine</p>
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
                    <p className="text-gray-700 text-sm">Traitement anti-moisissures et anti-salinité</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Intervention 24h/24</h3>
                    <p className="text-gray-700 text-sm">Disponibilité permanente pour les urgences</p>
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

          {/* Spécificités Sète */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Spécificités à Sète</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Défis environnementaux</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Humidité marine élevée</li>
                  <li>• Risque de moisissures</li>
                  <li>• Corrosion saline</li>
                  <li>• Contraintes d'accès étroits</li>
                  <li>• Densité urbaine importante</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Nos solutions</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Produits anti-humidité</li>
                  <li>• Traitement anti-moisissures</li>
                  <li>• Équipement compact</li>
                  <li>• Protocoles adaptés</li>
                  <li>• Évacuation spécialisée</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zone d'Intervention à Sète</h2>
            <p className="text-gray-700 mb-6">
              Nous intervenons dans tous les quartiers de Sète :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Centre historique</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Quartier Haut</li>
                  <li>• Quartier Bas</li>
                  <li>• Marché aux poissons</li>
                  <li>• Port de pêche</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Quartiers résidentiels</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Corniche</li>
                  <li>• Les Quilles</li>
                  <li>• Les Plages</li>
                  <li>• Villeroy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Zones portuaires</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Port de commerce</li>
                  <li>• Port de plaisance</li>
                  <li>• Zone industrielle</li>
                  <li>• Ponton Saint-Louis</li>
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
                    <a href="https://www.francebleu.fr/infos/societe/un-bout-de-mon-plafond-est-en-train-de-tomber-ils-se-rassemblent-contre-les-logements-insalubres-a-sete-8076530" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      France Bleu - Lutte contre l'insalubrité à Sète
                    </a>
                    <span className="text-gray-600 text-sm block">Reportage sur les initiatives locales contre les logements insalubres</span>
                  </li>
                  <li>
                    <a href="https://www.sete.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Mairie de Sète
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
              Notre équipe spécialisée intervient rapidement dans toute la ville de Sète
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0767135458" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📞 07 67 13 54 58
              </a>
              <Link to="/contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                📧 Demande de Devis
              </Link>
            </div>
          </div>

          {/* Liens connexes */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pages Connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/nettoyage-syndrome-diogene-montpellier" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Nettoyage Syndrome de Diogène à Montpellier</h3>
                <p className="text-gray-700 text-sm">Découvrez nos services dans la métropole voisine</p>
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

export default SyndromeDiogeneSete;