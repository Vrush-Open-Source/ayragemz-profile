import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";

interface AlignmentStep1DOBProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const AlignmentStep1DOB = ({ value, onChange, onNext }: AlignmentStep1DOBProps) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-4 block">
          Step 1 of 8
        </span>
        <h2 className="section-heading mb-6">When were you born?</h2>
        <p className="body-text text-sm">
          Your birth date helps determine planetary positions at the time of birth, 
          which form the base of your kundli.
        </p>
      </div>

      <div className="bg-card/70 backdrop-blur-md border border-border p-8 md:p-12">
        <div className="space-y-6">
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-4 h-4 text-primary/60" />
            <Input
              type="date"
              className="pl-10 bg-background/50 border-border/50 focus:border-primary/50"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          <Button 
            onClick={onNext} 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={!value}
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlignmentStep1DOB;
