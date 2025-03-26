
import React, { useState } from 'react';
import { LineChart, ArrowRight, Database, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Building from './Building';

const DevelopmentFlow: React.FC = () => {
  const [activeTab, setActiveTab] = useState('architecture');

  return (
    <section className="py-24 relative bg-gradient-to-b from-black/10 to-transparent" id="development-flows">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
            Development <span className="text-gradient">Flows</span>
          </h2>
          <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Complete system architecture and development roadmap
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="architecture" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/5 backdrop-blur-sm">
                <TabsTrigger 
                  value="architecture" 
                  className={activeTab === 'architecture' ? 'text-kamui-accent' : 'text-white/70'}
                >
                  System Architecture
                </TabsTrigger>
                <TabsTrigger 
                  value="technical" 
                  className={activeTab === 'technical' ? 'text-kamui-teal' : 'text-white/70'}
                >
                  Technical Implementation
                </TabsTrigger>
                <TabsTrigger 
                  value="deployment" 
                  className={activeTab === 'deployment' ? 'text-kamui-purple' : 'text-white/70'}
                >
                  Deployment Strategy
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="architecture" className="animate-fade-in">
              <div className="glass-card p-8 neon-border border-kamui-accent/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-accent/30 to-kamui-teal/30 flex items-center justify-center">
                    <Building className="h-6 w-6 text-kamui-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">System Architecture Overview</h3>
                    <p className="text-white/60">Core components and system design principles</p>
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
                        <h4 className="font-medium text-white mb-2">Core Infrastructure</h4>
                        <p className="text-white/70 text-sm mb-3">Distributed system architecture with redundancy</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Hybrid on-chain/off-chain AI orchestration</p>
                          <p>• Distributed consensus mechanism for AI decisions</p>
                          <p>• Multi-chain integration points for cross-chain liquidity</p>
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
                        <h4 className="font-medium text-white mb-2">Data Flow Management</h4>
                        <p className="text-white/70 text-sm mb-3">Real-time data processing and analytics pipeline</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Event-driven architecture for real-time processing</p>
                          <p>• Time-series database for historical analysis</p>
                          <p>• Privacy-preserving data management with ZKPs</p>
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
                        <h4 className="font-medium text-white mb-2">Integration Framework</h4>
                        <p className="text-white/70 text-sm mb-3">Modular design for seamless third-party integration</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Open API design with standardized interfaces</p>
                          <p>• Adapters for various blockchain protocols</p>
                          <p>• Extensible AI agent framework for custom strategies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="technical" className="animate-fade-in">
              <div className="glass-card p-8 neon-border border-kamui-teal/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-teal/30 to-kamui-purple/30 flex items-center justify-center">
                    <Database className="h-6 w-6 text-kamui-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Technical Implementation</h3>
                    <p className="text-white/60">Advanced implementation details for the Kamui AI system</p>
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
                        <h4 className="font-medium text-white mb-2">AI Model Architecture</h4>
                        <p className="text-white/70 text-sm mb-3">Multi-layered neural network with specialized components</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Transformer-based foundation model for market analysis</p>
                          <p>• Reinforcement learning for strategy optimization</p>
                          <p>• Federated learning for privacy-preserving model updates</p>
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
                        <h4 className="font-medium text-white mb-2">Smart Contract Infrastructure</h4>
                        <p className="text-white/70 text-sm mb-3">Optimized on-chain components with security measures</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Modular contract architecture with upgradability</p>
                          <p>• Gas optimization techniques for cost efficiency</p>
                          <p>• Multi-signature governance for critical functions</p>
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
                        <h4 className="font-medium text-white mb-2">Backend Services</h4>
                        <p className="text-white/70 text-sm mb-3">Scalable microservices architecture</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Kubernetes-based orchestration for high availability</p>
                          <p>• Event sourcing pattern for data consistency</p>
                          <p>• Real-time websocket API for trading interfaces</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="deployment" className="animate-fade-in">
              <div className="glass-card p-8 neon-border border-kamui-purple/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-purple/30 to-kamui-accent/30 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-kamui-purple" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Deployment Strategy</h3>
                    <p className="text-white/60">Phased rollout plan with security considerations</p>
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
                        <h4 className="font-medium text-white mb-2">Testing & Audit Phase</h4>
                        <p className="text-white/70 text-sm mb-3">Comprehensive testing strategy before mainnet</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Multiple security audits from top-tier firms</p>
                          <p>• Formal verification of critical smart contracts</p>
                          <p>• Economic stress testing with agent-based simulations</p>
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
                        <h4 className="font-medium text-white mb-2">Rollout Strategy</h4>
                        <p className="text-white/70 text-sm mb-3">Controlled deployment with increasing scale</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Testnet phase with selected partners and assets</p>
                          <p>• Initial mainnet launch with asset whitelist</p>
                          <p>• Progressive governance decentralization over time</p>
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
                        <h4 className="font-medium text-white mb-2">Scaling & Evolution</h4>
                        <p className="text-white/70 text-sm mb-3">Long-term roadmap for system growth</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Layer 2 expansion for reduced gas costs</p>
                          <p>• Cross-chain interoperability enhancements</p>
                          <p>• Advanced AI governance mechanisms via DAO</p>
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

export default DevelopmentFlow;
