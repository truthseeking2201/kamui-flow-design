
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, BarChart3, PieChart, TrendingUp, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart as ReBarChart, Bar, PieChart as RePieChart, Pie, Cell } from 'recharts';
import { useRWAAssets } from '@/hooks/useRWAAssets';

const Analytics: React.FC = () => {
  const { assetType } = useRWAAssets();
  const [activeTab, setActiveTab] = React.useState('returns');

  // Sample data for charts
  const returnsData = [
    { date: 'Jan', value: 900 },
    { date: 'Feb', value: 1200 },
    { date: 'Mar', value: 1100 },
    { date: 'Apr', value: 1350 },
    { date: 'May', value: 1320 },
    { date: 'Jun', value: 1480 },
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

  const rwaComparisonData = [
    { name: 'Real Estate', value: 42 },
    { name: 'Precious Metals', value: 18 },
    { name: 'Fixed Income', value: 25 },
    { name: 'Equities', value: 15 },
  ];
  
  const COLORS = ['#9b87f5', '#7DF9FF', '#F97316', '#6E59A5'];

  const getAssetTypeTitle = () => {
    switch(assetType) {
      case 'real-estate': return 'Real Estate Assets';
      case 'precious-metals': return 'Precious Metals';
      case 'fixed-income': return 'Fixed Income Products';
      case 'equities': return 'Equity Assets';
      default: return 'All RWA Assets';
    }
  };

  const getAssetColor = () => {
    switch(assetType) {
      case 'real-estate': return 'purple';
      case 'precious-metals': return 'accent';
      case 'fixed-income': return 'teal';
      case 'equities': return 'purple';
      default: return 'accent';
    }
  };

  const getChartColor = () => {
    switch(assetType) {
      case 'real-estate': return '#9b87f5';
      case 'precious-metals': return '#7DF9FF';
      case 'fixed-income': return '#00FFDD';
      case 'equities': return '#9b87f5';
      default: return '#7DF9FF';
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">RWA Performance Analytics</h2>
            <p className="text-white/70">{getAssetTypeTitle()} metrics and insights</p>
          </div>
          <Button variant="outline" size="icon" className="glass-button hover-scale">
            <Download className={`h-4 w-4 text-kamui-${getAssetColor() === 'accent' ? 'accent' : getAssetColor()}`} />
          </Button>
        </div>

        <div className={`chart-card ${getAssetColor()} neon-border ${getAssetColor()}`}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full p-5">
            <TabsList className="bg-black/20 backdrop-blur-sm mb-6 p-1 rounded-md border border-white/5">
              <TabsTrigger 
                value="returns" 
                className={`${activeTab === 'returns' ? `text-kamui-${getAssetColor() === 'accent' ? 'accent' : getAssetColor()}` : 'text-white/70'} data-[state=active]:bg-white/10 rounded-sm px-4`}
              >
                Returns
              </TabsTrigger>
              <TabsTrigger 
                value="activity"
                className={`${activeTab === 'activity' ? `text-kamui-${getAssetColor() === 'accent' ? 'accent' : getAssetColor()}` : 'text-white/70'} data-[state=active]:bg-white/10 rounded-sm px-4`}
              >
                Trading Activity
              </TabsTrigger>
              <TabsTrigger 
                value="breakdown"
                className={`${activeTab === 'breakdown' ? `text-kamui-${getAssetColor() === 'accent' ? 'accent' : getAssetColor()}` : 'text-white/70'} data-[state=active]:bg-white/10 rounded-sm px-4`}
              >
                RWA Breakdown
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="returns">
              <div className="h-[350px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <ReLineChart data={returnsData}>
                    <CartesianGrid 
                      strokeDasharray="3 3" 
                      stroke="rgba(255,255,255,0.05)" 
                      className="chart-grid-line"
                    />
                    <XAxis 
                      dataKey="date" 
                      stroke="rgba(255,255,255,0.1)" 
                      tick={{ fontSize: 11, fill: "rgba(255,255,255,0.4)" }}
                      axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                      tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.1)"
                      domain={[0, 1800]}
                      ticks={[0, 450, 900, 1350, 1800]}
                      tick={{ fontSize: 11, fill: "rgba(255,255,255,0.4)" }}
                      axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                      tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(13, 17, 23, 0.9)', 
                        borderColor: getChartColor(), 
                        borderRadius: '8px',
                        color: 'white',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke={getChartColor()} 
                      strokeWidth={2}
                      dot={{ 
                        r: 4, 
                        fill: '#0D1117', 
                        strokeWidth: 2,
                        className: `chart-dot ${getAssetColor()}`
                      }}
                      activeDot={{ 
                        r: 6, 
                        fill: getChartColor(),
                        className: `chart-dot ${getAssetColor()}`
                      }}
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
                  <div key={index} className={`metrics-card ${getAssetColor()} inner-glow-${getAssetColor()} p-3 text-center`}>
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
              <div className="h-[350px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <ReBarChart data={activityData}>
                    <CartesianGrid 
                      strokeDasharray="3 3" 
                      stroke="rgba(255,255,255,0.05)"
                      className="chart-grid-line" 
                    />
                    <XAxis 
                      dataKey="date" 
                      stroke="rgba(255,255,255,0.1)" 
                      tick={{ fontSize: 11, fill: "rgba(255,255,255,0.4)" }}
                      axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                      tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.1)" 
                      tick={{ fontSize: 11, fill: "rgba(255,255,255,0.4)" }}
                      axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                      tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(13, 17, 23, 0.9)', 
                        borderColor: getChartColor(), 
                        borderRadius: '8px',
                        color: 'white',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                      }} 
                    />
                    <Bar 
                      dataKey="trades" 
                      fill={getChartColor()} 
                      radius={[4, 4, 0, 0]}
                    />
                  </ReBarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="breakdown">
              <div className="h-[350px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={rwaComparisonData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      innerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {rwaComparisonData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[index % COLORS.length]} 
                          className={`chart-dot ${index === 0 ? 'purple' : index === 1 ? 'accent' : index === 2 ? 'teal' : 'purple'}`}
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(13, 17, 23, 0.9)', 
                        borderColor: getChartColor(), 
                        borderRadius: '8px',
                        color: 'white',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                      }} 
                    />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
