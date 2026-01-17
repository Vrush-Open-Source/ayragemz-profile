import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Understanding Your Kundli",
    description: "A gentle introduction to the birth chart and its role in gemstone selection. Learn how the positions of celestial bodies at the moment of your birth create a unique cosmic blueprint for your life's journey.",
    category: "Fundamentals",
  },
  {
    id: 2,
    title: "Gemstones & Modern Stress",
    description: "In an era of constant pressure, discover how gemstones can act as grounding tools. We explore the relationship between planetary influences and the mental clarity needed to navigate urban life challenges.",
    category: "Lifestyle",
  },
  {
    id: 3,
    title: "The Theory of Color in Design",
    description: "Our philosophy combines ancient wisdom with modern color theory. Learn how specific hues in gemstones don't just look beautiful but resonate with your energy centers to provide reassurance.",
    category: "Design",
  },
  {
    id: 4,
    title: "The Nine Planets (Navagraha)",
    description: "A deep dive into the nine celestial bodies that govern Vedic astrology. We explain the science behind why each planet is associated with a specific gemstone and how they affect your life phases.",
    category: "Astrology",
  },
  {
    id: 5,
    title: "The Science of Gemstones",
    description: "Beyond tradition lies the physical reality of mineral compositions. We explore the crystalline structures and thermal properties that make natural gemstones unique supportive tools.",
    category: "Science",
  },
  {
    id: 6,
    title: "Personal Alignment Guide",
    description: "A step-by-step approach to finding your ideal stone. We discuss why a personal touch matters and how AYRA ensures your journey feels like a solution, not just a purchase.",
    category: "Guidance",
  },
];

const Journal = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="section-label mb-4">Journal</p>
              <h1 className="hero-heading mb-8">
                Insights & Understanding
              </h1>
              <p className="body-text max-w-2xl mx-auto">
                Explore the wisdom behind gemstone traditions, learn about Vedic astrology, and discover how to make informed choices for your personal journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/journal/${article.id}`}
                  className="group bg-card rounded-sm p-6 lg:p-8 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-soft"
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                    {article.category}
                  </p>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
