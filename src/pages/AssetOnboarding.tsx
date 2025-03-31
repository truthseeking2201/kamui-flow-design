
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Building, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import AssetOnboardingForm from '../components/assetOnboarding/AssetOnboardingForm';
import AssetReview from '../components/assetOnboarding/AssetReview';
import AssetSuccess from '../components/assetOnboarding/AssetSuccess';

type OnboardingStep = 'form' | 'review' | 'success';

const AssetOnboarding: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('form');
  const [formData, setFormData] = useState({
    assetName: '',
    assetType: 'real-estate',
    description: '',
    expectedValue: '',
    riskLevel: 'medium',
    liquidityNeeds: 'medium',
    documentationUploaded: false
  });

  const handleFormSubmit = (data: any) => {
    setFormData({ ...formData, ...data });
    setCurrentStep('review');
    toast({
      title: "Asset Details Captured",
      description: "Please review your submission details before proceeding",
    });
  };

  const handleReviewSubmit = () => {
    setCurrentStep('success');
    toast({
      title: "Asset Submission Complete",
      description: "Your asset has been submitted for due diligence review",
    });
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  const handleBack = () => {
    if (currentStep === 'review') {
      setCurrentStep('form');
    } else if (currentStep === 'success') {
      setCurrentStep('review');
    }
  };

  return (
    <Layout>
      <div className="pt-24">
        <div className="container mx-auto px-6 my-12">
          <h1 className="font-display font-bold text-3xl mb-8">
            RWA <span className="text-gradient">Asset Onboarding</span>
          </h1>
          
          {/* Stepper */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep === 'form' 
                  ? 'bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark font-semibold' 
                  : 'bg-white/10 text-white'
              }`}>
                1
              </div>
              <div className={`w-16 h-0.5 ${
                currentStep === 'form' ? 'bg-gradient-to-r from-kamui-teal to-white/20' : 
                currentStep === 'review' ? 'bg-gradient-to-r from-kamui-accent to-kamui-teal' : 
                'bg-kamui-accent'
              }`}></div>
            </div>
            
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep === 'review' 
                  ? 'bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark font-semibold' 
                  : currentStep === 'success' ? 'bg-white/10 text-white' : 'bg-white/10 text-white/50'
              }`}>
                2
              </div>
              <div className={`w-16 h-0.5 ${
                currentStep === 'success' ? 'bg-gradient-to-r from-kamui-accent to-kamui-teal' : 
                'bg-white/10'
              }`}></div>
            </div>
            
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep === 'success' 
                  ? 'bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark font-semibold' 
                  : 'bg-white/10 text-white/50'
              }`}>
                {currentStep === 'success' ? <CheckCircle className="w-5 h-5" /> : '3'}
              </div>
            </div>
          </div>
          
          <Card className="bg-gradient-card border-white/5 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-kamui-accent" />
                {currentStep === 'form' && "Asset Submission Form"}
                {currentStep === 'review' && "Review Asset Details"}
                {currentStep === 'success' && "Submission Successful"}
              </CardTitle>
              <CardDescription>
                {currentStep === 'form' && "Provide detailed information about your real-world asset"}
                {currentStep === 'review' && "Review the information before submitting for due diligence"}
                {currentStep === 'success' && "Your asset has been submitted successfully and is now in review"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentStep === 'form' && <AssetOnboardingForm onSubmit={handleFormSubmit} initialData={formData} />}
              {currentStep === 'review' && <AssetReview assetData={formData} onSubmit={handleReviewSubmit} onBack={handleBack} />}
              {currentStep === 'success' && <AssetSuccess onBack={handleBackToDashboard} />}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AssetOnboarding;

