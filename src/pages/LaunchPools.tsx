import React from 'react';
import Layout from '../components/Layout';
import LaunchPoolList from '../components/launchpool/LaunchPoolList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Landmark, LayersIcon, TicketPercent, TrendingUp } from 'lucide-react';

const LaunchPools: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24">
        <div className="container mx-auto px-6 my-12">
          <h1 className="font-display font-bold text-3xl mb-8">
            RWA <span className="text-gradient">Launch Pools</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Card className="bg-gradient-card border-white/5">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-purple/20 flex items-center justify-center mb-2">
                  <Building className="h-6 w-6 text-kamui-purple" />
                </div>
                <CardTitle className="text-xl">Real Estate</CardTitle>
                <CardDescription>Premium property assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white/70 text-sm">Pool Count</p>
                    <p className="text-lg font-medium text-white">2</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Total Value</p>
                    <p className="text-lg font-medium text-white">$27M</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-white/5">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kamui-accent/20 to-amber-400/20 flex items-center justify-center mb-2">
                  <Landmark className="h-6 w-6 text-amber-400" />
                </div>
                <CardTitle className="text-xl">Precious Metals</CardTitle>
                <CardDescription>Gold, silver, platinum assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white/70 text-sm">Pool Count</p>
                    <p className="text-lg font-medium text-white">1</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Total Value</p>
                    <p className="text-lg font-medium text-white">$8M</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-white/5">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-teal/20 flex items-center justify-center mb-2">
                  <TicketPercent className="h-6 w-6 text-kamui-teal" />
                </div>
                <CardTitle className="text-xl">Fixed Income</CardTitle>
                <CardDescription>Bonds and structured products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white/70 text-sm">Pool Count</p>
                    <p className="text-lg font-medium text-white">1</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Total Value</p>
                    <p className="text-lg font-medium text-white">$20M</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-white/5">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-accent/20 flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-kamui-accent" />
                </div>
                <CardTitle className="text-xl">Equities</CardTitle>
                <CardDescription>Stocks and equity funds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white/70 text-sm">Pool Count</p>
                    <p className="text-lg font-medium text-white">0</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Total Value</p>
                    <p className="text-lg font-medium text-white">$0</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-10">
            <div className="glass-card p-6 border border-white/10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kamui-accent to-kamui-teal flex items-center justify-center">
                  <LayersIcon className="h-8 w-8 text-kamui-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-white">How Launch Pools Work</h2>
                  <p className="text-white/70">Participate in tokenized real-world assets through our secure investment platform</p>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-kamui-accent/20 flex items-center justify-center text-kamui-accent font-semibold mb-2 mx-auto">1</div>
                  <p className="text-white/90 text-sm">Select Pool</p>
                </div>
                <div className="h-0.5 w-8 bg-gradient-to-r from-kamui-accent to-white/10"></div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-kamui-teal/20 flex items-center justify-center text-kamui-teal font-semibold mb-2 mx-auto">2</div>
                  <p className="text-white/90 text-sm">Invest</p>
                </div>
                <div className="h-0.5 w-8 bg-gradient-to-r from-kamui-teal to-white/10"></div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-kamui-purple/20 flex items-center justify-center text-kamui-purple font-semibold mb-2 mx-auto">3</div>
                  <p className="text-white/90 text-sm">Earn Returns</p>
                </div>
              </div>
            </div>
          </div>
          
          <LaunchPoolList />
        </div>
      </div>
    </Layout>
  );
};

export default LaunchPools;
