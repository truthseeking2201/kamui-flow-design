
import React from 'react';
import Layout from '../components/Layout';
import UserFlow from '../components/UserFlow';
import DevelopmentFlow from '../components/DevelopmentFlow';
import GovernanceFlow from '../components/GovernanceFlow';

const Flows: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24">
        <div className="container mx-auto px-6 my-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
              Kamui AI <span className="text-gradient">Flows</span>
            </h1>
            <p className="text-white/70 text-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Comprehensive documentation of all system flows and processes within the Kamui AI ecosystem
            </p>
          </div>
        </div>
        
        <UserFlow />
        <DevelopmentFlow />
        <GovernanceFlow />
      </div>
    </Layout>
  );
};

export default Flows;
