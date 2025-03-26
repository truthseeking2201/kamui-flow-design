
import React from 'react';
import { Brain, Lightbulb, User, ArrowDown, Database, LineChart, Activity } from 'lucide-react';

const AIHierarchy: React.FC = () => {
  return (
    <section className="py-24 relative" id="ai-hierarchy">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
            Hierarchical <span className="text-gradient">AI Structure</span>
          </h2>
          <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Our three-tiered AI agent hierarchy provides robust, scalable market-making for RWAs
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Connection lines */}
          <div className="absolute left-1/2 top-[22%] h-[15%] w-0.5 bg-gradient-to-b from-kamui-accent to-kamui-teal animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute left-1/2 top-[58%] h-[15%] w-0.5 bg-gradient-to-b from-kamui-teal to-kamui-purple animate-fade-in" style={{ animationDelay: '0.7s' }}></div>
          
          {/* Master AI Agent */}
          <div className="glass-card neon-border border-kamui-accent/30 p-8 max-w-2xl mx-auto mb-8 animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-kamui-accent/30 to-kamui-teal/30 flex items-center justify-center">
                <Brain className="h-8 w-8 text-kamui-accent" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white">Master AI Agent</h3>
                <p className="text-white/60">Core decision-making and strategy coordination</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/5 rounded-xl p-4">
                <Database className="h-5 w-5 text-kamui-accent mb-2" />
                <h4 className="font-medium text-white mb-1">Data Ingestion</h4>
                <p className="text-white/60 text-sm">Processes RWA Launchpool data and market conditions</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4">
                <Activity className="h-5 w-5 text-kamui-accent mb-2" />
                <h4 className="font-medium text-white mb-1">Liquidity Management</h4>
                <p className="text-white/60 text-sm">Balances liquidity from multiple sources</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4">
                <LineChart className="h-5 w-5 text-kamui-accent mb-2" />
                <h4 className="font-medium text-white mb-1">Market Making</h4>
                <p className="text-white/60 text-sm">Optimizes bid-ask spreads for RWAs</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <ArrowDown className="h-6 w-6 text-kamui-teal animate-fade-in" style={{ animationDelay: '0.3s' }} />
          </div>
          
          {/* Intelligence Agent */}
          <div className="glass-card neon-border border-kamui-teal/30 p-8 max-w-2xl mx-auto my-8 animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-kamui-teal/30 to-kamui-purple/30 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-kamui-teal" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white">Intelligence Agents</h3>
                <p className="text-white/60">Market analysis and strategic intelligence</p>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4 mt-4">
              <p className="text-white/80">
                Collects market intelligence, continuously optimizing and updating data analytics for predictive accuracy and strategic insights across different RWA markets.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <ArrowDown className="h-6 w-6 text-kamui-purple animate-fade-in" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* User AI Agents */}
          <div className="glass-card neon-border border-kamui-purple/30 p-8 max-w-2xl mx-auto mt-8 animate-fade-in hover-scale" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-kamui-purple/30 to-kamui-accent/30 flex items-center justify-center">
                <User className="h-8 w-8 text-kamui-purple" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white">User AI Agents</h3>
                <p className="text-white/60">Execution and strategy refinement</p>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4 mt-4">
              <p className="text-white/80">
                Execute quant and HFT strategies guided by Master AI directions, generating volume and refining strategies based on performance data and market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHierarchy;
