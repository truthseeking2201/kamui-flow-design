import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, Activity, Brain, BarChart3, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PerformanceChart from '../components/PerformanceChart';

const StrategyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const strategyName = `AI Market Maker Strategy ${id}`;
  
  return (
    <Layout hideNav={true}>
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link 
                to="/dashboard" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            <h1 className="font-display font-bold text-2xl md:text-3xl mb-2">
              {strategyName} <span className="text-gradient">Details</span>
            </h1>
            <p className="text-white/70">Detailed performance metrics and configuration</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="glass-button px-5 py-2 text-white/80 font-medium flex items-center gap-2 hover-scale">
              <Settings className="w-4 h-4" />
              <span>Configure Strategy</span>
            </button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <Activity className="w-4 h-4 mr-2 text-kamui-accent" />
                Current APY
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">42.6%</CardTitle>
              <p className="text-kamui-accent text-sm flex items-center mt-1">
                +3.8% since last week
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <Brain className="w-4 h-4 mr-2 text-kamui-teal" />
                AI Confidence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">High</CardTitle>
              <p className="text-kamui-teal text-sm flex items-center mt-1">
                Stable market conditions
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <BarChart3 className="w-4 h-4 mr-2 text-kamui-purple" />
                Total Value Deployed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">$38,254.92</CardTitle>
              <p className="text-kamui-purple text-sm flex items-center mt-1">
                Across 3 markets
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Strategy Performance */}
        <div className="mb-8">
          <PerformanceChart period="year" />
        </div>

        {/* Strategy Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-white/5 h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Brain className="w-5 h-5 mr-2 text-kamui-teal" />
                  Strategy Analysis
                </CardTitle>
                <CardDescription>AI-driven insights and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="glass-card p-4">
                    <h3 className="font-medium text-kamui-accent mb-2">Current Market Conditions</h3>
                    <p className="text-white/80 text-sm">
                      The market is showing low volatility with strong directional trends. The AI model is confident in its predictions and has optimized for stable returns.
                    </p>
                  </div>
                  
                  <div className="glass-card p-4">
                    <h3 className="font-medium text-kamui-teal mb-2">Recent Optimizations</h3>
                    <p className="text-white/80 text-sm mb-4">
                      In the last 7 days, the AI has made 4 key optimizations to adapt to changing market conditions:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-kamui-accent/20 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 bg-kamui-accent rounded-full"></div>
                        </div>
                        <span className="text-white/80">Adjusted spread parameters by 0.05% to capture improved market liquidity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-kamui-teal/20 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 bg-kamui-teal rounded-full"></div>
                        </div>
                        <span className="text-white/80">Increased position size by 5% in response to reduced volatility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-kamui-purple/20 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 bg-kamui-purple rounded-full"></div>
                        </div>
                        <span className="text-white/80">Modified rebalancing threshold to optimize gas costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-kamui-accent/20 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 bg-kamui-accent rounded-full"></div>
                        </div>
                        <span className="text-white/80">Added new correlation parameter to improve risk model</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-gradient-card border-white/5 h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Settings className="w-5 h-5 mr-2 text-kamui-purple" />
                  Strategy Configuration
                </CardTitle>
                <CardDescription>Current parameters and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-white/70">Risk Level</span>
                    <span className="text-kamui-teal font-medium">Medium</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-white/70">Auto-optimize</span>
                    <span className="text-kamui-accent font-medium">Enabled</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-white/70">Rebalance Frequency</span>
                    <span className="text-white font-medium">Every 24h</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-white/70">Target APY</span>
                    <span className="text-white font-medium">40% - 50%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-white/70">Max Drawdown</span>
                    <span className="text-white font-medium">15%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-white/70">Active Since</span>
                    <span className="text-white font-medium">May 15, 2023</span>
                  </div>
                  
                  <button className="w-full glass-button px-4 py-2 text-kamui-accent font-medium flex items-center justify-center gap-2 hover-scale mt-4">
                    <Settings className="w-4 h-4" />
                    <span>Modify Parameters</span>
                  </button>
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
