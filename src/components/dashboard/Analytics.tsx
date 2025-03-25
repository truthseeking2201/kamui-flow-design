
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, BarChart3, PieChart, TrendingUp, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Analytics: React.FC = () => {
  return (
    <Card className="bg-gradient-card border-white/5">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Performance Analytics</CardTitle>
          <CardDescription>AI-powered insights and metrics</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Tabs defaultValue="returns">
            <TabsList className="bg-white/5">
              <TabsTrigger value="returns">Returns</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="icon" className="glass-button hover-scale">
            <Download className="h-4 w-4 text-kamui-accent" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <TabsContent value="returns" className="mt-0">
          <div className="h-[350px] flex items-center justify-center glass-card neon-border border-kamui-accent/30 mb-4">
            <div className="text-center">
              <LineChart className="h-10 w-10 text-kamui-accent mx-auto mb-3 opacity-50" />
              <p className="text-white/60 mb-2">Returns Over Time</p>
              <p className="text-xs text-white/40">(Visualization will be implemented here)</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Daily", value: "+0.8%", trend: "up" },
              { label: "Weekly", value: "+4.2%", trend: "up" },
              { label: "Monthly", value: "+16.7%", trend: "up" },
              { label: "YTD", value: "+38.2%", trend: "up" }
            ].map((metric, index) => (
              <div key={index} className="glass-card p-3 text-center">
                <p className="text-white/60 text-xs mb-1">{metric.label}</p>
                <div className="flex items-center justify-center">
                  <p className="text-lg font-semibold text-green-400">{metric.value}</p>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-400 ml-1" />
                  ) : (
                    <TrendingUp className="h-4 w-4 text-red-400 ml-1 transform rotate-180" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="activity" className="mt-0">
          <div className="h-[350px] flex items-center justify-center glass-card neon-border border-kamui-accent/30">
            <div className="text-center">
              <BarChart3 className="h-10 w-10 text-kamui-purple mx-auto mb-3 opacity-50" />
              <p className="text-white/60 mb-2">Trading Activity</p>
              <p className="text-xs text-white/40">(Visualization will be implemented here)</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="comparison" className="mt-0">
          <div className="h-[350px] flex items-center justify-center glass-card neon-border border-kamui-accent/30">
            <div className="text-center">
              <PieChart className="h-10 w-10 text-kamui-teal mx-auto mb-3 opacity-50" />
              <p className="text-white/60 mb-2">Strategy Comparison</p>
              <p className="text-xs text-white/40">(Visualization will be implemented here)</p>
            </div>
          </div>
        </TabsContent>
      </CardContent>
    </Card>
  );
};

export default Analytics;
