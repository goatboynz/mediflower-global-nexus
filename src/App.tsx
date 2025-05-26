
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactConsultation from "./pages/ContactConsultation";
import PremiumCultivation from "./pages/PremiumCultivation";
import ExpertConsulting from "./pages/ExpertConsulting";
import CustomTechnology from "./pages/CustomTechnology";
import Manufacturing from "./pages/Manufacturing";
import Distribution from "./pages/Distribution";
import QualityCompliancePage from "./pages/QualityCompliance";
import ResearchDevelopment from "./pages/ResearchDevelopment";
import SustainabilityInitiatives from "./pages/SustainabilityInitiatives";
import ContactPartnerships from "./pages/ContactPartnerships";
import HCPRegistration from "./pages/HCPRegistration";
import HCPLogin from "./pages/HCPLogin";
import HCPDashboard from "./pages/HCPDashboard";
import HCPProducts from "./pages/HCPProducts";
import HCPResearch from "./pages/HCPResearch";
import HCPEducation from "./pages/HCPEducation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-consultation" element={<ContactConsultation />} />
          <Route path="/premium-cultivation" element={<PremiumCultivation />} />
          <Route path="/expert-consulting" element={<ExpertConsulting />} />
          <Route path="/custom-technology" element={<CustomTechnology />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/quality-compliance" element={<QualityCompliancePage />} />
          <Route path="/research-development" element={<ResearchDevelopment />} />
          <Route path="/sustainability-initiatives" element={<SustainabilityInitiatives />} />
          <Route path="/contact-partnerships" element={<ContactPartnerships />} />
          <Route path="/hcp-registration" element={<HCPRegistration />} />
          <Route path="/hcp-login" element={<HCPLogin />} />
          <Route path="/hcp-dashboard" element={<HCPDashboard />} />
          <Route path="/hcp-products" element={<HCPProducts />} />
          <Route path="/hcp-research" element={<HCPResearch />} />
          <Route path="/hcp-education" element={<HCPEducation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
