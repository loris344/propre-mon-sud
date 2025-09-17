import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocationProvider } from "@/contexts/LocationContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDiogene from "./pages/ServiceDiogene";
import ServiceDebarras from "./pages/ServiceDebarras";
import ServiceDesinfection from "./pages/ServiceDesinfection";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LocationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nettoyage-syndrome-diogene-montpellier" element={<ServiceDiogene />} />
            <Route path="/debarras-gros-volumes-montpellier" element={<ServiceDebarras />} />
            <Route path="/desinfection-insalubrite-montpellier" element={<ServiceDesinfection />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LocationProvider>
  </QueryClientProvider>
);

export default App;
