
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Plus, Zap, LineChart, Layers } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MarketplaceStrategiesProps {
  isEmbedded?: boolean;
}

const MarketplaceStrategies: React.FC<MarketplaceStrategiesProps> = ({ isEmbedded = false }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const strategies = [
    {
      id: "marketplace-1",
      name: "Global Macro RWA",
      creator: "Kamui AI",
      apy: 38,
      risk: "Medium-High",
      popularity: 92,
      category: "Multi-Asset"
    },
    {
      id: "marketplace-2",
      name: "Real Estate Alpha",
      creator: "PropertyDAO",
      apy: 26,
      risk: "Medium",
      popularity: 88,
      category: "Real Estate"
    },
    {
      id: "marketplace-3",
      name: "Precious Metals Momentum",
      creator: "GoldFi",
      apy: 22,
      risk: "Medium-Low",
      popularity: 79,
      category: "Commodities"
    }
  ];

  if (isEmbedded) {
    // Show a more compact version for embedding
    return (
      <div className="space-y-3">
        {strategies.map((strategy) => (
          <div 
            key={strategy.id}
            className="glass-card p-4 hover-scale cursor-pointer group"
            onClick={() => {
              toast({
                title: `Strategy: ${strategy.name}`,
                description: `Created by ${strategy.creator}`,
              });
              navigate(`/deploy-strategy/${strategy.id}`);
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <LineChart className="w-4 h-4 text-kamui-teal" />
                  <h4 className="font-medium text-white">{strategy.name}</h4>
                  <span className="px-1.5 py-0.5 bg-white/10 text-white/70 rounded text-xs">{strategy.category}</span>
                </div>
                <p className="text-white/60 text-xs">By {strategy.creator}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="flex items-center">
                    <Zap className="h-3 w-3 text-kamui-accent mr-1" />
                    <p className="font-medium text-kamui-accent">{strategy.apy}% APY</p>
                  </div>
                  <p className="text-white/60 text-xs">{strategy.risk} Risk</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-button text-kamui-teal"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/deploy-strategy/${strategy.id}`);
                  }}
                >
                  Deploy
                </Button>
                <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center mt-4">
          <Link to="/strategies">
            <Button variant="outline" className="glass-button text-kamui-accent hover-scale group">
              <span>View All Marketplace Strategies</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Full marketplace view
  return (
    <Card className="bg-gradient-card border-white/5">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-kamui-teal" />
            Strategy Marketplace
          </CardTitle>
          <CardDescription>Discover and deploy pre-built market-making strategies</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/launch-pools">
            <Button 
              variant="outline" 
              className="glass-button text-kamui-teal hover-scale"
            >
              <Layers className="mr-2 h-4 w-4" />
              Launch Pools
            </Button>
          </Link>
          <Link to="/create-strategy">
            <Button 
              variant="outline" 
              className="glass-button text-kamui-accent hover-scale"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Strategy
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {strategies.map((strategy) => (
            <div 
              key={strategy.id}
              className="glass-card p-5 hover-scale cursor-pointer group"
              onClick={() => {
                toast({
                  title: `Strategy: ${strategy.name}`,
                  description: `Created by ${strategy.creator}`,
                });
                navigate(`/deploy-strategy/${strategy.id}`);
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-teal/20 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-kamui-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white">{strategy.name}</h3>
                    <p className="text-white/60 text-sm">Created by <span className="text-kamui-accent">{strategy.creator}</span></p>
                  </div>
                </div>
                
                <div>
                  <span className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium">
                    {strategy.category}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="glass-card p-3">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 text-kamui-accent mr-2" />
                    <h4 className="font-medium text-sm text-white">Expected APY</h4>
                  </div>
                  <p className="text-kamui-accent text-xl font-medium mt-1">{strategy.apy}%</p>
                </div>
                
                <div className="glass-card p-3">
                  <div className="flex items-center">
                    <LineChart className="h-4 w-4 text-kamui-teal mr-2" />
                    <h4 className="font-medium text-sm text-white">Risk Level</h4>
                  </div>
                  <p className="text-kamui-teal text-xl font-medium mt-1">{strategy.risk}</p>
                </div>
                
                <div className="glass-card p-3">
                  <div className="flex items-center">
                    <Layers className="h-4 w-4 text-kamui-purple mr-2" />
                    <h4 className="font-medium text-sm text-white">Popularity</h4>
                  </div>
                  <p className="text-kamui-purple text-xl font-medium mt-1">{strategy.popularity}%</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="glass-button text-kamui-accent mr-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast({
                      title: "Strategy Details",
                      description: `Viewing detailed information for ${strategy.name}`,
                    });
                  }}
                >
                  View Details
                </Button>
                <Button
                  className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover:opacity-90"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/deploy-strategy/${strategy.id}`);
                  }}
                >
                  Deploy Strategy
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2 mt-6">
          <Button 
            variant="outline" 
            className="w-full glass-button text-kamui-accent hover-scale group"
            onClick={() => {
              toast({
                title: "Browse All Strategies",
                description: "Loading complete strategy marketplace",
              });
            }}
          >
            <span>Browse All Strategies</span>
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Link to="/create-strategy" className="w-full">
            <Button 
              variant="outline" 
              className="w-full glass-button text-kamui-teal hover-scale group"
            >
              <Plus className="w-4 h-4 mr-2" />
              <span>Create Custom Strategy</span>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketplaceStrategies;
