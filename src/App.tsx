import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AlienGenerator from "./pages/generators/AlienGenerator";
import BionicleGenerator from "./pages/generators/BionicleGenerator";
import ChissGenerator from "./pages/generators/ChissGenerator";
import CloneGenerator from "./pages/generators/CloneGenerator";
import CyberpunkGenerator from "./pages/generators/CyberpunkGenerator";
import CyborgGenerator from "./pages/generators/CyborgGenerator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/generator/alien" element={<AlienGenerator />} />
          <Route path="/generator/bionicle" element={<BionicleGenerator />} />
          <Route path="/generator/chiss" element={<ChissGenerator />} />
          <Route path="/generator/clone" element={<CloneGenerator />} />
          <Route path="/generator/cyberpunk" element={<CyberpunkGenerator />} />
          <Route path="/generator/cyborg" element={<CyborgGenerator />} />
          <Route path="/all-generators" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
