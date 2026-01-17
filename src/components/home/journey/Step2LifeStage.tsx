import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Step2LifeStageProps {
  onNext: () => void;
  challenge: string;
}

const challengeContent: Record<string, { title: string; desc: string }> = {
  career: {
    title: "Understanding Career Pressure",
    desc: "In certain phases, professional growth feels slow or blocked. This is often just a period of transition where planetary shifts are asking us to pause, reflect, or prepare for a new direction.",
  },
  relationship: {
    title: "Navigating Relationship Phases",
    desc: "Human connections often follow cycles. Understanding these cycles through your birth chart can provide the patience and clarity needed to navigate marriage or family concerns more thoughtfully.",
  },
  health: {
    title: "Supportive Care Through Changes",
    desc: "Life sometimes brings health-related worries that feel overwhelming. Kundli analysis can help identify periods when your energy might be lower, allowing you to take extra care and find the right support.",
  },
  family: {
    title: "Balances and Responsibilities",
    desc: "Family responsibilities can sometimes feel like a heavy weight. Astrology helps identify the phases where these pressures are highest, and when ease is likely to return.",
  },
  finance: {
    title: "Planning Through Financial Cycles",
    desc: "Financial stress is a common part of adult life. By looking at planetary influences, we can understand whether it's a time for cautious saving or a period for bold new beginnings.",
  },
  mental: {
    title: "Finding Calm Amidst Overthinking",
    desc: "Constant mental stress often stems from internal planetary misalignments. Recognizing these can be the first step toward finding a sense of calm and clarity again.",
  },
};

const Step2LifeStage = ({ onNext, challenge }: Step2LifeStageProps) => {
  const content = challengeContent[challenge] || challengeContent.mental;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-card/70 backdrop-blur-md border border-border p-8 md:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16 blur-3xl" />
        
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6 block relative z-10">
          Clarity & Reassurance
        </span>
        <h2 className="section-heading mb-8 relative z-10">
          {content.title}
        </h2>
        <p className="body-text mb-12 relative z-10 italic">
          "{content.desc}"
        </p>
        
        <div className="space-y-6 relative z-10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Different life stages need different kinds of support. 
            Astrology and Kundli help us understand these influences 
            without fear or dependency.
          </p>
          <div className="pt-4">
            <Button onClick={onNext} size="lg" className="min-w-[200px] bg-primary hover:bg-primary/90">
              Continue
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Step2LifeStage;
