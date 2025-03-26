
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D1117]/80 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-kamui-accent to-kamui-teal flex items-center justify-center">
            <div className="w-3 h-3 bg-kamui-dark rounded-full transition-all duration-300 group-hover:scale-75 group-hover:opacity-80"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Kamui <span className="text-gradient">AI</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link">
            Home
          </Link>
          <Link to="/#features" className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link">
            Features
          </Link>
          <Link to="/#strategy" className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link">
            Strategy
          </Link>
          <Link to="/#vaults" className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link">
            Vaults
          </Link>
          <Link to="/flows" className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link">
            Flows
          </Link>
          <Link to="/dashboard" className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link">
            Dashboard
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/dashboard">
            <button className="glass-button px-5 py-2 text-kamui-accent font-medium flex items-center gap-2 hover-scale">
              <span>Launch App</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-kamui-dark/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-xl">
          <Link
            to="/"
            className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/#features"
            className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/#strategy"
            className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Strategy
          </Link>
          <Link
            to="/#vaults"
            className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Vaults
          </Link>
          <Link
            to="/flows"
            className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Flows
          </Link>
          <Link
            to="/dashboard"
            className="text-white/80 hover:text-kamui-accent transition-colors duration-200 font-medium story-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
            <button className="glass-button px-6 py-3 mt-4 text-kamui-accent font-medium flex items-center gap-2 hover-scale">
              <span>Launch App</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
