import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useCallback, memo } from "react";
import { useNavigate, useLocation as useRouterLocation } from "react-router-dom";
import AvailabilityIndicator from "./AvailabilityIndicator";
import ReviewsDisplay from "./ReviewsDisplay";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const routerLocation = useRouterLocation();

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  const handleNavigation = useCallback(
    (section: string) => {
      setIsMenuOpen(false);

      if (routerLocation.pathname === "/") {
        scrollToSection(section);
      } else {
        navigate(`/#${section}`);
      }
    },
    [routerLocation.pathname, navigate, scrollToSection],
  );

  const handleLogoClick = useCallback(() => {
    setIsMenuOpen(false);
    navigate("/");
  }, [navigate]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 shadow-sm backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div
            className="flex min-w-0 items-center space-x-2 sm:space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src="/images/logos/logo-transparent.webp"
              alt="SOS Nettoyage Diogène Logo"
              className="h-16 w-16 flex-shrink-0 object-contain sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
              loading="eager"
              width={160}
              height={160}
            />
            <div className="min-w-0 flex-1">
              <div className="pr-1 text-[11px] font-bold leading-tight text-foreground sm:text-sm md:text-base lg:text-lg xl:text-xl">
                SOS Nettoyage Diogène
              </div>
              <div className="truncate text-xs text-muted-foreground sm:text-xs md:text-sm lg:text-base">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text font-bold text-transparent">
                  Occitanie & PACA
                </span>
              </div>
            </div>
          </div>

          <div className="hidden flex-1 items-center justify-center space-x-6 md:flex">
            <button
              onClick={() => handleNavigation("accueil")}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Accueil
            </button>
            <button
              onClick={() => handleNavigation("services")}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation("avis")}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Avis
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Blog
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Contact
            </button>
          </div>

          <div className="hidden flex-shrink-0 items-center space-x-2 lg:flex">
            <AvailabilityIndicator />
            <ReviewsDisplay />
            <a
              href="tel:0767135458"
              onClick={() => gtag_report_conversion()}
              className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-primary hover:underline"
            >
              <Phone className="h-4 w-4" />
              07 67 13 54 58
            </a>
            <Button
              variant="hero"
              size="sm"
              className="whitespace-nowrap px-2 text-xs"
              onClick={() => handleNavigation("contact")}
            >
              Devis Gratuit
            </Button>
          </div>

          <div className="flex flex-shrink-0 items-center gap-2 lg:hidden">
            <div
              className="flex h-10 items-center justify-center rounded-full border border-border/60 bg-card/90 px-3 shadow-sm"
              aria-label="Disponibilité actuelle"
            >
              <AvailabilityIndicator />
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-card/90 text-foreground shadow-sm transition-colors hover:bg-accent/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 rounded-lg border border-border/50 bg-card p-4 shadow-lg sm:p-6 lg:hidden">
            <div className="space-y-4 sm:space-y-6">
              <button
                onClick={() => handleNavigation("accueil")}
                className="block w-full py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:py-4 sm:text-lg"
              >
                Accueil
              </button>
              <button
                onClick={() => handleNavigation("services")}
                className="block w-full py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:py-4 sm:text-lg"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation("avis")}
                className="block w-full py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:py-4 sm:text-lg"
              >
                Avis
              </button>
              <button
                onClick={() => {
                  navigate("/blog");
                  setIsMenuOpen(false);
                }}
                className="block w-full py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:py-4 sm:text-lg"
              >
                Blog
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className="block w-full py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:py-4 sm:text-lg"
              >
                Contact
              </button>

              <div className="space-y-4 border-t border-border/50 pt-4 sm:space-y-6 sm:pt-6">
                <div className="flex justify-center">
                  <AvailabilityIndicator />
                </div>
                <div className="flex justify-center">
                  <ReviewsDisplay />
                </div>
                <a
                  href="tel:0767135458"
                  onClick={() => gtag_report_conversion()}
                  className="block w-full rounded-lg bg-primary px-6 py-4 text-center text-lg font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="mr-2 inline-block h-5 w-5" />
                  07 67 13 54 58
                </a>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full py-4 text-base sm:py-6 sm:text-lg"
                  onClick={() => handleNavigation("contact")}
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
