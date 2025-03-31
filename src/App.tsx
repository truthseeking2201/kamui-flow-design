import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import AIStrategies from "./pages/AIStrategies";
import StrategyDetails from "./pages/StrategyDetails";
import IntelligenceAgents from "./pages/IntelligenceAgents";
import AgentDetails from "./pages/AgentDetails";
import AssetOnboarding from "./pages/AssetOnboarding";
import LaunchPools from "./pages/LaunchPools";
import LaunchPoolDetails from "./pages/LaunchPoolDetails";
import CreateStrategy from "./pages/CreateStrategy";
import DeployStrategy from "./pages/DeployStrategy";
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
              {/* Landing page - no navigation */}
              <Route path="/" element={<Index />} />
              
              {/* Main app with navigation */}
              <Route path="/" element={<AppLayout />}>
                {/* Dashboard and main sections */}
                <Route path="dashboard" element={<Dashboard />} />
                
                {/* Strategy-related routes */}
                <Route path="strategies" element={<AIStrategies />} />
                <Route path="strategy/:id" element={<StrategyDetails />} />
                <Route path="create-strategy" element={<CreateStrategy />} />
                <Route path="deploy-strategy/:id" element={<DeployStrategy />} />
                
                {/* Agent-related routes */}
                <Route path="intelligence-agents" element={<IntelligenceAgents />} />
                <Route path="agent/:id" element={<AgentDetails />} />
                
                {/* Other main sections */}
                <Route path="asset-onboarding" element={<AssetOnboarding />} />
                
                {/* Launch pool routes */}
                <Route path="launch-pools" element={<LaunchPools />} />
                <Route path="launch-pool/:id" element={<LaunchPoolDetails />} />
              </Route>
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
