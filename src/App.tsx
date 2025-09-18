import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocationProvider } from "@/contexts/LocationContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./components/ServicePage";
import Header from "./components/Header";

const App = () => (
  <LocationProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          
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
          
          {/* Route 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </LocationProvider>
);

export default App;
