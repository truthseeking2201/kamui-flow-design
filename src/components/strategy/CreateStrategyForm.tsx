
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  LineChart, ArrowLeft, Save, EyeIcon, Code2, Settings, 
  Plus, Target, AlertCircle, Shield, DollarSign
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Form validation schema
const strategyFormSchema = z.object({
  name: z.string().min(3, { message: "Strategy name must be at least 3 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  category: z.string({ required_error: "Please select a category." }),
  riskLevel: z.string({ required_error: "Please select a risk level." }),
  targetApyMin: z.number().min(1, { message: "Minimum APY required." }),
  targetApyMax: z.number().min(1, { message: "Maximum APY required." }),
  maxDrawdown: z.number().min(1, { message: "Maximum drawdown required." }),
  rebalanceFrequency: z.string({ required_error: "Please select a rebalance frequency." }),
});

type StrategyFormValues = z.infer<typeof strategyFormSchema>;

const defaultValues: Partial<StrategyFormValues> = {
  name: "",
  description: "",
  category: "all",
  riskLevel: "medium",
  targetApyMin: 10,
  targetApyMax: 20,
  maxDrawdown: 15,
  rebalanceFrequency: "daily",
};

const CreateStrategyForm: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('basics');
  
  const form = useForm<StrategyFormValues>({
    resolver: zodResolver(strategyFormSchema),
    defaultValues,
  });

  const onSubmit = (data: StrategyFormValues) => {
    console.log("Strategy form submitted:", data);
    
    toast({
      title: "Strategy Created",
      description: `${data.name} has been created and saved to your strategies`,
    });
    
    // Navigate to dashboard or strategy details view
    navigate('/dashboard');
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group p-0"
              onClick={handleCancel}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Dashboard</span>
            </Button>
          </div>
          <h1 className="font-display font-bold text-2xl md:text-3xl mb-2">
            Create New <span className="text-gradient">Strategy</span>
          </h1>
          <p className="text-white/70">Design a custom RWA market-making strategy</p>
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-gradient-card border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-kamui-accent" />
                    Strategy Configuration
                  </CardTitle>
                  <CardDescription>Define the parameters of your custom strategy</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="basics">Basic Info</TabsTrigger>
                      <TabsTrigger value="parameters">Parameters</TabsTrigger>
                      <TabsTrigger value="advanced">Advanced</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="basics" className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Strategy Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g. RWA Alpha Momentum" 
                                className="bg-white/5 border-white/10"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              A clear, descriptive name for your strategy
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe what your strategy does..." 
                                className="bg-white/5 border-white/10 min-h-24"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Explain how your strategy works and what makes it unique
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white/5 border-white/10">
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-kamui-dark border-white/10">
                                <SelectItem value="all">Multi-asset</SelectItem>
                                <SelectItem value="real-estate">Real Estate</SelectItem>
                                <SelectItem value="precious-metals">Precious Metals</SelectItem>
                                <SelectItem value="fixed-income">Fixed Income</SelectItem>
                                <SelectItem value="equities">Equities</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              The primary asset class this strategy focuses on
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                    
                    <TabsContent value="parameters" className="space-y-6">
                      <FormField
                        control={form.control}
                        name="riskLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Risk Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white/5 border-white/10">
                                  <SelectValue placeholder="Select risk level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-kamui-dark border-white/10">
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium-low">Medium-Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="medium-high">Medium-High</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              The overall risk profile of this strategy
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="targetApyMin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Minimum Target APY (%)</FormLabel>
                            <FormControl>
                              <div className="flex items-center gap-2">
                                <Slider
                                  defaultValue={[field.value]}
                                  max={100}
                                  step={1}
                                  onValueChange={(value) => field.onChange(value[0])}
                                  className="flex-grow"
                                />
                                <span className="text-white/70 w-10 text-center">{field.value}%</span>
                              </div>
                            </FormControl>
                            <FormDescription>
                              The minimum target annual percentage yield
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="targetApyMax"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Maximum Target APY (%)</FormLabel>
                            <FormControl>
                              <div className="flex items-center gap-2">
                                <Slider
                                  defaultValue={[field.value]}
                                  max={100}
                                  step={1}
                                  onValueChange={(value) => field.onChange(value[0])}
                                  className="flex-grow"
                                />
                                <span className="text-white/70 w-10 text-center">{field.value}%</span>
                              </div>
                            </FormControl>
                            <FormDescription>
                              The maximum target annual percentage yield
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="maxDrawdown"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Maximum Drawdown (%)</FormLabel>
                            <FormControl>
                              <div className="flex items-center gap-2">
                                <Slider
                                  defaultValue={[field.value]}
                                  max={50}
                                  step={1}
                                  onValueChange={(value) => field.onChange(value[0])}
                                  className="flex-grow"
                                />
                                <span className="text-white/70 w-10 text-center">{field.value}%</span>
                              </div>
                            </FormControl>
                            <FormDescription>
                              The maximum percentage loss the strategy can experience
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="rebalanceFrequency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Rebalance Frequency</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white/5 border-white/10">
                                  <SelectValue placeholder="Select frequency" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-kamui-dark border-white/10">
                                <SelectItem value="hourly">Hourly</SelectItem>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="adaptive">Adaptive</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              How often the strategy rebalances positions
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                    
                    <TabsContent value="advanced" className="space-y-6">
                      <div className="glass-card p-6">
                        <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-kamui-purple" />
                          Advanced Configuration
                        </h3>
                        <p className="text-white/70 text-sm mb-4">
                          For advanced configuration options, you can use the code editor or AI assistant to fine-tune your strategy parameters.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Button variant="outline" className="glass-button text-kamui-accent flex items-center gap-2">
                            <Code2 className="h-4 w-4" />
                            <span>Open Code Editor</span>
                          </Button>
                          <Button variant="outline" className="glass-button text-kamui-teal flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            <span>Launch AI Assistant</span>
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <div className="flex gap-4 justify-end">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="glass-button text-white/70"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Create Strategy
                </Button>
              </div>
            </div>
            
            <div>
              <div className="space-y-6 sticky top-8">
                <Card className="bg-gradient-card border-white/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <EyeIcon className="h-5 w-5 text-kamui-teal" />
                      Strategy Preview
                    </CardTitle>
                    <CardDescription>How your strategy will appear</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="glass-card neon-border border-kamui-accent/30 p-6 hover-scale">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-kamui-accent/20 to-kamui-teal/20 flex items-center justify-center mb-4">
                        <LineChart className="h-6 w-6 text-white" />
                      </div>
                      
                      <h3 className="font-display font-semibold text-lg mb-2 text-white">
                        {form.watch('name') || 'Strategy Name'}
                      </h3>
                      
                      <p className="text-white/70 text-sm mb-4">
                        {form.watch('description') || 'Strategy description will appear here...'}
                      </p>
                      
                      <div className="flex justify-between items-center text-xs text-white/70 mb-3">
                        <span>Created by You</span>
                        <div className="flex items-center">
                          <Target className="h-3 w-3 text-kamui-accent mr-1" />
                          <span>New</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-3 mb-4 flex justify-between text-sm">
                        <div>
                          <div className="flex items-center">
                            <DollarSign className="h-3 w-3 text-kamui-accent mr-1" />
                            <span className="text-white">
                              {form.watch('targetApyMin')}-{form.watch('targetApyMax')}%
                            </span>
                          </div>
                          <div className="text-white/60 text-xs">Target APY</div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <Shield className="h-3 w-3 text-kamui-teal mr-1" />
                            <span className="text-white capitalize">
                              {form.watch('riskLevel') || 'Medium'}
                            </span>
                          </div>
                          <div className="text-white/60 text-xs">Risk Level</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card border-white/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-kamui-accent" />
                      Next Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-kamui-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-kamui-accent rounded-full"></div>
                        </div>
                        <span className="text-white/80 text-sm">Complete and submit the strategy form</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        </div>
                        <span className="text-white/60 text-sm">Fine-tune parameters with AI assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        </div>
                        <span className="text-white/60 text-sm">Deploy your strategy to production</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        </div>
                        <span className="text-white/60 text-sm">Monitor performance and optimize</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateStrategyForm;
