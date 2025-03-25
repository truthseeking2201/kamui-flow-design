
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, Brain, Activity, Settings, Code, History, Terminal, PlayCircle, PauseCircle, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import PerformanceChart from '../components/PerformanceChart';

const AgentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  // For demo purposes, we'd fetch the agent details based on the ID
  // Here we're just using a mock agent
  const agent = {
    id: id || '1',
    name: 'RWA Momentum Trader',
    type: 'User AI Agent',
    description: 'AI-driven momentum trading strategy for tokenized real estate assets',
    status: 'Active',
    performance: '+24.6%',
    transactions: 187,
    assets: 'Real Estate',
    deployedSince: 'May 12, 2023',
    lastOptimized: '2 hours ago'
  };

  const handleOptimizeAgent = () => {
    toast({
      title: "Agent Optimization",
      description: "Starting AI-driven optimization process for this agent",
    });
  };

  const handleToggleAgent = () => {
    const newStatus = agent.status === 'Active' ? 'Paused' : 'Active';
    toast({
      title: `Agent ${newStatus}`,
      description: `Agent has been ${newStatus === 'Active' ? 'activated' : 'paused'}`,
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
                to="/intelligence-agents" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Agents</span>
              </Link>
            </div>
            <h1 className="font-display font-bold text-2xl md:text-3xl mb-2">
              {agent.name} <span className="text-gradient">Details</span>
            </h1>
            <p className="text-white/70">{agent.description}</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <button 
              className="glass-button px-4 py-2 text-white/80 font-medium flex items-center gap-2 hover-scale"
              onClick={handleToggleAgent}
            >
              {agent.status === 'Active' ? (
                <><PauseCircle className="w-4 h-4" /><span>Pause Agent</span></>
              ) : (
                <><PlayCircle className="w-4 h-4" /><span>Activate Agent</span></>
              )}
            </button>
            <button 
              className="glass-button px-4 py-2 text-kamui-accent font-medium flex items-center gap-2 hover-scale"
              onClick={handleOptimizeAgent}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Optimize</span>
            </button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <Activity className="w-4 h-4 mr-2 text-kamui-accent" />
                Performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display text-green-400">+24.6%</CardTitle>
              <p className="text-kamui-accent text-sm flex items-center mt-1">
                +2.1% since last week
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <Brain className="w-4 h-4 mr-2 text-kamui-teal" />
                Status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">
                {agent.status === 'Active' ? (
                  <span className="text-green-400">Active</span>
                ) : (
                  <span className="text-amber-400">Paused</span>
                )}
              </CardTitle>
              <p className="text-kamui-teal text-sm flex items-center mt-1">
                Since {agent.status === 'Active' ? agent.deployedSince : agent.lastOptimized}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <History className="w-4 h-4 mr-2 text-kamui-purple" />
                Transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">{agent.transactions}</CardTitle>
              <p className="text-kamui-purple text-sm flex items-center mt-1">
                Last executed 14 minutes ago
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center">
                <Code className="w-4 h-4 mr-2 text-amber-400" />
                Last Optimized
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl font-display">2 hours ago</CardTitle>
              <p className="text-amber-400 text-sm flex items-center mt-1">
                12 parameters adjusted
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Agent Details Tabs */}
        <div className="mb-8">
          <Tabs defaultValue="performance">
            <TabsList className="w-full max-w-md grid grid-cols-3 mb-6">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="parameters">Parameters</TabsTrigger>
              <TabsTrigger value="logs">Activity Logs</TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
              <Card className="bg-gradient-card border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-kamui-accent" />
                    Agent Performance
                  </CardTitle>
                  <CardDescription>Historical performance metrics and analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[350px] mb-6">
                    <PerformanceChart period="month" />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="glass-card p-3 text-center">
                      <p className="text-white/60 text-xs mb-1">Daily</p>
                      <p className="text-lg font-semibold text-green-400">+0.7%</p>
                    </div>
                    <div className="glass-card p-3 text-center">
                      <p className="text-white/60 text-xs mb-1">Weekly</p>
                      <p className="text-lg font-semibold text-green-400">+3.5%</p>
                    </div>
                    <div className="glass-card p-3 text-center">
                      <p className="text-white/60 text-xs mb-1">Monthly</p>
                      <p className="text-lg font-semibold text-green-400">+12.2%</p>
                    </div>
                    <div className="glass-card p-3 text-center">
                      <p className="text-white/60 text-xs mb-1">All Time</p>
                      <p className="text-lg font-semibold text-green-400">+24.6%</p>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4">
                    <h3 className="font-medium text-kamui-accent mb-2">Performance Analysis</h3>
                    <p className="text-white/80 text-sm mb-4">
                      This agent has consistently outperformed market averages by leveraging momentum indicators and real-time RWA market data. 
                      Recent optimizations have improved performance by reducing slippage and improving entry/exit timing.
                    </p>
                    <h4 className="font-medium text-white/90 mb-2">Key Metrics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/70">Sharpe Ratio</span>
                        <span className="text-white font-medium">2.31</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/70">Max Drawdown</span>
                        <span className="text-white font-medium">6.7%</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/70">Win Rate</span>
                        <span className="text-white font-medium">68.4%</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/70">Avg. Transaction</span>
                        <span className="text-white font-medium">$1,243</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="parameters">
              <Card className="bg-gradient-card border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-kamui-teal" />
                    Agent Parameters
                  </CardTitle>
                  <CardDescription>Current configuration and optimization settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="glass-card p-4">
                      <h3 className="font-medium text-kamui-teal mb-3">Strategy Parameters</h3>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/70">Momentum Lookback Period</span>
                          <span className="text-white font-medium">14 days</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/70">Signal Threshold</span>
                          <span className="text-white font-medium">0.15</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/70">Position Sizing</span>
                          <span className="text-white font-medium">Adaptive</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/70">Risk Management</span>
                          <span className="text-white font-medium">Strict</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/70">Take Profit</span>
                          <span className="text-white font-medium">5.2%</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                          <span className="text-white/70">Stop Loss</span>
                          <span className="text-white font-medium">2.8%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-4">
                      <h3 className="font-medium text-kamui-purple mb-3">Execution Parameters</h3>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/70">Execution Mode</span>
                          <span className="text-white font-medium">Aggressive</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/70">Slippage Tolerance</span>
                          <span className="text-white font-medium">0.3%</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/70">Max Transaction Size</span>
                          <span className="text-white font-medium">$5,000</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/70">Order Type</span>
                          <span className="text-white font-medium">Limit</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/70">Timeout</span>
                          <span className="text-white font-medium">120 seconds</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                          <span className="text-white/70">Retry Attempts</span>
                          <span className="text-white font-medium">3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 glass-button text-kamui-accent hover-scale"
                    onClick={handleOptimizeAgent}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    <span>Run AI Optimization</span>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="logs">
              <Card className="bg-gradient-card border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Terminal className="h-5 w-5 mr-2 text-amber-400" />
                    Activity Logs
                  </CardTitle>
                  <CardDescription>Recent agent activity and transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="glass-card p-4 mb-6 bg-black/30">
                    <div className="font-mono text-sm text-white/80 space-y-2">
                      <p><span className="text-green-400">[INFO]</span> <span className="text-white/50">2023-07-15 14:32:18</span> Agent started monitoring RWA markets</p>
                      <p><span className="text-blue-400">[SIGNAL]</span> <span className="text-white/50">2023-07-15 14:45:03</span> Buy signal detected for TokenizedProperty-A</p>
                      <p><span className="text-yellow-400">[EXEC]</span> <span className="text-white/50">2023-07-15 14:45:10</span> Executing buy order: 2.5 TokenizedProperty-A @ $982.30</p>
                      <p><span className="text-green-400">[INFO]</span> <span className="text-white/50">2023-07-15 14:45:18</span> Order executed successfully</p>
                      <p><span className="text-blue-400">[SIGNAL]</span> <span className="text-white/50">2023-07-15 15:12:46</span> Momentum increasing for TokenizedProperty-A</p>
                      <p><span className="text-yellow-400">[EXEC]</span> <span className="text-white/50">2023-07-15 15:13:02</span> Executing buy order: 1.2 TokenizedProperty-A @ $989.75</p>
                      <p><span className="text-green-400">[INFO]</span> <span className="text-white/50">2023-07-15 15:13:15</span> Order executed successfully</p>
                      <p><span className="text-purple-400">[ANALYSIS]</span> <span className="text-white/50">2023-07-15 16:02:38</span> Running market depth analysis</p>
                      <p><span className="text-blue-400">[SIGNAL]</span> <span className="text-white/50">2023-07-15 16:42:51</span> Sell signal detected for TokenizedProperty-A</p>
                      <p><span className="text-yellow-400">[EXEC]</span> <span className="text-white/50">2023-07-15 16:43:07</span> Executing sell order: 3.7 TokenizedProperty-A @ $1021.15</p>
                      <p><span className="text-green-400">[INFO]</span> <span className="text-white/50">2023-07-15 16:43:28</span> Order executed successfully</p>
                      <p><span className="text-green-400">[PROFIT]</span> <span className="text-white/50">2023-07-15 16:43:29</span> Transaction profit: +$124.83 (+3.21%)</p>
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-kamui-accent mb-3">Recent Transactions</h3>
                  <div className="space-y-3">
                    {[
                      { asset: 'TokenizedProperty-A', type: 'SELL', amount: '3.7', price: '$1021.15', profit: '+$124.83', time: '16:43:28' },
                      { asset: 'TokenizedProperty-A', type: 'BUY', amount: '1.2', price: '$989.75', profit: '-', time: '15:13:15' },
                      { asset: 'TokenizedProperty-A', type: 'BUY', amount: '2.5', price: '$982.30', profit: '-', time: '14:45:18' },
                      { asset: 'REIT-Token-B', type: 'SELL', amount: '5.0', price: '$478.92', profit: '+$86.15', time: '09:12:05' },
                      { asset: 'CommercialRE-C', type: 'SELL', amount: '1.8', price: '$1342.60', profit: '+$57.33', time: '08:45:22' }
                    ].map((tx, index) => (
                      <div key={index} className="glass-card p-3 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-2 h-10 ${tx.type === 'BUY' ? 'bg-green-500' : 'bg-amber-500'} rounded-l-full mr-3`}></div>
                          <div>
                            <p className="text-white font-medium">{tx.asset}</p>
                            <p className="text-white/60 text-xs">{tx.time} today</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className={`font-medium ${tx.type === 'BUY' ? 'text-green-400' : 'text-amber-400'}`}>{tx.type}</p>
                            <p className="text-white/60 text-xs">{tx.amount} @ {tx.price}</p>
                          </div>
                          {tx.profit !== '-' && (
                            <p className="text-green-400 font-medium">{tx.profit}</p>
                          )}
                        </div>
                      </div>
                    ))}
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

export default AgentDetails;
