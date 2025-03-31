import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, 
  Brain, 
  Database, 
  Eye, 
  LineChart, 
  Plus, 
  Shield, 
  Zap,
  CheckCircle,
  Settings,
  User,
  Lightbulb
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const IntelligenceAgents: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [deployDialogOpen, setDeployDialogOpen] = useState(false);
  const [newAgentName, setNewAgentName] = useState('');
  const [newAgentType, setNewAgentType] = useState('intelligence');
  const [deployingAgent, setDeployingAgent] = useState(false);
  
  const handleDeployAgent = () => {
    setDeployDialogOpen(true);
  };

  const handleConfirmDeploy = () => {
    if (!newAgentName.trim()) {
      toast({
        title: "Agent Name Required",
        description: "Please provide a name for your new agent",
        variant: "destructive",
      });
      return;
    }
    
    setDeployingAgent(true);
    
    // Simulate deployment process
    setTimeout(() => {
      setDeployingAgent(false);
      setDeployDialogOpen(false);
      
      toast({
        title: "Agent Deployed Successfully",
        description: `${newAgentName} has been deployed and is now initializing`,
      });
      
      // Reset form
      setNewAgentName('');
      setNewAgentType('intelligence');
    }, 1500);
  };

  const handleAgentClick = (agentName: string, agentId: string) => {
    toast({
      title: `Agent Selected: ${agentName}`,
      description: "Loading agent management interface",
    });
    
    navigate(`/agent/${agentId}`);
  };

  const getAgentIcon = (type: string) => {
    switch (type) {
      case 'master':
        return <Brain className="h-8 w-8 text-kamui-accent" />;
      case 'intelligence':
        return <Lightbulb className="h-8 w-8 text-kamui-teal" />;
      case 'user':
        return <User className="h-8 w-8 text-kamui-purple" />;
      default:
        return <Bot className="h-8 w-8 text-gray-400" />;
    }
  };

  const agentTypeStyles = {
    master: {
      borderColor: 'border-kamui-accent/50',
      textGradient: 'text-gradient-master',
      iconBg: 'bg-gradient-to-br from-kamui-accent/10 to-kamui-teal/10',
      cardBg: 'bg-gradient-to-br from-kamui-accent/5 via-kamui-accent/10 to-kamui-teal/5',
      iconColor: 'text-kamui-accent',
      statusColor: 'bg-kamui-accent/20 text-kamui-accent'
    },
    intelligence: {
      borderColor: 'border-kamui-teal/50',
      textGradient: 'text-gradient-intelligence',
      iconBg: 'bg-gradient-to-br from-kamui-teal/10 to-kamui-purple/10',
      cardBg: 'bg-gradient-to-br from-kamui-teal/5 via-kamui-teal/10 to-kamui-purple/5',
      iconColor: 'text-kamui-teal',
      statusColor: 'bg-kamui-teal/20 text-kamui-teal'
    },
    user: {
      borderColor: 'border-kamui-purple/50',
      textGradient: 'text-gradient-user',
      iconBg: 'bg-gradient-to-br from-kamui-purple/10 to-kamui-pink/10',
      cardBg: 'bg-gradient-to-br from-kamui-purple/5 via-kamui-purple/10 to-kamui-pink/5',
      iconColor: 'text-kamui-purple',
      statusColor: 'bg-kamui-purple/20 text-kamui-purple'
    }
  };

  return (
    <div className="space-y-8 py-8 px-6 max-w-7xl mx-auto">
      {/* Refined Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h1 className="font-display font-bold text-3xl mb-2 text-gradient">
            Intelligence Agents
          </h1>
          <p className="text-white/70 text-lg">Intelligent ecosystem for RWA market-making</p>
        </div>
        
        <Button
          variant="outline"
          className="glass-button text-kamui-accent hover-scale mt-4 md:mt-0 px-6 py-3"
          onClick={handleDeployAgent}
        >
          <Plus className="w-5 h-5 mr-2" />
          Deploy New Agent
        </Button>
      </div>

      {/* AI Hierarchy Explanation */}
      <Card className="bg-gradient-card border-white/5 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-gradient-purple">Kamui AI Hierarchy</CardTitle>
          <CardDescription>Sophisticated three-tier intelligence structure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: 'master',
                title: 'Master AI Agent',
                description: 'Centralized liquidity management and strategy orchestration',
                icon: <Brain className="h-10 w-10 text-kamui-accent" />,
              },
              {
                type: 'intelligence',
                title: 'Intelligence Agents',
                description: 'Advanced market data analysis and predictive modeling',
                icon: <Lightbulb className="h-10 w-10 text-kamui-teal" />,
              },
              {
                type: 'user',
                title: 'User AI Agents',
                description: 'Customizable strategy execution and trading bots',
                icon: <User className="h-10 w-10 text-kamui-purple" />,
              }
            ].map((agent) => (
              <div 
                key={agent.type} 
                className={`
                  glass-card p-6 text-center hover-scale transition-all duration-300 ease-in-out
                  ${agentTypeStyles[agent.type].cardBg}
                  border-t-4 ${agentTypeStyles[agent.type].borderColor}
                `}
              >
                <div className={`
                  w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg
                  ${agentTypeStyles[agent.type].iconBg}
                `}>
                  {agent.icon}
                </div>
                <h3 className={`font-medium text-xl mb-2 ${agentTypeStyles[agent.type].textGradient}`}>
                  {agent.title}
                </h3>
                <p className="text-white/70 text-sm">{agent.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Agent Types Tabs */}
      <Tabs defaultValue="intelligence" className="space-y-4">
        <TabsList className="w-full max-w-md grid grid-cols-3 bg-white/5 backdrop-blur-md">
          {[
            { 
              value: 'master', 
              icon: <Brain className="w-4 h-4 mr-2 text-kamui-accent" />, 
              label: 'Master AI',
              borderColor: 'border-kamui-accent'
            },
            { 
              value: 'intelligence', 
              icon: <Lightbulb className="w-4 h-4 mr-2 text-kamui-teal" />, 
              label: 'Intelligence',
              borderColor: 'border-kamui-teal'
            },
            { 
              value: 'user', 
              icon: <User className="w-4 h-4 mr-2 text-kamui-purple" />, 
              label: 'User Agents',
              borderColor: 'border-kamui-purple'
            }
          ].map((tab) => (
            <TabsTrigger 
              key={tab.value} 
              value={tab.value} 
              className={`
                relative overflow-hidden
                border-b-2 border-transparent 
                data-[state=active]:border-${tab.borderColor}
                hover:bg-white/10 transition-all
                group
              `}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                   style={{ 
                     background: `linear-gradient(to right, ${
                       tab.value === 'master' ? '#7DF9FF' : 
                       tab.value === 'intelligence' ? '#00FFDD' : 
                       '#9b87f5'
                     } 0%, transparent 100%)` 
                   }}
              ></div>
              {tab.icon}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {['master', 'intelligence', 'user'].map((type) => (
          <TabsContent key={type} value={type} className="space-y-4">
            <Card className={`
              bg-gradient-card 
              border-white/5 
              border-l-4 
              ${agentTypeStyles[type].borderColor}
            `}>
              {type === 'master' && (
                <CardHeader>
                  <CardTitle className={`flex items-center ${agentTypeStyles[type].textGradient}`}>
                    <Brain className={`h-5 w-5 mr-2 ${agentTypeStyles[type].iconColor}`} />
                    Master AI Agent
                  </CardTitle>
                  <CardDescription>Centralized RWA liquidity management system</CardDescription>
                </CardHeader>
              )}
              {type === 'intelligence' && (
                <CardHeader>
                  <CardTitle className={`flex items-center ${agentTypeStyles[type].textGradient}`}>
                    <Lightbulb className={`h-5 w-5 mr-2 ${agentTypeStyles[type].iconColor}`} />
                    Intelligence Agents
                  </CardTitle>
                  <CardDescription>Market data collection and analysis systems</CardDescription>
                </CardHeader>
              )}
              {type === 'user' && (
                <CardHeader>
                  <CardTitle className={`flex items-center ${agentTypeStyles[type].textGradient}`}>
                    <User className={`h-5 w-5 mr-2 ${agentTypeStyles[type].iconColor}`} />
                    User AI Agents
                  </CardTitle>
                  <CardDescription>User-deployed trading and strategy agents</CardDescription>
                </CardHeader>
              )}
              <CardContent>
                {type === 'master' && (
                  <div className="glass-card p-6 hover-scale cursor-pointer border-l-4 border-kamui-accent" onClick={() => handleAgentClick("Master AI v1.3", "master-1")}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-teal/20 flex items-center justify-center mr-4 shadow-lg shadow-kamui-accent/10">
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
                      <Button 
                        variant="outline" 
                        className="glass-button text-kamui-accent border-kamui-accent/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/agent/master-1");
                        }}
                      >
                        Manage
                      </Button>
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
                        <div className="w-4 h-4 rounded-full bg-kamui-accent/20 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 bg-kamui-accent rounded-full"></div>
                        </div>
                        <span className="text-white/80">Managing 12 subordinate intelligence agents for market data analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-kamui-accent/20 flex items-center justify-center mt-0.5">
                          <div className="w-1.5 h-1.5 bg-kamui-accent rounded-full"></div>
                        </div>
                        <span className="text-white/80">Executing market-making across 3 major trading venues</span>
                      </li>
                    </ul>
                  </div>
                )}
                {type === 'intelligence' && (
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
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
                        icon: <LineChart className="h-5 w-5 text-kamui-teal" />,
                        description: 'Short-term RWA price movement predictions',
                        status: 'Active',
                        metrics: { dataPoints: '845K', accuracy: '87.3%', updates: '15min' }
                      },
                      {
                        id: 'intel-3',
                        name: 'Liquidity Analyzer',
                        icon: <Eye className="h-5 w-5 text-kamui-teal" />,
                        description: 'Cross-market liquidity depth monitoring',
                        status: 'Active',
                        metrics: { dataPoints: '632K', accuracy: '94.8%', updates: '1min' }
                      },
                      {
                        id: 'intel-4',
                        name: 'Security Monitor',
                        icon: <Shield className="h-5 w-5 text-kamui-teal" />,
                        description: 'Market manipulation detection system',
                        status: 'Paused',
                        metrics: { dataPoints: '380K', accuracy: '91.2%', updates: '10min' }
                      }
                    ].map((agent) => (
                      <div 
                        key={agent.id} 
                        className="glass-card p-4 hover-scale cursor-pointer border-l-4 border-kamui-teal"
                        onClick={() => handleAgentClick(agent.name, agent.id)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kamui-teal/20 to-kamui-purple/20 flex items-center justify-center mr-3 shadow-md shadow-kamui-teal/10">
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
                )}
                {type === 'user' && (
                  <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
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
                        className="glass-card p-4 hover-scale cursor-pointer border-l-4 border-kamui-purple"
                        onClick={() => handleAgentClick(agent.name, agent.id)}
                      >
                        <h3 className="font-medium text-white mb-1">{agent.name}</h3>
                        <p className="text-white/60 text-sm mb-2">{agent.description}</p>
                        <div className="flex items-center mb-3">
                          {agent.status === 'Active' ? (
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded mr-2">Active</span>
                          ) : (
                            <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded mr-2">Paused</span>
                          )}
                          <span className="text-white/60 text-xs">{agent.assets}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-center">
                          <div className="glass-card p-2">
                            <p className="text-white/60 text-xs mb-0.5">Performance</p>
                            <p className="text-sm font-medium text-green-400">{agent.performance}</p>
                          </div>
                          <div className="glass-card p-2">
                            <p className="text-white/60 text-xs mb-0.5">Transactions</p>
                            <p className="text-sm font-medium">{agent.transactions}</p>
                          </div>
                          <div className="md:col-span-1 col-span-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full h-full glass-button text-kamui-purple border-kamui-purple/30"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/agent/${agent.id}`);
                              }}
                            >
                              Manage
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Deployment Dialog */}
      <Dialog open={deployDialogOpen} onOpenChange={setDeployDialogOpen}>
        <DialogContent className="bg-gradient-card border-white/5 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3 text-gradient">
              <Plus className="h-6 w-6 text-kamui-accent" />
              Deploy New AI Agent
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Configure a sophisticated AI agent for your RWA ecosystem
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="agentName">Agent Name</Label>
              <Input 
                id="agentName" 
                value={newAgentName} 
                onChange={(e) => setNewAgentName(e.target.value)} 
                placeholder="e.g., Market Data Analyzer"
                className="glass-card border-white/10 focus:border-kamui-accent/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="agentType">Agent Type</Label>
              <Select value={newAgentType} onValueChange={setNewAgentType}>
                <SelectTrigger className="glass-card border-white/10">
                  <div className="flex items-center gap-2">
                    {newAgentType === 'master' && <Brain className="h-4 w-4 text-kamui-accent" />}
                    {newAgentType === 'intelligence' && <Lightbulb className="h-4 w-4 text-kamui-teal" />}
                    {newAgentType === 'user' && <User className="h-4 w-4 text-kamui-purple" />}
                    <SelectValue placeholder="Select agent type" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-gradient-card border-white/5">
                  <SelectItem value="master" className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-kamui-accent" />
                      <span>Master AI</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="intelligence" className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-kamui-teal" />
                      <span>Intelligence Agent</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="user" className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-kamui-purple" />
                      <span>User Agent</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="agentPurpose">Agent Purpose</Label>
              <Select>
                <SelectTrigger className="glass-card border-white/10">
                  <SelectValue placeholder="Select agent purpose" />
                </SelectTrigger>
                <SelectContent className="bg-gradient-card border-white/5">
                  <SelectItem value="data-collection">Data Collection</SelectItem>
                  <SelectItem value="market-analysis">Market Analysis</SelectItem>
                  <SelectItem value="trade-execution">Trade Execution</SelectItem>
                  <SelectItem value="risk-management">Risk Management</SelectItem>
                  <SelectItem value="custom">Custom Purpose</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <DialogFooter className="flex space-x-2 pt-2">
            <Button 
              variant="outline" 
              onClick={() => setDeployDialogOpen(false)}
              className="glass-button"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleConfirmDeploy}
              className={`glass-button ${
                newAgentType === 'master' ? 'bg-gradient-to-r from-kamui-accent to-kamui-teal' : 
                newAgentType === 'intelligence' ? 'bg-gradient-to-r from-kamui-teal to-kamui-purple' : 
                'bg-gradient-to-r from-kamui-purple to-kamui-accent'
              } text-white`}
              disabled={deployingAgent}
            >
              {deployingAgent ? (
                <>
                  <span className="mr-2">Deploying</span>
                  <span className="animate-spin h-4 w-4 border-2 border-b-transparent rounded-full"></span>
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Deploy Agent
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IntelligenceAgents;
