
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';

interface PerformanceChartProps {
  period?: 'week' | 'month' | 'year';
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ period = 'month' }) => {
  // Sample data based on period
  const generateData = () => {
    switch (period) {
      case 'week':
        return [
          { date: 'Mon', value: 100 },
          { date: 'Tue', value: 102 },
          { date: 'Wed', value: 104 },
          { date: 'Thu', value: 103 },
          { date: 'Fri', value: 106 },
          { date: 'Sat', value: 109 },
          { date: 'Sun', value: 112 },
        ];
      case 'month':
        return Array.from({ length: 30 }, (_, i) => ({
          date: `${i + 1}`,
          value: 100 + Math.floor(Math.random() * 5) + i * 0.5,
        }));
      case 'year':
        return [
          { date: 'Jan', value: 100 },
          { date: 'Feb', value: 110 },
          { date: 'Mar', value: 105 },
          { date: 'Apr', value: 115 },
          { date: 'May', value: 120 },
          { date: 'Jun', value: 125 },
          { date: 'Jul', value: 130 },
          { date: 'Aug', value: 140 },
          { date: 'Sep', value: 135 },
          { date: 'Oct', value: 145 },
          { date: 'Nov', value: 150 },
          { date: 'Dec', value: 142 },
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
    <ChartContainer 
      config={chartConfig} 
      className="h-full w-full"
    >
      <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis 
          dataKey="date" 
          stroke="rgba(255,255,255,0.5)" 
          tick={{ fontSize: 12 }}
          tickCount={period === 'month' ? 10 : undefined}
        />
        <YAxis stroke="rgba(255,255,255,0.5)" />
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
          stroke="var(--color-performance)" 
          strokeWidth={2}
          dot={{ r: 3, fill: '#0D1117', strokeWidth: 2 }}
          activeDot={{ r: 6, fill: 'var(--color-performance)' }}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default PerformanceChart;
