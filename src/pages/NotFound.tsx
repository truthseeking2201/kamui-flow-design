
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { AlertTriangle, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card neon-border max-w-md w-full p-10 text-center">
          <AlertTriangle className="h-16 w-16 text-kamui-accent mx-auto mb-6" />
          <h1 className="font-display font-bold text-3xl mb-4">404</h1>
          <p className="text-white/70 mb-6">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="glass-button px-5 py-3 text-kamui-accent font-medium flex items-center justify-center gap-2 hover-scale w-full">
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
