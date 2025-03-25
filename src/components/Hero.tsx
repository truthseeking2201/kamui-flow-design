
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
            <span className="text-gradient">AI-Driven</span> RWA <br />
            Market Making
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Revolutionizing liquidity provision for tokenized Real-World Assets with advanced AI agents that optimize your portfolio and automate sophisticated investment strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale px-8 py-6">
                Launch App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="glass-button border-kamui-accent/50 text-kamui-accent hover-scale px-8 py-6">
              Explore Strategies
            </Button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-4">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">$214M</p>
              <p className="text-white/60 text-sm">Total RWA Liquidity</p>
            </div>
            <div className="glass-card p-4">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-purple mb-1">42%</p>
              <p className="text-white/60 text-sm">Average APY</p>
            </div>
            <div className="glass-card p-4">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">128</p>
              <p className="text-white/60 text-sm">Active AI Agents</p>
            </div>
            <div className="glass-card p-4">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-purple mb-1">24K+</p>
              <p className="text-white/60 text-sm">Liquidity Providers</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-kamui-accent/10 blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-kamui-purple/10 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
