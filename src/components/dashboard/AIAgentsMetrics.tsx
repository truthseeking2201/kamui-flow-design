
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Zap, Shield, LineChart, Activity, Clock, Database } from 'lucide-react';
import { ResponsiveContainer, LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

const AIAgentsMetrics: React.FC = () => {
  const performanceData = [
    { date: 'Jan', master: 32, intelligence: 24, user: 18 },
    { date: 'Feb', master: 35, intelligence: 27, user: 20 },
    { date: 'Mar', master: 33, intelligence: 25, user: 19 },
    { date: 'Apr', master: 36, intelligence: 29, user: 22 },
    { date: 'May', master: 38, intelligence: 31, user: 25 },
    { date: 'Jun', master: 40, intelligence: 33, user: 28 },
    { date: 'Jul', master: 42, intelligence: 35, user: 30 },
  ];

  const chartConfig = {
    master: {
      label: "Master AI",
      theme: {
        light: "#7DF9FF",
        dark: "#7DF9FF"
      }
    },
    intelligence: {
      label: "Intelligence AI",
      theme: {
        light: "#9b87f5",
        dark: "#9b87f5"
      }
    },
    user: {
      label: "User AI",
      theme: {
        light: "#F97316",
        dark: "#F97316"
      }
    }
  };

  return (
    <Card className="bg-gradient-card border-white/5">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-kamui-accent" />
            AI Agent Performance Metrics
          </CardTitle>
          <CardDescription>Comprehensive analytics for the three-tier AI hierarchy</CardDescription>
        </div>
        <Tabs defaultValue="performance">
          <TabsList className="bg-white/5">
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      
      <CardContent>
        <TabsContent value="performance">
          <div className="glass-card neon-border border-kamui-accent/30 p-6 mb-6">
            <h3 className="font-medium text-lg text-white mb-4 flex items-center gap-2">
              <LineChart className="w-5 h-5 text-kamui-accent" />
              AI Hierarchy Performance (APY %)
            </h3>
            <div className="h-[350px] w-full">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <ReLineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis 
                      dataKey="date" 
                      stroke="rgba(255,255,255,0.5)" 
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.5)"
                      domain={[0, 50]}
                      ticks={[0, 10, 20, 30, 40, 50]}
                    />
                    <Tooltip 
                      content={<ChartTooltipContent />}
                      contentStyle={{ 
                        backgroundColor: 'rgba(13, 17, 23, 0.8)', 
                        borderColor: '#7DF9FF', 
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="master" 
                      name="master"
                      stroke="#7DF9FF" 
                      strokeWidth={2}
                      dot={{ r: 4, fill: '#0D1117', strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: '#7DF9FF' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="intelligence" 
                      name="intelligence"
                      stroke="#9b87f5" 
                      strokeWidth={2}
                      dot={{ r: 4, fill: '#0D1117', strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: '#9b87f5' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="user" 
                      name="user"
                      stroke="#F97316" 
                      strokeWidth={2}
                      dot={{ r: 4, fill: '#0D1117', strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: '#F97316' }}
                    />
                  </ReLineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-kamui-accent/20 flex items-center justify-center">
                <Brain className="h-5 w-5 text-kamui-accent" />
              </div>
              <div>
                <p className="text-white/60 text-xs mb-1">Master AI</p>
                <div className="flex items-center">
                  <p className="text-xl font-semibold text-kamui-accent">42% APY</p>
                  <Zap className="h-4 w-4 text-kamui-accent ml-1" />
                </div>
              </div>
            </div>
            
            <div className="glass-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-kamui-purple/20 flex items-center justify-center">
                <Database className="h-5 w-5 text-kamui-purple" />
              </div>
              <div>
                <p className="text-white/60 text-xs mb-1">Intelligence AI</p>
                <div className="flex items-center">
                  <p className="text-xl font-semibold text-kamui-purple">35% APY</p>
                  <Shield className="h-4 w-4 text-kamui-purple ml-1" />
                </div>
              </div>
            </div>
            
            <div className="glass-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                <Activity className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="text-white/60 text-xs mb-1">User AI</p>
                <div className="flex items-center">
                  <p className="text-xl font-semibold text-amber-400">30% APY</p>
                  <LineChart className="h-4 w-4 text-amber-400 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </CardContent>
    </Card>
  );
};

export default AIAgentsMetrics;
