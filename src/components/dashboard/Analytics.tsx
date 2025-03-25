
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, BarChart3, PieChart, TrendingUp, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart as ReBarChart, Bar, PieChart as RePieChart, Pie, Cell } from 'recharts';

const Analytics: React.FC = () => {
  // Sample data for charts
  const returnsData = [
    { date: 'Jan', value: 1000 },
    { date: 'Feb', value: 1200 },
    { date: 'Mar', value: 1100 },
    { date: 'Apr', value: 1400 },
    { date: 'May', value: 1300 },
    { date: 'Jun', value: 1500 },
    { date: 'Jul', value: 1700 },
  ];

  const activityData = [
    { date: 'Mon', trades: 12 },
    { date: 'Tue', trades: 19 },
    { date: 'Wed', trades: 15 },
    { date: 'Thu', trades: 22 },
    { date: 'Fri', trades: 28 },
    { date: 'Sat', trades: 10 },
    { date: 'Sun', trades: 8 },
  ];

  const comparisonData = [
    { name: 'Momentum', value: 42 },
    { name: 'Value', value: 28 },
    { name: 'Growth', value: 30 },
  ];
  
  const COLORS = ['#7DF9FF', '#9b87f5', '#6E59A5', '#7E69AB'];

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
          
            <CardContent>
              <TabsContent value="returns">
                <div className="h-[350px] glass-card neon-border border-kamui-accent/30 mb-4 p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReLineChart data={returnsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(13, 17, 23, 0.8)', 
                          borderColor: '#7DF9FF', 
                          borderRadius: '8px',
                          color: 'white'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#7DF9FF" 
                        strokeWidth={2}
                        dot={{ r: 4, fill: '#0D1117', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#7DF9FF' }}
                      />
                    </ReLineChart>
                  </ResponsiveContainer>
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
              
              <TabsContent value="activity">
                <div className="h-[350px] glass-card neon-border border-kamui-accent/30 p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(13, 17, 23, 0.8)', 
                          borderColor: '#9b87f5', 
                          borderRadius: '8px',
                          color: 'white'
                        }} 
                      />
                      <Bar 
                        dataKey="trades" 
                        fill="#9b87f5" 
                        radius={[4, 4, 0, 0]}
                      />
                    </ReBarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="comparison">
                <div className="h-[350px] glass-card neon-border border-kamui-accent/30 p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={comparisonData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        innerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {comparisonData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(13, 17, 23, 0.8)', 
                          borderColor: '#7DF9FF', 
                          borderRadius: '8px',
                          color: 'white'
                        }} 
                      />
                    </RePieChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
          <Button variant="outline" size="icon" className="glass-button hover-scale">
            <Download className="h-4 w-4 text-kamui-accent" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Analytics;
