
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import StrategyDetails from "./pages/StrategyDetails";
import IntelligenceAgents from "./pages/IntelligenceAgents";
import AgentDetails from "./pages/AgentDetails";
import Flows from "./pages/Flows";
import AssetOnboarding from "./pages/AssetOnboarding";
import LaunchPools from "./pages/LaunchPools";
import LaunchPoolDetails from "./pages/LaunchPoolDetails";
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/strategy/:id" element={<StrategyDetails />} />
              <Route path="/intelligence-agents" element={<IntelligenceAgents />} />
              <Route path="/agent/:id" element={<AgentDetails />} />
              <Route path="/flows" element={<Flows />} />
              <Route path="/asset-onboarding" element={<AssetOnboarding />} />
              <Route path="/launch-pools" element={<LaunchPools />} />
              <Route path="/launch-pool/:id" element={<LaunchPoolDetails />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
