import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import { HashRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const MAPS_URL =
  "https://www.google.com/maps/place/Star+Palace/@28.7055196,77.0690919,17z/data=!3m1!4b1!4m6!3m5!1s0x390d07951828a6ad:0x3b3fbea98fec0b89!8m2!3d28.7055196!4d77.0716722!16s%2Fg%2F11j2vq538f?entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D";

const RedirectToMaps = () => {
  useEffect(() => {
    window.location.replace(MAPS_URL);
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/redirec/iuugyfufguiuy" element={<RedirectToMaps />} />
          <Route path="/redirect/iuugyfufguiuy" element={<RedirectToMaps />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
