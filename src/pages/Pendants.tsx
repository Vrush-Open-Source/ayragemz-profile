import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const pendants = [
  {
    id: 1,
    name: "Pearl Teardrop",
    stone: "Pearl",
    planet: "Moon",
    description: "A lustrous pearl pendant for emotional balance and inner peace.",
    image: "/assets/images/generated/premium_pearl_pendant_teardrop.png"
  },
  {
    id: 2,
    name: "Emerald Drop",
    stone: "Emerald",
    planet: "Mercury",
    description: "An elegant emerald worn close to the heart for enhanced intuition.",
    image: "/assets/images/generated/premium_emerald_pendant_drop.png"
  },
  {
    id: 3,
    name: "Ruby Heart",
    stone: "Ruby",
    planet: "Sun",
    description: "A radiant ruby pendant symbolising courage and passion.",
    image: "/assets/images/generated/premium_ruby_pendant_heart.png"
  },
  {
    id: 4,
    name: "Yellow Sapphire Solitaire",
    stone: "Yellow Sapphire",
    planet: "Jupiter",
    description: "A golden sapphire pendant for abundance and spiritual wisdom.",
    image: "/assets/images/generated/premium_yellow_sapphire_pendant_solitaire.png"
  },
];

const Pendants = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="section-label mb-4">Collection</p>
              <h1 className="hero-heading mb-8">Pendants</h1>
              <p className="body-text max-w-2xl mx-auto">
                Elegant stones worn close to the heart. Our pendants are designed to be subtle yet meaningful, perfect for those who prefer understated beauty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {pendants.map((pendant) => (
                <div
                  key={pendant.id}
                  className="group bg-card rounded-sm overflow-hidden border border-border/50 hover:border-border transition-all duration-300 hover:shadow-soft"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={pendant.image}
                      alt={pendant.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {pendant.planet}
                      </span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {pendant.stone}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                      {pendant.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pendant.description}
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

export default Pendants;
