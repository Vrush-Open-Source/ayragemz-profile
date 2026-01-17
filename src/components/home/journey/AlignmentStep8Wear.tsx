import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AlignmentStep8WearProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const AlignmentStep8Wear = ({ value, onChange, onNext }: AlignmentStep8WearProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-4 block">
          Step 8 of 8
        </span>
        <h2 className="section-heading mb-6">How would you like to wear your gemstone?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => onChange("ring")}
          className={`p-10 border text-center transition-all duration-300 group ${
            value === "ring" 
              ? "border-primary bg-primary/5" 
              : "border-border bg-card/70 backdrop-blur-md"
          }`}
        >
          <h3 className="font-serif text-2xl font-medium mb-4">Ring</h3>
          <p className="text-sm text-muted-foreground leading-relaxed italic">
            Daily wear or statement piece
          </p>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => onChange("pendant")}
          className={`p-10 border text-center transition-all duration-300 group ${
            value === "pendant" 
              ? "border-primary bg-primary/5" 
              : "border-border bg-card/70 backdrop-blur-md"
          }`}
        >
          <h3 className="font-serif text-2xl font-medium mb-4">Pendant</h3>
          <p className="text-sm text-muted-foreground leading-relaxed italic">
            Close to the heart, refined expression
          </p>
        </motion.button>
      </div>

      <div className="text-center">
        <Button 
          onClick={onNext} 
          size="lg" 
          className="min-w-[250px] bg-primary hover:bg-primary/90"
          disabled={!value}
        >
          See your recommendation →
        </Button>
      </div>
    </div>
  );
};

export default AlignmentStep8Wear;
