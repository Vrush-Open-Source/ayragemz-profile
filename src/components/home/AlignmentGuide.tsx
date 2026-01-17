import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AlignmentGuide = () => {
  return (
    <section className="py-24 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">The AYRA Alignment Guide</p>
          
          <h2 className="section-heading mb-8">
            Find what aligns with you
          </h2>
          
          <p className="body-text max-w-2xl mx-auto">
            Share your birth details, and we'll analyse your Kundli to suggest gemstones traditionally associated with supporting your unique planetary configuration.
          </p>

          <div className="mt-10">
            <Button size="lg" asChild>
              <Link to="/alignment-guide">Begin Alignment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlignmentGuide;
