
import React, { useState } from 'react';
import { LineChart, ArrowRight, Settings, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GovernanceFlow: React.FC = () => {
  const [activeTab, setActiveTab] = useState('token-holders');

  return (
    <section className="py-24 relative bg-gradient-to-b from-black/10 to-transparent" id="governance-flows">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
            Governance <span className="text-gradient">Flows</span>
          </h2>
          <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Decentralized governance processes and decision-making
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="token-holders" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/5 backdrop-blur-sm">
                <TabsTrigger 
                  value="token-holders" 
                  className={activeTab === 'token-holders' ? 'text-kamui-accent' : 'text-white/70'}
                >
                  Token Holders
                </TabsTrigger>
                <TabsTrigger 
                  value="protocol-upgrades" 
                  className={activeTab === 'protocol-upgrades' ? 'text-kamui-teal' : 'text-white/70'}
                >
                  Protocol Upgrades
                </TabsTrigger>
                <TabsTrigger 
                  value="treasury-management" 
                  className={activeTab === 'treasury-management' ? 'text-kamui-purple' : 'text-white/70'}
                >
                  Treasury Management
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="token-holders" className="animate-fade-in">
              <div className="glass-card p-8 neon-border border-kamui-accent/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-accent/30 to-kamui-teal/30 flex items-center justify-center">
                    <Users className="h-6 w-6 text-kamui-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Token Holder Governance</h3>
                    <p className="text-white/60">Democratic participation in protocol decisions</p>
                  </div>
                </div>
                
                <div className="space-y-6 mt-8">
                  <div className="relative">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-kamui-accent/20 flex items-center justify-center text-kamui-accent font-semibold">1</div>
                        <div className="h-full w-0.5 bg-white/10 mt-2"></div>
                      </div>
                      <div className="glass-card p-4 flex-1">
                        <h4 className="font-medium text-white mb-2">Proposal Creation</h4>
                        <p className="text-white/70 text-sm mb-3">Token holders can propose changes with sufficient stake</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Minimum token threshold for proposal submission</p>
                          <p>• Standardized proposal template with technical details</p>
                          <p>• On-chain validation of proposal structure</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-kamui-accent/20 flex items-center justify-center text-kamui-accent font-semibold">2</div>
                        <div className="h-full w-0.5 bg-white/10 mt-2"></div>
                      </div>
                      <div className="glass-card p-4 flex-1">
                        <h4 className="font-medium text-white mb-2">Deliberation Period</h4>
                        <p className="text-white/70 text-sm mb-3">Community discussion and refinement phase</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• 7-day discussion period in dedicated forum</p>
                          <p>• Technical review from core contributors</p>
                          <p>• Economic impact assessment with simulation data</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-kamui-accent/20 flex items-center justify-center text-kamui-accent font-semibold">3</div>
                      </div>
                      <div className="glass-card p-4 flex-1">
                        <h4 className="font-medium text-white mb-2">Voting and Execution</h4>
                        <p className="text-white/70 text-sm mb-3">On-chain voting with time-lock execution</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• 5-day voting period with quadratic weighting</p>
                          <p>• Minimum quorum of 10% total token supply</p>
                          <p>• 48-hour time-lock period before implementation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="protocol-upgrades" className="animate-fade-in">
              <div className="glass-card p-8 neon-border border-kamui-teal/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-teal/30 to-kamui-purple/30 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-kamui-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Protocol Upgrade Process</h3>
                    <p className="text-white/60">Systematic approach to protocol enhancements</p>
                  </div>
                </div>
                
                <div className="space-y-6 mt-8">
                  <div className="relative">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-kamui-teal/20 flex items-center justify-center text-kamui-teal font-semibold">1</div>
                        <div className="h-full w-0.5 bg-white/10 mt-2"></div>
                      </div>
                      <div className="glass-card p-4 flex-1">
                        <h4 className="font-medium text-white mb-2">Enhancement Proposal</h4>
                        <p className="text-white/70 text-sm mb-3">Standardized format for protocol improvements</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Detailed technical specification documentation</p>
                          <p>• Reference implementation or proof-of-concept</p>
                          <p>• Security considerations and risk assessment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-kamui-teal/20 flex items-center justify-center text-kamui-teal font-semibold">2</div>
                        <div className="h-full w-0.5 bg-white/10 mt-2"></div>
                      </div>
                      <div className="glass-card p-4 flex-1">
                        <h4 className="font-medium text-white mb-2">Testing and Auditing</h4>
                        <p className="text-white/70 text-sm mb-3">Rigorous validation before implementation</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Comprehensive test suite with high coverage</p>
                          <p>• Independent security audit by multiple firms</p>
                          <p>• Testnet deployment with community testing phase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-kamui-teal/20 flex items-center justify-center text-kamui-teal font-semibold">3</div>
                      </div>
                      <div className="glass-card p-4 flex-1">
                        <h4 className="font-medium text-white mb-2">Phased Deployment</h4>
                        <p className="text-white/70 text-sm mb-3">Controlled rollout to minimize disruption</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Feature flagging for gradual activation</p>
                          <p>• Canary deployment to subset of users</p>
                          <p>• Emergency rollback procedures if issues arise</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="treasury-management" className="animate-fade-in">
              <div className="glass-card p-8 neon-border border-kamui-purple/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-purple/30 to-kamui-accent/30 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-kamui-purple" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Treasury Management Framework</h3>
                    <p className="text-white/60">Strategic management of protocol assets</p>
                  </div>
                </div>
                
                <div className="space-y-6 mt-8">
                  <div className="relative">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-kamui-purple/20 flex items-center justify-center text-kamui-purple font-semibold">1</div>
                        <div className="h-full w-0.5 bg-white/10 mt-2"></div>
                      </div>
                      <div className="glass-card p-4 flex-1">
                        <h4 className="font-medium text-white mb-2">Asset Allocation Strategy</h4>
                        <p className="text-white/70 text-sm mb-3">Diversified treasury management</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• 40% stablecoins for operational runway</p>
                          <p>• 30% protocol-owned liquidity in key pairs</p>
                          <p>• 30% strategic investments in ecosystem projects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-kamui-purple/20 flex items-center justify-center text-kamui-purple font-semibold">2</div>
                        <div className="h-full w-0.5 bg-white/10 mt-2"></div>
                      </div>
                      <div className="glass-card p-4 flex-1">
                        <h4 className="font-medium text-white mb-2">Expenditure Framework</h4>
                        <p className="text-white/70 text-sm mb-3">Transparent budget management</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Quarterly budget approval by governance</p>
                          <p>• Multi-signature requirement for large transactions</p>
                          <p>• Real-time transparency dashboard for spending</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-kamui-purple/20 flex items-center justify-center text-kamui-purple font-semibold">3</div>
                      </div>
                      <div className="glass-card p-4 flex-1">
                        <h4 className="font-medium text-white mb-2">Revenue Streams</h4>
                        <p className="text-white/70 text-sm mb-3">Sustainable protocol economics</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• 0.05% trading fee allocated to treasury</p>
                          <p>• Strategic yield farming of treasury assets</p>
                          <p>• Premium AI strategy licensing for institutions</p>
                        </div>
                      </div>
                    </div>
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

export default GovernanceFlow;
