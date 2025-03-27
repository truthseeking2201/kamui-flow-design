
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PerformanceChartProps {
  period?: 'week' | 'month' | 'year';
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ period = 'month' }) => {
  // Sample data based on period
  const generateData = () => {
    switch (period) {
      case 'week':
        return [
          { date: 'Mon', value: 900 },
          { date: 'Tue', value: 1050 },
          { date: 'Wed', value: 1200 },
          { date: 'Thu', value: 1150 },
          { date: 'Fri', value: 1350 },
          { date: 'Sat', value: 1500 },
          { date: 'Sun', value: 1650 },
        ];
      case 'month':
        return Array.from({ length: 30 }, (_, i) => ({
          date: `${i + 1}`,
          value: 900 + Math.floor(Math.random() * 300) + i * 20,
        }));
      case 'year':
        return [
          { date: 'Jan', value: 900 },
          { date: 'Feb', value: 1200 },
          { date: 'Mar', value: 1100 },
          { date: 'Apr', value: 1350 },
          { date: 'May', value: 1320 },
          { date: 'Jun', value: 1480 },
          { date: 'Jul', value: 1700 },
        ];
      default:
        return [];
    }
  };

  const data = generateData();

  // Chart configuration for shadcn/ui chart
  const chartConfig = {
    performance: {
      label: "Performance",
      theme: {
        light: "#7DF9FF",
        dark: "#7DF9FF"
      }
    }
  };

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">RWA Performance Analytics</h2>
            <p className="text-white/70">All RWA Assets metrics and insights</p>
          </div>
          <Button variant="outline" size="icon" className="glass-button hover-scale">
            <Download className="h-4 w-4 text-kamui-accent" />
          </Button>
        </div>
      
        <div className="glass-card neon-border border-kamui-accent/30 p-5 rounded-xl">
          <Tabs defaultValue="returns" className="w-full">
            <TabsList className="bg-white/5 mb-6">
              <TabsTrigger value="returns">Returns</TabsTrigger>
              <TabsTrigger value="activity">Trading Activity</TabsTrigger>
              <TabsTrigger value="breakdown">RWA Breakdown</TabsTrigger>
            </TabsList>
            
            <div className="h-[350px] mb-6">
              <ChartContainer 
                config={chartConfig} 
                className="h-full w-full"
              >
                <LineChart data={data} margin={{ top: 5, right: 10, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="date" 
                    stroke="rgba(255,255,255,0.5)" 
                    tick={{ fontSize: 12 }}
                    tickCount={period === 'month' ? 10 : undefined}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)"
                    domain={[0, 1800]}
                    ticks={[0, 450, 900, 1350, 1800]}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent 
                        labelKey="date"
                        nameKey="performance" 
                      />
                    }
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="performance"
                    stroke="#7DF9FF" 
                    strokeWidth={2}
                    dot={{ r: 3, fill: '#0D1117', strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: '#7DF9FF' }}
                  />
                </LineChart>
              </ChartContainer>
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
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
