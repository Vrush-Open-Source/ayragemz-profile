import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Sparkles, UserCheck, Layout } from "lucide-react";

interface Step3AyraIntroProps {
  onNext: () => void;
}

const features = [
  {
    icon: ShieldCheck,
    title: "Authentic Gemstones",
    desc: "Ethically sourced and certified stones of the highest quality.",
  },
  {
    icon: Sparkles,
    title: "Astrological Reasoning",
    desc: "Clear, simple explanations of how planets influence your life phases.",
  },
  {
    icon: UserCheck,
    title: "Personalised Guidance",
    desc: "Recommendations tailored to your unique Kundli and current challenges.",
  },
  {
    icon: Layout,
    title: "Modern Wearability",
    desc: "Refined designs that complement your daily urban/semi-urban lifestyle.",
  },
];

const Step3AyraIntro = ({ onNext }: Step3AyraIntroProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full"
      >
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6 block">
            Meet AYRA
          </span>
          <h2 className="section-heading mb-6">
            A bridge between tradition and your modern life.
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            AYRA helps you find the right support for your life's journey using the wisdom of astrology, 
            expressed through wearable, timeless gemstones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="p-8 border border-border bg-card/30 flex flex-col items-center text-center group hover:border-primary/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 mb-6 text-primary/60 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <h3 className="font-serif text-lg font-medium mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={onNext} size="lg" className="min-w-[250px] bg-primary hover:bg-primary/90">
            Find Your Alignment
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Step3AyraIntro;
