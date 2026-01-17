import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Sparkles, Compass, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Index = () => {
  const triggers = [
    { id: "career", title: "Career clarity", desc: "Growth & direction" },
    { id: "relationship", title: "Relationship stability", desc: "Marriage & family" },
    { id: "health", title: "Health support", desc: "Strength & well-being" },
    { id: "family", title: "Family duties", desc: "Balance & support" },
    { id: "finance", title: "Financial stability", desc: "Money & planning" },
    { id: "mental", title: "Peace of mind", desc: "Calm & clarity" },
  ];

  const featuredArticles = [
    {
      title: "The Logic of the Kundli",
      desc: "How birth charts act as a map for your personal growth and gemstone alignment.",
      image: "/assets/images/generated/color_therapy_gemstones_1768656613897.png"
    },
    {
      title: "Gemstones in Modern Stress",
      desc: "Understanding the calming influence of traditional stones in a high-pressure world.",
      image: "/assets/images/generated/gemstones_stress_relief_1768656644997.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 relative">
      {/* Global Fixed Background Image */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] z-0 transition-opacity duration-1000">
        <img 
          src="/assets/images/generated/rich_gemstone_background_v2_1768657292103.png" 
          alt="" 
          className="w-full h-full object-cover scale-125 grayscale-[20%]"
        />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        {/* Brand Hero Section */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 relative">
          
          {/* Text Protection Gradient */}
          <div className="absolute inset-0 bg-radial-gradient from-background/80 via-background/40 to-transparent pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl relative z-10"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary/80 font-bold mb-6 block">
              Ayra Gemstones & Lifestyle
            </span>
            <h1 className="hero-heading mb-8 text-balance text-foreground drop-shadow-sm">
              Aligning tradition with your <br className="hidden md:block" /> modern journey.
            </h1>
            <p className="body-text mb-12 max-w-2xl mx-auto text-balance italic text-foreground/80 font-medium">
              Experience the ancient wisdom of Vedic astrology through premium, 
              ethically sourced gemstones designed for the contemporary seeker.
            </p>

            {/* Triggers Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
              {triggers.map((trigger) => (
                <Link key={trigger.id} to="/alignment-guide" className="group">
                  <div className="p-6 bg-card/70 backdrop-blur-md border border-primary/10 text-center transition-all duration-300 group-hover:border-primary/40 group-hover:bg-card/90 rounded-sm shadow-sm group-hover:shadow-md">
                    <h3 className="font-serif text-sm font-semibold mb-1 text-foreground/90 group-hover:text-primary transition-colors">
                      {trigger.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground/90 line-clamp-1 font-medium tracking-wide">
                      {trigger.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/alignment-guide">
                <Button size="lg" className="min-w-[280px] h-14 text-lg bg-primary hover:bg-primary/90 group font-bold">
                  Start Your Alignment Guide <MoveRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="min-w-[200px] h-14 text-lg border-primary/20 hover:bg-primary/5">
                  Our Philosophy
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Trust Pillars */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-4 text-primary/40" strokeWidth={1} />
              <h3 className="font-serif text-lg mb-2 text-foreground/80 font-medium">100% Authentic</h3>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-60">Certified Lab Reports</p>
            </div>
            <div className="flex flex-col items-center border-x border-border/50 px-12">
              <Sparkles className="w-8 h-8 mb-4 text-primary/40" strokeWidth={1} />
              <h3 className="font-serif text-lg mb-2 text-foreground/80 font-medium">Vedic Rooted</h3>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-60">Traditional Frameworks</p>
            </div>
            <div className="flex flex-col items-center">
              <Compass className="w-8 h-8 mb-4 text-primary/40" strokeWidth={1} />
              <h3 className="font-serif text-lg mb-2 text-foreground/80 font-medium">Personalised</h3>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-60">Kundli-Based Guidance</p>
            </div>
          </motion.div>
        </section>

        {/* Journal Section */}
        <section className="py-32 bg-background/30 backdrop-blur-md relative overflow-hidden border-t border-border/50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl text-left">
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block">
                  Journal & Insights
                </span>
                <h2 className="section-heading">Wisdom for modern living.</h2>
              </div>
              <Link to="/journal" className="flex items-center gap-2 group text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors">
                Explore All Articles <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link to="/journal" className="group block">
                    <div className="aspect-[16/9] overflow-hidden mb-8 border border-border/50 bg-card/50">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                    </div>
                    <h3 className="font-serif text-2xl mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="body-text text-sm mb-6 line-clamp-2 italic text-muted-foreground">
                      "{article.desc}"
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
