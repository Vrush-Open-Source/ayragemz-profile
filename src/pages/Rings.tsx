import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAssetPath } from "@/lib/assetPath";
const rings = [
  {
    id: 1,
    name: "Ruby Solitaire",
    stone: "Ruby",
    planet: "Sun",
    description: "A commanding ruby set in warm gold, traditionally worn for leadership and vitality.",
    image: getAssetPath("/assets/images/generated/premium_ruby_ring_solitaire.png")
  },
  {
    id: 2,
    name: "Emerald Classic",
    stone: "Emerald",
    planet: "Mercury",
    description: "A vibrant emerald for clarity of thought and communication.",
    image: getAssetPath("/assets/images/generated/premium_emerald_ring_classic.png")
  },
  {
    id: 3,
    name: "Blue Sapphire Statement",
    stone: "Blue Sapphire",
    planet: "Saturn",
    description: "A deep blue sapphire for discipline, wisdom, and endurance.",
    image: getAssetPath("/assets/images/generated/premium_blue_sapphire_ring_statement.png")
  },
  {
    id: 4,
    name: "Yellow Sapphire Grace",
    stone: "Yellow Sapphire",
    planet: "Jupiter",
    description: "A luminous yellow sapphire for wisdom, prosperity, and spiritual growth.",
    image: getAssetPath("/assets/images/generated/premium_yellow_sapphire_ring_grace.png")
  },
];

const Rings = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="section-label mb-4">Collection</p>
              <h1 className="hero-heading mb-8">Rings</h1>
              <p className="body-text max-w-2xl mx-auto">
                Traditional gemstone settings crafted for daily wear. Each ring is designed to keep your recommended stone in constant contact with the skin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {rings.map((ring) => (
                <div
                  key={ring.id}
                  className="group bg-card rounded-sm overflow-hidden border border-border/50 hover:border-border transition-all duration-300 hover:shadow-soft"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={ring.image}
                      alt={ring.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {ring.planet}
                      </span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {ring.stone}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                      {ring.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ring.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rings;
