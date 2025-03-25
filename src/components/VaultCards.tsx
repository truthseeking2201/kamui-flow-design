
import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const VaultCards: React.FC = () => {
  const vaults = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: 'Stable Return',
      description: 'Low-risk strategies focusing on stable, consistent returns with minimal volatility.',
      apy: '10-15%',
      risk: 'Low',
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      delay: 0
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-kamui-teal" />,
      title: 'Balanced Growth',
      description: 'Balanced approach with moderate risk for long-term sustainable growth.',
      apy: '20-30%',
      risk: 'Medium',
      color: 'from-kamui-teal/20 to-green-500/20',
      borderColor: 'border-kamui-teal/30',
      delay: 0.1
    },
    {
      icon: <Zap className="w-6 h-6 text-kamui-accent" />,
      title: 'High Yield',
      description: 'Aggressive strategies targeting maximum returns with higher risk tolerance.',
      apy: '40-60%',
      risk: 'High',
      color: 'from-kamui-accent/20 to-kamui-purple/20',
      borderColor: 'border-kamui-accent/30',
      delay: 0.2
    }
  ];

  return (
    <section className="py-24 relative" id="vaults">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
            Liquidity <span className="text-gradient">Vaults</span>
          </h2>
          <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Choose from our range of AI-managed liquidity vaults, each designed to meet different investment goals and risk tolerances.
          </p>
        </div>

        {/* Vaults Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {vaults.map((vault, index) => (
            <div 
              key={index}
              className={`rounded-2xl border ${vault.borderColor} overflow-hidden animate-fade-in bg-gradient-to-br ${vault.color} backdrop-blur-md hover-scale`}
              style={{ animationDelay: `${vault.delay + 0.2}s` }}
            >
              <div className="p-6">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  {vault.icon}
                </div>
                <h3 className="font-display font-semibold text-xl mb-2 text-white">{vault.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">{vault.description}</p>
                
                <div className="bg-white/5 rounded-lg p-4 mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60 text-sm">Target APY</span>
                    <span className="text-white font-semibold">{vault.apy}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Risk Level</span>
                    <span className="text-white font-semibold">{vault.risk}</span>
                  </div>
                </div>
                
                <button className="w-full glass-button py-3 font-medium text-white flex items-center justify-center gap-2 group">
                  <span>Deposit Assets</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VaultCards;
