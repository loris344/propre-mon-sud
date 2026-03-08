import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';
import { CITY_PAGES } from '@/config/city-pages-data';
import { CheckCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SyndromeDiogeneCity: React.FC = () => {
  const { ville } = useParams<{ ville: string }>();
  const city = ville ? CITY_PAGES[ville] : null;
  const seoConfig = useSEO();

  if (!city) {
    return <Navigate to="/404" replace />;
  }

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead {...seoConfig} />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={city.heroImage}
              alt={city.heroAlt}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/40" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nettoyage Syndrome de Diogène à {city.name}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {city.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0605310199"
                className="inline-flex items-center justify-center gap-2 bg-card text-primary px-8 py-3 rounded-lg font-semibold hover:bg-card/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                06 05 31 01 99
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/30 transition-colors border border-primary-foreground/30"
              >
                <Mail className="w-5 h-5" />
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 space-y-8">
          {/* Définition */}
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
            <h2 className="text-3xl font-bold text-foreground mb-6">Qu'est-ce que le Syndrome de Diogène ?</h2>
            <p className="text-muted-foreground mb-4">
              Le syndrome de Diogène est un <strong className="text-foreground">trouble comportemental</strong> caractérisé par une accumulation compulsive d'objets et une négligence de l'hygiène personnelle et de l'habitat. Cette condition touche principalement les personnes âgées et nécessite une intervention professionnelle spécialisée.
            </p>
            <p className="text-muted-foreground">
              À {city.name}, notre équipe intervient avec discrétion et respect pour nettoyer et remettre en état les logements concernés par ce syndrome.
            </p>
          </div>

          {/* Services & Process */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-6">Notre Service à {city.name}</h2>
              <div className="space-y-4">
                {[
                  { title: "Nettoyage spécialisé", desc: "Équipement professionnel et produits adaptés aux situations d'accumulation" },
                  { title: "Débarras complet", desc: "Tri, évacuation et recyclage des objets accumulés" },
                  { title: "Désinfection", desc: "Traitement sanitaire complet des lieux" },
                  { title: "Discrétion totale", desc: "Respect de la vie privée et confidentialité garantie" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="bg-primary/10 text-primary rounded-full p-2">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-6">Notre Processus</h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Devis gratuit", desc: "Évaluation des lieux et estimation des travaux nécessaires" },
                  { step: 2, title: "Intervention", desc: "Nettoyage, débarras et désinfection par une équipe formée" },
                  { step: 3, title: "Remise en état", desc: "Nettoyage final et conseils de prévention" }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Signes d'alerte */}
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-6">Signes d'Alerte du Syndrome de Diogène</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Comportements observables</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Accumulation excessive d'objets</li>
                  <li>• Refus de jeter quoi que ce soit</li>
                  <li>• Négligence de l'hygiène personnelle</li>
                  <li>• Isolement social croissant</li>
                  <li>• Refus d'aide extérieure</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">État du logement</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
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
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-6">{city.zones.title}</h2>
            <p className="text-muted-foreground mb-6">{city.zones.intro}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {city.zones.sections.map((section, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-foreground mb-3">{section.title}</h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery (Marseille only) */}
          {city.galleryImages && (
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-6">{city.name}, en images</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {city.galleryImages.map((img, i) => (
                  <div key={i} className="text-center">
                    <img src={img.src} alt={img.alt} className="w-full h-48 object-cover rounded-lg mb-3" loading="lazy" />
                    <p className="text-sm text-muted-foreground">{img.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials (Marseille only) */}
          {city.testimonials && (
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-6">Témoignages (Note moyenne 4,7/5)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {city.testimonials.map((t, i) => (
                  <div key={i} className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                    <p className="text-muted-foreground italic mb-4">"{t.text}"</p>
                    <p className="text-sm text-foreground font-medium">– {t.author}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link to="/#avis" className="text-primary hover:underline font-medium">
                  Voir d'autres avis vérifiés →
                </Link>
              </div>
            </div>
          )}

          {/* Liens utiles */}
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-6">Nos Autres Services</h2>
            <ul className="space-y-2">
              <li><Link to="/nettoyage-apres-deces" className="text-primary hover:underline">Nettoyage après décès</Link></li>
              <li><Link to="/desinfection-insalubrite" className="text-primary hover:underline">Désinfection insalubrité</Link></li>
              <li><Link to="/debarras-gros-volumes" className="text-primary hover:underline">Débarras gros volumes</Link></li>
            </ul>
          </div>

          {/* CTA final */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin d'une Intervention ?</h2>
            <p className="text-xl mb-6 opacity-90">
              Contactez-nous pour un devis gratuit et une intervention discrète à {city.name}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0605310199"
                className="inline-flex items-center justify-center gap-2 bg-card text-primary px-8 py-3 rounded-lg font-semibold hover:bg-card/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                06 05 31 01 99
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/30 transition-colors border border-primary-foreground/30"
              >
                <Mail className="w-5 h-5" />
                Demande de Devis
              </Link>
            </div>
          </div>

          {/* Lien connexe */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Pages Connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to={`/nettoyage-syndrome-diogene-${city.relatedCity.slug}`}
                className="block p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-border/50"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  Nettoyage Syndrome de Diogène à {city.relatedCity.name}
                </h3>
                <p className="text-muted-foreground text-sm">{city.relatedCity.description}</p>
              </Link>
              <Link
                to="/blog/syndrome-diogene-identifier-gerer"
                className="block p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-border/50"
              >
                <h3 className="font-semibold text-foreground mb-2">Identifier et Gérer le Syndrome de Diogène</h3>
                <p className="text-muted-foreground text-sm">Conseils et informations sur la détection précoce</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SyndromeDiogeneCity;
