
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, Building, Landmark, PieChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRWAAssets } from '@/hooks/useRWAAssets';
import { useToast } from '@/hooks/use-toast';

const Portfolio: React.FC = () => {
  const { assetType, setAssetType, assetTypes } = useRWAAssets();
  const { toast } = useToast();
  
  // Updated portfolio data to reflect RWA assets
  const assets = [
    { name: 'USDK Stablecoin', amount: '45,250.00', value: '$45,250.00', allocation: 36.3, change: 2.4, type: 'fixed-income' },
    { name: 'Tokenized Real Estate Fund', amount: '12.65', value: '$38,575.00', allocation: 30.9, change: 5.7, type: 'real-estate' },
    { name: 'Gold ETF', amount: '18.22', value: '$25,080.00', allocation: 20.1, change: -1.2, type: 'precious-metals' },
    { name: 'Equity Index', amount: '8.75', value: '$15,627.85', allocation: 12.7, change: 3.8, type: 'equities' }
  ];

  // Filter assets based on selected type
  const filteredAssets = assetType === 'all' 
    ? assets 
    : assets.filter(asset => asset.type === assetType);

  const getAssetIcon = (assetName: string) => {
    if (assetName.includes('USDK') || assetName.includes('Fixed Income')) {
      return <DollarSign className="h-5 w-5 text-kamui-accent" />;
    } else if (assetName.includes('Real Estate')) {
      return <Building className="h-5 w-5 text-kamui-purple" />;
    } else if (assetName.includes('Gold') || assetName.includes('Silver') || assetName.includes('Precious')) {
      return <Landmark className="h-5 w-5 text-amber-400" />;
    } else {
      return <PieChart className="h-5 w-5 text-kamui-teal" />;
    }
  };

  const handleAssetClick = (asset: any) => {
    toast({
      title: `${asset.name}`,
      description: `Current value: ${asset.value} (${asset.change >= 0 ? '+' : ''}${asset.change}%)`,
    });
  };

  const handleManagePortfolio = () => {
    toast({
      title: "Portfolio Management",
      description: "Opening RWA portfolio management interface",
    });
  };

  return (
    <Card className="bg-gradient-card border-white/5">
      <CardHeader className="pb-2">
        <CardTitle>RWA Portfolio Allocation</CardTitle>
        <CardDescription>Tokenized real-world assets distribution</CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="list">
          <div className="flex justify-between items-center mb-4">
            <TabsList className="bg-white/5">
              <TabsTrigger value="list">List</TabsTrigger>
              <TabsTrigger value="chart">Chart</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="list">
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
          
            <div className="space-y-2">
              {filteredAssets.map((asset, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 hover-scale transition-all duration-200 cursor-pointer"
                  onClick={() => handleAssetClick(asset)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-purple/20 flex items-center justify-center">
                      {getAssetIcon(asset.name)}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-white">{asset.name}</h4>
                      <p className="text-white/60 text-sm">{asset.amount}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-white">{asset.value}</p>
                      <p className={`text-sm ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {asset.change >= 0 ? '+' : ''}{asset.change}%
                      </p>
                    </div>
                  </div>
                  
                  {/* Allocation bar */}
                  <div>
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
            
            <Button 
              variant="outline" 
              className="w-full mt-4 glass-button text-kamui-accent hover-scale group"
              onClick={handleManagePortfolio}
            >
              <span>Manage RWA Portfolio</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </TabsContent>
          
          <TabsContent value="chart">
            <div className="h-[300px] flex items-center justify-center glass-card neon-border border-kamui-accent/30">
              <div className="text-center">
                <PieChart className="h-10 w-10 text-kamui-accent mx-auto mb-3 opacity-50" />
                <p className="text-white/60 mb-2">RWA Portfolio Allocation Chart</p>
                <p className="text-xs text-white/40">(Visualization will be implemented here)</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
