
import React from 'react';
import { Outlet } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import Breadcrumbs from './Breadcrumbs';
import AppSidebar from './AppSidebar';
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";

interface AppLayoutProps {
  hideNav?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ hideNav = false }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-kamui-dark text-foreground overflow-hidden relative">
        <AnimatedBackground />
        
        {!hideNav && <AppSidebar />}
        
        <SidebarInset className="relative z-10">
          <div className="container mx-auto px-6 py-8">
            {!hideNav && (
              <div className="flex items-center mb-4">
                <SidebarTrigger className="mr-4" />
                <Breadcrumbs />
              </div>
            )}
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
