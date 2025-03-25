
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Brain, ChevronLeft, LineChart, Settings, Shield, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PerformanceChart from '@/components/PerformanceChart';

const StrategyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [chartPeriod, setChartPeriod] = useState<'week' | 'month' | 'year'>('month');
  
  // Mock strategy data (would come from API in a real app)
  const strategy = {
    id: id || '1',
    name: 'Momentum Alpha',
    description: 'AI-driven momentum trading strategy with dynamic rebalancing and volatility controls.',
    returns: {
      daily: 0.4,
      weekly: 2.8,
      monthly: 12.5,
      yearly: 42
    },
    risk: 'Medium',
    aiStatus: 'Active',
    lastOptimized: '2 hours ago',
    assets: ['BTC', 'ETH', 'USDK', 'KMM'],
    creator: '0x7aB...45cD'
  };

  const handleActivate = () => {
    toast({
      title: "Strategy Activated",
      description: "AI agent is now running this strategy with your portfolio",
      variant: "default",
    });
  };

  const handleChartPeriodChange = (value: string) => {
    setChartPeriod(value as 'week' | 'month' | 'year');
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        {/* Header with navigation */}
        <div className="mb-8">
          <Button variant="ghost" className="text-white/70 mb-4" onClick={() => window.history.back()}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Strategies
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="font-display font-bold text-2xl md:text-3xl mb-2 flex items-center">
                <Brain className="mr-3 text-kamui-accent h-7 w-7" />
                {strategy.name}
              </h1>
              <p className="text-white/70">{strategy.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="glass-button border-kamui-accent/50 text-kamui-accent hover-scale">
                <Settings className="mr-2 h-4 w-4" />
                Customize
              </Button>
              <Button 
                className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale"
                onClick={handleActivate}
              >
                Activate Strategy
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Strategy Performance */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-white/5">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Historical and projected returns</CardDescription>
                </div>
                <Tabs defaultValue="month" onValueChange={handleChartPeriodChange}>
                  <TabsList className="bg-white/5">
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[300px] glass-card neon-border border-kamui-accent/30 p-4">
                  <PerformanceChart period={chartPeriod} />
                </div>

                {/* Performance metrics */}
                <div className="grid grid-cols-4 gap-4 mt-6">
                  {Object.entries(strategy.returns).map(([period, value]) => (
                    <div key={period} className="glass-card p-4 text-center">
                      <p className="text-white/60 text-xs mb-1 capitalize">{period} Return</p>
                      <p className={`text-xl font-semibold ${value > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {value > 0 ? '+' : ''}{value}%
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Strategy Parameters */}
            <Card className="bg-gradient-card border-white/5 mt-8">
              <CardHeader>
                <CardTitle>AI Parameters</CardTitle>
                <CardDescription>Optimized settings for maximum performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card p-4">
                    <p className="text-white/60 text-sm mb-2">Risk Tolerance</p>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-1">
                      <div className="bg-gradient-to-r from-green-400 to-yellow-400 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs text-white/40">
                      <span>Conservative</span>
                      <span>Moderate</span>
                      <span>Aggressive</span>
                    </div>
                  </div>

                  <div className="glass-card p-4">
                    <p className="text-white/60 text-sm mb-2">Volatility Control</p>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-1">
                      <div className="bg-gradient-to-r from-blue-400 to-kamui-purple h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs text-white/40">
                      <span>Low</span>
                      <span>Medium</span>
                      <span>High</span>
                    </div>
                  </div>

                  <div className="glass-card p-4">
                    <p className="text-white/60 text-sm mb-2">Rebalancing Frequency</p>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-1">
                      <div className="bg-gradient-to-r from-kamui-teal to-kamui-accent h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs text-white/40">
                      <span>Daily</span>
                      <span>Weekly</span>
                      <span>Monthly</span>
                    </div>
                  </div>

                  <div className="glass-card p-4">
                    <p className="text-white/60 text-sm mb-2">Asset Diversity</p>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-1">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs text-white/40">
                      <span>Focused</span>
                      <span>Balanced</span>
                      <span>Diverse</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Strategy Details Sidebar */}
          <div>
            <Card className="bg-gradient-card border-white/5 sticky top-20">
              <CardHeader>
                <CardTitle>Strategy Details</CardTitle>
                <CardDescription>Key information and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-white/60">AI Status</p>
                      <div className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                        <span className="text-green-400 font-medium">{strategy.aiStatus}</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-white/60">Risk Level</p>
                      <span className="text-white font-medium">{strategy.risk}</span>
                    </div>
                  </div>

                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-white/60">Last Optimized</p>
                      <span className="text-white font-medium">{strategy.lastOptimized}</span>
                    </div>
                  </div>

                  <div className="glass-card p-4">
                    <p className="text-white/60 mb-2">Assets Utilized</p>
                    <div className="flex flex-wrap gap-2">
                      {strategy.assets.map(asset => (
                        <span key={asset} className="px-2 py-1 bg-white/10 rounded-md text-sm">
                          {asset}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-white/60">Created By</p>
                      <span className="text-white font-medium">{strategy.creator}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" className="w-full glass-button text-kamui-accent hover-scale">
                      <Shield className="mr-2 h-4 w-4" />
                      View Risk Analysis
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StrategyDetails;
