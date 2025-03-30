
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Building,
  ChevronRight,
  DollarSign,
  Landmark,
  Layers,
  LayoutDashboard,
  Lightbulb,
  Network,
  Plus,
  Workflow
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';

const AppNavigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4 mr-2" /> },
    { path: '/strategies', label: 'AI Strategies', icon: <Lightbulb className="w-4 h-4 mr-2" /> },
    { path: '/flows', label: 'Flows', icon: <Workflow className="w-4 h-4 mr-2" /> },
    { path: '/intelligence-agents', label: 'Intelligence Agents', icon: <Network className="w-4 h-4 mr-2" /> },
    { path: '/launch-pools', label: 'Launch Pools', icon: <Layers className="w-4 h-4 mr-2" /> },
    { path: '/asset-onboarding', label: 'Asset Onboarding', icon: <Building className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="container mx-auto px-6 flex justify-between items-center h-16">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-kamui-accent to-kamui-teal flex items-center justify-center">
          <div className="w-3 h-3 bg-kamui-dark rounded-full transition-all duration-300 group-hover:scale-75 group-hover:opacity-80"></div>
        </div>
        <span className="font-display font-bold text-xl tracking-tight">Kamui <span className="text-gradient">AI</span></span>
      </Link>

      {/* Main Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.path}>
              <Link 
                to={item.path}
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.path) 
                    ? "bg-accent/50 text-kamui-accent" 
                    : "text-white/80 hover:text-kamui-accent hover:bg-accent/30"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link to="/create-strategy">
          <Button className="glass-button px-5 py-2 text-kamui-accent font-medium flex items-center gap-2 hover-scale">
            <Plus className="w-4 h-4" />
            <span>New Strategy</span>
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Button - implement mobile menu functionality as needed */}
    </div>
  );
};

export default AppNavigation;
