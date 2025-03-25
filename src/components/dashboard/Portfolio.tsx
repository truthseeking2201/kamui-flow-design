
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, TrendingUp, PieChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio: React.FC = () => {
  // Mock portfolio data
  const assets = [
    { name: 'USDK Stablecoin', amount: '45,250.00', value: '$45,250.00', allocation: 36.3, change: 2.4 },
    { name: 'KMM Token', amount: '15,430', value: '$38,575.00', allocation: 30.9, change: 5.7 },
    { name: 'ETH', amount: '12.54', value: '$25,080.00', allocation: 20.1, change: -1.2 },
    { name: 'BTC', amount: '0.43', value: '$15,627.85', allocation: 12.7, change: 3.8 }
  ];

  return (
    <Card className="bg-gradient-card border-white/5">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Portfolio Allocation</CardTitle>
          <CardDescription>Asset distribution and performance</CardDescription>
        </div>
        <Tabs defaultValue="list">
          <TabsList className="bg-white/5">
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="chart">Chart</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <TabsContent value="list" className="mt-0">
          <div className="space-y-1">
            {assets.map((asset, index) => (
              <div 
                key={index} 
                className="glass-card p-3 hover-scale transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-purple/20 flex items-center justify-center">
                      {asset.name.includes('USDK') ? (
                        <DollarSign className="h-5 w-5 text-kamui-accent" />
                      ) : asset.name.includes('KMM') ? (
                        <TrendingUp className="h-5 w-5 text-kamui-purple" />
                      ) : (
                        <PieChart className="h-5 w-5 text-kamui-teal" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{asset.name}</h4>
                      <p className="text-white/60 text-sm">{asset.amount}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">{asset.value}</p>
                    <p className={`text-sm ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {asset.change >= 0 ? '+' : ''}{asset.change}%
                    </p>
                  </div>
                </div>
                
                {/* Allocation bar */}
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-white/60 mb-1">
                    <span>Allocation</span>
                    <span>{asset.allocation}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5">
                    <div 
                      className="bg-gradient-to-r from-kamui-accent to-kamui-purple h-1.5 rounded-full" 
                      style={{width: `${asset.allocation}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-4 glass-button text-kamui-accent hover-scale group">
            <span>Manage Portfolio</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </TabsContent>
        
        <TabsContent value="chart" className="mt-0">
          <div className="h-[300px] flex items-center justify-center glass-card neon-border border-kamui-accent/30">
            <div className="text-center">
              <PieChart className="h-10 w-10 text-kamui-accent mx-auto mb-3 opacity-50" />
              <p className="text-white/60 mb-2">Portfolio Allocation Chart</p>
              <p className="text-xs text-white/40">(Visualization will be implemented here)</p>
            </div>
          </div>
        </TabsContent>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
