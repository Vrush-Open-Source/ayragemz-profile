import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Philosophy = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">Our Philosophy</p>
          
          <h2 className="section-heading mb-8">
            Where ancient wisdom meets modern clarity
          </h2>
          
          <p className="body-text max-w-2xl mx-auto">
            We believe that gemstones are more than adornment. In Vedic tradition, each stone carries unique energetic properties, traditionally recommended based on one's birth chart to support balance and wellbeing. AYRA translates this ancient practice into elegant, wearable pieces designed for contemporary life.
          </p>

          <div className="mt-10">
            <Button variant="link" className="text-foreground underline-offset-4 hover:underline" asChild>
              <Link to="/philosophy">Read Our Philosophy</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
