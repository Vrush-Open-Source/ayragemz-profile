import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

interface AlignmentStep3PlaceProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const AlignmentStep3Place = ({ value, onChange, onNext }: AlignmentStep3PlaceProps) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-4 block">
          Step 3 of 8
        </span>
        <h2 className="section-heading mb-6">Where were you born?</h2>
        <p className="body-text text-sm">
          Birth location helps calculate precise planetary degrees and house cusps in your kundli.
        </p>
      </div>

      <div className="bg-card/70 backdrop-blur-md border border-border p-8 md:p-12">
        <div className="space-y-6">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-4 h-4 text-primary/60" />
            <Input
              placeholder="City, Country (e.g. Mumbai, India)"
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

export default AlignmentStep3Place;
