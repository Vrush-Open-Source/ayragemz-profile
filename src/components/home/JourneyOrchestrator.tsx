import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AlignmentStep1DOB from "./journey/AlignmentStep1DOB";
import AlignmentStep2Time from "./journey/AlignmentStep2Time";
import AlignmentStep3Place from "./journey/AlignmentStep3Place";
import AlignmentStep4Kundli from "./journey/AlignmentStep4Kundli";
import AlignmentStep5Rashi from "./journey/AlignmentStep5Rashi";
import AlignmentStep6Nakshatra from "./journey/AlignmentStep6Nakshatra";
import AlignmentStep7Focus from "./journey/AlignmentStep7Focus";
import AlignmentStep8Wear from "./journey/AlignmentStep8Wear";
import AlignmentResult from "./journey/AlignmentResult";

const JourneyOrchestrator = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    dob: "",
    time: "",
    place: "",
    hasKundli: "",
    rashi: "",
    nakshatra: "",
    focus: "",
    wearMode: "",
  });

  const nextStep = () => setStep((s) => s + 1);
  
  const handleReset = () => {
    setStep(1);
    setData({
      dob: "",
      time: "",
      place: "",
      hasKundli: "",
      rashi: "",
      nakshatra: "",
      focus: "",
      wearMode: "",
    });
  };

  const updateData = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full relative z-10"
        >
          {step === 1 && (
            <AlignmentStep1DOB value={data.dob} onChange={(v) => updateData("dob", v)} onNext={nextStep} />
          )}
          
          {step === 2 && (
            <AlignmentStep2Time value={data.time} onChange={(v) => updateData("time", v)} onNext={nextStep} />
          )}
          
          {step === 3 && (
            <AlignmentStep3Place value={data.place} onChange={(v) => updateData("place", v)} onNext={nextStep} />
          )}
          
          {step === 4 && (
            <AlignmentStep4Kundli value={data.hasKundli} onChange={(v) => updateData("hasKundli", v)} onNext={nextStep} />
          )}
          
          {step === 5 && (
            <AlignmentStep5Rashi value={data.rashi} onChange={(v) => updateData("rashi", v)} onNext={nextStep} />
          )}

          {step === 6 && (
            <AlignmentStep6Nakshatra value={data.nakshatra} onChange={(v) => updateData("nakshatra", v)} onNext={nextStep} />
          )}

          {step === 7 && (
            <AlignmentStep7Focus value={data.focus} onChange={(v) => updateData("focus", v)} onNext={nextStep} />
          )}

          {step === 8 && (
            <AlignmentStep8Wear value={data.wearMode} onChange={(v) => updateData("wearMode", v)} onNext={nextStep} />
          )}
          
          {step === 9 && (
            <AlignmentResult 
              data={data} 
              onReset={handleReset} 
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator */}
      {step < 9 && (
        <div className="mt-12 flex gap-2 z-40">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div 
              key={i}
              className={`h-1 transition-all duration-500 rounded-full ${
                step >= i ? "w-8 bg-primary" : "w-4 bg-primary/10"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default JourneyOrchestrator;
