
import React from 'react';
import Layout from '../components/Layout';
import { Wallet, Brain, Info, LogOut, Layers, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Portfolio from '../components/dashboard/Portfolio';
import AIRecommendations from '../components/dashboard/AIRecommendations';
import Analytics from '../components/dashboard/Analytics';
import Strategies from '../components/dashboard/Strategies';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Dashboard: React.FC = () => {
  const { toast } = useToast();

  const handleCardClick = (title: string) => {
    toast({
      title: `${title} Selected`,
      description: `Loading ${title.toLowerCase()} dashboard section`,
    });
  };

  return (
    <Layout hideNav={true}>
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-kamui-accent to-kamui-teal flex items-center justify-center">
                <div className="w-2 h-2 bg-kamui-dark rounded-full"></div>
              </div>
              <Link to="/" className="font-display font-bold text-lg">Kamui <span className="text-gradient">AI</span></Link>
            </div>
            <h1 className="font-display font-bold text-2xl md:text-3xl mb-2">RWA <span className="text-gradient">Market-Making</span> Dashboard</h1>
            <p className="text-white/70">AI-driven real-world asset liquidity and market-making</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="glass-card p-2 px-4 text-sm flex items-center">
              <Info className="w-4 h-4 text-kamui-accent mr-2" />
              <span className="text-white/80 mr-2">Master AI Status:</span>
              <span className="text-kamui-accent font-medium">Active</span>
            </div>
            <Link to="/" className="glass-button px-3 py-2 text-white/80 font-medium flex items-center gap-2 hover-scale">
              <LogOut className="w-4 h-4" />
              <span>Exit</span>
            </Link>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-white/5 cursor-pointer hover-scale transition-all" onClick={() => handleCardClick("Portfolio")}>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <Wallet className="w-4 h-4 mr-2 text-kamui-teal" />
                RWA Portfolio Value
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">$124,532.85</CardTitle>
              <p className="text-kamui-teal text-sm flex items-center mt-1">
                +2.4% since yesterday
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-white/5 cursor-pointer hover-scale transition-all" onClick={() => handleCardClick("Master AI")}>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <Brain className="w-4 h-4 mr-2 text-kamui-accent" />
                Master AI Performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">38.2%</CardTitle>
              <p className="text-kamui-accent text-sm flex items-center mt-1">
                +1.7% since yesterday
              </p>
            </CardContent>
          </Card>
          
          <Link to="/intelligence-agents" className="block">
            <Card className="bg-gradient-card border-white/5 cursor-pointer hover-scale transition-all h-full">
              <CardHeader className="pb-2">
                <CardDescription className="flex items-center">
                  <Layers className="w-4 h-4 mr-2 text-kamui-purple" />
                  Intelligence Agents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl font-display">4 Active</CardTitle>
                <p className="text-kamui-purple text-sm flex items-center mt-1">
                  12 market predictions
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Card className="bg-gradient-card border-white/5 cursor-pointer hover-scale transition-all" onClick={() => handleCardClick("User AI Agents")}>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <LineChart className="w-4 h-4 mr-2 text-amber-400" />
                User AI Agents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">7 Deployed</CardTitle>
              <p className="text-amber-400 text-sm flex items-center mt-1">
                3 optimized today
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Portfolio and Analytics */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <Analytics />
              <Portfolio />
            </div>
          </div>

          {/* AI Recommendations */}
          <div>
            <AIRecommendations />
          </div>
        </div>
        
        {/* Strategies */}
        <div className="mb-8">
          <Strategies />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
