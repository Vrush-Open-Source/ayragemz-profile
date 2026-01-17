import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const planetStones = [
  { planet: "Sun", stone: "Ruby" },
  { planet: "Moon", stone: "Pearl" },
  { planet: "Mars", stone: "Red Coral" },
  { planet: "Mercury", stone: "Emerald" },
  { planet: "Jupiter", stone: "Yellow Sapphire" },
  { planet: "Saturn", stone: "Blue Sapphire" },
];

const KundliFramework = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">The Framework</p>
            <h2 className="section-heading mb-8">
              Kundli meets modern design
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="body-text mb-6">
                A Kundli, or birth chart, maps the planetary positions at the moment of your birth. In Vedic astrology, each planet governs specific aspects of life and is associated with particular gemstones.
              </p>
              <p className="body-text mb-6">
                Based on your chart, certain planets may benefit from strengthening or balancing. The corresponding gemstones are traditionally recommended to support this harmony.
              </p>
              <p className="body-text">
                AYRA presents these recommendations through carefully crafted rings and pendants — designed to be worn beautifully, while honouring the tradition behind each stone.
              </p>
              
              <div className="mt-8">
                <Button variant="link" className="text-foreground underline-offset-4 hover:underline p-0" asChild>
                  <Link to="/journal">Learn More in Journal</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {planetStones.map((item) => (
                <div
                  key={item.planet}
                  className="bg-card rounded-sm p-5 text-center border border-border/50 hover:border-border transition-colors"
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    {item.planet}
                  </p>
                  <p className="font-serif text-lg text-foreground">
                    {item.stone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KundliFramework;
