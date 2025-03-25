
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, ChevronRight, Plus, Zap } from 'lucide-react';

const Strategies: React.FC = () => {
  const strategies = [
    {
      id: "1",
      name: "Momentum Alpha",
      description: "AI-driven momentum strategy",
      apy: 42,
      risk: "Medium",
      status: "Active"
    },
    {
      id: "2",
      name: "Stable Yield",
      description: "Low volatility income",
      apy: 18,
      risk: "Low",
      status: "Active"
    },
    {
      id: "3",
      name: "Market Neutral",
      description: "Delta-neutral strategy",
      apy: 25,
      risk: "Low-Medium",
      status: "Paused"
    }
  ];

  return (
    <Card className="bg-gradient-card border-white/5">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Active Strategies</CardTitle>
          <CardDescription>AI-powered investment strategies</CardDescription>
        </div>
        <Button variant="outline" className="glass-button text-kamui-accent hover-scale">
          <Plus className="mr-2 h-4 w-4" />
          New Strategy
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {strategies.map((strategy) => (
            <Link 
              key={strategy.id} 
              to={`/strategy/${strategy.id}`}
              className="block"
            >
              <div className="glass-card p-4 hover-scale group transition-all duration-200 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-purple/20 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-kamui-accent" />
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
        
        <Link to="/strategies" className="block w-full">
          <Button variant="outline" className="w-full mt-4 glass-button text-kamui-accent hover-scale group">
            <span>View All Strategies</span>
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Strategies;
