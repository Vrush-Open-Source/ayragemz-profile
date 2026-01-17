import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold text-foreground">
              AYRA
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Gemstone wisdom rooted in ancient Kundli tradition, expressed through refined contemporary jewellery.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-foreground mb-4">
              Collections
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/rings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/pendants" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pendants
                </Link>
              </li>
            </ul>
          </div>

          {/* Guidance */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-foreground mb-4">
              Guidance
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/alignment-guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Alignment Guide
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Philosophy
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-foreground mb-4">
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About AYRA
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} AYRA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
