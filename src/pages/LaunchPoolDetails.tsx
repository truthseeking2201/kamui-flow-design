
import React from 'react';
import Layout from '../components/Layout';
import LaunchPoolDetailView from '../components/launchpool/LaunchPoolDetails';

const LaunchPoolDetails: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24">
        <div className="container mx-auto px-6 my-12">
          <LaunchPoolDetailView />
        </div>
      </div>
    </Layout>
  );
};

export default LaunchPoolDetails;
