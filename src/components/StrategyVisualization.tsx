
import React from 'react';
import { Brain, RefreshCw, TrendingUp, Database, ChevronRight } from 'lucide-react';

const StrategyVisualization: React.FC = () => {
  return (
    <section className="py-24 relative" id="strategy">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
            AI Agent <span className="text-gradient">Workflow</span>
          </h2>
          <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Explore our advanced AI operational workflow that powers our RWA market-making strategies, optimizing liquidity and returns in real-time.
          </p>
        </div>

        {/* Strategy Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center AI Brain */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-card p-6 rounded-full z-10 animate-pulse">
            <Brain className="w-12 h-12 text-kamui-accent" />
          </div>
          
          {/* Circular flow path */}
          <div className="w-full h-[400px] relative">
            {/* Circular SVG */}
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <circle 
                cx="200" 
                cy="200" 
                r="150" 
                fill="none" 
                stroke="rgba(126, 105, 171, 0.2)" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
              {/* Animated gradient around the circle */}
              <circle 
                cx="200" 
                cy="200" 
                r="150" 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="3" 
                strokeLinecap="round"
                strokeDasharray="942" 
                strokeDashoffset="942"
                className="animate-[dash_10s_linear_infinite]"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="942" 
                  to="0" 
                  dur="10s" 
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7DF9FF">
                    <animate 
                      attributeName="offset" 
                      values="0;1;0" 
                      dur="10s" 
                      repeatCount="indefinite" 
                    />
                  </stop>
                  <stop offset="100%" stopColor="#9b87f5">
                    <animate 
                      attributeName="offset" 
                      values="0;1;0" 
                      dur="10s" 
                      repeatCount="indefinite" 
                    />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
            
            {/* Strategy Nodes */}
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 glass-card p-4 rounded-lg neon-border animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-kamui-teal" />
                <span className="font-medium">RWA Data Collection</span>
              </div>
            </div>
            
            <div className="absolute top-1/2 right-[20px] transform -translate-y-1/2 glass-card p-4 rounded-lg neon-border animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-kamui-purple" />
                <span className="font-medium">Market-Making Execution</span>
              </div>
            </div>
            
            <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 glass-card p-4 rounded-lg neon-border animate-fade-in hover-scale" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-kamui-accent" />
                <span className="font-medium">Performance Analysis</span>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-[20px] transform -translate-y-1/2 glass-card p-4 rounded-lg neon-border animate-fade-in hover-scale" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-kamui-indigo" />
                <span className="font-medium">Strategy Optimization</span>
              </div>
            </div>
            
            {/* Flowing particles */}
            <div className="absolute inset-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-kamui-accent animate-[orbital_10s_linear_infinite]"
                  style={{
                    animationDelay: `${i * 1.25}s`,
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <button className="glass-button px-6 py-3 text-kamui-accent inline-flex items-center gap-2 hover-scale group">
            <span>Explore RWA strategy marketplace</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StrategyVisualization;
