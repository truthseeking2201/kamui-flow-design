
import React from 'react';
import Layout from '../components/Layout';
import { Wallet, Brain, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Portfolio from '../components/dashboard/Portfolio';
import AIRecommendations from '../components/dashboard/AIRecommendations';
import Analytics from '../components/dashboard/Analytics';
import Strategies from '../components/dashboard/Strategies';

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
                +2.4% since yesterday
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <Brain className="w-4 h-4 mr-2 text-kamui-accent" />
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
                <Info className="w-4 h-4 mr-2 text-amber-400" />
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
