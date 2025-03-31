import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Brain, ChevronRight, Zap, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import StrategyList from '@/components/strategy/StrategyList';
import MarketplaceStrategies from '@/components/dashboard/MarketplaceStrategies';

const AIStrategies: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleNewStrategy = () => {
    toast({
      title: "Create Strategy",
      description: "Opening the AI strategy creation wizard",
    });
    navigate('/create-strategy');
  };

  return (
    <div className="space-y-8 my-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl md:text-3xl mb-2">AI <span className="text-gradient">Strategies</span></h1>
          <p className="text-white/70">AI-powered RWA market-making strategies for optimal liquidity provisioning</p>
        </div>
        <Button 
          variant="outline" 
          className="glass-button text-black hover-scale"
          onClick={handleNewStrategy}
        >
          <Plus className="mr-2 h-4 w-4" />
          New Strategy
        </Button>
      </div>

      <Card className="bg-gradient-card border-white/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-kamui-accent" />
            My Strategies
          </CardTitle>
          <CardDescription>Your custom AI-powered market-making strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <StrategyList />

          <div className="flex gap-2 mt-6">
            <Button 
              variant="outline" 
              className="w-full glass-button text-black hover-scale group"
              onClick={handleNewStrategy}
            >
              <Plus className="w-4 h-4 mr-2" />
              <span>Create New Strategy</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full glass-button text-black hover-scale group"
              onClick={() => {
                toast({
                  title: "Strategy Templates",
                  description: "Loading strategy templates library",
                });
              }}
            >
              <span>Browse Templates</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card border-white/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-kamui-teal" />
            Strategy Marketplace
          </CardTitle>
          <CardDescription>Discover and deploy pre-built market-making strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <MarketplaceStrategies isEmbedded={true} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AIStrategies;
