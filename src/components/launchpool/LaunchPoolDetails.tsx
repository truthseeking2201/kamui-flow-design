
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, Building, Calendar, ChevronRight, Clock, 
  DollarSign, FileText, HelpCircle, Info, Landmark, 
  Layers, Percent, Shield, TicketPercent, Timer, TrendingUp, 
  Users, Wallet 
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

const LaunchPoolDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock data - in a real app, this would be fetched based on the ID
  const poolData = {
    id: id,
    name: id === "1" ? "Manhattan Luxury Real Estate Fund" : 
          id === "2" ? "Precious Metals Basket" : 
          id === "3" ? "Asia Pacific REIT Index" : 
          "Corporate Bond Portfolio",
    assetType: id === "1" ? "real-estate" : 
               id === "2" ? "precious-metals" : 
               id === "3" ? "real-estate" : 
               "fixed-income",
    description: id === "1" ? "Premium residential properties in Manhattan" : 
                 id === "2" ? "Diversified basket of gold, silver, and platinum" : 
                 id === "3" ? "Tokenized REIT investments across APAC region" : 
                 "Investment-grade corporate bonds",
    longDescription: "This launch pool represents a unique opportunity to participate in tokenized real-world assets with high-yield potential. The asset pool has undergone rigorous due diligence and verification by our team of experts, and is now available for investment through our platform's market-making strategies.",
    totalValue: id === "1" ? "$15M" : id === "2" ? "$8M" : id === "3" ? "$12M" : "$20M",
    status: id === "1" ? "active" : id === "2" ? "upcoming" : id === "3" ? "active" : "completed",
    participantsCount: id === "1" ? 178 : id === "2" ? 85 : id === "3" ? 142 : 256,
    duration: id === "1" ? "30 days" : id === "2" ? "14 days" : id === "3" ? "21 days" : "45 days",
    startDate: id === "1" ? "2023-08-15" : id === "2" ? "2023-09-01" : id === "3" ? "2023-08-10" : "2023-07-01",
    endDate: id === "1" ? "2023-09-15" : id === "2" ? "2023-09-15" : id === "3" ? "2023-08-31" : "2023-08-15",
    targetApy: id === "1" ? 22 : id === "2" ? 18 : id === "3" ? 24 : 16,
    minInvestment: id === "1" ? "$5,000" : id === "2" ? "$2,500" : id === "3" ? "$10,000" : "$7,500",
    progress: id === "1" ? 68 : id === "2" ? 0 : id === "3" ? 45 : 100,
    riskLevel: id === "1" ? "Medium" : id === "2" ? "Medium-High" : id === "3" ? "Medium" : "Low",
    liquidityLockup: id === "1" ? "90 days" : id === "2" ? "60 days" : id === "3" ? "120 days" : "30 days",
    tokenizationStatus: id === "1" ? "Complete" : id === "2" ? "Pending" : id === "3" ? "Complete" : "Complete",
    audited: id === "1" || id === "3" || id === "4",
    assetImages: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"],
    documents: [
      { name: "Legal Framework", url: "#" },
      { name: "Asset Valuation Report", url: "#" },
      { name: "Due Diligence Summary", url: "#" },
    ]
  };
  
  const getAssetIcon = (type: string) => {
    switch(type) {
      case 'real-estate':
        return <Building className="h-6 w-6 text-kamui-purple" />;
      case 'precious-metals':
        return <Landmark className="h-6 w-6 text-amber-400" />;
      case 'fixed-income':
        return <TicketPercent className="h-6 w-6 text-kamui-teal" />;
      case 'equities':
      default:
        return <TrendingUp className="h-6 w-6 text-kamui-accent" />;
    }
  };
  
  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'active':
        return "Active - Open for Investment";
      case 'upcoming':
        return "Upcoming - Opening Soon";
      case 'completed':
        return "Completed - Fully Funded";
      default:
        return status;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active':
        return "text-green-400";
      case 'upcoming':
        return "text-blue-400";
      case 'completed':
        return "text-gray-400";
      default:
        return "text-white";
    }
  };
  
  const handleInvest = () => {
    toast({
      title: "Investment Process Initiated",
      description: "Opening the investment flow for " + poolData.name,
    });
    
    // In a real app, this would open an investment flow
  };
  
  const handleBack = () => {
    navigate('/launch-pools');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <Button 
          variant="outline" 
          className="glass-button hover-scale"
          onClick={handleBack}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Launch Pools
        </Button>
        
        {poolData.status === "active" && (
          <Button 
            className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale"
            onClick={handleInvest}
          >
            <Wallet className="w-4 h-4 mr-2" />
            Invest Now
          </Button>
        )}
        
        {poolData.status === "upcoming" && (
          <Button 
            variant="outline"
            className="glass-button text-blue-400 hover-scale"
            onClick={() => {
              toast({
                title: "Notification Set",
                description: "You'll be notified when this pool opens for investment",
              });
            }}
          >
            <Clock className="w-4 h-4 mr-2" />
            Notify Me When Live
          </Button>
        )}
      </div>
      
      <Card className="bg-gradient-card border-white/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-purple/20 flex items-center justify-center">
              {getAssetIcon(poolData.assetType)}
            </div>
            <div>
              <CardTitle className="text-2xl">{poolData.name}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <span className={`font-medium ${getStatusColor(poolData.status)}`}>
                  {getStatusLabel(poolData.status)}
                </span>
                {poolData.audited && (
                  <span className="text-xs bg-kamui-accent/20 text-kamui-accent px-2 py-0.5 rounded-full flex items-center">
                    <Shield className="w-3 h-3 mr-1" /> Audited
                  </span>
                )}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Asset Overview</h3>
                <p className="text-white/80">{poolData.longDescription}</p>
              </div>
              
              <div className="glass-card p-4 border border-white/10 rounded-lg">
                <h4 className="text-md font-medium text-white mb-3">Investment Progress</h4>
                <Progress value={poolData.progress} className="h-2 mb-2" />
                <div className="flex justify-between text-sm text-white/70">
                  <span>{poolData.progress}% Funded</span>
                  <span>Target: {poolData.totalValue}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 border border-white/10 rounded-lg">
                  <h4 className="text-sm text-white/60 mb-1">Minimum Investment</h4>
                  <p className="text-xl font-medium text-white flex items-center">
                    <DollarSign className="w-4 h-4 text-kamui-teal mr-1" />
                    {poolData.minInvestment}
                  </p>
                </div>
                
                <div className="glass-card p-4 border border-white/10 rounded-lg">
                  <h4 className="text-sm text-white/60 mb-1">Target APY</h4>
                  <p className="text-xl font-medium text-white flex items-center">
                    <Percent className="w-4 h-4 text-kamui-accent mr-1" />
                    {poolData.targetApy}%
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-4 border border-white/10 rounded-lg">
                <h4 className="text-md font-medium text-white mb-3">Pool Details</h4>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div>
                    <p className="text-white/60 text-sm">Participants</p>
                    <p className="text-white font-medium flex items-center">
                      <Users className="w-4 h-4 text-kamui-purple mr-1" />
                      {poolData.participantsCount}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-white/60 text-sm">Duration</p>
                    <p className="text-white font-medium flex items-center">
                      <Calendar className="w-4 h-4 text-kamui-accent mr-1" />
                      {poolData.duration}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-white/60 text-sm">Start Date</p>
                    <p className="text-white font-medium">{poolData.startDate}</p>
                  </div>
                  
                  <div>
                    <p className="text-white/60 text-sm">End Date</p>
                    <p className="text-white font-medium">{poolData.endDate}</p>
                  </div>
                  
                  <div>
                    <p className="text-white/60 text-sm">Risk Level</p>
                    <p className="text-white font-medium">{poolData.riskLevel}</p>
                  </div>
                  
                  <div>
                    <p className="text-white/60 text-sm">Liquidity Lockup</p>
                    <p className="text-white font-medium">{poolData.liquidityLockup}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-white mb-3 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-kamui-accent" />
                  Asset Documentation
                </h4>
                
                <div className="space-y-2">
                  {poolData.documents.map((doc, index) => (
                    <div 
                      key={index} 
                      className="glass-card p-3 border border-white/10 rounded-lg flex items-center justify-between cursor-pointer hover-scale"
                      onClick={() => {
                        toast({
                          title: "Document Access",
                          description: `Opening ${doc.name} for viewing`,
                        });
                      }}
                    >
                      <span className="text-white flex items-center">
                        <FileText className="w-4 h-4 text-kamui-teal mr-2" />
                        {doc.name}
                      </span>
                      <ChevronRight className="w-4 h-4 text-white/60" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="tokenization">
                <AccordionTrigger>
                  <span className="flex items-center">
                    <Layers className="w-4 h-4 mr-2 text-kamui-accent" />
                    Tokenization Process
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="glass-card p-4 border border-white/10 rounded-lg">
                    <p className="text-white/80 mb-4">
                      This asset has been tokenized through our secure blockchain infrastructure, 
                      creating a digital representation that enables fractionalized ownership 
                      and provides liquidity for this real-world asset.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div>
                        <p className="text-white/60 text-sm">Tokenization Status</p>
                        <p className="text-white font-medium">{poolData.tokenizationStatus}</p>
                      </div>
                      
                      <div>
                        <p className="text-white/60 text-sm">Blockchain</p>
                        <p className="text-white font-medium">Ethereum (ERC-20)</p>
                      </div>
                      
                      <div>
                        <p className="text-white/60 text-sm">Token Symbol</p>
                        <p className="text-white font-medium">RWA-{poolData.id}</p>
                      </div>
                      
                      <div>
                        <p className="text-white/60 text-sm">Total Supply</p>
                        <p className="text-white font-medium">1,000,000</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq">
                <AccordionTrigger>
                  <span className="flex items-center">
                    <HelpCircle className="w-4 h-4 mr-2 text-kamui-teal" />
                    Frequently Asked Questions
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-white font-medium mb-1">How does investing in a launch pool work?</h5>
                      <p className="text-white/70 text-sm">
                        Investors can contribute funds during the active period. Once the pool closes, 
                        the aggregated funds are used to acquire and tokenize the real-world asset. 
                        Investors receive tokens proportional to their investment.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-white font-medium mb-1">What returns can I expect?</h5>
                      <p className="text-white/70 text-sm">
                        The target APY provides an estimate of expected returns, but actual returns 
                        may vary based on market conditions and asset performance.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-white font-medium mb-1">When can I withdraw my investment?</h5>
                      <p className="text-white/70 text-sm">
                        Each pool has a liquidity lockup period after which tokens can be sold on 
                        the secondary market or redeemed through our liquidity providers.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  className="glass-button text-kamui-accent hover-scale"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Additional Information
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-gradient-to-br from-kamui-dark to-black/95 border border-white/10 text-white">
              <DialogHeader>
                <DialogTitle>{poolData.name} - Additional Information</DialogTitle>
                <DialogDescription>
                  Full details about this asset and launch pool
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <p className="text-white/80">
                  This launch pool represents an opportunity to participate in ownership of {poolData.description.toLowerCase()}. 
                  The asset has undergone thorough due diligence and valuation by our expert team.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-card p-4 border border-white/10 rounded-lg">
                    <h5 className="text-white/80 font-medium mb-2">Legal Structure</h5>
                    <p className="text-white/70 text-sm">
                      The asset is held by a regulated trust structure that ensures legal 
                      compliance and investor protection.
                    </p>
                  </div>
                  
                  <div className="glass-card p-4 border border-white/10 rounded-lg">
                    <h5 className="text-white/80 font-medium mb-2">Valuation Methodology</h5>
                    <p className="text-white/70 text-sm">
                      Asset valuation was performed using standard industry practices and verified 
                      by independent third-party auditors.
                    </p>
                  </div>
                </div>
                
                <p className="text-white/60 text-sm">
                  For detailed investment terms and conditions, please review the full documentation 
                  package available in the Asset Documentation section.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default LaunchPoolDetailView;
