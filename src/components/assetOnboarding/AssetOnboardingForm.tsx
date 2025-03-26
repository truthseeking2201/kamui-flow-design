
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Building, Upload, ArrowRight } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  assetName: z.string().min(3, "Asset name must be at least 3 characters"),
  assetType: z.string(),
  description: z.string().min(20, "Please provide a more detailed description"),
  expectedValue: z.string().min(1, "Please enter an expected value"),
  riskLevel: z.string(),
  liquidityNeeds: z.string(),
  documentationUploaded: z.boolean().default(false)
});

type AssetOnboardingFormProps = {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  initialData: any;
};

const AssetOnboardingForm: React.FC<AssetOnboardingFormProps> = ({ onSubmit, initialData }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assetName: initialData.assetName || "",
      assetType: initialData.assetType || "real-estate",
      description: initialData.description || "",
      expectedValue: initialData.expectedValue || "",
      riskLevel: initialData.riskLevel || "medium",
      liquidityNeeds: initialData.liquidityNeeds || "medium",
      documentationUploaded: initialData.documentationUploaded || false
    }
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="assetName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asset Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter the name of your asset" 
                    {...field} 
                    className="bg-white/5 border-white/10 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="assetType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asset Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select asset type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-kamui-dark border-white/10">
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="precious-metals">Precious Metals</SelectItem>
                    <SelectItem value="fixed-income">Fixed Income</SelectItem>
                    <SelectItem value="equities">Equities</SelectItem>
                    <SelectItem value="alternative">Alternative Assets</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asset Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Provide a detailed description of the asset" 
                  className="bg-white/5 border-white/10 text-white min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormDescription className="text-white/60">
                Include key details such as location, condition, history, and unique features
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="expectedValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Value (USD)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="$1,000,000" 
                    {...field} 
                    className="bg-white/5 border-white/10 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="riskLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Risk Level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
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
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="liquidityNeeds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Liquidity Requirements</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select liquidity needs" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-kamui-dark border-white/10">
                  <SelectItem value="low">Low (Long-term hold)</SelectItem>
                  <SelectItem value="medium">Medium (Periodic liquidity)</SelectItem>
                  <SelectItem value="high">High (Frequent trading)</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription className="text-white/60">
                Specify how often you expect the asset to be traded
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="glass-card p-6 border border-dashed border-white/20 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <Upload className="w-6 h-6 text-kamui-accent" />
            </div>
            <div>
              <h3 className="font-medium text-white mb-1">Upload Documentation</h3>
              <p className="text-white/60 text-sm">
                Legal documents, valuation reports, photos, and other supporting materials
              </p>
            </div>
            <Button variant="outline" className="ml-auto glass-button text-kamui-accent">
              Upload Files
            </Button>
          </div>
        </div>
        
        <div className="flex justify-end pt-4">
          <Button type="submit" className="bg-gradient-to-r from-kamui-accent to-kamui-teal text-kamui-dark hover-scale group">
            <span>Continue to Review</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AssetOnboardingForm;
