import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  LineChart, ChevronRight, Plus, Zap, Star, Users, 
  Download, Share2, FileCode, Filter, Search, Building, 
  Landmark, DollarSign, TrendingUp, Shield 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MarketplaceStrategies: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const strategies = [
    {
      id: "1",
      name: "RWA Momentum Alpha",
      description: "AI-driven momentum strategy optimized for market-making in real estate tokens",
      creator: "Kamui AI Team",
      apy: "38-42%",
      risk: "Medium",
      status: "Verified",
      category: "real-estate",
      rating: 4.8,
      users: 842,
      color: "from-kamui-accent to-kamui-teal",
      borderColor: "border-kamui-accent/30",
    },
    {
      id: "2",
      name: "Fixed Income Explorer",
      description: "Conservative yield optimization for bond market with AI spread management",
      creator: "BondQuant",
      apy: "14-18%",
      risk: "Low",
      status: "Verified",
      category: "fixed-income",
      rating: 4.9,
      users: 1253,
      color: "from-kamui-teal to-green-500",
      borderColor: "border-kamui-teal/30",
    },
    {
      id: "3",
      name: "Gold Reserve Strategy",
      description: "Dynamic liquidity provision for tokenized precious metals",
      creator: "MetalTraders",
      apy: "22-28%",
      risk: "Low-Medium",
      status: "Popular",
      category: "precious-metals",
      rating: 4.7,
      users: 756,
      color: "from-amber-400 to-yellow-600",
      borderColor: "border-amber-400/30",
    },
    {
      id: "4",
      name: "RWA Arbitrage Master",
      description: "Cross-market arbitrage strategy for RWA price discrepancies",
      creator: "ArbitrageAI",
      apy: "30-36%",
      risk: "Medium",
      status: "New",
      category: "equities",
      rating: 4.5,
      users: 328,
      color: "from-kamui-purple to-indigo-500",
      borderColor: "border-kamui-purple/30",
    },
    {
      id: "5",
      name: "Real Estate Yield Hunter",
      description: "Specialized market-making for tokenized commercial real estate",
      creator: "REITech",
      apy: "26-32%",
      risk: "Medium",
      status: "Rising",
      category: "real-estate",
      rating: 4.6,
      users: 415,
      color: "from-blue-500 to-blue-700",
      borderColor: "border-blue-500/30",
    },
    {
      id: "6",
      name: "Multi-Asset RWA Balancer",
      description: "Balanced approach across multiple RWA classes with adaptive allocation",
      creator: "Kamui AI Team",
      apy: "24-30%",
      risk: "Medium-Low",
      status: "Verified",
      category: "all",
      rating: 4.8,
      users: 927,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
    },
  ];

  const filteredStrategies = strategies.filter(strategy => {
    const matchesSearch = strategy.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      strategy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      strategy.creator.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || strategy.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'real-estate':
        return <Building className="h-5 w-5 text-blue-400" />;
      case 'precious-metals':
        return <Landmark className="h-5 w-5 text-amber-400" />;
      case 'fixed-income':
        return <DollarSign className="h-5 w-5 text-green-500" />;
      case 'equities':
        return <TrendingUp className="h-5 w-5 text-kamui-purple" />;
      default:
        return <LineChart className="h-5 w-5 text-kamui-accent" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Verified':
        return <Badge className="bg-green-500/20 text-green-400 text-xs">Verified</Badge>;
      case 'Popular':
        return <Badge className="bg-kamui-purple/20 text-kamui-purple text-xs">Popular</Badge>;
      case 'New':
        return <Badge className="bg-kamui-accent/20 text-kamui-accent text-xs">New</Badge>;
      case 'Rising':
        return <Badge className="bg-amber-500/20 text-amber-400 text-xs">Rising</Badge>;
      default:
        return null;
    }
  };

  const handleDeployStrategy = (id: string, name: string) => {
    toast({
      title: "Deploying Strategy",
      description: `Setting up ${name} for your portfolio`,
    });
    navigate(`/deploy-strategy/${id}`);
  };

  const handleCreateStrategy = () => {
    toast({
      title: "Create Strategy",
      description: "Opening the AI strategy creation wizard",
    });
    navigate('/create-strategy');
  };

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-card border-white/5">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-kamui-accent" />
              Strategy Marketplace
            </CardTitle>
            <CardDescription>Create, share, and monetize advanced RWA market-making strategies</CardDescription>
          </div>
          <Button 
            className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale"
            onClick={handleCreateStrategy}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Strategy
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-white/40" />
              <Input 
                placeholder="Search strategies by name, description or creator..." 
                className="pl-10 bg-white/5 border-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center">
              <Filter className="h-4 w-4 text-white/60" />
              <span className="text-white/60 text-sm">Filter:</span>
              <select 
                className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="real-estate">Real Estate</option>
                <option value="precious-metals">Precious Metals</option>
                <option value="fixed-income">Fixed Income</option>
                <option value="equities">Equities</option>
              </select>
            </div>
          </div>
          
          <Tabs defaultValue="grid">
            <div className="flex justify-end mb-4">
              <TabsList className="bg-white/5">
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="grid">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStrategies.map((strategy) => (
                  <div 
                    key={strategy.id} 
                    className={`glass-card neon-border ${strategy.borderColor} p-6 hover-scale`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${strategy.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                      {getCategoryIcon(strategy.category)}
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-semibold text-lg text-white">{strategy.name}</h3>
                      {getStatusBadge(strategy.status)}
                    </div>
                    
                    <p className="text-white/70 text-sm mb-4">{strategy.description}</p>
                    
                    <div className="flex justify-between items-center text-xs text-white/70 mb-3">
                      <span>By {strategy.creator}</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-amber-400 mr-1" />
                        <span>{strategy.rating}</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3 mb-4 flex justify-between text-sm">
                      <div>
                        <div className="flex items-center">
                          <Zap className="h-3 w-3 text-kamui-accent mr-1" />
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
                        <div className="text-white/60 text-xs">Users</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="default"
                        className="flex-1 bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale"
                        onClick={() => handleDeployStrategy(strategy.id, strategy.name)}
                      >
                        Deploy
                      </Button>
                      <Button variant="outline" size="icon" className="glass-button hover-scale">
                        <Download className="h-4 w-4 text-white/70" />
                      </Button>
                      <Button variant="outline" size="icon" className="glass-button hover-scale">
                        <Share2 className="h-4 w-4 text-white/70" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list">
              <div className="space-y-4">
                {filteredStrategies.map((strategy) => (
                  <div key={strategy.id} className="glass-card p-4 hover-scale">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${strategy.color} bg-opacity-20 flex items-center justify-center shrink-0`}>
                        {getCategoryIcon(strategy.category)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-semibold text-white">{strategy.name}</h3>
                          {getStatusBadge(strategy.status)}
                        </div>
                        <p className="text-white/70 text-sm mb-2">{strategy.description}</p>
                        <div className="flex items-center gap-4 text-xs text-white/60">
                          <span>By {strategy.creator}</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-amber-400 mr-1" />
                            <span>{strategy.rating}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3 w-3 text-kamui-purple mr-1" />
                            <span>{strategy.users} users</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 items-center">
                        <div className="bg-white/5 rounded-lg p-2 flex gap-4 text-sm">
                          <div>
                            <div className="flex items-center">
                              <Zap className="h-3 w-3 text-kamui-accent mr-1" />
                              <span className="text-white">{strategy.apy}</span>
                            </div>
                            <div className="text-white/60 text-xs">APY</div>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <Shield className="h-3 w-3 text-kamui-teal mr-1" />
                              <span className="text-white">{strategy.risk}</span>
                            </div>
                            <div className="text-white/60 text-xs">Risk</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            variant="default"
                            size="sm"
                            className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale"
                            onClick={() => handleDeployStrategy(strategy.id, strategy.name)}
                          >
                            Deploy
                          </Button>
                          <Button variant="outline" size="icon" className="glass-button hover-scale">
                            <Download className="h-4 w-4 text-white/70" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 flex justify-center">
            <Button 
              variant="outline" 
              className="glass-button text-kamui-accent hover-scale"
              onClick={() => toast({
                title: "Loading More Strategies",
                description: "Fetching additional strategies from the marketplace",
              })}
            >
              Load More Strategies
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-card border-white/5">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileCode className="h-5 w-5 text-kamui-purple" />
              Developer Resources
            </CardTitle>
            <CardDescription>Tools and resources for creating custom market-making strategies</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 hover-scale">
              <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                <FileCode className="h-5 w-5 text-kamui-accent" />
                Strategy SDK
              </h3>
              <p className="text-white/70 text-sm mb-4">Comprehensive development toolkit for building and testing RWA market-making strategies</p>
              <Button variant="outline" className="w-full glass-button text-kamui-accent">
                Access SDK
              </Button>
            </div>
            
            <div className="glass-card p-6 hover-scale">
              <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                <LineChart className="h-5 w-5 text-kamui-teal" />
                Backtesting Environment
              </h3>
              <p className="text-white/70 text-sm mb-4">Advanced simulation tools to test strategies against historical RWA market data</p>
              <Button variant="outline" className="w-full glass-button text-kamui-teal">
                Launch Backtest
              </Button>
            </div>
            
            <div className="glass-card p-6 hover-scale">
              <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-kamui-purple" />
                Developer Community
              </h3>
              <p className="text-white/70 text-sm mb-4">Join our community of strategy developers to collaborate and share insights</p>
              <Button variant="outline" className="w-full glass-button text-kamui-purple">
                Join Community
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketplaceStrategies;
