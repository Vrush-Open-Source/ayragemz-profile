import { Link } from "react-router-dom";
import ringSapphire from "@/assets/ring-sapphire.jpg";
import pendantEmerald from "@/assets/pendant-emerald.jpg";

const collections = [
  {
    title: "Rings",
    description: "Traditional gemstone settings for daily wear",
    image: ringSapphire,
    href: "/rings",
  },
  {
    title: "Pendants",
    description: "Elegant stones close to the heart",
    image: pendantEmerald,
    href: "/pendants",
  },
];

const Collections = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Collections</p>
          <h2 className="section-heading">Rings & Pendants</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              to={collection.href}
              className="group relative overflow-hidden rounded-sm card-hover"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image}
                  alt={`AYRA gemstone ${collection.title.toLowerCase()}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-serif text-2xl font-medium text-primary-foreground mb-2">
                  {collection.title}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
