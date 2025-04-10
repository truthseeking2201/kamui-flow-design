
import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import AppNavigation from './AppNavigation';

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

// This component is mainly used for the landing page
// For app pages, we use AppLayout with react-router's Outlet
const Layout: React.FC<LayoutProps> = ({ children, hideNav = false }) => {
  // Only hide navigation when explicitly requested
  const shouldShowNav = !hideNav;

  return (
    <div className="min-h-screen w-full bg-kamui-dark text-foreground overflow-hidden relative">
      <AnimatedBackground />
      {shouldShowNav && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-md py-3 shadow-md">
          <AppNavigation />
        </header>
      )}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
