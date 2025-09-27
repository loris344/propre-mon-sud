import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import SyndromeDiogeneArticle from "./pages/articles/SyndromeDiogeneArticle";
import DebarrasApresDecesArticle from "./pages/articles/DebarrasApresDecesArticle";
import DesinfectionArticle from "./pages/articles/DesinfectionArticle";
import PreventionInsalubriteArticle from "./pages/articles/PreventionInsalubriteArticle";
import ServicePage from "./components/ServicePage";
import Header from "./components/Header";
import MJPMPartnership from "./pages/MJPMPartnership";
import DebarrasGrosVolumes from "./pages/DebarrasGrosVolumes";
import NettoyageApresDeces from "./pages/NettoyageApresDeces";
import DesinfectionInsalubrite from "./pages/DesinfectionInsalubrite";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* Routes des articles de blog */}
        <Route path="/blog/syndrome-diogene-identifier-gerer" element={<SyndromeDiogeneArticle />} />
        <Route path="/blog/debarras-apres-deces-accompagnement" element={<DebarrasApresDecesArticle />} />
        <Route path="/blog/desinfection-assainissement-protocoles" element={<DesinfectionArticle />} />
        <Route path="/blog/prevention-insalubrite-conseils" element={<PreventionInsalubriteArticle />} />
        
        {/* Nouvelles pages complètes */}
        <Route path="/debarras-gros-volumes" element={<DebarrasGrosVolumes />} />
        <Route path="/nettoyage-apres-deces" element={<NettoyageApresDeces />} />
        <Route path="/desinfection-insalubrite" element={<DesinfectionInsalubrite />} />
        
        {/* Routes de services - toutes utilisent le même composant ServicePage */}
        <Route path="/nettoyage-syndrome-diogene-montpellier" element={<ServicePage />} />
        <Route path="/nettoyage-syndrome-diogene-sete" element={<ServicePage />} />
        <Route path="/nettoyage-syndrome-diogene-beziers" element={<ServicePage />} />
        <Route path="/nettoyage-syndrome-diogene-nimes" element={<ServicePage />} />
        <Route path="/nettoyage-syndrome-diogene-perpignan" element={<ServicePage />} />
        
        <Route path="/debarras-gros-volumes-montpellier" element={<ServicePage />} />
        
        <Route path="/desinfection-insalubrite-montpellier" element={<ServicePage />} />
        
        <Route path="/nettoyage-apres-deces-montpellier" element={<ServicePage />} />
        <Route path="/nettoyage-apres-deces-nimes" element={<ServicePage />} />
        
        <Route path="/nettoyage-insalubre-montpellier" element={<ServicePage />} />
        <Route path="/nettoyage-insalubre-nimes" element={<ServicePage />} />
        
        {/* Route partenariat MJPM (non visible publiquement) */}
        <Route path="/partenariat-mjpm" element={<MJPMPartnership />} />
        
        {/* Route dashboard admin (protégée) */}
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Route 404 */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;