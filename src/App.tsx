import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import PhoneToast from "./components/PhoneToast";

// Pages critiques chargées directement (pas de Suspense)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
const Blog = lazy(() => import("./pages/Blog"));
const SyndromeDiogeneArticle = lazy(() => import("./pages/articles/SyndromeDiogeneArticle"));
const DebarrasApresDecesArticle = lazy(() => import("./pages/articles/DebarrasApresDecesArticle"));
const DesinfectionArticle = lazy(() => import("./pages/articles/DesinfectionArticle"));
const PreventionInsalubriteArticle = lazy(() => import("./pages/articles/PreventionInsalubriteArticle"));
const ServicePage = lazy(() => import("./components/ServicePage"));
const MJPMPartnership = lazy(() => import("./pages/MJPMPartnership"));
const NursingHomePartnership = lazy(() => import("./pages/NursingHomePartnership"));
const SyndromeDiogeneCity = lazy(() => import("./pages/SyndromeDiogeneCity"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const LandingDiogene = lazy(() => import("./pages/landing/LandingDiogene"));
const LandingDebarras = lazy(() => import("./pages/landing/LandingDebarras"));
const LandingDesinfection = lazy(() => import("./pages/landing/LandingDesinfection"));
const LandingApresDeces = lazy(() => import("./pages/landing/LandingApresDeces"));
const LandingOdeursNuisibles = lazy(() => import("./pages/landing/LandingOdeursNuisibles"));
const ProtocoleSanitaire = lazy(() => import("./pages/ProtocoleSanitaire"));
const NotairesSuccession = lazy(() => import("./pages/NotairesSuccession"));

// Admin / CMS
import { AdminAuthProvider } from "./admin/AdminAuthContext";
const AdminLayout = lazy(() => import("./admin/AdminLayout"));
const AdminLogin = lazy(() => import("./admin/pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./admin/pages/AdminDashboard"));
const ArticlesList = lazy(() => import("./admin/pages/ArticlesList"));
const ArticleEdit = lazy(() => import("./admin/pages/ArticleEdit"));
const ReviewsAdmin = lazy(() => import("./admin/pages/ReviewsAdmin"));
const GalleryAdmin = lazy(() => import("./admin/pages/GalleryAdmin"));
const PagesAdmin = lazy(() => import("./admin/pages/PagesAdmin"));
const ArticleDynamic = lazy(() => import("./pages/ArticleDynamic"));

const PageLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" style={{ opacity: 1 }}>
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const SiteChrome = () => {
  const location = useLocation();
  if (location.pathname.startsWith("/admin")) return null;
  return (
    <>
      <PhoneToast />
      <Header />
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AdminAuthProvider>
        <SiteChrome />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />

            {/* Articles de blog */}
            <Route path="/blog/syndrome-diogene-identifier-gerer" element={<SyndromeDiogeneArticle />} />
            <Route path="/blog/debarras-apres-deces-accompagnement" element={<DebarrasApresDecesArticle />} />
            <Route path="/blog/desinfection-assainissement-protocoles" element={<DesinfectionArticle />} />
            <Route path="/blog/prevention-insalubrite-conseils" element={<PreventionInsalubriteArticle />} />

            {/* Articles dynamiques (CMS) — match en dernier après les routes statiques */}
            <Route path="/blog/:slug" element={<ArticleDynamic />} />

            {/* Pages ville dynamiques */}
            <Route path="/nettoyage-syndrome-diogene-:ville" element={<SyndromeDiogeneCity />} />

            {/* Services génériques */}

            {/* Partenariats */}
            <Route path="/partenariat-mjpm" element={<MJPMPartnership />} />
            <Route path="/partenariat-maisons-retraite" element={<NursingHomePartnership />} />

            {/* Pages légales */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

            {/* Landing pages Google Ads (noindex) */}
            <Route path="/landing/nettoyage-syndrome-diogene" element={<LandingDiogene />} />
            <Route path="/landing/debarras-gros-volumes" element={<LandingDebarras />} />
            <Route path="/landing/desinfection-insalubrite" element={<LandingDesinfection />} />
            <Route path="/landing/nettoyage-apres-deces" element={<LandingApresDeces />} />
            <Route path="/landing/traitement-odeurs-nuisibles" element={<LandingOdeursNuisibles />} />

            {/* Documents pro (noindex) */}
            <Route path="/protocole-sanitaire" element={<ProtocoleSanitaire />} />
            <Route path="/notaires-succession" element={<NotairesSuccession />} />

            {/* CMS Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="articles" element={<ArticlesList />} />
              <Route path="articles/new" element={<ArticleEdit />} />
              <Route path="articles/:id" element={<ArticleEdit />} />
              <Route path="reviews" element={<ReviewsAdmin />} />
              <Route path="gallery" element={<GalleryAdmin />} />
              <Route path="pages" element={<PagesAdmin />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </AdminAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
