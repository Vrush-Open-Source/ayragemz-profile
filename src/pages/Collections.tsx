import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CollectionsPreview from "@/components/home/Collections"; // Reusing the existing component structure

const Collections = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/10">
      {/* Global Fixed Background Image */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] z-0">
        <img 
          src="/assets/images/generated/rich_gemstone_background_v2_1768657292103.png" 
          alt="" 
          className="w-full h-full object-cover scale-125 grayscale-[20%]"
        />
      </div>

      <Navbar />
      <main className="pt-20 relative z-10">
        {/* We can reuse the Collections component from home as it already links to both */}
        <CollectionsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
