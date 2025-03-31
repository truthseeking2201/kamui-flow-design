
import React, { useState } from 'react';
import { Building, Wallet, LineChart, Brain, Settings, Shield } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const KamuiFlows: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <section className="py-20 relative bg-gradient-to-b from-black/10 to-transparent" id="kamui-flows">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
            Kamui AI <span className="text-gradient">System Flows</span>
          </h2>
          <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Comprehensive ecosystem flow visualization
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="users" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-6">
              <TabsList className="bg-white/5 backdrop-blur-sm">
                <TabsTrigger 
                  value="users" 
                  className={activeTab === 'users' ? 'text-kamui-accent' : 'text-white/70'}
                >
                  Users
                </TabsTrigger>
                <TabsTrigger 
                  value="development" 
                  className={activeTab === 'development' ? 'text-kamui-teal' : 'text-white/70'}
                >
                  Development
                </TabsTrigger>
                <TabsTrigger 
                  value="governance" 
                  className={activeTab === 'governance' ? 'text-kamui-purple' : 'text-white/70'}
                >
                  Governance
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Users Tab */}
            <TabsContent value="users" className="animate-fade-in">
              <div className="glass-card p-6 neon-border border-kamui-accent/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-accent/30 to-kamui-teal/30 flex items-center justify-center mb-3">
                      <Building className="h-6 w-6 text-kamui-accent" />
                    </div>
                    <h3 className="font-display font-medium text-lg mb-2">Asset Providers</h3>
                    <p className="text-white/70 text-sm">Institutions seeking liquidity for tokenized real assets</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-teal/30 to-kamui-purple/30 flex items-center justify-center mb-3">
                      <Wallet className="h-6 w-6 text-kamui-teal" />
                    </div>
                    <h3 className="font-display font-medium text-lg mb-2">Liquidity Providers</h3>
                    <p className="text-white/70 text-sm">Investors earning yield from AI market-making activities</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-purple/30 to-kamui-accent/30 flex items-center justify-center mb-3">
                      <LineChart className="h-6 w-6 text-kamui-purple" />
                    </div>
                    <h3 className="font-display font-medium text-lg mb-2">Traders & Bot Creators</h3>
                    <p className="text-white/70 text-sm">Quant developers building AI trading strategies</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Development Tab */}
            <TabsContent value="development" className="animate-fade-in">
              <div className="glass-card p-6 neon-border border-kamui-teal/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-accent/30 to-kamui-teal/30 flex items-center justify-center mb-3">
                      <Brain className="h-6 w-6 text-kamui-accent" />
                    </div>
                    <h3 className="font-display font-medium text-lg mb-2">Core Infrastructure</h3>
                    <p className="text-white/70 text-sm">Hybrid on-chain/off-chain AI orchestration with distributed consensus</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-teal/30 to-kamui-purple/30 flex items-center justify-center mb-3">
                      <Settings className="h-6 w-6 text-kamui-teal" />
                    </div>
                    <h3 className="font-display font-medium text-lg mb-2">Technical Implementation</h3>
                    <p className="text-white/70 text-sm">Advanced AI models with reinforcement learning and privacy preservation</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-purple/30 to-kamui-accent/30 flex items-center justify-center mb-3">
                      <Shield className="h-6 w-6 text-kamui-purple" />
                    </div>
                    <h3 className="font-display font-medium text-lg mb-2">Deployment Strategy</h3>
                    <p className="text-white/70 text-sm">Phased rollout with comprehensive testing, auditing and risk assessment</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Governance Tab */}
            <TabsContent value="governance" className="animate-fade-in">
              <div className="glass-card p-6 neon-border border-kamui-purple/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-8 h-8 rounded-full bg-kamui-accent/20 flex items-center justify-center mb-3 text-kamui-accent font-semibold">1</div>
                    <h3 className="font-display font-medium text-lg mb-2">Token Holder Governance</h3>
                    <p className="text-white/70 text-sm">Democratic participation with proposal creation, deliberation, and on-chain voting</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-8 h-8 rounded-full bg-kamui-teal/20 flex items-center justify-center mb-3 text-kamui-teal font-semibold">2</div>
                    <h3 className="font-display font-medium text-lg mb-2">Protocol Upgrades</h3>
                    <p className="text-white/70 text-sm">Standardized enhancement proposals with rigorous testing and phased deployment</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-8 h-8 rounded-full bg-kamui-purple/20 flex items-center justify-center mb-3 text-kamui-purple font-semibold">3</div>
                    <h3 className="font-display font-medium text-lg mb-2">Treasury Management</h3>
                    <p className="text-white/70 text-sm">Strategic asset allocation with transparent expenditure framework and sustainable revenue</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default KamuiFlows;
