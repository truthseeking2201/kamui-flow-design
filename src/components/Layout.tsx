
import React from 'react';
import Navigation from './Navigation';
import AnimatedBackground from './AnimatedBackground';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideNav }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const shouldShowNav = hideNav ? false : isHomePage;

  return (
    <div className="min-h-screen w-full bg-kamui-dark text-foreground overflow-hidden relative">
      <AnimatedBackground />
      {shouldShowNav && <Navigation />}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
