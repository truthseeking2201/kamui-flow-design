
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, Brain, Zap, Eye, LineChart, Bot, Shield, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const IntelligenceAgents: React.FC = () => {
  const { toast } = useToast();
  
  const handleDeployAgent = () => {
    toast({
      title: "Deploying New Agent",
      description: "Initializing agent deployment wizard",
    });
  };

  const handleAgentClick = (agentName: string) => {
    toast({
      title: `Agent Selected: ${agentName}`,
      description: "Loading agent management interface",
    });
  };

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
              Intelligence <span className="text-gradient">Agents</span>
            </h1>
            <p className="text-white/70">AI agent ecosystem for RWA market-making and analysis</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button 
              className="glass-button px-5 py-2 text-white/80 font-medium flex items-center gap-2 hover-scale"
              onClick={handleDeployAgent}
            >
              <Bot className="w-4 h-4" />
              <span>Deploy New Agent</span>
            </button>
          </div>
        </div>

        {/* AI Hierarchy Explanation */}
        <Card className="bg-gradient-card border-white/5 mb-8">
          <CardHeader>
            <CardTitle>Kamui AI Hierarchy</CardTitle>
            <CardDescription>Three-tier intelligence structure for RWA market-making</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-kamui-accent/30 to-kamui-teal/30 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-kamui-accent" />
                </div>
                <h3 className="font-medium text-lg mb-2 text-kamui-accent">Master AI Agent</h3>
                <p className="text-white/70 text-sm">Overall liquidity management and strategy orchestration for all RWA assets</p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-kamui-teal/30 to-kamui-purple/30 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-kamui-teal" />
                </div>
                <h3 className="font-medium text-lg mb-2 text-kamui-teal">Intelligence Agents</h3>
                <p className="text-white/70 text-sm">Market data collectors, analyzers and predictive models for improved accuracy</p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-kamui-purple/30 to-kamui-accent/30 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-kamui-purple" />
                </div>
                <h3 className="font-medium text-lg mb-2 text-kamui-purple">User AI Agents</h3>
                <p className="text-white/70 text-sm">Individual strategy execution and trading bots managed by users</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Agent Types */}
        <div className="mb-8">
          <Tabs defaultValue="intelligence">
            <TabsList className="w-full max-w-md grid grid-cols-3 mb-6">
              <TabsTrigger value="master">Master AI</TabsTrigger>
              <TabsTrigger value="intelligence">Intelligence</TabsTrigger>
              <TabsTrigger value="user">User Agents</TabsTrigger>
            </TabsList>

            <TabsContent value="master">
              <Card className="bg-gradient-card border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-kamui-accent" />
                    Master AI Agent
                  </CardTitle>
                  <CardDescription>Centralized RWA liquidity management system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="glass-card p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-teal/20 flex items-center justify-center mr-4">
                          <Brain className="h-6 w-6 text-kamui-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg mb-1">Master AI v1.3</h3>
                          <div className="flex items-center">
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded mr-2">Active</span>
                            <span className="text-white/60 text-xs">Last updated: 12 hours ago</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="glass-button text-kamui-accent">Manage</Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="glass-card p-3 text-center">
                        <p className="text-white/60 text-xs mb-1">Liquidity Managed</p>
                        <p className="text-lg font-semibold">$11.2M</p>
                      </div>
                      <div className="glass-card p-3 text-center">
                        <p className="text-white/60 text-xs mb-1">Performance</p>
                        <p className="text-lg font-semibold text-kamui-accent">+38.2%</p>
                      </div>
                      <div className="glass-card p-3 text-center">
                        <p className="text-white/60 text-xs mb-1">Active Strategies</p>
                        <p className="text-lg font-semibold">4</p>
                      </div>
                    </div>
                    
                    <h4 className="font-medium mb-2">Current Operations</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-kamui-accent/20 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 bg-kamui-accent rounded-full"></div>
                        </div>
                        <span className="text-white/80">Optimizing capital allocation across 4 RWA asset classes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-kamui-teal/20 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 bg-kamui-teal rounded-full"></div>
                        </div>
                        <span className="text-white/80">Managing 12 subordinate intelligence agents for market data analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-kamui-purple/20 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 bg-kamui-purple rounded-full"></div>
                        </div>
                        <span className="text-white/80">Executing market-making across 3 major trading venues</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="intelligence">
              <Card className="bg-gradient-card border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-kamui-teal" />
                    Intelligence Agents
                  </CardTitle>
                  <CardDescription>Market data collection and analysis systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 'intel-1',
                        name: 'Data Lake Connector',
                        icon: <Database className="h-5 w-5 text-kamui-teal" />,
                        description: 'RWA market data aggregation and processing',
                        status: 'Active',
                        metrics: { dataPoints: '1.2M', accuracy: '99.1%', updates: '5min' }
                      },
                      {
                        id: 'intel-2',
                        name: 'Price Forecaster',
                        icon: <LineChart className="h-5 w-5 text-amber-400" />,
                        description: 'Short-term RWA price movement predictions',
                        status: 'Active',
                        metrics: { dataPoints: '845K', accuracy: '87.3%', updates: '15min' }
                      },
                      {
                        id: 'intel-3',
                        name: 'Liquidity Analyzer',
                        icon: <Eye className="h-5 w-5 text-kamui-purple" />,
                        description: 'Cross-market liquidity depth monitoring',
                        status: 'Active',
                        metrics: { dataPoints: '632K', accuracy: '94.8%', updates: '1min' }
                      },
                      {
                        id: 'intel-4',
                        name: 'Security Monitor',
                        icon: <Shield className="h-5 w-5 text-kamui-accent" />,
                        description: 'Market manipulation detection system',
                        status: 'Paused',
                        metrics: { dataPoints: '380K', accuracy: '91.2%', updates: '10min' }
                      }
                    ].map((agent) => (
                      <div 
                        key={agent.id} 
                        className="glass-card p-4 hover-scale cursor-pointer"
                        onClick={() => handleAgentClick(agent.name)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kamui-teal/20 to-kamui-purple/20 flex items-center justify-center mr-3">
                              {agent.icon}
                            </div>
                            <div>
                              <h3 className="font-medium text-white mb-0.5">{agent.name}</h3>
                              <div className="flex items-center">
                                {agent.status === 'Active' ? (
                                  <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded mr-2">Active</span>
                                ) : (
                                  <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded mr-2">Paused</span>
                                )}
                                <span className="text-white/60 text-xs">{agent.description}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="glass-card p-2">
                            <p className="text-white/60 text-xs mb-0.5">Data Points</p>
                            <p className="text-sm font-medium">{agent.metrics.dataPoints}</p>
                          </div>
                          <div className="glass-card p-2">
                            <p className="text-white/60 text-xs mb-0.5">Accuracy</p>
                            <p className="text-sm font-medium text-kamui-teal">{agent.metrics.accuracy}</p>
                          </div>
                          <div className="glass-card p-2">
                            <p className="text-white/60 text-xs mb-0.5">Update Freq</p>
                            <p className="text-sm font-medium">{agent.metrics.updates}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="user">
              <Card className="bg-gradient-card border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-kamui-purple" />
                    User AI Agents
                  </CardTitle>
                  <CardDescription>User-deployed trading and strategy agents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 'user-1',
                        name: 'RWA Momentum Trader',
                        description: 'Trend-following strategy for real estate tokens',
                        status: 'Active',
                        performance: '+24.6%',
                        transactions: 187,
                        assets: 'Real Estate'
                      },
                      {
                        id: 'user-2',
                        name: 'Precious Metals Arbitrage',
                        description: 'Cross-venue price discrepancy exploitation',
                        status: 'Active',
                        performance: '+18.2%',
                        transactions: 346,
                        assets: 'Precious Metals'
                      },
                      {
                        id: 'user-3',
                        name: 'Fixed Income Liquidity',
                        description: 'Bond market liquidity provision',
                        status: 'Active',
                        performance: '+12.7%',
                        transactions: 95,
                        assets: 'Fixed Income'
                      },
                      {
                        id: 'user-4',
                        name: 'Equities Mean Reversion',
                        description: 'Statistical arbitrage for equity tokens',
                        status: 'Paused',
                        performance: '+8.9%',
                        transactions: 203,
                        assets: 'Equities'
                      }
                    ].map((agent) => (
                      <div 
                        key={agent.id} 
                        className="glass-card p-4 hover-scale cursor-pointer"
                        onClick={() => handleAgentClick(agent.name)}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <h3 className="font-medium text-white mb-1">{agent.name}</h3>
                            <p className="text-white/60 text-sm mb-2">{agent.description}</p>
                            <div className="flex items-center mb-3 md:mb-0">
                              {agent.status === 'Active' ? (
                                <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded mr-2">Active</span>
                              ) : (
                                <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded mr-2">Paused</span>
                              )}
                              <span className="text-white/60 text-xs">{agent.assets}</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-4">
                            <div className="text-center">
                              <p className="text-white/60 text-xs mb-1">Performance</p>
                              <p className="text-lg font-semibold text-green-400">{agent.performance}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-white/60 text-xs mb-1">Transactions</p>
                              <p className="text-lg font-semibold">{agent.transactions}</p>
                            </div>
                            <Button variant="outline" size="sm" className="glass-button text-kamui-accent">Manage</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 glass-button text-kamui-accent hover-scale"
                      onClick={handleDeployAgent}
                    >
                      <Bot className="w-4 h-4 mr-2" />
                      <span>Deploy New Agent</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default IntelligenceAgents;
