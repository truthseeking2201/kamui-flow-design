
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
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from '@/components/ui/button';

const AppSidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { path: '/strategies', label: 'AI Strategies', icon: <Lightbulb className="w-4 h-4" /> },
    { path: '/flows', label: 'Flows', icon: <Workflow className="w-4 h-4" /> },
    { path: '/intelligence-agents', label: 'Intelligence Agents', icon: <Network className="w-4 h-4" /> },
    { path: '/launch-pools', label: 'Launch Pools', icon: <Layers className="w-4 h-4" /> },
    { path: '/asset-onboarding', label: 'Asset Onboarding', icon: <Building className="w-4 h-4" /> },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <Link to="/" className="flex items-center gap-2 group p-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-kamui-accent to-kamui-teal flex items-center justify-center">
            <div className="w-3 h-3 bg-kamui-dark rounded-full transition-all duration-300 group-hover:scale-75 group-hover:opacity-80"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Kamui <span className="text-gradient">AI</span></span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.path)}
                    tooltip={item.label}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="p-4">
          <Link to="/create-strategy">
            <Button className="glass-button w-full px-5 py-2 text-black font-medium flex items-center gap-2 hover-scale">
              <Plus className="w-4 h-4" />
              <span>New Strategy</span>
            </Button>
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
