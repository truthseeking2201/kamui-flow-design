
import React from 'react';
import { Building, ArrowLeft, ArrowRight, Check, FileText, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AssetReviewProps = {
  assetData: any;
  onSubmit: () => void;
  onBack: () => void;
};

const AssetReview: React.FC<AssetReviewProps> = ({ assetData, onSubmit, onBack }) => {
  const formatAssetType = (type: string) => {
    switch (type) {
      case 'real-estate': return 'Real Estate';
      case 'precious-metals': return 'Precious Metals';
      case 'fixed-income': return 'Fixed Income';
      case 'equities': return 'Equities';
      case 'alternative': return 'Alternative Assets';
      default: return type;
    }
  };
  
  const formatRiskLevel = (level: string) => {
    switch (level) {
      case 'low': return 'Low';
      case 'medium-low': return 'Medium-Low';
      case 'medium': return 'Medium';
      case 'medium-high': return 'Medium-High';
      case 'high': return 'High';
      default: return level;
    }
  };
  
  const formatLiquidityNeeds = (needs: string) => {
    switch (needs) {
      case 'low': return 'Low (Long-term hold)';
      case 'medium': return 'Medium (Periodic liquidity)';
      case 'high': return 'High (Frequent trading)';
      default: return needs;
    }
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 border border-white/10 rounded-lg">
        <h3 className="text-xl font-medium text-white mb-4 flex items-center">
          <Building className="w-5 h-5 text-kamui-accent mr-2" />
          Asset Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <p className="text-white/60 text-sm">Asset Name</p>
            <p className="text-white font-medium">{assetData.assetName || "Not provided"}</p>
          </div>
          
          <div>
            <p className="text-white/60 text-sm">Asset Type</p>
            <p className="text-white font-medium">{formatAssetType(assetData.assetType) || "Not provided"}</p>
          </div>
          
          <div className="md:col-span-2">
            <p className="text-white/60 text-sm">Description</p>
            <p className="text-white">{assetData.description || "Not provided"}</p>
          </div>
          
          <div>
            <p className="text-white/60 text-sm">Expected Value</p>
            <p className="text-white font-medium">{assetData.expectedValue || "Not provided"}</p>
          </div>
          
          <div>
            <p className="text-white/60 text-sm">Risk Level</p>
            <p className="text-white font-medium">{formatRiskLevel(assetData.riskLevel) || "Not provided"}</p>
          </div>
          
          <div className="md:col-span-2">
            <p className="text-white/60 text-sm">Liquidity Requirements</p>
            <p className="text-white font-medium">{formatLiquidityNeeds(assetData.liquidityNeeds) || "Not provided"}</p>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 border border-white/10 rounded-lg">
        <h3 className="text-xl font-medium text-white mb-4 flex items-center">
          <FileText className="w-5 h-5 text-kamui-teal mr-2" />
          Documentation Status
        </h3>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Supporting Documents</p>
            <p className="text-white/60 text-sm">Legal documents, valuation reports, photos</p>
          </div>
          
          <div className="flex items-center gap-2 text-kamui-accent">
            <Check className="w-5 h-5" />
            <span>Ready for Review</span>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 border border-white/10 rounded-lg">
        <h3 className="text-xl font-medium text-white mb-4 flex items-center">
          <ShieldCheck className="w-5 h-5 text-kamui-purple mr-2" />
          Next Steps
        </h3>
        
        <ul className="space-y-3 text-white">
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs mt-0.5">1</div>
            <p>Upon submission, our team will begin the due diligence process</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs mt-0.5">2</div>
            <p>You'll receive updates throughout the review via email and dashboard notifications</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs mt-0.5">3</div>
            <p>If approved, your asset will proceed to tokenization and market-making phase</p>
          </li>
        </ul>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          className="glass-button text-white/80 hover-scale group"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Form</span>
        </Button>
        
        <Button 
          className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale group"
          onClick={onSubmit}
        >
          <span>Submit Asset</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default AssetReview;
