import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';

const SyndromeDiogeneMontpellier: React.FC = () => {
  const seoConfig = {
    title: "Nettoyage Syndrome de Diogène Montpellier | Service Expert & Respectueux | SOS Nettoyage Diogène",
    description: "Service spécialisé de nettoyage syndrome de Diogène à Montpellier (Hérault). Équipe formée aux protocoles sanitaires, intervention discrète et accompagnement psychologique. Devis gratuit 7j/7.",
    keywords: "nettoyage syndrome diogène montpellier, syndrome diogène herault, nettoyage spécialisé montpellier, protocoles sanitaires montpellier, accompagnement psychologique montpellier",
    canonical: "/nettoyage-syndrome-diogene-montpellier"
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
              src="/images/cities/montpellier.jpg" 
              alt="Vue de Montpellier, métropole de l'Hérault"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-800/30"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nettoyage Syndrome de Diogène à Montpellier</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Service spécialisé de nettoyage et débarras pour les situations de syndrome de Diogène à Montpellier et sa métropole
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
                À Montpellier, notre équipe intervient avec discrétion et respect pour nettoyer et remettre en état les logements concernés par ce syndrome.
              </p>
            </div>
          </div>

          {/* Notre service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Service à Montpellier</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Nettoyage spécialisé</h3>
                    <p className="text-gray-700 text-sm">Équipement professionnel et produits adaptés aux situations d'accumulation</p>
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
                    <p className="text-gray-700 text-sm">Traitement sanitaire complet des lieux</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Discrétion totale</h3>
                    <p className="text-gray-700 text-sm">Respect de la vie privée et confidentialité garantie</p>
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

          {/* Signes d'alerte */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Signes d'Alerte du Syndrome de Diogène</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Comportements observables</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Accumulation excessive d'objets</li>
                  <li>• Refus de jeter quoi que ce soit</li>
                  <li>• Négligence de l'hygiène personnelle</li>
                  <li>• Isolement social croissant</li>
                  <li>• Refus d'aide extérieure</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">État du logement</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Encombrement extrême</li>
                  <li>• Odeurs nauséabondes</li>
                  <li>• Présence d'insectes ou rongeurs</li>
                  <li>• Dégradation de l'habitat</li>
                  <li>• Risques sanitaires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zone d'Intervention à Montpellier</h2>
            <p className="text-gray-700 mb-6">
              Nous intervenons dans tous les quartiers de Montpellier et sa métropole :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Centre-ville</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Écusson</li>
                  <li>• Comédie</li>
                  <li>• Antigone</li>
                  <li>• Port Marianne</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Quartiers résidentiels</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Figuerolles</li>
                  <li>• Boutonnet</li>
                  <li>• Les Cévennes</li>
                  <li>• La Paillade</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Périphérie</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Castelnau-le-Lez</li>
                  <li>• Lattes</li>
                  <li>• Pérols</li>
                  <li>• Juvignac</li>
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
                    <a href="https://www.montpellier3m.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Montpellier Méditerranée Métropole
                    </a>
                    <span className="text-gray-600 text-sm block">Services sociaux et aide aux personnes fragiles</span>
                  </li>
                  <li>
                    <a href="https://www.herault.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Préfecture de l'Hérault
                    </a>
                    <span className="text-gray-600 text-sm block">Réglementation en matière d'hygiène et salubrité</span>
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
              Contactez-nous pour un devis gratuit et une intervention discrète à Montpellier
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
                <p className="text-gray-700 text-sm">Découvrez nos services dans la ville maritime de Sète</p>
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

export default SyndromeDiogeneMontpellier;