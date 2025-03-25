
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import StrategyVisualization from '../components/StrategyVisualization';
import VaultCards from '../components/VaultCards';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <StrategyVisualization />
      <VaultCards />
      
      {/* Call to Action Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card neon-border max-w-4xl mx-auto p-10 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 animate-fade-in">
              Ready to Experience the Future of <span className="text-gradient">AI-Driven Finance</span>?
            </h2>
            <p className="text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Join the revolution in financial market-making and liquidity provision with Kamui AI. 
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
