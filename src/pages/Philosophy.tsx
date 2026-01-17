import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Philosophy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="section-label mb-4">Our Philosophy</p>
              <h1 className="hero-heading mb-8">
                Where ancient wisdom meets modern clarity
              </h1>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <p className="body-text">
                In the Vedic tradition, gemstones are not merely decorative — they are believed to carry the subtle energies of the cosmos. Each precious stone corresponds to a celestial body, and wearing the right gemstone is thought to harmonise one's relationship with those planetary influences.
              </p>
              
              <p className="body-text">
                This practice, known as Ratna Shastra (the science of gems), has been refined over millennia. It begins with the Kundli — a detailed birth chart that maps the positions of planets at the exact moment of one's birth. An experienced Jyotishi (Vedic astrologer) reads this chart to understand which planetary energies may benefit from strengthening or balancing.
              </p>

              <p className="body-text">
                At AYRA, we honour this ancient wisdom while presenting it through a contemporary lens. We believe that gemstones can serve as meaningful companions — beautiful reminders of one's unique cosmic blueprint, designed to be worn every day.
              </p>

              <h2 className="section-heading text-center pt-8">Our Approach</h2>

              <p className="body-text">
                We work with experienced Jyotish practitioners who analyse birth charts with care and precision. Their recommendations are based on traditional principles, tempered with an understanding of modern lifestyles and preferences.
              </p>

              <p className="body-text">
                Our jewellery is crafted by skilled artisans who understand the significance of gemstone settings. Traditional wisdom emphasises that a gemstone should touch the skin to be effective, and our designs honour this principle while maintaining contemporary elegance.
              </p>

              <p className="body-text">
                We source only natural, untreated gemstones of high quality. The energy of a gemstone is believed to be linked to its purity, and we take this seriously in our selection process.
              </p>

              <div className="pt-8 text-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/alignment-guide">Begin Your Journey</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Philosophy;
