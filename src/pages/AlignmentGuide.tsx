import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AlignmentGuide = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    alert("Thank you for your submission. We will analyse your Kundli and get back to you with personalised gemstone recommendations.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="section-label mb-4">Alignment Guide</p>
              <h1 className="hero-heading mb-8">
                Discover Your Gemstone
              </h1>
              <p className="body-text max-w-2xl mx-auto">
                Share your birth details below, and our Jyotish experts will analyse your Kundli to suggest gemstones traditionally associated with supporting your unique planetary configuration.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-card border-border focus:border-foreground/50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="birthDate" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Date of Birth
                    </Label>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      required
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="mt-2 bg-card border-border focus:border-foreground/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthTime" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Time of Birth
                    </Label>
                    <Input
                      id="birthTime"
                      name="birthTime"
                      type="time"
                      required
                      value={formData.birthTime}
                      onChange={handleChange}
                      className="mt-2 bg-card border-border focus:border-foreground/50"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="birthPlace" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Place of Birth
                  </Label>
                  <Input
                    id="birthPlace"
                    name="birthPlace"
                    type="text"
                    required
                    value={formData.birthPlace}
                    onChange={handleChange}
                    className="mt-2 bg-card border-border focus:border-foreground/50"
                    placeholder="City, Country"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-card border-border focus:border-foreground/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full">
                    Submit for Analysis
                  </Button>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                  Your information is kept confidential and used solely for Kundli analysis.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AlignmentGuide;
