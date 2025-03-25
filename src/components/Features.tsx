
import React from 'react';
import { Brain, Layers, LineChart, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-kamui-accent" />,
      title: "AI Agent Infrastructure",
      description: "Our Master AI Agent manages centralized liquidity across multiple platforms, optimizing asset allocation and market-making operations in real-time.",
      delay: 0
    },
    {
      icon: <Layers className="w-8 h-8 text-kamui-purple" />,
      title: "Advanced Strategy Marketplace",
      description: "Explore, access, and monetize AI-driven investment strategies with visual performance metrics and token incentives for contributors.",
      delay: 0.1
    },
    {
      icon: <LineChart className="w-8 h-8 text-kamui-teal" />,
      title: "Strategy Simulation",
      description: "Run comprehensive Agent-Based Modeling and Monte Carlo simulations with detailed backtesting for DeFi-specific risk analysis.",
      delay: 0.2
    },
    {
      icon: <Shield className="w-8 h-8 text-kamui-pink" />,
      title: "Vault Management",
      description: "Utilize categorized liquidity vaults with simple drag-and-drop deposits and dynamic real-time visual feedback on portfolios.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
            Core <span className="text-gradient">Functionalities</span>
          </h2>
          <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Kamui AI combines advanced artificial intelligence with intuitive user experience to revolutionize financial market-making and investment strategies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 hover-scale transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${feature.delay + 0.2}s` }}
            >
              <div className="bg-white/5 p-4 rounded-xl inline-block mb-5 transition-all duration-300 group-hover:bg-white/10">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
