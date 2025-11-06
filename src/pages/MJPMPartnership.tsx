import { Shield, Heart } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useSEO } from '../hooks/useSEO';

const MJPMPartnership = () => {
  const seoConfig = useSEO();
  return (
    <>
      <SEOHead {...seoConfig} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Partenariat Associations MJPM
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et offrez à vos protégés 
            <span className="font-semibold text-blue-600"> -20% de réduction</span> sur nos services de nettoyage spécialisé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Avantages du partenariat */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              Avantages du Partenariat
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">-20% de réduction</h3>
                  <p className="text-sm text-gray-600">Sur tous nos services pour vos protégés</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Intervention prioritaire</h3>
                  <p className="text-sm text-gray-600">Nos équipes interviennent en priorité pour vos protégés</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Formation spécialisée</h3>
                  <p className="text-sm text-gray-600">Nos équipes sont formées aux situations de vulnérabilité</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <span className="text-orange-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Disponibilité 7j/7</h3>
                  <p className="text-sm text-gray-600">Intervention possible tous les jours de 8h à 20h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire Google Forms */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Inscription au Partenariat
            </h2>
            <p className="text-gray-600 mb-6">
              Remplissez ce formulaire pour devenir partenaire MJPM et bénéficier de nos tarifs préférentiels pour vos protégés.
            </p>
            
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSedopfulr4ikeqfINu0RSePgcq-DPSpW77B0qkZ3GD3d6AKgA/viewform?embedded=true" 
              width="100%" 
              height="500" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="rounded-lg"
            >
              Chargement…
            </iframe>
          </div>
        </div>

        {/* Informations de contact */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Questions sur le partenariat MJPM ?
            </h3>
            <p className="text-gray-600 mb-4">
              Notre équipe est à votre disposition pour vous accompagner dans votre démarche de partenariat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">📧 contact@sosnettoyagediogene.fr</span>
              </div>
              <div className="flex items-center gap-2">
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MJPMPartnership;