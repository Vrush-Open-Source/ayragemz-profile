import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight, RefreshCcw, ShieldCheck } from "lucide-react";
import { getAssetPath } from "@/lib/assetPath";

interface Gemstone {
  name: string;
  sanskritName: string;
  reason: string;
  benefit: string;
  designDesc: string;
  imageColor: string;
}

const gemstoneData: Record<string, Gemstone> = {
  career: {
    name: "Emerald",
    sanskritName: "Panna",
    reason: "Emerald is associated with Mercury (Budh), the planet of intellect and communication. In your current phase, it brings the clarity needed for professional decisions.",
    benefit: "Enhances focus and logical thinking.",
    designDesc: "Set in a minimalist, square-cut silver ring for a professional look.",
    imageColor: "bg-emerald-600/20",
  },
  relationship: {
    name: "Pearl",
    sanskritName: "Moti",
    reason: "Connected to the Moon, the Pearl brings emotional balance. It helps soften communication and fosters understanding in marriage and family life.",
    benefit: "Promotes calmness and empathy.",
    designDesc: "A smooth, rounded drop pendant on a delicate gold chain.",
    imageColor: "bg-stone-200/40",
  },
  health: {
    name: "Red Coral",
    sanskritName: "Moonga",
    reason: "Ruled by Mars (Mangal), Red Coral is linked to vital energy and physical strength. It is supportive during phases where you feel physically drained.",
    benefit: "Boosts stamina and courage.",
    designDesc: "Subtle cabochon cut in a burnished copper or gold band.",
    imageColor: "bg-red-600/20",
  },
  family: {
    name: "Yellow Sapphire",
    sanskritName: "Pukhraj",
    reason: "The stone of Jupiter (Guru), it brings wisdom and auspiciousness. It helps you navigate family responsibilities with a sense of grace and abundance.",
    benefit: "Promotes prosperity and wise judgment.",
    designDesc: "Elegant oval cut with a high-polish finish for daily grace.",
    imageColor: "bg-yellow-500/20",
  },
  finance: {
    name: "Emerald",
    sanskritName: "Panna",
    reason: "Mercury influences trade and wealth. This stone is traditionally recommended to bring stability and growth to your financial endeavors.",
    benefit: "Attracts stability and new opportunities.",
    designDesc: "Vibrant green stone in a sleek, modern bypass setting.",
    imageColor: "bg-emerald-600/20",
  },
  mental: {
    name: "Moonstone",
    sanskritName: "Chandramani",
    reason: "Moonstone acts as a mirror to the soul, helping to calm an overactive mind. It is perfect for those dealing with constant mental stress.",
    benefit: "Soothes overthinking and restores sleep.",
    designDesc: "Shimmering opalescent stone in a simple bezel-set pendant.",
    imageColor: "bg-blue-100/30",
  },
};

interface Step5RecommendationProps {
  challenge: string;
  onReset: () => void;
}

const Step5Recommendation = ({ challenge, onReset }: Step5RecommendationProps) => {
  const gem = gemstoneData[challenge] || gemstoneData.mental;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Visual Side */}
        <motion.div 
          className="relative aspect-square bg-card/70 backdrop-blur-md border border-border flex items-center justify-center overflow-hidden"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className={`absolute inset-0 ${gem.imageColor} blur-3xl opacity-30`} />
          
          {(challenge === 'career' || challenge === 'finance') ? (
            <motion.img 
              src={getAssetPath("/assets/images/generated/premium_emerald_ring_1768656197243.png")}
              alt="Premium Emerald Ring"
              className="w-full h-full object-cover relative z-10"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            />
          ) : (
            <div className="text-center p-12 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
                Suggested Alignment
              </span>
              <h3 className="hero-heading text-4xl mb-2">{gem.name}</h3>
              <p className="font-serif italic text-lg text-primary/70">{gem.sanskritName}</p>
              
              <div className="mt-12 w-48 h-48 mx-auto border border-primary/10 rounded-full flex items-center justify-center">
                 <div className="w-40 h-40 border border-primary/20 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-32 h-32 bg-primary/5 rounded-full flex items-center justify-center">
                      <span className="text-xs uppercase tracking-widest text-primary/40">Visualizing...</span>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-6 block">
            Your Personal Guide
          </span>
          <h2 className="section-heading mb-8">
            Why this gemstone is right for you.
          </h2>
          
          <div className="space-y-8 mb-12">
            <div>
              <h4 className="font-serif text-xl font-medium mb-3 text-foreground/90">Traditional Reasoning</h4>
              <p className="text-muted-foreground leading-relaxed italic">
                "{gem.reason}"
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-xl font-medium mb-3 text-foreground/90">The Benefit</h4>
              <p className="text-muted-foreground leading-relaxed">
                {gem.benefit}
              </p>
            </div>

            <div>
              <h4 className="font-serif text-xl font-medium mb-3 text-foreground/90">AYRA's Modern Design</h4>
              <p className="text-muted-foreground leading-relaxed">
                {gem.designDesc}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 flex-1 group">
              View Collection <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={onReset} className="flex-1">
              <RefreshCcw className="w-4 h-4 mr-2" /> Start Over
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex items-center gap-4 text-xs text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-green-600/50" />
            <p>Certified Lab Report • 30-Day Returns • Private Consultation</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Step5Recommendation;
