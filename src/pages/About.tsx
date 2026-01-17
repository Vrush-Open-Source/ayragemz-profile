import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-label mb-4">About AYRA</p>
              <h1 className="hero-heading mb-8">
                Ancient wisdom, modern expression
              </h1>
              <p className="body-text max-w-2xl mx-auto">
                AYRA bridges the timeless tradition of Vedic gemstone wisdom with contemporary design sensibilities. We believe that the right gemstone, chosen with intention, can serve as a meaningful companion in life's journey.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading mb-8 text-center">Our Story</h2>
              <div className="space-y-6">
                <p className="body-text">
                  AYRA was born from a deep appreciation for both the ancient science of Jyotish (Vedic astrology) and the art of fine jewellery making. In Sanskrit, 'Ayra' signifies nobility and honour — qualities we strive to embody in every piece we create.
                </p>
                <p className="body-text">
                  Our founder's personal journey with gemstones began with a family tradition of consulting birth charts for important life decisions. This profound respect for traditional wisdom, combined with a love for contemporary aesthetics, led to the creation of AYRA.
                </p>
                <p className="body-text">
                  Today, we work with experienced Jyotish practitioners and skilled artisans to offer gemstone jewellery that honours tradition while speaking to modern sensibilities. Each piece is crafted with care, designed to be worn daily as a beautiful reminder of one's unique cosmic blueprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading mb-12 text-center">Our Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
                <div className="p-8 border border-border/50">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--gem-emerald))] mx-auto mb-6" />
                  <h3 className="font-serif text-xl font-medium mb-4">Authenticity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We source only genuine, natural gemstones and provide transparent guidance rooted in traditional practices.
                  </p>
                </div>
                <div className="p-8 border border-border/50">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--gem-sapphire))] mx-auto mb-6" />
                  <h3 className="font-serif text-xl font-medium mb-4">Craftsmanship</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every piece is meticulously crafted by skilled artisans who understand the significance of gemstone settings.
                  </p>
                </div>
                <div className="p-8 border border-border/50">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--gem-ruby))] mx-auto mb-6" />
                  <h3 className="font-serif text-xl font-medium mb-4">Guidance</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We offer thoughtful, personalised recommendations based on your unique birth chart analysis.
                  </p>
                </div>
              </div>

              <div className="bg-card p-12 lg:p-16 border border-border/50">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="section-heading text-2xl mb-8">A personal approach to alignment</h3>
                  <p className="body-text italic mb-8">
                    "We believe gemstones are more than just ornaments. They are supportive tools for navigating modern life's stressors."
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our design philosophy integrates the ancient science of Kundli with contemporary color theory. By understanding the energetic resonance of each hue, we create jewellery that doesn't just complement your style, but supports your well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
