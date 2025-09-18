import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "@/contexts/LocationContext";
import { useNavigate, useLocation as useRouterLocation } from "react-router-dom";
import AvailabilityIndicator from "./AvailabilityIndicator";
import ReviewsDisplay from "./ReviewsDisplay";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { location, isLoading } = useLocation();
  const navigate = useNavigate();
  const routerLocation = useRouterLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (section: string) => {
    setIsMenuOpen(false);
    
    // Si on est sur la page d'accueil, faire un scroll
    if (routerLocation.pathname === '/') {
      scrollToSection(section);
    } else {
      // Sinon, naviguer vers l'accueil avec la section
      navigate(`/#${section}`);
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
               <div className="flex items-center justify-between gap-4">
                 
                 {/* Logo */}
                 <div 
                   className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0 cursor-pointer"
                   onClick={handleLogoClick}
                 >
            <img 
              src="/logo.png" 
              alt="SOS Nettoyage Diogène Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
            />
            <div className="min-w-0 flex-1">
              <div className="font-bold text-foreground text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">SOS Nettoyage Diogène</div>
              <div className="text-xs sm:text-xs md:text-sm lg:text-base text-muted-foreground truncate">
                {isLoading ? 'Chargement...' : (location?.city || 'Montpellier')}
              </div>
            </div>
          </div>

                 {/* Desktop Navigation */}
                 <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <button 
              onClick={() => handleNavigation('accueil')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Accueil
            </button>
                  <button 
                    onClick={() => handleNavigation('services')}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => handleNavigation('avis')}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Avis
                  </button>
                  <button 
                    onClick={() => handleNavigation('contact')}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Contact
                  </button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            <AvailabilityIndicator />
            <ReviewsDisplay />
            <Button variant="outline" size="sm" className="whitespace-nowrap text-xs px-2">
              <Phone className="w-3 h-3" />
              07 67 13 54 58
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              className="whitespace-nowrap text-xs px-2"
              onClick={() => handleNavigation('contact')}
            >
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-card rounded-lg shadow-lg border border-border/50">
            <div className="space-y-4">
              <button 
                onClick={() => handleNavigation('accueil')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Accueil
              </button>
                     <button 
                       onClick={() => handleNavigation('services')}
                       className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                     >
                       Services
                     </button>
                     <button 
                       onClick={() => handleNavigation('avis')}
                       className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                     >
                       Avis
                     </button>
                     <button 
                       onClick={() => handleNavigation('contact')}
                       className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                     >
                       Contact
                     </button>
              
              <div className="pt-4 border-t border-border/50 space-y-3">
                <div className="flex justify-center">
                  <AvailabilityIndicator />
                </div>
                <div className="flex justify-center">
                  <ReviewsDisplay />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="w-4 h-4" />
                  07 67 13 54 58
                </Button>
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleNavigation('contact')}
                >
                  Devis Gratuit
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;