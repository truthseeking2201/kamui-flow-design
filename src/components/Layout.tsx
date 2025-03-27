
import React from 'react';
import Navigation from './Navigation';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideNav = false }) => {
  // Only hide navigation when explicitly requested
  const shouldShowNav = !hideNav;

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
