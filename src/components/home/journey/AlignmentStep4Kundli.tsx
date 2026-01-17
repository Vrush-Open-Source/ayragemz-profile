import { Button } from "@/components/ui/button";
import { FileUp, FileQuestion } from "lucide-react";

interface AlignmentStep4KundliProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const AlignmentStep4Kundli = ({ value, onChange, onNext }: AlignmentStep4KundliProps) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-4 block">
          Step 4 of 8
        </span>
        <h2 className="section-heading mb-6">Do you have your kundli?</h2>
        <p className="body-text text-sm">
          A kundli (birth chart) contains detailed planetary positions. 
          If you already have one, you may upload it for reference.
        </p>
      </div>

      <div className="bg-card/70 backdrop-blur-md border border-border p-8 md:p-12">
        <div className="space-y-4">
          <Button
            variant={value === "yes" ? "default" : "outline"}
            className="w-full justify-start h-16 group"
            onClick={() => onChange("yes")}
          >
            <FileUp className="w-5 h-5 mr-4 opacity-70 group-hover:opacity-100" />
            Yes, I have my kundli
          </Button>
          <Button
            variant={value === "no" ? "default" : "outline"}
            className="w-full justify-start h-16 group"
            onClick={() => onChange("no")}
          >
            <FileQuestion className="w-5 h-5 mr-4 opacity-70 group-hover:opacity-100" />
            No, I’ll provide details manually
          </Button>
          
          <div className="pt-6">
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
    </div>
  );
};

export default AlignmentStep4Kundli;
