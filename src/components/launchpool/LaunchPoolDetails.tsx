import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Building, 
  Calendar, 
  ChevronLeft, 
  Clock, 
  Gem, 
  Hourglass, 
  Info, 
  Landmark, 
  LineChart, 
  Percent, 
  TicketPercent, 
  Timer, 
  TrendingUp, 
  Users, 
  Wallet,
  ClipboardCheck,
  Brain,
  ArrowRight,
  File,
  Shield
} from 'lucide-react';

type LaunchPoolStatus = 'upcoming' | 'active' | 'completed';

interface LaunchPool {
  id: string;
  name: string;
  assetType: string;
  description: string;
  totalValue: string;
  status: LaunchPoolStatus;
  participantsCount: number;
  duration: string;
  startDate: string;
  targetApy: number;
  minInvestment: string;
  detailedDescription?: string;
  assetIssuer?: string;
  maturityDate?: string;
  riskScore?: number;
  liquidity?: string;
  documents?: {
    name: string;
    type: string;
    size: string;
  }[];
  audits?: {
    name: string;
    status: string;
    date: string;
  }[];
  marketMakingParams?: {
    targetSpread: string;
    rebalancingFrequency: string;
    liquidityDepth: string;
    marketHours: string;
  };
}

const LaunchPoolDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [isInvesting, setIsInvesting] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState('');

  const launchPool: LaunchPool = {
    id: id || "1",
    name: id === "2" ? "Precious Metals Basket" : id === "3" ? "Asia Pacific REIT Index" : id === "4" ? "Corporate Bond Portfolio" : "Manhattan Luxury Real Estate Fund",
    assetType: id === "2" ? "precious-metals" : id === "3" ? "real-estate" : id === "4" ? "fixed-income" : "real-estate",
    description: id === "2" ? "Diversified basket of gold, silver, and platinum" : id === "3" ? "Tokenized REIT investments across APAC region" : id === "4" ? "Investment-grade corporate bonds" : "Premium residential properties in Manhattan",
    totalValue: id === "2" ? "$8M" : id === "3" ? "$12M" : id === "4" ? "$20M" : "$15M",
    status: id === "2" ? "upcoming" : id === "3" ? "active" : id === "4" ? "completed" : "active",
    participantsCount: id === "2" ? 85 : id === "3" ? 142 : id === "4" ? 256 : 178,
    duration: id === "2" ? "14 days" : id === "3" ? "21 days" : id === "4" ? "45 days" : "30 days",
    startDate: id === "2" ? "2023-09-01" : id === "3" ? "2023-08-10" : id === "4" ? "2023-07-01" : "2023-08-15",
    targetApy: id === "2" ? 18 : id === "3" ? 24 : id === "4" ? 16 : 22,
    minInvestment: id === "2" ? "$2,500" : id === "3" ? "$10,000" : id === "4" ? "$7,500" : "$5,000",
    detailedDescription: "This tokenized real-world asset (RWA) represents a diversified portfolio of premium properties in the Manhattan luxury real estate market. These properties are located in prime neighborhoods with strong historical appreciation and rental yield. The fund focuses on high-end residential buildings with strong income generation potential through both rental yields and capital appreciation.",
    assetIssuer: "Kamui Real Estate Partners",
    maturityDate: "2025-08-15",
    riskScore: 3.5,
    liquidity: "Medium",
    documents: [
      { name: "Offering Memorandum", type: "PDF", size: "2.4 MB" },
      { name: "Legal Structure", type: "PDF", size: "1.8 MB" },
      { name: "Financial Projections", type: "Excel", size: "956 KB" },
      { name: "Property Valuations", type: "PDF", size: "4.2 MB" }
    ],
    audits: [
      { name: "Smart Contract Audit", status: "Passed", date: "2023-07-25" },
      { name: "Legal Compliance Review", status: "Passed", date: "2023-07-18" },
      { name: "Property Title Verification", status: "Passed", date: "2023-07-10" }
    ],
    marketMakingParams: {
      targetSpread: "0.5%",
      rebalancingFrequency: "4 hours",
      liquidityDepth: "$2.5M",
      marketHours: "24/7"
    }
  };

  const getAssetIcon = (type: string) => {
    switch(type) {
      case 'real-estate':
        return <Building className="h-5 w-5 text-kamui-purple" />;
      case 'precious-metals':
        return <Landmark className="h-5 w-5 text-amber-400" />;
      case 'fixed-income':
        return <TicketPercent className="h-5 w-5 text-kamui-teal" />;
      case 'equities':
      default:
        return <TrendingUp className="h-5 w-5 text-kamui-accent" />;
    }
  };

  const getStatusBadge = (status: LaunchPoolStatus) => {
    switch(status) {
      case 'active':
        return <Badge className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-xs flex items-center"><Gem className="w-3 h-3 mr-1" /> Active</Badge>;
      case 'upcoming':
        return <Badge className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-xs flex items-center"><Hourglass className="w-3 h-3 mr-1" /> Upcoming</Badge>;
      case 'completed':
        return <Badge className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded text-xs flex items-center"><Timer className="w-3 h-3 mr-1" /> Completed</Badge>;
    }
  };

  const handleInvest = () => {
    if (isInvesting) {
      if (!investmentAmount || parseFloat(investmentAmount) < parseFloat(launchPool.minInvestment.replace('$', '').replace(',', ''))) {
        toast({
          title: "Invalid investment amount",
          description: `Minimum investment required is ${launchPool.minInvestment}`,
          variant: "destructive"
        });
        return;
      }
      
      toast({
        title: "Investment Submitted",
        description: `Your investment of $${investmentAmount} in ${launchPool.name} has been submitted for processing`,
      });
      setIsInvesting(false);
      setInvestmentAmount('');
    } else {
      setIsInvesting(true);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <Link to="/launch-pools" className="text-white/70 hover:text-white flex items-center mb-4 group">
            <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Launch Pools</span>
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-purple/20 flex items-center justify-center">
              {getAssetIcon(launchPool.assetType)}
            </div>
            <h1 className="text-2xl font-display font-bold">{launchPool.name}</h1>
            {getStatusBadge(launchPool.status)}
          </div>
          <p className="text-white/70">{launchPool.description}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          {launchPool.status !== 'completed' && (
            isInvesting ? (
              <div className="flex w-full gap-2">
                <div className="relative rounded-md shadow-sm flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-white/70 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    className="block w-full rounded-md border-0 py-2 pl-7 bg-white/10 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-kamui-accent sm:text-sm sm:leading-6"
                    placeholder="Amount"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleInvest}
                  className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale"
                >
                  Confirm
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setIsInvesting(false)}
                  className="glass-button"
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Button 
                onClick={handleInvest}
                className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale w-full sm:w-auto"
              >
                <Wallet className="mr-2 h-4 w-4" />
                Invest Now
              </Button>
            )
          )}
          
          <Button 
            variant="outline"
            className="glass-button text-white/80 w-full sm:w-auto"
            onClick={() => {
              toast({
                title: "WhitePaper Downloaded",
                description: `The whitepaper for ${launchPool.name} has been downloaded`
              });
            }}
          >
            <File className="mr-2 h-4 w-4" />
            Download Whitepaper
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-white/5">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Wallet className="w-4 h-4 mr-2 text-kamui-teal" />
              Total Value
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl font-display">{launchPool.totalValue}</CardTitle>
            <p className="text-white/60 text-sm">Min: {launchPool.minInvestment}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-white/5">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-kamui-accent" />
              Participants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl font-display">{launchPool.participantsCount}</CardTitle>
            <p className="text-white/60 text-sm">Active investors</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-white/5">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-kamui-purple" />
              Timeline
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl font-display">{launchPool.duration}</CardTitle>
            <p className="text-white/60 text-sm">Started: {launchPool.startDate}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-white/5">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Percent className="w-4 h-4 mr-2 text-amber-400" />
              Target APY
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl font-display">{launchPool.targetApy}%</CardTitle>
            <p className="text-white/60 text-sm flex items-center">
              <Brain className="w-3 h-3 mr-1 text-kamui-teal" />
              AI optimized yield
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" onValueChange={handleTabChange} className="w-full">
        <TabsList className="bg-white/5 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="market-making">Market Making</TabsTrigger>
          <TabsTrigger value="audits">Audits & Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <Card className="bg-gradient-card border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-kamui-teal" />
                Asset Details
              </CardTitle>
              <CardDescription>Comprehensive information about this RWA launch pool</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium mb-4">Description</h3>
                <p className="text-white/80 mb-6">{launchPool.detailedDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-md font-medium mb-3 text-kamui-accent">General Information</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-white/60">Asset Type:</span>
                        <span className="text-white font-medium flex items-center">
                          {getAssetIcon(launchPool.assetType)}
                          <span className="ml-1 capitalize">{launchPool.assetType.replace('-', ' ')}</span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Issuer:</span>
                        <span className="text-white font-medium">{launchPool.assetIssuer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Launch Date:</span>
                        <span className="text-white font-medium">{launchPool.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Maturity Date:</span>
                        <span className="text-white font-medium">{launchPool.maturityDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Duration:</span>
                        <span className="text-white font-medium">{launchPool.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-medium mb-3 text-kamui-accent">Risk & Performance</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-white/60">Risk Score:</span>
                        <span className="text-white font-medium">{launchPool.riskScore}/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Target APY:</span>
                        <span className="text-white font-medium">{launchPool.targetApy}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Liquidity:</span>
                        <span className="text-white font-medium">{launchPool.liquidity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Min Investment:</span>
                        <span className="text-white font-medium">{launchPool.minInvestment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Total Value:</span>
                        <span className="text-white font-medium">{launchPool.totalValue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-teal/20 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-kamui-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">AI-Driven Liquidity Provisioning</h3>
                    <p className="text-white/60">Master AI manages market-making for this RWA</p>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4">
                  This launch pool utilizes Kamui's three-tier AI hierarchy to ensure optimal liquidity provisioning
                  and efficient price discovery. The Master AI coordinates with specialized Intelligence Agents to
                  continuously analyze market conditions and adjust market-making parameters in real-time.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <Brain className="h-5 w-5 text-kamui-accent mb-2" />
                    <h4 className="font-medium text-white mb-1">Master AI</h4>
                    <p className="text-white/60 text-sm">
                      Coordinates overall strategy and risk parameters
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-xl">
                    <LineChart className="h-5 w-5 text-kamui-teal mb-2" />
                    <h4 className="font-medium text-white mb-1">Intelligence Agents</h4>
                    <p className="text-white/60 text-sm">
                      Specialized in RWA valuation and market analysis
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-xl">
                    <Clock className="h-5 w-5 text-kamui-purple mb-2" />
                    <h4 className="font-medium text-white mb-1">24/7 Operations</h4>
                    <p className="text-white/60 text-sm">
                      Continuous monitoring and optimization
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="glass-button text-kamui-accent hover-scale group"
                  onClick={() => {
                    toast({
                      title: "AI Strategy Details",
                      description: "Loading comprehensive AI market-making strategy details",
                    });
                  }}
                >
                  <span>View AI Strategy Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents" className="space-y-6">
          <Card className="bg-gradient-card border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <File className="w-5 h-5 text-kamui-teal" />
                Legal & Financial Documents
              </CardTitle>
              <CardDescription>All documentation related to this launch pool</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="glass-card p-6 space-y-4">
                <h3 className="text-xl font-medium mb-2">Available Documents</h3>
                
                {launchPool.documents?.map((doc, index) => (
                  <div key={index} className="glass-card p-4 hover-scale cursor-pointer" onClick={() => {
                    toast({
                      title: `Downloading ${doc.name}`,
                      description: `File size: ${doc.size}`,
                    });
                  }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <File className="h-5 w-5 text-kamui-teal" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{doc.name}</h4>
                          <p className="text-white/60 text-sm">{doc.type} · {doc.size}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button 
                  variant="outline" 
                  className="glass-button text-kamui-accent hover-scale group w-full mt-4"
                  onClick={() => {
                    toast({
                      title: "Download All Documents",
                      description: "Preparing all documents for download",
                    });
                  }}
                >
                  <span>Download All Documents</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="market-making" className="space-y-6">
          <Card className="bg-gradient-card border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-kamui-teal" />
                Market Making Parameters
              </CardTitle>
              <CardDescription>AI-controlled liquidity settings for this asset</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-teal/20 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-kamui-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">AI Market-Making Strategy</h3>
                    <p className="text-white/60">Current parameters set by Master AI</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="glass-card p-4">
                    <h4 className="text-md font-medium mb-3 text-kamui-accent">Liquidity Parameters</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-white/60">Target Spread:</span>
                        <span className="text-white font-medium">{launchPool.marketMakingParams?.targetSpread}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Liquidity Depth:</span>
                        <span className="text-white font-medium">{launchPool.marketMakingParams?.liquidityDepth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Rebalancing Frequency:</span>
                        <span className="text-white font-medium">{launchPool.marketMakingParams?.rebalancingFrequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Market Hours:</span>
                        <span className="text-white font-medium">{launchPool.marketMakingParams?.marketHours}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4">
                    <h4 className="text-md font-medium mb-3 text-kamui-accent">AI Optimization</h4>
                    <p className="text-white/80 text-sm mb-3">
                      The AI continuously analyzes market conditions to optimize these parameters.
                      Recent data shows optimal performance with the current settings.
                    </p>
                    
                    <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                      <span className="text-white/80">AI Confidence Score:</span>
                      <div className="flex items-center">
                        <div className="w-full bg-white/10 h-2 rounded-full mr-2 w-24">
                          <div className="bg-kamui-accent h-2 rounded-full w-[92%]"></div>
                        </div>
                        <span className="text-kamui-accent font-medium">92%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-xl mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="h-4 w-4 text-kamui-teal" />
                    <h4 className="font-medium text-white">Market-Making Insights</h4>
                  </div>
                  <p className="text-white/80 text-sm">
                    The Master AI has determined that this RWA asset requires specialized market-making
                    parameters due to its unique liquidity profile and market characteristics. 
                    Intelligence Agents monitor market conditions 24/7 and recommend parameter
                    adjustments to the Master AI when necessary.
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="glass-button text-kamui-accent hover-scale group"
                  onClick={() => {
                    toast({
                      title: "Market Activity Dashboard",
                      description: "Loading real-time market activity metrics",
                    });
                  }}
                >
                  <span>View Market Activity</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="audits" className="space-y-6">
          <Card className="bg-gradient-card border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-kamui-teal" />
                Security & Compliance
              </CardTitle>
              <CardDescription>Audits and verification details for this launch pool</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="glass-card p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-4">Audit Reports</h3>
                  
                  <div className="space-y-4">
                    {launchPool.audits?.map((audit, index) => (
                      <div key={index} className="glass-card p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                              <ClipboardCheck className="h-5 w-5 text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">{audit.name}</h4>
                              <div className="flex items-center">
                                <Badge className="bg-green-500/20 text-green-400 rounded mr-2">
                                  {audit.status}
                                </Badge>
                                <p className="text-white/60 text-sm">{audit.date}</p>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => {
                            toast({
                              title: `Downloading ${audit.name} Report`,
                              description: `Audit conducted on ${audit.date}`,
                            });
                          }}>
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Compliance Framework</h3>
                  
                  <div className="bg-white/5 p-4 rounded-xl mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-kamui-purple" />
                      <h4 className="font-medium text-white">Regulatory Compliance</h4>
                    </div>
                    <p className="text-white/80 text-sm">
                      This launch pool complies with all relevant regulations for tokenized real-world assets.
                      Kamui ensures ongoing compliance through regular reviews and updates to the regulatory framework.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="glass-card p-3">
                      <h5 className="text-sm font-medium text-kamui-accent mb-1">KYC/AML</h5>
                      <p className="text-white/60 text-xs">Full compliance with global standards</p>
                    </div>
                    <div className="glass-card p-3">
                      <h5 className="text-sm font-medium text-kamui-accent mb-1">Smart Contract</h5>
                      <p className="text-white/60 text-xs">Security audit by leading firms</p>
                    </div>
                    <div className="glass-card p-3">
                      <h5 className="text-sm font-medium text-kamui-accent mb-1">Legal Structure</h5>
                      <p className="text-white/60 text-xs">Reviewed by specialized legal counsel</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LaunchPoolDetails;
