
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import StrategyVisualization from '../components/StrategyVisualization';
import VaultCards from '../components/VaultCards';
import UserFlow from '../components/UserFlow';
import AIHierarchy from '../components/AIHierarchy';
import MarketplacePreview from '../components/MarketplacePreview';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, LineChart, ArrowUpRight } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      
      {/* AI Hierarchy Section */}
      <AIHierarchy />
      
      <StrategyVisualization />
      <VaultCards />
      
      {/* User Flow Section */}
      <UserFlow />
      
      {/* Strategy Marketplace Preview */}
      <MarketplacePreview />
      
      {/* User Segments Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent to-black/20" id="segments">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
              User <span className="text-gradient">Segments</span>
            </h2>
            <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Kamui AI serves diverse participants in the RWA ecosystem with tailored experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-display font-semibold text-xl mb-4 text-kamui-accent">Asset Providers</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-kamui-accent/20 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-kamui-accent rounded-full"></div>
                  </div>
                  <span>Comprehensive due diligence and multi-factor risk assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-kamui-accent/20 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-kamui-accent rounded-full"></div>
                  </div>
                  <span>Seamless tokenization and liquidity pool creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-kamui-accent/20 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-kamui-accent rounded-full"></div>
                  </div>
                  <span>Real-time market-making analytics dashboard</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 animate-fade-in hover-scale" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-display font-semibold text-xl mb-4 text-kamui-teal">Liquidity Providers</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-kamui-teal/20 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-kamui-teal rounded-full"></div>
                  </div>
                  <span>Streamlined KYC/AML compliance and wallet integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-kamui-teal/20 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-kamui-teal rounded-full"></div>
                  </div>
                  <span>Customizable risk parameters and capital allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-kamui-teal/20 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-kamui-teal rounded-full"></div>
                  </div>
                  <span>Dynamic yield optimization with AI-powered insights</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-display font-semibold text-xl mb-4 text-kamui-purple">Traders & Bot Creators</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-kamui-purple/20 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-kamui-purple rounded-full"></div>
                  </div>
                  <span>Advanced quant and HFT specialized trading interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-kamui-purple/20 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-kamui-purple rounded-full"></div>
                  </div>
                  <span>Marketplace for creating and monetizing AI strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-kamui-purple/20 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-kamui-purple rounded-full"></div>
                  </div>
                  <span>Real-time predictive analytics and market forecasting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Revenue Model Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card neon-border max-w-4xl mx-auto p-10">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6 text-center animate-fade-in">
              Revenue <span className="text-gradient">Model</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-kamui-accent/30 to-kamui-teal/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-white">1</span>
                </div>
                <h3 className="font-medium text-lg mb-2">Transaction Fees</h3>
                <p className="text-white/70 text-sm">0.001%-0.05% fees per AI-driven transaction</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-kamui-teal/30 to-kamui-purple/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-white">2</span>
                </div>
                <h3 className="font-medium text-lg mb-2">Performance Fees</h3>
                <p className="text-white/70 text-sm">1%-10% on profits generated by AI agents</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-kamui-purple/30 to-kamui-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-white">3</span>
                </div>
                <h3 className="font-medium text-lg mb-2">Computing Margin</h3>
                <p className="text-white/70 text-sm">1%-10% for AI computational services</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400/30 to-kamui-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-white">4</span>
                </div>
                <h3 className="font-medium text-lg mb-2">Spread Capture</h3>
                <p className="text-white/70 text-sm">From RWA market-making activities</p>
              </div>
            </div>
            
            <div className="mt-10 p-4 glass-card bg-white/5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-lg">Business Metrics & Targets</h3>
                <LineChart className="w-5 h-5 text-kamui-accent" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3">
                  <p className="text-xs text-white/60 mb-1">Target TVL</p>
                  <p className="text-xl font-display font-bold text-gradient">$50M-250M</p>
                </div>
                <div className="text-center p-3">
                  <p className="text-xs text-white/60 mb-1">Daily Active Wallets</p>
                  <p className="text-xl font-display font-bold text-gradient">10K+</p>
                </div>
                <div className="text-center p-3">
                  <p className="text-xs text-white/60 mb-1">Base APR Range</p>
                  <p className="text-xl font-display font-bold text-gradient">10-42%</p>
                </div>
                <div className="text-center p-3">
                  <p className="text-xs text-white/60 mb-1">AI Strategies</p>
                  <p className="text-xl font-display font-bold text-gradient">500+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Competitive Advantages */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
              Competitive <span className="text-gradient">Advantages</span>
            </h2>
            <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              What sets Kamui AI apart in the RWA market-making landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="glass-card p-6 animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <Zap className="h-10 w-10 text-kamui-accent mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">RWA Liquidity Capabilities</h3>
              <p className="text-white/70 text-sm">Specialized market-making technology purpose-built for tokenized real-world assets</p>
            </div>
            
            <div className="glass-card p-6 animate-fade-in hover-scale" style={{ animationDelay: '0.3s' }}>
              <Shield className="h-10 w-10 text-kamui-teal mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">Hierarchical AI Infrastructure</h3>
              <p className="text-white/70 text-sm">Three-tiered AI agent system enabling robust, scalable market operations</p>
            </div>
            
            <div className="glass-card p-6 animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
              <LineChart className="h-10 w-10 text-kamui-purple mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">Advanced Simulation Environment</h3>
              <p className="text-white/70 text-sm">Sophisticated risk mitigation through comprehensive backtesting and simulation</p>
            </div>
            
            <div className="glass-card p-6 animate-fade-in hover-scale" style={{ animationDelay: '0.5s' }}>
              <ArrowUpRight className="h-10 w-10 text-amber-400 mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">Kamui Finance Integration</h3>
              <p className="text-white/70 text-sm">Strategic alignment with Kamui Finance's infrastructure and KMMF liquidity</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card neon-border max-w-4xl mx-auto p-10 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 animate-fade-in">
              Ready to Experience the Future of <span className="text-gradient">RWA Market-Making</span>?
            </h2>
            <p className="text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Join the revolution in RWA financial market-making and liquidity provision with Kamui AI. 
              Start optimizing your portfolio today.
            </p>
            <Link to="/dashboard">
              <button className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Launch App
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-kamui-accent to-kamui-teal flex items-center justify-center">
                <div className="w-2 h-2 bg-kamui-dark rounded-full"></div>
              </div>
              <span className="font-display font-bold text-lg">Kamui <span className="text-gradient">AI</span></span>
            </div>
            
            <div className="text-white/50 text-sm">
              © {new Date().getFullYear()} Kamui AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
