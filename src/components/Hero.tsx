
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate movement as a percentage of window size (limited movement)
      const moveX = (clientX - windowWidth / 2) / windowWidth * 15;
      const moveY = (clientY - windowHeight / 2) / windowHeight * 15;
      
      orbRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating orb effect */}
      <div 
        ref={orbRef}
        className="absolute pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: 'translate(0px, 0px)' }}
      >
        <div className="relative">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-kamui-purple/30 to-kamui-accent/30 blur-[80px] animate-pulse-glow"></div>
          <div className="absolute top-[50%] left-[50%] w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-kamui-teal/20 to-kamui-indigo/20 blur-[60px] animate-pulse-glow" style={{ animationDelay: '-1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-flex items-center rounded-full bg-kamui-accent/10 px-3 py-1 text-sm font-medium text-kamui-accent mb-6 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-kamui-accent mr-2 animate-pulse"></span>
            Powered by Advanced AI Agents
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">The Future of</span><br />
            <span className="text-gradient">AI-Driven Finance</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Kamui AI leverages advanced artificial intelligence to optimize liquidity, automate investment strategies, and create high-yield opportunities for crypto assets and tokenized Real-World Assets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale">
              Explore AI Strategies
            </button>
            <button className="px-8 py-4 rounded-lg font-semibold glass-button text-white flex items-center justify-center gap-2 group">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center">
              <p className="text-gradient font-display font-bold text-3xl md:text-4xl">$237M+</p>
              <p className="text-white/60 text-sm mt-1">Total Value Locked</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gradient-purple font-display font-bold text-3xl md:text-4xl">5,000+</p>
              <p className="text-white/60 text-sm mt-1">Active Users</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gradient font-display font-bold text-3xl md:text-4xl">50+</p>
              <p className="text-white/60 text-sm mt-1">AI Strategies</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gradient-purple font-display font-bold text-3xl md:text-4xl">32%</p>
              <p className="text-white/60 text-sm mt-1">Average APY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
