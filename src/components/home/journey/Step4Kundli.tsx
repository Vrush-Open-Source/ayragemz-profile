import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, MapPin, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Step4KundliProps {
  onNext: (data: { dob: string; time: string; place: string }) => void;
}

const Step4Kundli = ({ onNext }: Step4KundliProps) => {
  const [formData, setFormData] = useState({
    dob: "",
    time: "",
    place: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.dob && formData.time && formData.place) {
      onNext(formData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full"
      >
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6 block">
            The Alignment Process
          </span>
          <h2 className="section-heading mb-6">
            Share your arrival details.
          </h2>
          <p className="body-text text-sm">
            Your Kundli is a map of the sky at the exact moment you were born. 
            It helps us identify which gemstones will be most supportive for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-card/70 backdrop-blur-md border border-border p-8 md:p-12">
          <div className="space-y-6">
            {/* DOB */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="dob" className="text-foreground/80 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary/60" /> Date of Birth
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="button" className="text-muted-foreground hover:text-primary transition-colors">
                        <Info className="w-3 h-3" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Used to determine planetary positions.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="dob"
                type="date"
                required
                className="bg-background border-border/50 focus:border-primary/50"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              />
            </div>

            {/* Time */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="time" className="text-foreground/80 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary/60" /> Time of Birth
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="button" className="text-muted-foreground hover:text-primary transition-colors">
                        <Info className="w-3 h-3" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Approximate time is helpful if exact is unknown.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="time"
                type="time"
                required
                className="bg-background border-border/50 focus:border-primary/50"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>

            {/* Place */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="place" className="text-foreground/80 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary/60" /> Place of Birth
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="button" className="text-muted-foreground hover:text-primary transition-colors">
                        <Info className="w-3 h-3" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">City or town name for precise coordinates.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="place"
                type="text"
                placeholder="e.g. Mumbai, Maharashtra"
                required
                className="bg-background border-border/50 focus:border-primary/50"
                value={formData.place}
                onChange={(e) => setFormData({ ...formData, place: e.target.value })}
              />
            </div>
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!formData.dob || !formData.time || !formData.place}
            >
              Generate Recommendations
            </Button>
            <p className="text-[10px] text-center mt-4 text-muted-foreground italic">
              "We use traditional Vedic principles to analyze your chart."
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Step4Kundli;
