
import React, { useState } from 'react';
import { Brain, Layers, LineChart, AlertCircle, Activity, Wallet, Info, ArrowRight, ChevronDown, ChevronUp, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

const AIRecommendations: React.FC = () => {
  const { toast } = useToast();
  const [expandedRecommendation, setExpandedRecommendation] = useState<number | null>(null);

  const recommendations = [
    {
      title: "Master AI: Portfolio Rebalance",
      description: "Optimize for RWA market conditions",
      icon: <Brain className="w-4 h-4 text-kamui-purple" />,
      action: "Accept Recommendation",
      expanded: "The Master AI Agent has analyzed current RWA market conditions and recommends rebalancing your portfolio to reduce risk by 15% while maintaining similar returns. This includes increasing USDK allocation by 5% and decreasing real estate exposure temporarily.",
      agentType: "master",
      urgency: "high",
      predictedImpact: "+3.2% returns",
    },
    {
      title: "Intelligence AI: Market Analysis",
      description: "Tokenized real estate opportunity",
      icon: <Layers className="w-4 h-4 text-kamui-teal" />,
      action: "View Analysis",
      expanded: "Our Intelligence Agents have identified increasing liquidity in the tokenized real estate market, suggesting a potential yield opportunity. The forecast shows a 3-5% increase in market activity over the next 7 days.",
      agentType: "intelligence",
      urgency: "medium",
      predictedImpact: "+4.8% yield",
    },
    {
      title: "Risk Assessment Alert",
      description: "High volatility detected in gold market",
      icon: <AlertCircle className="w-4 h-4 text-amber-400" />,
      action: "Hedge Position",
      expanded: "Intelligence Agents have detected abnormal volatility patterns in the gold market. To protect your precious metals exposure, consider using our automated hedging strategy which has been 83% effective in similar market conditions.",
      agentType: "intelligence",
      urgency: "high",
      predictedImpact: "Risk reduction",
    },
    {
      title: "User AI: Strategy Suggestion",
      description: "New fixed-income market-making strategy",
      icon: <LineChart className="w-4 h-4 text-kamui-accent" />,
      action: "Deploy Strategy",
      expanded: "Based on your risk profile and previous strategy preferences, our User AI Agent has developed a custom fixed-income market-making strategy. Simulations predict a 12-18% APY with moderate risk profile. Deploy this strategy to your agents with one click.",
      agentType: "user",
      urgency: "low",
      predictedImpact: "+15% APY",
    },
    {
      title: "Intelligence AI: Data Lake Insight",
      description: "Correlation discovered in RWA markets",
      icon: <Lightbulb className="w-4 h-4 text-green-400" />,
      action: "Explore Insight",
      expanded: "Our comprehensive data lake analysis has revealed a strong correlation between tokenized commercial real estate and fixed income markets during the last 30 days. This pattern suggests potential arbitrage opportunities between these asset classes.",
      agentType: "intelligence",
      urgency: "medium",
      predictedImpact: "Trading opportunity",
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedRecommendation(expandedRecommendation === index ? null : index);
  };

  const handleRecommendationAction = (index: number) => {
    const recommendation = recommendations[index];
    let toastMessage = "";
    let actionDetail = "";
    
    switch (recommendation.agentType) {
      case "master":
        actionDetail = "Master AI is rebalancing your portfolio, optimizing for current market conditions";
        break;
      case "intelligence":
        actionDetail = "Intelligence AI is processing your request and analyzing market data";
        break;
      case "user":
        actionDetail = "User AI Agent is being configured with your selected parameters";
        break;
      default:
        actionDetail = "AI is processing your request";
    }
    
    toast({
      title: `${recommendation.title}`,
      description: actionDetail,
      variant: "default",
    });
  };

  const getAgentBadge = (agentType: string) => {
    switch(agentType) {
      case 'master':
        return <Badge className="bg-kamui-purple text-white text-xs">Master AI</Badge>;
      case 'intelligence':
        return <Badge className="bg-kamui-teal text-white text-xs">Intelligence AI</Badge>;
      case 'user':
        return <Badge className="bg-kamui-accent text-white text-xs">User AI</Badge>;
      default:
        return null;
    }
  };

  const getUrgencyIndicator = (urgency: string) => {
    switch(urgency) {
      case 'high':
        return <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>;
      case 'medium':
        return <div className="w-2 h-2 rounded-full bg-amber-400"></div>;
      case 'low':
        return <div className="w-2 h-2 rounded-full bg-green-400"></div>;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-gradient-card border-white/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-kamui-accent" />
          AI Hierarchy Insights
        </CardTitle>
        <CardDescription>Multi-layered AI optimization for RWAs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((item, index) => (
            <div key={index} className="glass-card p-4 hover-scale group transition-all duration-300">
              <div 
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex gap-3">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-white">{item.title}</h4>
                      {getAgentBadge(item.agentType)}
                    </div>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 pr-2">
                    {getUrgencyIndicator(item.urgency)}
                    <span className="text-xs text-white/60">{item.predictedImpact}</span>
                  </div>
                  {expandedRecommendation === index ? (
                    <ChevronUp className="w-4 h-4 text-white/60" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white/60" />
                  )}
                </div>
              </div>
              
              {/* Expanded content */}
              {expandedRecommendation === index && (
                <div className="mt-3 pt-3 border-t border-white/10 animate-fade-in">
                  <p className="text-white/80 text-sm mb-3">{item.expanded}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-kamui-accent border-kamui-accent/30 hover-scale group"
                    onClick={() => handleRecommendationAction(index)}
                  >
                    <span className="text-xs">{item.action}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          className="w-full mt-4 glass-button text-kamui-accent hover-scale"
          onClick={() => toast({
            title: "AI Insights",
            description: "Loading complete AI insights dashboard",
          })}
        >
          View All AI Insights
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
