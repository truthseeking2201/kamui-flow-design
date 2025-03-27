
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import LaunchPoolDetailView from '../components/launchpool/LaunchPoolDetails';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const LaunchPoolDetails: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate('/launch-pools');
  };
  
  return (
    <Layout>
      <div className="pt-24">
        <div className="container mx-auto px-6 my-12">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white flex items-center group p-0"
              onClick={handleGoBack}
            >
              <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Launch Pools</span>
            </Button>
          </div>
          <LaunchPoolDetailView />
        </div>
      </div>
    </Layout>
  );
};

export default LaunchPoolDetails;
