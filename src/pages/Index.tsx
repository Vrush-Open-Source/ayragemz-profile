import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import Collections from "@/components/home/Collections";
import AlignmentGuide from "@/components/home/AlignmentGuide";
import KundliFramework from "@/components/home/KundliFramework";
import Journal from "@/components/home/Journal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Collections />
        <AlignmentGuide />
        <KundliFramework />
        <Journal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
