import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AlienGenerator from "./pages/generators/AlienGenerator";
import BionicleGenerator from "./pages/generators/BionicleGenerator";
import ChissGenerator from "./pages/generators/ChissGenerator";
import CloneGenerator from "./pages/generators/CloneGenerator";
import CyberpunkGenerator from "./pages/generators/CyberpunkGenerator";
import CyborgGenerator from "./pages/generators/CyborgGenerator";
import DroidGenerator from "./pages/generators/DroidGenerator";
import EwokGenerator from "./pages/generators/EwokGenerator";
import HackerGenerator from "./pages/generators/HackerGenerator";
import MandalorianGenerator from "./pages/generators/MandalorianGenerator";
import MechaGenerator from "./pages/generators/MechaGenerator";
import MiralukaGenerator from "./pages/generators/MiralukaGenerator";
import MirialanGenerator from "./pages/generators/MirialanGenerator";
import MonCalamariGenerator from "./pages/generators/MonCalamariGenerator";
import PacificRimGenerator from "./pages/generators/PacificRimGenerator";
import PlanetGenerator from "./pages/generators/PlanetGenerator";
import RobotGenerator from "./pages/generators/RobotGenerator";
import RodianGenerator from "./pages/generators/RodianGenerator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/alien" element={<AlienGenerator />} />
          <Route path="/bionicle" element={<BionicleGenerator />} />
          <Route path="/chiss" element={<ChissGenerator />} />
          <Route path="/clone" element={<CloneGenerator />} />
          <Route path="/cyberpunk" element={<CyberpunkGenerator />} />
          <Route path="/cyborg" element={<CyborgGenerator />} />
          <Route path="/droid" element={<DroidGenerator />} />
          <Route path="/ewok" element={<EwokGenerator />} />
          <Route path="/hacker" element={<HackerGenerator />} />
          <Route path="/mandalorian" element={<MandalorianGenerator />} />
          <Route path="/mecha" element={<MechaGenerator />} />
          <Route path="/miraluka" element={<MiralukaGenerator />} />
          <Route path="/mirialan" element={<MirialanGenerator />} />
          <Route path="/mon-calamari" element={<MonCalamariGenerator />} />
          <Route path="/pacific-rim" element={<PacificRimGenerator />} />
          <Route path="/planet" element={<PlanetGenerator />} />
          <Route path="/robot" element={<RobotGenerator />} />
          <Route path="/rodian" element={<RodianGenerator />} />
          <Route path="/all-generators" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
