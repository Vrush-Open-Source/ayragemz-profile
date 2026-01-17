import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, MoveRight, RefreshCcw, Sparkles } from "lucide-react";

interface AlignmentData {
  dob: string;
  time: string;
  place: string;
  hasKundli: string;
  rashi: string;
  nakshatra: string;
  focus: string;
  wearMode: string;
}

interface AlignmentResultProps {
  data: AlignmentData;
  onReset: () => void;
}

const recommendations: Record<string, { gem: string; ruler: string; explanation: string; finger: string; alternative: string }> = {
  "Makar (Capricorn)": {
    gem: "Blue Sapphire",
    ruler: "Saturn",
    explanation: "Associated with focus, discipline, and responsibility during this phase of life. It helps bring stability to your career and personal goals.",
    finger: "middle finger",
    alternative: "Amethyst"
  },
  "Kark (Cancer)": {
    gem: "Pearl",
    ruler: "Moon",
    explanation: "Promotes emotional balance and peace of mind. Highly supportive for relationship stability and mental clarity.",
    finger: "little finger",
    alternative: "Moonstone"
  },
  "Simha (Leo)": {
    gem: "Ruby",
    ruler: "Sun",
    explanation: "Enhances vitality and leadership qualities. Ideal for those seeking direction and confidence in their professional life.",
    finger: "ring finger",
    alternative: "Red Garnet"
  },
  // Default for others for now
  "default": {
    gem: "Emerald",
    ruler: "Mercury",
    explanation: "Improves communication and logical reasoning. Especially beneficial for mental clarity and financial stability.",
    finger: "little finger",
    alternative: "Peridot"
  }
};

const AlignmentResult = ({ data, onReset }: AlignmentResultProps) => {
  const rec = recommendations[data.rashi] || recommendations["default"];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-4 block">
            The Alignment Guide
          </span>
          <h2 className="section-heading mb-6">Your Vedic Alignment</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card/70 backdrop-blur-md border border-border p-8 md:p-16 rounded-lg relative overflow-hidden">
          {/* Visual Side */}
          <div className="relative aspect-square bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-lg flex flex-col items-center justify-center text-center p-12">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-4 flex items-center gap-2 justify-center font-bold">
              <Sparkles className="w-3 h-3" />
              Suggested Gemstone
            </span>
            <h3 className="hero-heading text-4xl mb-2">{rec.gem}</h3>
            <p className="font-serif italic text-lg text-primary/70 mb-8">Ruled by {rec.ruler}</p>
            
            {/* Enhanced Resonating Animation */}
            <div className="relative w-52 h-52 flex items-center justify-center">
              {/* Pulsing Outer Circle 1 */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/30 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Pulsing Outer Circle 2 */}
              <motion.div
                className="absolute inset-4 border-2 border-primary/40 rounded-full"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Pulsing Outer Circle 3 */}
              <motion.div
                className="absolute inset-8 border-2 border-primary/50 rounded-full"
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Inner Glow Circle */}
              <motion.div 
                className="absolute inset-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Center Circle with Text */}
              <motion.div 
                className="relative z-10 w-36 h-36 border-2 border-primary/60 rounded-full flex items-center justify-center bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.5)",
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-sm font-semibold tracking-wider text-primary mb-1"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Resonating
                  </motion.div>
                  <div className="flex gap-1 justify-center">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Rotating Shimmer Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2 font-bold opacity-60">
                Basis: {data.rashi} • {data.nakshatra}
              </p>
              <p className="body-text italic leading-relaxed text-balance">
                "Based on your {data.rashi} Rashi and {data.nakshatra} Nakshatra, {rec.gem} is traditionally {rec.explanation}"
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-border/50">
              <div>
                <h4 className="font-serif text-lg font-medium mb-2">Wearing Guidance</h4>
                <p className="text-sm text-muted-foreground">
                  Traditionally worn as a {data.wearMode} {data.wearMode === 'ring' ? `on the ${rec.finger}` : 'close to the heart'} for optimal planetary reception.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-lg font-medium mb-2">Supportive Alternative</h4>
                <p className="text-sm text-muted-foreground">
                  If {rec.gem} is not suitable or accessible, {rec.alternative} is often considered a supportive alternative.
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 flex-1 group font-semibold h-12 text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore {rec.gem} {data.wearMode}s 
                <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={onReset} 
                className="sm:w-auto w-full h-12 hover:bg-muted/50 transition-all duration-300 border-2"
              >
                <RefreshCcw className="w-4 h-4 mr-2" /> Start Over
              </Button>
            </div>

            <div className="pt-6 flex items-start gap-3 text-[10px] text-muted-foreground opacity-70 bg-green-500/5 border border-green-500/10 rounded-lg p-4">
              <ShieldCheck className="w-4 h-4 text-green-600/70 flex-shrink-0 mt-0.5" />
              <p className="flex-1 leading-relaxed">Certified Lab Reports • Vedic Authenticity • Secured Details</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-[10px] text-muted-foreground italic leading-relaxed">
            This guidance is based on traditional Vedic frameworks. Gemstones complement personal effort and should not replace professional advice. Results vary by individual.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AlignmentResult;
