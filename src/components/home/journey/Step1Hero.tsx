import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const challenges = [
  { id: "career", label: "Career pressure or uncertainty" },
  { id: "relationship", label: "Relationship or marriage concerns" },
  { id: "health", label: "Health-related worries" },
  { id: "family", label: "Family responsibilities" },
  { id: "finance", label: "Financial stress" },
  { id: "mental", label: "Constant overthinking or mental stress" },
];

interface Step1HeroProps {
  onNext: (challenge: string) => void;
  selectedChallenge?: string;
}

const Step1Hero = ({ onNext, selectedChallenge }: Step1HeroProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6 block">
          Welcome to AYRA
        </span>
        <h1 className="hero-heading mb-6 text-balance">
          Every phase of life brings its own challenges.
        </h1>
        <p className="body-text mb-12 max-w-2xl mx-auto text-balance">
          Indian astrology helps us understand why certain phases appear and how to navigate them thoughtfully.
        </p>

        <div className="space-y-8">
          <p className="font-serif text-xl italic text-foreground/80">
            What are you currently dealing with?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {challenges.map((challenge) => (
              <button
                key={challenge.id}
                onClick={() => onNext(challenge.id)}
                className={`p-6 border text-left transition-all duration-300 group hover:border-primary/50 relative overflow-hidden ${
                  selectedChallenge === challenge.id 
                    ? "border-primary bg-primary/5" 
                    : "border-border bg-card/30 backdrop-blur-sm"
                }`}
              >
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-sm font-medium tracking-wide">
                    {challenge.label}
                  </span>
                  <MoveRight className={`w-4 h-4 transition-transform duration-300 ${
                    selectedChallenge === challenge.id ? "translate-x-1 text-primary" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  }`} />
                </div>
              </button>
            ))}
          </div>
          
          <div className="pt-8">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground opacity-60">
              Takes less than 2 minutes. Your information stays private.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Step1Hero;
