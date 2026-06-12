"use client";

import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useCallback, useRef, useEffect, memo } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import type { NavLink } from "@/lib/seo-pages";
import AvailabilityIndicator from "./AvailabilityIndicator";
import ReviewsDisplay from "./ReviewsDisplay";

const Header = ({ services = [] }: { services?: NavLink[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // sous-menu mobile
  const [isDeskServicesOpen, setIsDeskServicesOpen] = useState(false); // dropdown desktop
  const servicesRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Ferme le menu Services desktop au clic en dehors.
  useEffect(() => {
    if (!isDeskServicesOpen) return;
    const onDown = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsDeskServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [isDeskServicesOpen]);

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

      if (pathname === "/") {
        scrollToSection(section);
      } else {
        router.push(`/#${section}`);
      }
    },
    [pathname, router, scrollToSection],
  );

  // Entrées de nav rendues en VRAIS <a href> (crawlables) : sur la home on
  // intercepte le clic pour garder le défilement doux, ailleurs le lien navigue.
  const handleNavLink = useCallback(
    (e: React.MouseEvent, section: string) => {
      setIsMenuOpen(false);
      if (pathname === "/") {
        e.preventDefault();
        scrollToSection(section);
      }
    },
    [pathname, scrollToSection],
  );

  const reportConversion = useCallback(() => {
    if (typeof gtag_report_conversion === "function") gtag_report_conversion();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 shadow-sm backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link
            href="/"
            className="flex min-w-0 items-center space-x-2 sm:space-x-3"
            onClick={() => setIsMenuOpen(false)}
            aria-label="SOS Nettoyage Diogène & Débarras, retour à l'accueil"
          >
            <img
              src="/images/logos/logo-transparent.webp"
              alt="SOS Nettoyage Diogène & Débarras Logo"
              className="h-16 w-16 flex-shrink-0 object-contain sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
              loading="eager"
              width={160}
              height={160}
            />
            <div className="min-w-0 flex-1">
              <div className="pr-1 text-[11px] font-bold leading-tight text-foreground sm:text-sm md:text-base lg:text-lg xl:text-xl">
                SOS Nettoyage Diogène & Débarras
              </div>
              <div className="truncate text-xs text-muted-foreground sm:text-xs md:text-sm lg:text-base">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text font-bold text-transparent">
                  Occitanie & PACA
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-center space-x-6 md:flex">
            <Link
              href="/"
              onClick={(e) => handleNavLink(e, "accueil")}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Accueil
            </Link>
            {/* Services : menu déroulant au clic. Les vrais liens restent dans
                le HTML même fermé (masqués en CSS) → toujours crawlables. */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => setIsDeskServicesOpen((v) => !v)}
                className="flex items-center gap-1 font-medium text-foreground transition-colors hover:text-primary"
                aria-haspopup="true"
                aria-expanded={isDeskServicesOpen}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isDeskServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {services.length > 0 && (
                <div
                  className={`absolute left-0 top-full z-[60] w-64 pt-3 ${isDeskServicesOpen ? "block" : "hidden"}`}
                >
                  <div className="rounded-lg border border-border/50 bg-card p-2 shadow-lg">
                    {services.map((s) => (
                      <Link
                        key={s.url}
                        href={s.url}
                        onClick={() => setIsDeskServicesOpen(false)}
                        className="block rounded px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/#avis"
              onClick={(e) => handleNavLink(e, "avis")}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Avis
            </Link>
            <Link
              href="/blog/"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleNavLink(e, "contact")}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>

          <div className="hidden flex-shrink-0 items-center space-x-2 lg:flex">
            <AvailabilityIndicator />
            <ReviewsDisplay />
            <a
              href="tel:0767135458"
              onClick={reportConversion}
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
            <AvailabilityIndicator />
            <button
              type="button"
              className="p-2"
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
              <Link
                href="/"
                onClick={(e) => handleNavLink(e, "accueil")}
                className="block w-full py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:py-4 sm:text-lg"
              >
                Accueil
              </Link>
              <div>
                <button
                  onClick={() => setIsServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:py-4 sm:text-lg"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServicesOpen && services.length > 0 && (
                  <div className="ml-3 space-y-1 border-l border-border/50 pl-3">
                    {services.map((s) => (
                      <Link
                        key={s.url}
                        href={s.url}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/#avis"
                onClick={(e) => handleNavLink(e, "avis")}
                className="block w-full py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:py-4 sm:text-lg"
              >
                Avis
              </Link>
              <Link
                href="/blog/"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:py-4 sm:text-lg"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                onClick={(e) => handleNavLink(e, "contact")}
                className="block w-full py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:py-4 sm:text-lg"
              >
                Contact
              </Link>

              <div className="space-y-4 border-t border-border/50 pt-4 sm:space-y-6 sm:pt-6">
                <div className="flex justify-center">
                  <AvailabilityIndicator />
                </div>
                <div className="flex justify-center">
                  <ReviewsDisplay />
                </div>
                <a
                  href="tel:0767135458"
                  onClick={reportConversion}
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
