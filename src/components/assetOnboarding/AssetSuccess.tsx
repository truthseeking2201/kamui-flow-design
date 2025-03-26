
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AssetSuccessProps = {
  onBack: () => void;
};

const AssetSuccess: React.FC<AssetSuccessProps> = ({ onBack }) => {
  return (
    <div className="text-center py-8">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-kamui-accent/20 to-kamui-teal/20 flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-kamui-accent" />
      </div>
      
      <h2 className="text-2xl font-display font-bold mb-4">Asset Successfully Submitted</h2>
      <p className="text-white/70 mb-8 max-w-lg mx-auto">
        Your asset has been submitted for due diligence review. Our team will 
        evaluate your submission and contact you with updates on the process.
      </p>
      
      <div className="glass-card p-6 border border-white/10 rounded-lg mb-8 max-w-md mx-auto text-left">
        <h3 className="font-medium text-white mb-4">What happens next?</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-kamui-accent/20 flex items-center justify-center text-kamui-accent text-sm shrink-0 mt-0.5">1</div>
            <p className="text-white/80 text-sm">Initial Review (1-3 business days)</p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-kamui-accent/20 flex items-center justify-center text-kamui-accent text-sm shrink-0 mt-0.5">2</div>
            <p className="text-white/80 text-sm">Due Diligence Process (1-2 weeks)</p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-kamui-accent/20 flex items-center justify-center text-kamui-accent text-sm shrink-0 mt-0.5">3</div>
            <p className="text-white/80 text-sm">Investment Committee Decision</p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-kamui-accent/20 flex items-center justify-center text-kamui-accent text-sm shrink-0 mt-0.5">4</div>
            <p className="text-white/80 text-sm">Tokenization & Market-Making (if approved)</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button 
          onClick={onBack}
          className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale group"
        >
          <span>Return to Dashboard</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default AssetSuccess;
