import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect, useCallback, memo } from "react";
import { useNavigate, useLocation as useRouterLocation } from "react-router-dom";
import AvailabilityIndicator from "./AvailabilityIndicator";
import ReviewsDisplay from "./ReviewsDisplay";
import { ResponsiveImage } from "./ResponsiveImage";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const navigate = useNavigate();
  const routerLocation = useRouterLocation();
  
  const cities = [
    "Carcassonne", "Rodez", "Marseille", "Nîmes", "Montpellier", 
    "Narbonne", "Millau", "Aix-en-Provence", "Alès", "Sète",
    "Limoux", "Villefranche-de-Rouergue", "Toulon", "Béziers", "Lodève"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => 
        prevIndex === cities.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  const handleNavigation = useCallback((section: string) => {
    setIsMenuOpen(false);
    
    // Si on est sur la page d'accueil, faire un scroll
    if (routerLocation.pathname === '/') {
      scrollToSection(section);
    } else {
      // Sinon, naviguer vers l'accueil avec la section
      navigate(`/#${section}`);
    }
  }, [routerLocation.pathname, navigate, scrollToSection]);

  const handleLogoClick = useCallback(() => {
    setIsMenuOpen(false);
    navigate('/');
  }, [navigate]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                 <div className="flex items-center justify-between gap-2 sm:gap-4">
                 
                 {/* Logo */}
                 <div 
                   className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 cursor-pointer"
                   onClick={handleLogoClick}
                 >
            <ResponsiveImage
              src="/images/logos/logo.png"
              mobileSrc="/images/logos/logo-mobile.png"
              alt="SOS Nettoyage Diogène Logo"
              className="w-16 h-16 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
            />
            <div className="min-w-0 flex-1">
              <div className="font-bold text-foreground text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">SOS Nettoyage Diogène</div>
              <div className="text-xs sm:text-xs md:text-sm lg:text-base text-muted-foreground truncate">
                <span 
                  key={currentCityIndex}
                  className="animate-fade-in bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold"
                >
                  {cities[currentCityIndex]}
                </span>
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
                    onClick={() => navigate('/blog')}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Blog
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
            className="lg:hidden p-2 sm:p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 sm:p-6 bg-card rounded-lg shadow-lg border border-border/50">
            <div className="space-y-4 sm:space-y-6">
              <button 
                onClick={() => handleNavigation('accueil')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 sm:py-4 text-base sm:text-lg"
              >
                Accueil
              </button>
                     <button 
                       onClick={() => handleNavigation('services')}
                       className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 sm:py-4 text-base sm:text-lg"
                     >
                       Services
                     </button>
                     <button 
                       onClick={() => handleNavigation('avis')}
                       className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 sm:py-4 text-base sm:text-lg"
                     >
                       Avis
                     </button>
                     <button 
                       onClick={() => {
                         navigate('/blog');
                         setIsMenuOpen(false);
                       }}
                       className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 sm:py-4 text-base sm:text-lg"
                     >
                       Blog
                     </button>
                     <button 
                       onClick={() => handleNavigation('contact')}
                       className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-3 sm:py-4 text-base sm:text-lg"
                     >
                       Contact
                     </button>
              
              <div className="pt-4 sm:pt-6 border-t border-border/50 space-y-4 sm:space-y-6">
                <div className="flex justify-center">
                  <AvailabilityIndicator />
                </div>
                <div className="flex justify-center">
                  <ReviewsDisplay />
                </div>
                <Button variant="outline" size="lg" className="w-full text-base sm:text-lg py-4 sm:py-6">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  07 67 13 54 58
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-base sm:text-lg py-4 sm:py-6"
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

export default memo(Header);