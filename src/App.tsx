import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import PhoneToast from "./components/PhoneToast";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
const SyndromeDiogeneArticle = lazy(() => import("./pages/articles/SyndromeDiogeneArticle"));
const DebarrasApresDecesArticle = lazy(() => import("./pages/articles/DebarrasApresDecesArticle"));
const DesinfectionArticle = lazy(() => import("./pages/articles/DesinfectionArticle"));
const PreventionInsalubriteArticle = lazy(() => import("./pages/articles/PreventionInsalubriteArticle"));
const ServicePage = lazy(() => import("./components/ServicePage"));
const MJPMPartnership = lazy(() => import("./pages/MJPMPartnership"));
const NursingHomePartnership = lazy(() => import("./pages/NursingHomePartnership"));
const DebarrasGrosVolumes = lazy(() => import("./pages/DebarrasGrosVolumes"));
const NettoyageApresDeces = lazy(() => import("./pages/NettoyageApresDeces"));
const NettoyageAppartementApresDeces = lazy(() => import("./pages/NettoyageAppartementApresDeces"));
const DesinfectionInsalubrite = lazy(() => import("./pages/DesinfectionInsalubrite"));
const NettoyageApresDecesMarseille = lazy(() => import("./pages/NettoyageApresDecesMarseille"));
const TousNosServices = lazy(() => import("./pages/TousNosServices"));
const EntrepriseNettoyageMontpellier = lazy(() => import("./pages/EntrepriseNettoyageMontpellier"));
const EntrepriseNettoyageMarseille = lazy(() => import("./pages/EntrepriseNettoyageMarseille"));
const MeilleuresSocietesNettoyageMontpellier = lazy(() => import("./pages/MeilleuresSocietesNettoyageMontpellier"));
const PrixDiogene = lazy(() => import("./pages/PrixDiogene"));
const SyndromeDiogeneCity = lazy(() => import("./pages/SyndromeDiogeneCity"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PhoneToast />
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />

            {/* Articles de blog */}
            <Route path="/blog/syndrome-diogene-identifier-gerer" element={<SyndromeDiogeneArticle />} />
            <Route path="/blog/debarras-apres-deces-accompagnement" element={<DebarrasApresDecesArticle />} />
            <Route path="/blog/desinfection-assainissement-protocoles" element={<DesinfectionArticle />} />
            <Route path="/blog/prevention-insalubrite-conseils" element={<PreventionInsalubriteArticle />} />

            {/* Pages de services */}
            <Route path="/debarras-gros-volumes" element={<DebarrasGrosVolumes />} />
            <Route path="/nettoyage-apres-deces" element={<NettoyageApresDeces />} />
            <Route path="/nettoyage-appartement-apres-deces" element={<NettoyageAppartementApresDeces />} />
            <Route path="/desinfection-insalubrite" element={<DesinfectionInsalubrite />} />
            <Route path="/tous-nos-services" element={<TousNosServices />} />

            {/* Pages ville dynamiques */}
            <Route path="/nettoyage-syndrome-diogene-:ville" element={<SyndromeDiogeneCity />} />
            <Route path="/nettoyage-apres-deces-marseille" element={<NettoyageApresDecesMarseille />} />

            {/* Pages entreprise */}
            <Route path="/entreprise-nettoyage-montpellier" element={<EntrepriseNettoyageMontpellier />} />
            <Route path="/entreprise-nettoyage-marseille" element={<EntrepriseNettoyageMarseille />} />
            <Route path="/meilleures-societes-nettoyage-montpellier" element={<MeilleuresSocietesNettoyageMontpellier />} />
            <Route path="/prix-diogene" element={<PrixDiogene />} />

            {/* Services génériques */}
            <Route path="/debarras-gros-volumes-montpellier" element={<ServicePage />} />
            <Route path="/desinfection-insalubrite-montpellier" element={<ServicePage />} />
            <Route path="/nettoyage-apres-deces-montpellier" element={<ServicePage />} />
            <Route path="/nettoyage-apres-deces-nimes" element={<ServicePage />} />
            <Route path="/nettoyage-insalubre-montpellier" element={<ServicePage />} />
            <Route path="/nettoyage-insalubre-nimes" element={<ServicePage />} />

            {/* Partenariats */}
            <Route path="/partenariat-mjpm" element={<MJPMPartnership />} />
            <Route path="/partenariat-maisons-retraite" element={<NursingHomePartnership />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
