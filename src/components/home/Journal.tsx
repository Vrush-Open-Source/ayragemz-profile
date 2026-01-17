import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Understanding Your Kundli",
    description: "A gentle introduction to the birth chart and its role in gemstone selection.",
  },
  {
    title: "The Nine Planets & Their Stones",
    description: "Exploring the traditional associations between Navagraha and precious gems.",
  },
  {
    title: "Choosing Between Ring & Pendant",
    description: "Guidelines for selecting the right form for your recommended stone.",
  },
];

const Journal = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-4">Journal</p>
            <h2 className="section-heading">Insights & Understanding</h2>
          </div>
          <Button variant="link" className="text-foreground underline-offset-4 hover:underline p-0" asChild>
            <Link to="/journal">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <Link
              key={article.title}
              to="/journal"
              className="group bg-background rounded-sm p-6 lg:p-8 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                Article
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
  );
};

export default Journal;
