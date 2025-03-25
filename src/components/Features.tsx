
import React from 'react';
import { Brain, Layers, LineChart, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-kamui-accent" />,
      title: "Master AI Agent",
      description: "Our Master AI Agent manages centralized liquidity across multiple tokenized Real-World Assets, optimizing asset allocation and market-making operations in real-time.",
      delay: 0
    },
    {
      icon: <Layers className="w-8 h-8 text-kamui-purple" />,
      title: "Intelligence Agents",
      description: "Specialized Intelligence Agents collect market data, track liquidity conditions, and provide predictive analytics to enhance transaction accuracy and strategy optimization.",
      delay: 0.1
    },
    {
      icon: <LineChart className="w-8 h-8 text-kamui-teal" />,
      title: "User AI Agents",
      description: "Execute individual quant and HFT strategies based on Master AI guidelines, generating organic trading volume for tokenized Real-World Assets.",
      delay: 0.2
    },
    {
      icon: <Shield className="w-8 h-8 text-kamui-pink" />,
      title: "RWA Vault Management",
      description: "Categorized liquidity vaults for tokenized real estate, gold, bonds, stocks, and other real-world assets with simplified deposits and real-time performance feedback.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
            AI <span className="text-gradient">Hierarchy</span>
          </h2>
          <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Kamui AI combines a three-tiered AI structure with intuitive user experience to revolutionize RWA market-making and investment strategies.
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
