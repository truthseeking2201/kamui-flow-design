
import React from 'react';
import { Outlet } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import AppNavigation from './AppNavigation';
import Breadcrumbs from './Breadcrumbs';

interface AppLayoutProps {
  hideNav?: boolean;
  hideBreadcrumbs?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ hideNav = false, hideBreadcrumbs = true }) => {
  return (
    <div className="min-h-screen w-full bg-kamui-dark text-foreground overflow-hidden relative">
      <AnimatedBackground />
      {!hideNav && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-md py-3 shadow-md">
          <AppNavigation />
        </header>
      )}
      <main className="relative z-10 pt-16">
        <div className="container mx-auto px-6">
          {!hideNav && !hideBreadcrumbs && <Breadcrumbs />}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
