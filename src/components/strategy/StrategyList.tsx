
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Brain, Building, Landmark, DollarSign, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StrategyList: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Sample strategies data (in a real app, this would come from an API)
  const strategies = [
    {
      id: "1",
      name: "RWA Momentum Alpha",
      description: "AI-driven RWA market-making",
      apy: 42,
      risk: "Medium",
      status: "Active",
      type: "equities"
    },
    {
      id: "2",
      name: "Real Estate Yield",
      description: "Tokenized property market-making",
      apy: 36,
      risk: "Medium-High",
      status: "Active",
      type: "real-estate"
    },
    {
      id: "3",
      name: "Gold Reserve Strategy",
      description: "Precious metals liquidity provision",
      apy: 28,
      risk: "Low-Medium",
      status: "Active",
      type: "precious-metals"
    },
    {
      id: "4",
      name: "Fixed Income Arbitrage",
      description: "Bond market liquidity pool",
      apy: 18,
      risk: "Low",
      status: "Paused",
      type: "fixed-income"
    }
  ];

  const getStrategyIcon = (type: string) => {
    switch(type) {
      case 'real-estate':
        return <Building className="h-5 w-5 text-kamui-purple" />;
      case 'precious-metals':
        return <Landmark className="h-5 w-5 text-amber-400" />;
      case 'fixed-income':
        return <DollarSign className="h-5 w-5 text-kamui-teal" />;
      case 'equities':
      default:
        return <Brain className="h-5 w-5 text-kamui-accent" />;
    }
  };

  const handleDeployStrategy = (id: string) => {
    navigate(`/deploy-strategy/${id}`);
  };

  return (
    <div className="space-y-3">
      {strategies.length === 0 ? (
        <div className="text-center py-8 text-white/60">
          You haven't created any strategies yet. Click "Create New Strategy" to get started.
        </div>
      ) : (
        strategies.map((strategy) => (
          <div 
            key={strategy.id}
            className="block"
          >
            <div 
              className="glass-card p-4 hover-scale group transition-all duration-200 cursor-pointer"
              onClick={() => {
                toast({
                  title: `Strategy Selected: ${strategy.name}`,
                  description: `Loading detailed view of ${strategy.name} strategy`,
                });
                navigate(`/strategy/${strategy.id}`);
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-purple/20 flex items-center justify-center">
                    {getStrategyIcon(strategy.type)}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium text-white">{strategy.name}</h4>
                      {strategy.status === "Active" ? (
                        <span className="ml-2 px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">Active</span>
                      ) : (
                        <span className="ml-2 px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded text-xs">Paused</span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm">{strategy.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="flex items-center justify-end">
                      <Zap className="h-3 w-3 text-kamui-teal mr-1" />
                      <p className="font-medium text-kamui-teal">{strategy.apy}% APY</p>
                    </div>
                    <p className="text-white/60 text-xs">{strategy.risk} Risk</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-kamui-accent/10 to-kamui-teal/10 border-white/10 text-kamui-accent hover:text-kamui-accent/80 hover:bg-white/5"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeployStrategy(strategy.id);
                    }}
                  >
                    Deploy
                  </Button>
                  <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default StrategyList;
