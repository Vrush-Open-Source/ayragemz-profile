import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Understanding Your Kundli",
    description: "A gentle introduction to the birth chart and its role in gemstone selection. Learn how the positions of celestial bodies at the moment of your birth create a unique cosmic blueprint.",
    category: "Fundamentals",
  },
  {
    id: 2,
    title: "The Nine Planets & Their Stones",
    description: "Exploring the traditional associations between Navagraha and precious gems. Discover which gemstones are connected to each of the nine celestial bodies in Vedic astrology.",
    category: "Gemstones",
  },
  {
    id: 3,
    title: "Choosing Between Ring & Pendant",
    description: "Guidelines for selecting the right form for your recommended stone. Understanding the significance of wearing gemstones on different parts of the body.",
    category: "Guidance",
  },
  {
    id: 4,
    title: "The Science of Gemstone Quality",
    description: "What makes a gemstone suitable for astrological purposes? Exploring clarity, cut, carat, and the energetic properties that matter most.",
    category: "Quality",
  },
  {
    id: 5,
    title: "Caring for Your Gemstone",
    description: "Practical advice on maintaining and energising your gemstone jewellery. Traditional cleansing practices and modern care tips.",
    category: "Care",
  },
  {
    id: 6,
    title: "When Gemstones Begin Working",
    description: "Understanding the traditional timelines and what to expect when you begin wearing a new gemstone. Signs of alignment and adjustment.",
    category: "Practice",
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
