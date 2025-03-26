
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, LineChart, ChevronRight, Check, Zap, Shield, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DeployStrategy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [allocationAmount, setAllocationAmount] = useState(10000);
  const [riskLevel, setRiskLevel] = useState("default");
  const [deploying, setDeploying] = useState(false);
  
  // Mock strategy data - in a real app, this would be fetched from an API
  const strategy = {
    id: id || "1",
    name: "RWA Momentum Alpha",
    description: "AI-driven momentum strategy optimized for market-making in real estate tokens",
    creator: "Kamui AI Team",
    apy: "38-42%",
    risk: "Medium",
    category: "real-estate",
    status: "Verified",
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/dashboard');
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleDeploy = () => {
    setDeploying(true);
    
    // Simulate deployment process
    setTimeout(() => {
      setDeploying(false);
      setCurrentStep(4); // Move to success step
      
      toast({
        title: "Strategy Successfully Deployed",
        description: `${strategy.name} is now active in your portfolio`,
      });
    }, 3000);
  };

  const handleFinish = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group p-0"
              onClick={handleBack}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </Button>
          </div>
          <h1 className="font-display font-bold text-2xl md:text-3xl mb-2">
            Deploy <span className="text-gradient">{strategy.name}</span>
          </h1>
          <p className="text-white/70">Configure and activate this strategy in your portfolio</p>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="flex justify-between mb-2">
          <span className="text-white/70 text-sm">Configuration</span>
          <span className="text-white/70 text-sm">Review</span>
          <span className="text-white/70 text-sm">Deployment</span>
          <span className="text-white/70 text-sm">Success</span>
        </div>
        <Progress value={currentStep * 25} className="h-2" />
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Step 1: Configuration */}
        {currentStep === 1 && (
          <Card className="bg-gradient-card border-white/5 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-kamui-accent" />
                Configure Deployment
              </CardTitle>
              <CardDescription>Set up how this strategy will operate in your portfolio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-medium text-white mb-4">Capital Allocation</h3>
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Allocation Amount ($)</span>
                    <span className="text-kamui-accent font-medium">${allocationAmount.toLocaleString()}</span>
                  </div>
                  <Slider
                    defaultValue={[allocationAmount]}
                    max={100000}
                    step={1000}
                    onValueChange={(value) => setAllocationAmount(value[0])}
                  />
                  <div className="flex justify-between text-xs text-white/50 mt-1">
                    <span>$1,000</span>
                    <span>$100,000</span>
                  </div>
                </div>
                <p className="text-white/70 text-sm">
                  This is the amount of capital that will be allocated to this strategy from your portfolio.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-medium text-white mb-4">Risk Profile</h3>
                <div className="mb-4">
                  <label className="text-white/70 text-sm block mb-2">Risk Level Adjustment</label>
                  <Select 
                    value={riskLevel}
                    onValueChange={setRiskLevel}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select risk level" />
                    </SelectTrigger>
                    <SelectContent className="bg-kamui-dark border-white/10">
                      <SelectItem value="default">Default (Medium)</SelectItem>
                      <SelectItem value="conservative">More Conservative</SelectItem>
                      <SelectItem value="aggressive">More Aggressive</SelectItem>
                      <SelectItem value="custom">Custom Settings</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-white/70 text-sm">
                  Adjust the risk profile to match your personal risk tolerance. The default setting uses the strategy's recommended configuration.
                </p>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button 
                  onClick={handleNext}
                  className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark"
                >
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Step 2: Review */}
        {currentStep === 2 && (
          <Card className="bg-gradient-card border-white/5 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-kamui-teal" />
                Review Strategy
              </CardTitle>
              <CardDescription>Confirm your deployment configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <h3 className="font-medium text-white mb-3">Strategy Details</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <dt className="text-white/70">Strategy Name</dt>
                      <dd className="text-white font-medium">{strategy.name}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <dt className="text-white/70">Creator</dt>
                      <dd className="text-white">{strategy.creator}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <dt className="text-white/70">Category</dt>
                      <dd className="text-white capitalize">{strategy.category.replace('-', ' ')}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <dt className="text-white/70">Target APY</dt>
                      <dd className="text-kamui-accent">{strategy.apy}</dd>
                    </div>
                    <div className="flex justify-between py-2">
                      <dt className="text-white/70">Risk Level</dt>
                      <dd className="text-white">{strategy.risk}</dd>
                    </div>
                  </dl>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-medium text-white mb-3">Your Configuration</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <dt className="text-white/70">Capital Allocation</dt>
                      <dd className="text-kamui-accent font-medium">${allocationAmount.toLocaleString()}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <dt className="text-white/70">Risk Profile</dt>
                      <dd className="text-white capitalize">
                        {riskLevel === "default" ? "Default" : 
                         riskLevel === "conservative" ? "Conservative" : 
                         riskLevel === "aggressive" ? "Aggressive" : "Custom"}
                      </dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <dt className="text-white/70">Auto-optimization</dt>
                      <dd className="text-kamui-teal">Enabled</dd>
                    </div>
                    <div className="flex justify-between py-2">
                      <dt className="text-white/70">Deployment Date</dt>
                      <dd className="text-white">{new Date().toLocaleDateString()}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-kamui-purple" />
                  Risk Disclaimer
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  By deploying this strategy, you acknowledge that:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                    </div>
                    <span className="text-white/80">Past performance does not guarantee future results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                    </div>
                    <span className="text-white/80">Market conditions may affect the strategy's performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                    </div>
                    <span className="text-white/80">You can modify or withdraw from this strategy at any time</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button 
                  variant="outline"
                  onClick={handleBack}
                  className="glass-button text-white/70"
                >
                  Back
                </Button>
                <Button 
                  onClick={handleNext}
                  className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark"
                >
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Step 3: Deploy */}
        {currentStep === 3 && (
          <Card className="bg-gradient-card border-white/5 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-kamui-accent" />
                Deploy Strategy
              </CardTitle>
              <CardDescription>Activate this strategy in your portfolio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="glass-card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-teal/20 flex items-center justify-center mx-auto mb-6">
                  <LineChart className="h-10 w-10 text-kamui-accent" />
                </div>
                <h3 className="font-medium text-white text-xl mb-3">{strategy.name}</h3>
                <p className="text-white/70 text-sm mb-6">
                  You're about to deploy this strategy with ${allocationAmount.toLocaleString()} of capital.
                </p>
                
                <div className="max-w-xs mx-auto bg-white/5 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 text-sm">Capital:</span>
                    <span className="text-white font-medium">${allocationAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 text-sm">Target APY:</span>
                    <span className="text-kamui-accent">{strategy.apy}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Risk Profile:</span>
                    <span className="text-white capitalize">
                      {riskLevel === "default" ? strategy.risk : 
                       riskLevel === "conservative" ? "Conservative" : 
                       riskLevel === "aggressive" ? "Aggressive" : "Custom"}
                    </span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleDeploy}
                  className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark"
                  disabled={deploying}
                >
                  {deploying ? (
                    <>
                      <div className="h-4 w-4 mr-2 animate-spin rounded-full border-b-2 border-current"></div>
                      Deploying...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      Deploy Strategy
                    </>
                  )}
                </Button>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button 
                  variant="outline"
                  onClick={handleBack}
                  className="glass-button text-white/70"
                  disabled={deploying}
                >
                  Back
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Step 4: Success */}
        {currentStep === 4 && (
          <Card className="bg-gradient-card border-white/5 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-kamui-teal" />
                Deployment Successful
              </CardTitle>
              <CardDescription>Your strategy is now active</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="glass-card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-kamui-teal/20 to-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-kamui-teal" />
                </div>
                <h3 className="font-medium text-white text-xl mb-3">Strategy Deployed!</h3>
                <p className="text-white/70 text-sm mb-6">
                  {strategy.name} has been successfully deployed and is now active in your portfolio.
                </p>
                
                <div className="max-w-xs mx-auto bg-white/5 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 text-sm">Status:</span>
                    <span className="text-kamui-teal font-medium">Active</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 text-sm">Deployment ID:</span>
                    <span className="text-white">{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Activation Time:</span>
                    <span className="text-white">{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button 
                    variant="outline"
                    className="glass-button text-kamui-accent"
                    onClick={() => navigate(`/strategy/${strategy.id}`)}
                  >
                    <LineChart className="mr-2 h-4 w-4" />
                    View Strategy Details
                  </Button>
                  
                  <Button 
                    onClick={handleFinish}
                    className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark"
                  >
                    Return to Dashboard
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DeployStrategy;
