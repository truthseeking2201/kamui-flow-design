
import React from 'react';
import { LineChart, ArrowRight, Star, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const MarketplacePreview: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const strategies = [
    {
      id: "1",
      name: "RWA Momentum Master",
      description: "AI-driven RWA market-making with momentum indicators",
      creator: "Kamui AI Team",
      users: 452,
      apy: "38-42%",
      risk: "Medium",
      stars: 4.8,
      color: "from-kamui-accent/20 to-kamui-teal/20",
      border: "border-kamui-accent/30",
    },
    {
      id: "2",
      name: "Real Estate Arbitrage",
      description: "Capitalize on price differences in tokenized real estate markets",
      creator: "PropertyQuant",
      users: 326,
      apy: "32-36%",
      risk: "Medium-High",
      stars: 4.6,
      color: "from-kamui-teal/20 to-kamui-purple/20",
      border: "border-kamui-teal/30",
    },
    {
      id: "3",
      name: "Fixed Income Guardian",
      description: "Conservative yield optimization for bond market-making",
      creator: "YieldBot",
      users: 583,
      apy: "15-18%",
      risk: "Low",
      stars: 4.9,
      color: "from-kamui-purple/20 to-blue-400/20",
      border: "border-kamui-purple/30",
    }
  ];

  const handleDeployStrategy = (id: string, name: string) => {
    toast({
      title: "Deploying Strategy",
      description: `Setting up ${name} for your portfolio`,
    });
    navigate(`/deploy-strategy/${id}`);
  };

  return (
    <section className="py-24 relative bg-gradient-to-b from-black/20 to-transparent" id="marketplace">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
            Strategy <span className="text-gradient">Marketplace</span>
          </h2>
          <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            A community-driven library for creating, sharing, and monetizing advanced quantitative trading strategies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strategies.map((strategy, index) => (
            <div 
              key={index} 
              className={`glass-card neon-border ${strategy.border} p-6 animate-fade-in hover-scale`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${strategy.color} flex items-center justify-center mb-4`}>
                <LineChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-white">{strategy.name}</h3>
              <p className="text-white/70 text-sm mb-4">{strategy.description}</p>
              
              <div className="flex justify-between items-center text-xs text-white/70 mb-3">
                <span>Created by {strategy.creator}</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-amber-400 mr-1" />
                  <span>{strategy.stars}</span>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-3 mb-4 flex justify-between text-sm">
                <div>
                  <div className="flex items-center">
                    <TrendingUp className="h-3 w-3 text-kamui-accent mr-1" />
                    <span className="text-white">{strategy.apy}</span>
                  </div>
                  <div className="text-white/60 text-xs">Target APY</div>
                </div>
                <div>
                  <div className="flex items-center">
                    <Shield className="h-3 w-3 text-kamui-teal mr-1" />
                    <span className="text-white">{strategy.risk}</span>
                  </div>
                  <div className="text-white/60 text-xs">Risk Level</div>
                </div>
                <div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 text-kamui-purple mr-1" />
                    <span className="text-white">{strategy.users}</span>
                  </div>
                  <div className="text-white/60 text-xs">Active Users</div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full glass-button text-kamui-accent hover-scale group"
                onClick={() => handleDeployStrategy(strategy.id, strategy.name)}
              >
                <span>Deploy Strategy</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/dashboard">
            <Button variant="outline" className="glass-button text-kamui-accent px-6 py-3 hover-scale group">
              <span>Explore Full Marketplace</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
