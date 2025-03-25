
import React from 'react';
import Navigation from './Navigation';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-kamui-dark text-foreground overflow-hidden relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
