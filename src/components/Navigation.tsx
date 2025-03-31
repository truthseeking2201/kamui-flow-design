
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

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
          <Link to="/" className={`transition-colors duration-200 font-medium ${isActive('/') ? 'text-kamui-accent' : 'text-white/80 hover:text-kamui-accent'}`}>
            Home
          </Link>
          <Link to="/dashboard" className={`transition-colors duration-200 font-medium ${isActive('/dashboard') ? 'text-kamui-accent' : 'text-white/80 hover:text-kamui-accent'}`}>
            Dashboard
          </Link>
          <Link to="/asset-onboarding" className={`transition-colors duration-200 font-medium ${isActive('/asset-onboarding') ? 'text-kamui-accent' : 'text-white/80 hover:text-kamui-accent'}`}>
            Asset Onboarding
          </Link>
          <Link to="/launch-pools" className={`transition-colors duration-200 font-medium ${isActive('/launch-pool') ? 'text-kamui-accent' : 'text-white/80 hover:text-kamui-accent'}`}>
            Launch Pools
          </Link>
          <Link to="/intelligence-agents" className={`transition-colors duration-200 font-medium ${isActive('/intelligence-agents') || isActive('/agent/') ? 'text-kamui-accent' : 'text-white/80 hover:text-kamui-accent'}`}>
            Intelligence Agents
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
            className={`transition-colors duration-200 font-medium ${isActive('/') ? 'text-kamui-accent' : 'text-white/80 hover:text-kamui-accent'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`transition-colors duration-200 font-medium ${isActive('/dashboard') ? 'text-kamui-accent' : 'text-white/80 hover:text-kamui-accent'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/asset-onboarding"
            className={`transition-colors duration-200 font-medium ${isActive('/asset-onboarding') ? 'text-kamui-accent' : 'text-white/80 hover:text-kamui-accent'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Asset Onboarding
          </Link>
          <Link
            to="/launch-pools"
            className={`transition-colors duration-200 font-medium ${isActive('/launch-pool') ? 'text-kamui-accent' : 'text-white/80 hover:text-kamui-accent'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Launch Pools
          </Link>
          <Link
            to="/intelligence-agents"
            className={`transition-colors duration-200 font-medium ${isActive('/intelligence-agents') || isActive('/agent/') ? 'text-kamui-accent' : 'text-white/80 hover:text-kamui-accent'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Intelligence Agents
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
