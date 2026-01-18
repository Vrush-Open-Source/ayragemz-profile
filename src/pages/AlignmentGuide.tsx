import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JourneyOrchestrator from "@/components/home/JourneyOrchestrator";
import { getAssetPath } from "@/lib/assetPath";

const AlignmentGuide = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Global Fixed Background Image */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] z-0 transition-opacity duration-1000">
        <img 
          src={getAssetPath("/assets/images/generated/rich_gemstone_background_v2_1768657292103.png")} 
          alt="" 
          className="w-full h-full object-cover scale-125 grayscale-[20%]"
        />
      </div>

      <Navbar />
      <main className="pt-20 relative z-10">
        <div className="container mx-auto px-6 py-12">
          <JourneyOrchestrator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AlignmentGuide;
