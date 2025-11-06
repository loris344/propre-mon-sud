import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';

const SyndromeDiogeneMarseille: React.FC = () => {
  const seoConfig = {
    title: "Nettoyage syndrome de Diogène à Marseille | Débarras & Désinfection – SOS Nettoyage Diogène",
    description: "Intervention discrète 7j/7 à Marseille: débarras gros volumes, tri, désinfection et remise en état pour syndrome de Diogène. Devis gratuit et confidentiel.",
    keywords: "syndrome de Diogène Marseille, nettoyage Diogène Marseille, débarras insalubrité Marseille, nettoyage extrême Marseille, débarras gros volumes 13, désinfection appartement Marseille, nettoyage spécialisé Marseille, bouches-du-rhone",
    canonical: "/nettoyage-syndrome-diogene-marseille"
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
              src="/images/cities/marseille1.jpg" 
              alt="Vue de Marseille, ville phocéenne des Bouches-du-Rhône"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-800/30"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Syndrome de Diogène à Marseille – Nettoyage, Débarras, Désinfection</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Intervention discrète et professionnelle à Marseille (1er–16e) et dans tout le 13: débarras gros volumes, tri sélectif, évacuation réglementée, désinfection et remise en état.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                📧 Devis Gratuit
              </Link>
            </div>
            <div className="mt-6 text-blue-100">
              <p className="text-lg font-medium">Disponible 7j/7 – Devis gratuit et confidentiel</p>
              <p className="text-sm">Équipe formée au risque biologique et au nettoyage de l'extrême</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          {/* Définition */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu'est-ce que le syndrome de Diogène ?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Le syndrome de Diogène est un <strong>trouble d'accumulation extrême</strong> avec déni de l'insalubrité et risques sanitaires. Cette condition nécessite une intervention professionnelle spécialisée et respectueuse.
              </p>
                <p className="text-gray-700 mb-6">
                À Marseille, notre équipe intervient sans jugement, avec une approche humaine et méthodique. Pour des repères santé grand public, consultez les pages TOC/compulsions et santé mentale sur <a href="https://www.ameli.fr/assure/sante/themes/toc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ameli.fr</a>.
              </p>
            </div>
          </div>

          {/* Nos services */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Services Spécialisés à Marseille</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Nettoyage "Syndrome de Diogène"</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Diagnostic discret (photos/visite)</li>
                    <li>• Plan d'intervention et EPI adaptés</li>
                    <li>• Sauvegarde des documents/objets importants</li>
                    <li>• Tri, évacuation, remise en état complète</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Débarras Gros Volumes et Évacuation Réglementée</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Logistique, bennes si besoin</li>
                    <li>• Acheminement vers déchèteries AMP</li>
                    <li>• Respect du règlement (passages/limites)</li>
                    <li>• Consignes officielles: <a href="https://dechets.ampmetropole.fr/je-trie-en-decheterie/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Je trie en déchèterie</a></li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Désinfection & Traitement Insalubrité</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Décontamination, neutralisation des odeurs</li>
                    <li>• Lutte anti-nuisibles</li>
                    <li>• Bonnes pratiques sanitaires</li>
                    <li>• Usage raisonné des biocides selon l'<a href="https://www.anses.fr/en/content/bed-bugs-13-questions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ANSES</a></li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Nettoyage Après Décès</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Intervention respectueuse et discrète</li>
                    <li>• Décontamination et remise en état</li>
                    <li>• Protocoles sanitaires stricts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Méthodologie Transparente</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Évaluation et Devis</h3>
                    <p className="text-gray-700 text-sm">Échange confidentiel, estimation volumes/risques/délais. Devis clair, sans surprise.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tri et Sécurisation</h3>
                    <p className="text-gray-700 text-sm">Sauvegarde des documents/souvenirs. Tri sélectif, dons si possibles, préparation évacuation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Débarras et Logistique</h3>
                    <p className="text-gray-700 text-sm">Équipe dimensionnée, bennes, manutention. Acheminement et traçabilité vers filières/déchèteries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Nettoyage et Restitution</h3>
                    <p className="text-gray-700 text-sm">Dégraissage, décapage, lessivage. Désinfection, neutralisation des odeurs. Remise en état et conseils d'entretien.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zones d'Intervention – Marseille et 13</h2>
            <p className="text-gray-700 mb-6">
              Intervention sous 24–72h selon l'ampleur
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Marseille 1er–16e</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Vieux-Port</li>
                  <li>• Endoume</li>
                  <li>• Prado</li>
                  <li>• Mazargues</li>
                  <li>• La Rose</li>
                  <li>• L'Estaque</li>
                  <li>• Tous les arrondissements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Métropole Aix-Marseille-Provence</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Aix-en-Provence</li>
                  <li>• Aubagne</li>
                  <li>• La Ciotat</li>
                  <li>• Cassis</li>
                  <li>• Gardanne</li>
                  <li>• Vitrolles</li>
                  <li>• Marignane</li>
                  <li>• Martigues</li>
                  <li>• Salon-de-Provence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vues de Marseille */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Marseille, Ville Phocéenne</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <img
                  src="/images/cities/marseille1.jpg"
                  alt="Vue de Marseille - Port et Vieux-Port"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">Port et Vieux-Port</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/cities/marseille2.jpg"
                  alt="Vue de Marseille - Centre-ville et monuments"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">Centre-ville et monuments</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/cities/marseille3.jpg"
                  alt="Vue de Marseille - Quartiers et architecture"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">Quartiers et architecture</p>
              </div>
            </div>
          </div>

          {/* Images d'exemples */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Réalisations à Marseille</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <img
                  src="/images/examples/ex1.png"
                  alt="Intervention nettoyage syndrome de Diogène Marseille - Avant"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">Intervention professionnelle</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/examples/ex2.jpg"
                  alt="Résultat après nettoyage spécialisé Marseille - Après"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">Résultat exceptionnel</p>
              </div>
            </div>
          </div>

          {/* Témoignages */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Témoignages (Note moyenne 4,7/5)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">"Intervention rapide et très discrète, résultat impeccable."</p>
                <p className="text-sm text-gray-600 font-medium">– Marseille 8e</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">"Beaucoup d'écoute et de respect, gros volumes gérés en une journée."</p>
                <p className="text-sm text-gray-600 font-medium">– Marseille 3e</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link to="/#avis" className="text-blue-600 hover:underline font-medium">
                Voir d'autres avis vérifiés →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ – Diogène Marseille</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Délai d'intervention ?</h3>
                <p className="text-gray-700 text-sm">24–72h (selon volume/accès).</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Discrétion ?</h3>
                <p className="text-gray-700 text-sm">Oui, équipes et véhicules discrets, respect du voisinage.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Documents/objets importants ?</h3>
                <p className="text-gray-700 text-sm">Tri prioritaire pour les préserver.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Où vont les déchets ?</h3>
                <p className="text-gray-700 text-sm">Déchèteries AMP et filières agréées; recyclage maximal. Règles d'accès/limites: <a href="https://dechets.ampmetropole.fr/wp-content/uploads/2023/04/R%C3%A9glement-d%C3%A9ch%C3%A8teries_Marseille-Provence.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Règlement (PDF)</a></p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Désinfection complète ?</h3>
                <p className="text-gray-700 text-sm">Oui, protocole et produits professionnels (recours chimique en dernier selon ANSES).</p>
              </div>
            </div>
          </div>

          {/* Nouveau règlement 2025 */}
          <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">⚠️ Nouveau Règlement des Déchèteries 2025</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-800 mb-3">Ce qui change au 1er juillet 2025</h3>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• <strong>3 passages maximum par jour</strong> (toutes déchèteries confondues)</li>
                  <li>• <strong>36 passages par an maximum</strong> (contrôle par plaque d'immatriculation)</li>
                  <li>• <strong>Horaires harmonisés</strong> en 4 catégories selon la taille</li>
                  <li>• <strong>Quantités limitées</strong> par type de déchets</li>
                  <li>• <strong>Véhicules professionnels interdits</strong> même pour usage personnel</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-3">Déchets acceptés</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Bois, métaux, cartons, verre</li>
                  <li>• Électroménager et électronique</li>
                  <li>• Déchets verts (2m³/jour)</li>
                  <li>• Gravats (1m³/jour)</li>
                  <li>• Produits dangereux (5L/jour)</li>
                  <li>• Pneus (2 unités/semaine)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-100 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Important :</strong> Les passages exceptionnels peuvent être accordés pour des événements spécifiques (décès, déménagement, divorce) sur demande préalable directement sur site.
              </p>
            </div>
          </div>

          {/* Conseils pratiques */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conseils Pratiques à Marseille</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Gestion des déchets métropolitains</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://dechets.ampmetropole.fr/je-trie-en-decheterie/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Je trie en déchèterie
                    </a>
                    <span className="text-gray-600 block">Informations et liste des déchèteries</span>
                  </li>
                  <li>
                    <a href="https://ampmetropole.fr/je-trouve-ma-decheterie/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Je trouve ma déchèterie
                    </a>
                    <span className="text-gray-600 block">Localiser une déchèterie AMP</span>
                  </li>
                  <li>
                    <a href="https://dechets.ampmetropole.fr/nouveau-reglement-des-decheteries-ce-qui-change-au-1er-juillet-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Nouveau règlement au 01/07/2025
                    </a>
                    <span className="text-gray-600 block">Modalités d'accès, limites, etc.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Ressources santé et nuisibles</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://www.ameli.fr/assure/sante/themes/toc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Santé mentale/TOC (ameli.fr)
                    </a>
                    <span className="text-gray-600 block">Repères grand public</span>
                  </li>
                  <li>
                    <a href="https://www.anses.fr/en/content/bed-bugs-13-questions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      ANSES – Bed bugs FAQ
                    </a>
                    <span className="text-gray-600 block">Bonnes pratiques officielles</span>
                  </li>
                  <li>
                    <a href="https://www.anses.fr/en/content/bed-bugs-13-questions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Produits chimiques en dernier recours
                    </a>
                    <span className="text-gray-600 block">Recommandations ANSES</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Devis Gratuit et Confidentiel</h2>
            <p className="text-xl mb-6">
              Intervention 7j/7 sur Marseille et Bouches-du-Rhône<br />
              Discrétion garantie – Approche humaine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                📧 Demander un Devis
              </Link>
            </div>
            <p className="text-blue-100 mt-4 text-sm">
              <a href="mailto:contact@sosnettoyagediogene.fr" className="hover:underline">contact@sosnettoyagediogene.fr</a>
            </p>
          </div>

          {/* Liens connexes */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pages Connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/nettoyage-syndrome-diogene-montpellier" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Nettoyage Syndrome de Diogène à Montpellier</h3>
                <p className="text-gray-700 text-sm">Découvrez nos services dans la capitale de l'Occitanie</p>
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

export default SyndromeDiogeneMarseille;
