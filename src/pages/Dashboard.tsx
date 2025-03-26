
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Wallet, Brain, Info, LogOut, Layers, LineChart, Users, AlertCircle, Database, Settings } from 'lucide-react';
import Building from '../components/Building';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Portfolio from '../components/dashboard/Portfolio';
import AIRecommendations from '../components/dashboard/AIRecommendations';
import Analytics from '../components/dashboard/Analytics';
import Strategies from '../components/dashboard/Strategies';
import MarketplaceStrategies from '../components/dashboard/MarketplaceStrategies';
import AIAgentsMetrics from '../components/dashboard/AIAgentsMetrics';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');

  const handleCardClick = (title: string) => {
    toast({
      title: `${title} Selected`,
      description: `Loading ${title.toLowerCase()} dashboard section`,
    });
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    toast({
      title: `${value.charAt(0).toUpperCase() + value.slice(1)} View`,
      description: `Switched to ${value} dashboard view`,
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
            <p className="text-white/70">Three-tier AI hierarchy for RWA liquidity and market-making</p>
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

        {/* Dashboard Tabs */}
        <div className="mb-8">
          <Tabs defaultValue="overview" onValueChange={handleTabChange}>
            <TabsList className="bg-white/5 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ai-agents">AI Agents</TabsTrigger>
              <TabsTrigger value="marketplace">Strategy Marketplace</TabsTrigger>
              <TabsTrigger value="asset-onboarding">Asset Onboarding</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
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
            </TabsContent>
            
            <TabsContent value="ai-agents">
              <div className="mb-8">
                <Card className="bg-gradient-card border-white/5 mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-kamui-accent" />
                      AI Agent Hierarchy
                    </CardTitle>
                    <CardDescription>Three-tiered AI system powering Kamui's RWA market-making</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="glass-card p-6 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-accent/30 to-kamui-teal/30 flex items-center justify-center">
                          <Brain className="h-6 w-6 text-kamui-accent" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-xl text-white">Master AI Agent</h3>
                          <p className="text-white/60">Core decision-making and strategy coordination</p>
                        </div>
                        <div className="ml-auto">
                          <Button variant="outline" className="glass-button text-kamui-accent" onClick={() => toast({
                            title: "Master AI Configuration",
                            description: "Opening Master AI parameter settings",
                          })}>
                            <Settings className="w-4 h-4 mr-2" />
                            Configure
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white/5 rounded-xl p-4">
                          <Database className="h-5 w-5 text-kamui-accent mb-2" />
                          <h4 className="font-medium text-white mb-1">Data Ingestion</h4>
                          <p className="text-white/60 text-sm">Last update: 2 minutes ago</p>
                          <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
                            <div className="bg-kamui-accent h-1.5 rounded-full w-[85%]"></div>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 rounded-xl p-4">
                          <Users className="h-5 w-5 text-kamui-teal mb-2" />
                          <h4 className="font-medium text-white mb-1">Liquidity Management</h4>
                          <p className="text-white/60 text-sm">4 pools optimized today</p>
                          <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
                            <div className="bg-kamui-teal h-1.5 rounded-full w-[92%]"></div>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 rounded-xl p-4">
                          <AlertCircle className="h-5 w-5 text-amber-400 mb-2" />
                          <h4 className="font-medium text-white mb-1">Risk Assessment</h4>
                          <p className="text-white/60 text-sm">All systems nominal</p>
                          <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
                            <div className="bg-amber-400 h-1.5 rounded-full w-[78%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-6 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-teal/30 to-kamui-purple/30 flex items-center justify-center">
                          <Layers className="h-6 w-6 text-kamui-teal" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-xl text-white">Intelligence Agents</h3>
                          <p className="text-white/60">Market analysis and strategic intelligence</p>
                        </div>
                        <div className="ml-auto">
                          <Link to="/intelligence-agents">
                            <Button variant="outline" className="glass-button text-kamui-teal">
                              View All
                            </Button>
                          </Link>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-kamui-teal/20 flex items-center justify-center">
                            <LineChart className="h-5 w-5 text-kamui-teal" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Market Trends AI</h4>
                            <p className="text-white/60 text-sm">4 new insights today</p>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-kamui-purple/20 flex items-center justify-center">
                            <Database className="h-5 w-5 text-kamui-purple" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">RWA Valuation AI</h4>
                            <p className="text-white/60 text-sm">Updated 12 minutes ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-purple/30 to-amber-400/30 flex items-center justify-center">
                          <Users className="h-6 w-6 text-kamui-purple" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-xl text-white">User AI Agents</h3>
                          <p className="text-white/60">Execution and strategy refinement</p>
                        </div>
                        <div className="ml-auto">
                          <Button variant="outline" className="glass-button text-kamui-purple" onClick={() => toast({
                            title: "Create Agent",
                            description: "Opening new User AI Agent creation wizard",
                          })}>
                            <Plus className="w-4 h-4 mr-2" />
                            Create Agent
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="glass-card p-4 hover-scale cursor-pointer" onClick={() => toast({
                          title: "Momentum Strategy AI Agent",
                          description: "Loading agent details and performance metrics",
                        })}>
                          <div className="flex items-center gap-2 mb-2">
                            <LineChart className="h-4 w-4 text-amber-400" />
                            <h4 className="font-medium text-white">Momentum Strategy</h4>
                          </div>
                          <p className="text-white/60 text-xs mb-2">APY: 37.2% | Risk: Medium</p>
                          <div className="w-full bg-white/10 h-1 rounded-full">
                            <div className="bg-amber-400 h-1 rounded-full w-[82%]"></div>
                          </div>
                        </div>
                        
                        <div className="glass-card p-4 hover-scale cursor-pointer" onClick={() => toast({
                          title: "Real Estate Arbitrage AI Agent",
                          description: "Loading agent details and performance metrics",
                        })}>
                          <div className="flex items-center gap-2 mb-2">
                            <LineChart className="h-4 w-4 text-kamui-accent" />
                            <h4 className="font-medium text-white">RE Arbitrage</h4>
                          </div>
                          <p className="text-white/60 text-xs mb-2">APY: 28.5% | Risk: Medium-Low</p>
                          <div className="w-full bg-white/10 h-1 rounded-full">
                            <div className="bg-kamui-accent h-1 rounded-full w-[75%]"></div>
                          </div>
                        </div>
                        
                        <div className="glass-card p-4 hover-scale cursor-pointer" onClick={() => toast({
                          title: "Bond Yield Optimizer AI Agent",
                          description: "Loading agent details and performance metrics",
                        })}>
                          <div className="flex items-center gap-2 mb-2">
                            <LineChart className="h-4 w-4 text-kamui-teal" />
                            <h4 className="font-medium text-white">Bond Optimizer</h4>
                          </div>
                          <p className="text-white/60 text-xs mb-2">APY: 18.3% | Risk: Low</p>
                          <div className="w-full bg-white/10 h-1 rounded-full">
                            <div className="bg-kamui-teal h-1 rounded-full w-[92%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <AIAgentsMetrics />
              </div>
            </TabsContent>
            
            <TabsContent value="marketplace">
              <MarketplaceStrategies />
            </TabsContent>
            
            <TabsContent value="asset-onboarding">
              <Card className="bg-gradient-card border-white/5 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-kamui-accent" />
                    RWA Asset Onboarding
                  </CardTitle>
                  <CardDescription>Comprehensive due diligence and tokenization process</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="glass-card p-6 mb-6">
                    <h3 className="font-display font-bold text-xl text-white mb-4">Asset Onboarding Process</h3>
                    
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-white/10"></div>
                      
                      <div className="relative z-10 mb-8 ml-3">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-kamui-accent/20 to-kamui-teal/20 flex items-center justify-center shrink-0">
                            <span className="font-semibold text-kamui-accent">1</span>
                          </div>
                          <div className="glass-card p-4 flex-1">
                            <h4 className="font-medium text-white mb-2">Asset Proposal Submission</h4>
                            <p className="text-white/70 text-sm mb-3">
                              Institutions submit comprehensive details about the real-world asset for tokenization and market-making
                            </p>
                            <Button 
                              variant="outline" 
                              className="glass-button text-kamui-accent"
                              onClick={() => toast({
                                title: "Asset Proposal Form",
                                description: "Opening comprehensive asset submission form",
                              })}
                            >
                              Submit Asset Proposal
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative z-10 mb-8 ml-3">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-kamui-teal/20 to-kamui-purple/20 flex items-center justify-center shrink-0">
                            <span className="font-semibold text-kamui-teal">2</span>
                          </div>
                          <div className="glass-card p-4 flex-1">
                            <h4 className="font-medium text-white mb-2">Due Diligence Process</h4>
                            <p className="text-white/70 text-sm mb-3">
                              Comprehensive analysis including sector-specific data, risk assessment, valuation, and regulatory review
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                              <div className="bg-white/5 p-3 rounded-lg">
                                <h5 className="text-kamui-accent text-sm font-medium mb-1">Sector Analysis</h5>
                                <p className="text-white/60 text-xs">Specialized metrics for each asset class</p>
                              </div>
                              <div className="bg-white/5 p-3 rounded-lg">
                                <h5 className="text-kamui-accent text-sm font-medium mb-1">Risk Assessment</h5>
                                <p className="text-white/60 text-xs">Credit, cash flow, and repayment capacity</p>
                              </div>
                              <div className="bg-white/5 p-3 rounded-lg">
                                <h5 className="text-kamui-accent text-sm font-medium mb-1">Regulatory Review</h5>
                                <p className="text-white/60 text-xs">Compliance and smart contract security</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative z-10 mb-8 ml-3">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-kamui-purple/20 to-amber-400/20 flex items-center justify-center shrink-0">
                            <span className="font-semibold text-kamui-purple">3</span>
                          </div>
                          <div className="glass-card p-4 flex-1">
                            <h4 className="font-medium text-white mb-2">Tokenization & Launch</h4>
                            <p className="text-white/70 text-sm mb-3">
                              Assets approved by Investment Committee are integrated into RWA Launchpool and tokenized
                            </p>
                            <Button 
                              variant="outline" 
                              className="glass-button text-kamui-purple"
                              onClick={() => toast({
                                title: "Active Launchpool",
                                description: "Viewing current assets in the tokenization pipeline",
                              })}
                            >
                              View Launchpool
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative z-10 ml-3">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400/20 to-kamui-accent/20 flex items-center justify-center shrink-0">
                            <span className="font-semibold text-amber-400">4</span>
                          </div>
                          <div className="glass-card p-4 flex-1">
                            <h4 className="font-medium text-white mb-2">Market-Making Activation</h4>
                            <p className="text-white/70 text-sm mb-3">
                              Master AI begins automated market-making with continuous liquidity provisioning
                            </p>
                            <p className="text-white/60 text-xs italic">
                              Real-time analytics dashboard automatically created for asset providers to monitor liquidity, spreads, and trading metrics
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale"
                      onClick={() => toast({
                        title: "Asset Onboarding",
                        description: "Starting guided asset submission process",
                      })}
                    >
                      Start Asset Onboarding
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

export default Dashboard;

// We need a Plus icon that wasn't imported above
function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
