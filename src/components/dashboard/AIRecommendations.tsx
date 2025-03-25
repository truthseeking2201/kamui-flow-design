
import React, { useState } from 'react';
import { Brain, Layers, LineChart, AlertCircle, Activity, Wallet, Info, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const AIRecommendations: React.FC = () => {
  const { toast } = useToast();
  const [expandedRecommendation, setExpandedRecommendation] = useState<number | null>(null);

  const recommendations = [
    {
      title: "Master AI: Portfolio Rebalance",
      description: "Optimize for RWA market conditions",
      icon: <Brain className="w-4 h-4 text-kamui-purple" />,
      action: "Accept Recommendation",
      expanded: "The Master AI Agent has analyzed current RWA market conditions and recommends rebalancing your portfolio to reduce risk by 15% while maintaining similar returns. This includes increasing USDK allocation by 5% and decreasing real estate exposure temporarily."
    },
    {
      title: "Intelligence AI: Market Analysis",
      description: "Tokenized real estate opportunity",
      icon: <Layers className="w-4 h-4 text-kamui-teal" />,
      action: "View Analysis",
      expanded: "Our Intelligence Agents have identified increasing liquidity in the tokenized real estate market, suggesting a potential yield opportunity. The forecast shows a 3-5% increase in market activity over the next 7 days."
    },
    {
      title: "Risk Assessment Alert",
      description: "High volatility detected in gold market",
      icon: <AlertCircle className="w-4 h-4 text-amber-400" />,
      action: "Hedge Position",
      expanded: "Intelligence Agents have detected abnormal volatility patterns in the gold market. To protect your precious metals exposure, consider using our automated hedging strategy which has been 83% effective in similar market conditions."
    },
    {
      title: "User AI: Strategy Suggestion",
      description: "New fixed-income market-making strategy",
      icon: <LineChart className="w-4 h-4 text-kamui-accent" />,
      action: "Deploy Strategy",
      expanded: "Based on your risk profile and previous strategy preferences, our User AI Agent has developed a custom fixed-income market-making strategy. Simulations predict a 12-18% APY with moderate risk profile. Deploy this strategy to your agents with one click."
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedRecommendation(expandedRecommendation === index ? null : index);
  };

  const handleRecommendationAction = (index: number) => {
    toast({
      title: "AI Action Taken",
      description: `Following recommendation: ${recommendations[index].title}`,
      variant: "default",
    });
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
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
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
        
        <Button variant="outline" className="w-full mt-4 glass-button text-kamui-accent hover-scale">
          View All AI Insights
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
