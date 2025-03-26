
import React, { useState } from 'react';
import { Building, Wallet, LineChart, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UserFlow: React.FC = () => {
  const [activeTab, setActiveTab] = useState('asset-providers');

  return (
    <section className="py-24 relative bg-gradient-to-b from-black/10 to-transparent" id="user-flows">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 animate-fade-in">
            User <span className="text-gradient">Flows</span>
          </h2>
          <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Detailed user journeys across our core user segments
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="asset-providers" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/5 backdrop-blur-sm">
                <TabsTrigger 
                  value="asset-providers" 
                  className={activeTab === 'asset-providers' ? 'text-kamui-accent' : 'text-white/70'}
                >
                  Asset Providers
                </TabsTrigger>
                <TabsTrigger 
                  value="liquidity-providers" 
                  className={activeTab === 'liquidity-providers' ? 'text-kamui-teal' : 'text-white/70'}
                >
                  Liquidity Providers
                </TabsTrigger>
                <TabsTrigger 
                  value="traders" 
                  className={activeTab === 'traders' ? 'text-kamui-purple' : 'text-white/70'}
                >
                  Traders & Bot Creators
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="asset-providers" className="animate-fade-in">
              <div className="glass-card p-8 neon-border border-kamui-accent/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-accent/30 to-kamui-teal/30 flex items-center justify-center">
                    <Building className="h-6 w-6 text-kamui-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Asset Provider Journey</h3>
                    <p className="text-white/60">Institutions or managers seeking liquidity for tokenized real assets</p>
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
                        <h4 className="font-medium text-white mb-2">Asset Onboarding</h4>
                        <p className="text-white/70 text-sm mb-3">Manager submits asset proposal to Kamui Finance</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Sector-specific data analysis (e.g., occupancy rates for real estate)</p>
                          <p>• Risk assessment (credit history, cash flow, repayment capability)</p>
                          <p>• Asset valuation, regulatory, and smart-contract assessments</p>
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
                        <h4 className="font-medium text-white mb-2">Monitoring and Management</h4>
                        <p className="text-white/70 text-sm mb-3">Asset becomes tradable in Kamui AI DEX (e.g., ASSET1/USDC pair)</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Provider monitors liquidity, spreads, and trading volumes</p>
                          <p>• Continuous market-making managed by Master AI Agent</p>
                          <p>• Real-time analytics dashboard for asset performance</p>
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
                        <h4 className="font-medium text-white mb-2">Asset Expiry and Liquidation</h4>
                        <p className="text-white/70 text-sm mb-3">Continuous trading based on asset expiry</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Real estate: indefinite market-making, strategic selling</p>
                          <p>• Fixed-income/bonds: trading around maturity dates</p>
                          <p>• AI-driven spread capture based on forward-looking assessments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="liquidity-providers" className="animate-fade-in">
              <div className="glass-card p-8 neon-border border-kamui-teal/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-teal/30 to-kamui-purple/30 flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-kamui-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Liquidity Provider Journey</h3>
                    <p className="text-white/60">Investors depositing funds to earn yield from market-making activities</p>
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
                        <h4 className="font-medium text-white mb-2">Account Creation and Fund Deposits</h4>
                        <p className="text-white/70 text-sm mb-3">Complete KYC/AML verification and connect wallet</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Complete streamlined KYC/AML process</p>
                          <p>• Connect wallet and deposit funds (e.g., USDC) into liquidity vaults</p>
                          <p>• Set preferred risk parameters and allocation preferences</p>
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
                        <h4 className="font-medium text-white mb-2">Capital Deployment and Monitoring</h4>
                        <p className="text-white/70 text-sm mb-3">Funds are automatically deployed into AI-managed LP pools</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Real-time analytics updates tracking market-making profits</p>
                          <p>• APY and risk metrics constantly monitored</p>
                          <p>• LP manages capital allocations via intuitive interface</p>
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
                        <h4 className="font-medium text-white mb-2">Returns Management</h4>
                        <p className="text-white/70 text-sm mb-3">Monitor returns via clear, comprehensive dashboards</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• LPs reinvest earnings or withdraw profits anytime</p>
                          <p>• Adjust liquidity allocation between different RWA vaults</p>
                          <p>• Receive proactive notifications about market events</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="traders" className="animate-fade-in">
              <div className="glass-card p-8 neon-border border-kamui-purple/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kamui-purple/30 to-kamui-accent/30 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-kamui-purple" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Trader & Bot Creator Journey</h3>
                    <p className="text-white/60">Quant developers and HFT traders building sophisticated AI strategies</p>
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
                        <h4 className="font-medium text-white mb-2">Trading Interface Access & Strategy Implementation</h4>
                        <p className="text-white/70 text-sm mb-3">Connect wallet and access specialized trading interface</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Choose available asset pairs and liquidity pools</p>
                          <p>• Deploy custom AI trading strategies</p>
                          <p>• Copy strategies from the Strategy Marketplace</p>
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
                        <h4 className="font-medium text-white mb-2">Active Trading & HFT</h4>
                        <p className="text-white/70 text-sm mb-3">Execute trades with optimized AI-driven spreads</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Engage in HFT activities with real-time AI support</p>
                          <p>• Access market intelligence for informed decisions</p>
                          <p>• Generate organic trading volume and optimize profits</p>
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
                        <h4 className="font-medium text-white mb-2">Performance Analytics & Optimization</h4>
                        <p className="text-white/70 text-sm mb-3">Access comprehensive analytics and trading metrics</p>
                        <div className="bg-white/5 p-3 rounded-lg text-sm text-white/80">
                          <p>• Review detailed trade history and market depth</p>
                          <p>• Receive predictive analytics for trading opportunities</p>
                          <p>• Contribute feedback to Master AI for strategy refinement</p>
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

export default UserFlow;
