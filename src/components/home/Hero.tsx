import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroCrystals from "@/assets/hero-crystals.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCrystals}
          alt="AYRA gemstone crystals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-2xl">
          <p className="section-label mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Gemstone Wisdom, Modern Design
          </p>
          
          <h1 className="hero-heading text-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Align with what is written in your stars
          </h1>
          
          <p className="body-text mt-6 max-w-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
            AYRA offers gemstone guidance rooted in ancient Kundli wisdom, expressed through refined, contemporary jewellery.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="default" size="lg" asChild>
              <Link to="/alignment-guide">Discover Your Gemstone</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Explore AYRA</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
