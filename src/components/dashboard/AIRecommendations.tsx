
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
      title: "Rebalance Portfolio",
      description: "Optimize for current market volatility",
      icon: <Layers className="w-4 h-4 text-kamui-purple" />,
      action: "View Details",
      expanded: "Your portfolio allocation could be optimized to reduce risk by 15% while maintaining similar returns. The AI suggests increasing USDK allocation by 5% and decreasing ETH exposure."
    },
    {
      title: "New Strategy Available",
      description: "High-yield opportunity detected",
      icon: <Activity className="w-4 h-4 text-kamui-teal" />,
      action: "Explore",
      expanded: "A new AI-driven strategy 'Momentum Alpha' has been identified that could increase your annual returns by an estimated 8-12% with minimal additional risk."
    },
    {
      title: "Risk Exposure Alert",
      description: "Consider reducing position",
      icon: <AlertCircle className="w-4 h-4 text-amber-400" />,
      action: "Adjust",
      expanded: "Current market conditions indicate increased volatility for ETH. The AI recommends temporarily reducing your ETH position by 30% to protect against potential downside."
    },
    {
      title: "Liquidity Opportunity",
      description: "Earn additional yield on idle assets",
      icon: <Wallet className="w-4 h-4 text-kamui-accent" />,
      action: "Optimize",
      expanded: "You have approximately $12,500 in idle assets that could be providing liquidity in Stable Return vaults, potentially earning an additional 10-15% APY."
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
          AI Recommendations
        </CardTitle>
        <CardDescription>Intelligent optimization suggestions</CardDescription>
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
          View All Insights
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
