
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Building, Calendar, ChevronRight, Gem, Hourglass, Landmark, Percent, TicketPercent, Timer, TrendingUp, Users } from 'lucide-react';

type LaunchPoolStatus = 'upcoming' | 'active' | 'completed';

interface LaunchPool {
  id: string;
  name: string;
  assetType: string;
  description: string;
  totalValue: string;
  status: LaunchPoolStatus;
  participantsCount: number;
  duration: string;
  startDate: string;
  targetApy: number;
  minInvestment: string;
}

const LaunchPoolList: React.FC = () => {
  const { toast } = useToast();
  
  // Mock data for launch pools
  const launchPools: LaunchPool[] = [
    {
      id: "1",
      name: "Manhattan Luxury Real Estate Fund",
      assetType: "real-estate",
      description: "Premium residential properties in Manhattan",
      totalValue: "$15M",
      status: "active",
      participantsCount: 178,
      duration: "30 days",
      startDate: "2023-08-15",
      targetApy: 22,
      minInvestment: "$5,000"
    },
    {
      id: "2",
      name: "Precious Metals Basket",
      assetType: "precious-metals",
      description: "Diversified basket of gold, silver, and platinum",
      totalValue: "$8M",
      status: "upcoming",
      participantsCount: 85,
      duration: "14 days",
      startDate: "2023-09-01",
      targetApy: 18,
      minInvestment: "$2,500"
    },
    {
      id: "3",
      name: "Asia Pacific REIT Index",
      assetType: "real-estate",
      description: "Tokenized REIT investments across APAC region",
      totalValue: "$12M",
      status: "active",
      participantsCount: 142,
      duration: "21 days",
      startDate: "2023-08-10",
      targetApy: 24,
      minInvestment: "$10,000"
    },
    {
      id: "4",
      name: "Corporate Bond Portfolio",
      assetType: "fixed-income",
      description: "Investment-grade corporate bonds",
      totalValue: "$20M",
      status: "completed",
      participantsCount: 256,
      duration: "45 days",
      startDate: "2023-07-01",
      targetApy: 16,
      minInvestment: "$7,500"
    }
  ];

  const getAssetIcon = (type: string) => {
    switch(type) {
      case 'real-estate':
        return <Building className="h-5 w-5 text-kamui-purple" />;
      case 'precious-metals':
        return <Landmark className="h-5 w-5 text-amber-400" />;
      case 'fixed-income':
        return <TicketPercent className="h-5 w-5 text-kamui-teal" />;
      case 'equities':
      default:
        return <TrendingUp className="h-5 w-5 text-kamui-accent" />;
    }
  };

  const getStatusBadge = (status: LaunchPoolStatus) => {
    switch(status) {
      case 'active':
        return <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs flex items-center"><Gem className="w-3 h-3 mr-1" /> Active</span>;
      case 'upcoming':
        return <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs flex items-center"><Hourglass className="w-3 h-3 mr-1" /> Upcoming</span>;
      case 'completed':
        return <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs flex items-center"><Timer className="w-3 h-3 mr-1" /> Completed</span>;
    }
  };

  return (
    <Card className="bg-gradient-card border-white/5">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>RWA Launch Pools</CardTitle>
          <CardDescription>Participate in tokenized real-world asset pools</CardDescription>
        </div>
        <Link to="/asset-onboarding">
          <Button 
            variant="outline" 
            className="glass-button text-kamui-accent hover-scale"
          >
            Submit Asset
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {launchPools.map((pool) => (
            <Link 
              key={pool.id} 
              to={`/launch-pool/${pool.id}`}
              className="block"
              onClick={() => {
                toast({
                  title: `Viewing Launch Pool: ${pool.name}`,
                  description: `Loading details for ${pool.name}`,
                })
              }}
            >
              <div className="glass-card p-4 hover-scale group transition-all duration-200 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kamui-accent/20 to-kamui-purple/20 flex items-center justify-center shrink-0">
                      {getAssetIcon(pool.assetType)}
                    </div>
                    <div>
                      <div className="flex items-center flex-wrap gap-2">
                        <h4 className="font-medium text-white">{pool.name}</h4>
                        {getStatusBadge(pool.status)}
                      </div>
                      <p className="text-white/60 text-sm">{pool.description}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                        <span className="text-xs text-white/70 flex items-center">
                          <Users className="w-3 h-3 mr-1" /> {pool.participantsCount} participants
                        </span>
                        <span className="text-xs text-white/70 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" /> {pool.duration}
                        </span>
                        <span className="text-xs text-white/70 flex items-center">
                          <Percent className="w-3 h-3 mr-1" /> {pool.targetApy}% target APY
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-auto">
                    <div className="text-right">
                      <p className="font-medium text-kamui-teal">{pool.totalValue}</p>
                      <p className="text-white/60 text-xs">Min: {pool.minInvestment}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LaunchPoolList;
