import { Phone, Mail, MapPin, Clock, Shield, Heart, Building2 } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Contenu principal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          
          {/* Logo et description */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <ResponsiveImage
                src="/images/logos/logo.png"
                mobileSrc="/images/logos/logo-mobile.png"
                alt="SOS Nettoyage Diogène Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <div>
                <div className="font-bold text-foreground text-lg sm:text-xl">SOS Nettoyage Diogène</div>
                <div className="text-sm text-muted-foreground">Nettoyage professionnel</div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Société spécialisée dans le nettoyage et débarras syndrome de Diogène. 
              Intervention discrète, professionnelle et respectueuse dans le Sud de la France.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <a href="tel:0605310199" className="font-medium text-foreground hover:text-primary transition-colors">
                    06 05 31 01 99
                  </a>
                  <div className="text-sm text-muted-foreground">Disponible 7j/7</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">contact@sosnettoyagediogene.fr</div>
                  <div className="text-sm text-muted-foreground">Réponse rapide</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">8h00 - 20h00</div>
                  <div className="text-sm text-muted-foreground">Lundi au Dimanche</div>
                </div>
              </div>
            </div>
          </div>

          {/* Zones d'intervention */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Zones d'intervention</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Montpellier</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Sète</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Béziers</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Nîmes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Perpignan</span>
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                + Tout le Sud de la France
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Nos Services</h3>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">• Nettoyage Syndrome de Diogène</div>
              <div className="text-sm text-muted-foreground">• Débarras Gros Volumes</div>
              <div className="text-sm text-muted-foreground">• Désinfection & Insalubrité</div>
              <div className="text-sm text-muted-foreground">• Nettoyage Extrême</div>
              <div className="text-sm text-muted-foreground">• Évacuation Déchets</div>
            </div>
          </div>
        </div>

        {/* Section de réassurance */}
        <div className="bg-card rounded-xl p-6 sm:p-8 mb-8 sm:mb-12 border border-border/50">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="w-8 h-8 text-primary" />
              <h4 className="font-semibold text-foreground">Confidentialité</h4>
              <p className="text-sm text-muted-foreground">Discrétion totale garantie</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Heart className="w-8 h-8 text-accent" />
              <h4 className="font-semibold text-foreground">Respect</h4>
              <p className="text-sm text-muted-foreground">Approche humaine et bienveillante</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Clock className="w-8 h-8 text-primary" />
              <h4 className="font-semibold text-foreground">Réactivité</h4>
              <p className="text-sm text-muted-foreground">Intervention rapide 7j/7</p>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="border-t border-border/50 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center sm:text-left">
              © 2024 SOS Nettoyage Diogène. Tous droits réservés.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground text-center sm:text-right">
              <span>Société spécialisée dans le nettoyage et débarras professionnel</span>
              <div className="flex gap-4">
                <Link 
                  to="/debarras-gros-volumes"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Débarras
                </Link>
                <Link 
                  to="/nettoyage-apres-deces"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Après Décès
                </Link>
                <Link 
                  to="/desinfection-insalubrite"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Désinfection
                </Link>
                <Link 
                  to="/partenariat-mjpm"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Partenariat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
