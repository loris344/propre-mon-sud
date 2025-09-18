import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, Phone } from "lucide-react";
import SEOHead from "../components/SEOHead";
import { useSEO } from "../hooks/useSEO";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const seoConfig = useSEO();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead {...seoConfig} />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* 404 Visual */}
            <div className="mb-8">
              <div className="text-8xl sm:text-9xl font-bold text-primary/20 mb-4">404</div>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                  Page Introuvable
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>
                <p className="text-sm text-muted-foreground">
                  Chemin demandé : <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
                </p>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/')}
                className="text-base px-8"
              >
                <Home className="w-5 h-5" />
                Retour à l'Accueil
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate(-1)}
                className="text-base px-8"
              >
                <ArrowLeft className="w-5 h-5" />
                Page Précédente
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 p-6 bg-card rounded-xl border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Besoin d'aide ?
              </h3>
              <p className="text-muted-foreground mb-4">
                Si vous cherchez nos services de nettoyage spécialisé, contactez-nous directement.
              </p>
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-base px-8"
              >
                <Phone className="w-5 h-5" />
                07 67 13 54 58
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
