
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, ChevronRight, Plus, Zap, Building, Landmark, DollarSign, LayersIcon } from 'lucide-react';
import { useRWAAssets } from '@/hooks/useRWAAssets';
import { useToast } from '@/hooks/use-toast';

const Strategies: React.FC = () => {
  const { assetType, setAssetType, assetTypes } = useRWAAssets();
  const { toast } = useToast();
  
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

  // Filter strategies based on selected asset type
  const filteredStrategies = assetType === 'all' 
    ? strategies 
    : strategies.filter(strategy => strategy.type === assetType);

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

  const handleNewStrategy = () => {
    toast({
      title: "Create Strategy",
      description: "Opening the AI strategy creation wizard",
    });
  };

  return (
    <Card className="bg-gradient-card border-white/5">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>AI Market-Making Strategies</CardTitle>
          <CardDescription>AI-powered RWA liquidity strategies</CardDescription>
        </div>
        <div className="flex gap-2">
          <Link to="/launch-pools">
            <Button 
              variant="outline" 
              className="glass-button text-kamui-teal hover-scale flex"
            >
              <LayersIcon className="mr-2 h-4 w-4" />
              Launch Pools
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="glass-button text-kamui-accent hover-scale"
            onClick={handleNewStrategy}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Strategy
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {assetTypes.map(type => (
            <Button 
              key={type.value}
              variant={assetType === type.value ? "default" : "outline"}
              size="sm"
              onClick={() => setAssetType(type.value as any)}
              className={`text-xs ${assetType === type.value ? 'bg-kamui-accent text-kamui-dark' : 'bg-white/5 text-white/70'}`}
            >
              {type.label}
            </Button>
          ))}
        </div>
        
        <div className="space-y-3">
          {filteredStrategies.map((strategy) => (
            <Link 
              key={strategy.id} 
              to={`/strategy/${strategy.id}`}
              className="block"
              onClick={() => {
                toast({
                  title: `Strategy Selected: ${strategy.name}`,
                  description: `Loading detailed view of ${strategy.name} strategy`,
                })
              }}
            >
              <div className="glass-card p-4 hover-scale group transition-all duration-200 cursor-pointer">
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
                    <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex gap-2 mt-4">
          <Button 
            variant="outline" 
            className="w-full glass-button text-kamui-accent hover-scale group"
            onClick={() => {
              toast({
                title: "Strategies",
                description: "Loading comprehensive strategy management dashboard",
              });
            }}
          >
            <span>View All Strategies</span>
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Link to="/asset-onboarding" className="w-full">
            <Button 
              variant="outline" 
              className="w-full glass-button text-kamui-purple hover-scale group"
            >
              <span>Submit New Asset</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Strategies;
