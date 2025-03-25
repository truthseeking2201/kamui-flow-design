
import React from 'react';
import Layout from '../components/Layout';
import { 
  LineChart, 
  Brain, 
  Layers, 
  AlertCircle, 
  Activity, 
  Wallet, 
  Info, 
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-display font-bold text-2xl md:text-3xl mb-2">AI Finance <span className="text-gradient">Dashboard</span></h1>
            <p className="text-white/70">Real-time market making strategies and analytics</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 glass-card p-2 px-4 text-sm">
            <Info className="w-4 h-4 text-kamui-accent" />
            <span className="text-white/80">AI Agent Status:</span>
            <span className="text-kamui-accent font-medium">Active</span>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <Wallet className="w-4 h-4 mr-2 text-kamui-teal" />
                Portfolio Value
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">$124,532.85</CardTitle>
              <p className="text-kamui-teal text-sm flex items-center mt-1">
                +2.4% <Activity className="w-3 h-3 ml-1" />
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <LineChart className="w-4 h-4 mr-2 text-kamui-accent" />
                Current APY
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">38.2%</CardTitle>
              <p className="text-kamui-accent text-sm flex items-center mt-1">
                +1.7% since yesterday
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <Brain className="w-4 h-4 mr-2 text-kamui-purple" />
                Active Strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">7</CardTitle>
              <p className="text-kamui-purple text-sm flex items-center mt-1">
                3 optimized today
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <AlertCircle className="w-4 h-4 mr-2 text-amber-400" />
                AI Insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">4 New</CardTitle>
              <p className="text-amber-400 text-sm flex items-center mt-1">
                Optimization opportunities
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Strategy Performance */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-white/5">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Strategy Performance</CardTitle>
                  <CardDescription>Real-time AI-optimized returns</CardDescription>
                </div>
                <Tabs defaultValue="week">
                  <TabsList className="bg-white/5">
                    <TabsTrigger value="day">Day</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[300px] flex items-center justify-center glass-card neon-border border-kamui-accent/30">
                  <div className="text-center">
                    <p className="text-white/60 mb-2">Performance Chart</p>
                    <p className="text-xs text-white/40">(Visualization will be implemented here)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Recommendations */}
          <div>
            <Card className="bg-gradient-card border-white/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-kamui-accent" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>Intelligent optimization suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Rebalance Portfolio",
                      description: "Optimize for current market volatility",
                      icon: <Layers className="w-4 h-4 text-kamui-purple" />,
                      action: "View Details"
                    },
                    {
                      title: "New Strategy Available",
                      description: "High-yield opportunity detected",
                      icon: <Activity className="w-4 h-4 text-kamui-teal" />,
                      action: "Explore"
                    },
                    {
                      title: "Risk Exposure Alert",
                      description: "Consider reducing position",
                      icon: <AlertCircle className="w-4 h-4 text-amber-400" />,
                      action: "Adjust"
                    }
                  ].map((item, index) => (
                    <div key={index} className="glass-card p-4 hover-scale group">
                      <div className="flex justify-between items-start">
                        <div className="flex gap-3">
                          <div className="mt-1">{item.icon}</div>
                          <div>
                            <h4 className="font-medium text-white">{item.title}</h4>
                            <p className="text-white/60 text-sm">{item.description}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-kamui-accent p-0 h-auto">
                          <span className="text-xs">{item.action}</span>
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-4 glass-button text-kamui-accent hover-scale">
                  View All Insights
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
