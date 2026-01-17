import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

const rashis = [
  "Mesha (Aries)", "Vrishabha (Taurus)", "Mithun (Gemini)", 
  "Kark (Cancer)", "Simha (Leo)", "Kanya (Virgo)", 
  "Tula (Libra)", "Vrishchik (Scorpio)", "Dhanu (Sagittarius)", 
  "Makar (Capricorn)", "Kumbh (Aquarius)", "Meen (Pisces)"
];

const rashiDescriptions: Record<string, { element: string; ruling: string; traits: string }> = {
  "Mesha (Aries)": {
    element: "Fire",
    ruling: "Mars",
    traits: "Energetic, courageous, pioneering, impulsive"
  },
  "Vrishabha (Taurus)": {
    element: "Earth",
    ruling: "Venus",
    traits: "Stable, loyal, sensual, determined"
  },
  "Mithun (Gemini)": {
    element: "Air",
    ruling: "Mercury",
    traits: "Communicative, versatile, curious, adaptable"
  },
  "Kark (Cancer)": {
    element: "Water",
    ruling: "Moon",
    traits: "Nurturing, emotional, intuitive, protective"
  },
  "Simha (Leo)": {
    element: "Fire",
    ruling: "Sun",
    traits: "Confident, generous, creative, leadership"
  },
  "Kanya (Virgo)": {
    element: "Earth",
    ruling: "Mercury",
    traits: "Analytical, practical, organized, health-conscious"
  },
  "Tula (Libra)": {
    element: "Air",
    ruling: "Venus",
    traits: "Balanced, diplomatic, artistic, harmonious"
  },
  "Vrishchik (Scorpio)": {
    element: "Water",
    ruling: "Mars",
    traits: "Intense, transformative, mysterious, powerful"
  },
  "Dhanu (Sagittarius)": {
    element: "Fire",
    ruling: "Jupiter",
    traits: "Philosophical, adventurous, optimistic, spiritual"
  },
  "Makar (Capricorn)": {
    element: "Earth",
    ruling: "Saturn",
    traits: "Disciplined, ambitious, responsible, persistent"
  },
  "Kumbh (Aquarius)": {
    element: "Air",
    ruling: "Saturn",
    traits: "Innovative, humanitarian, unconventional, intellectual"
  },
  "Meen (Pisces)": {
    element: "Water",
    ruling: "Jupiter",
    traits: "Compassionate, artistic, intuitive, spiritual"
  }
};

interface AlignmentStep5RashiProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const AlignmentStep5Rashi = ({ value, onChange, onNext }: AlignmentStep5RashiProps) => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-4 block">
          Step 5 of 8
        </span>
        <h2 className="section-heading mb-6">What is your Rashi (Moon Sign)?</h2>
        <p className="body-text text-sm">
          Your Rashi is determined by the Moon's position at birth and plays a central role 
          in Vedic gemstone recommendations.
        </p>
      </div>

      {/* Educational Guide */}
      <div className="mb-6">
        <button
          onClick={() => setShowGuide(!showGuide)}
          className="w-full flex items-center justify-between bg-primary/10 hover:bg-primary/20 transition-colors px-6 py-4 border border-primary/30 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Learn About Rashi (Moon Sign)</span>
          </div>
          {showGuide ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {showGuide && (
          <div className="mt-4 bg-card/70 backdrop-blur-md border border-border p-6 space-y-4 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
            <div>
              <h3 className="font-semibold text-sm mb-2 text-primary">What is Rashi?</h3>
              <p className="text-xs body-text leading-relaxed">
                In Vedic astrology, your Rashi (also called Moon Sign or Chandra Rashi) represents the zodiac 
                constellation where the Moon was positioned at the exact moment of your birth. Unlike Western 
                astrology which emphasizes the Sun sign, Vedic astrology considers the Moon sign as the primary 
                indicator of your mind, emotions, and inner nature.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2 text-primary">Why is Rashi Important?</h3>
              <p className="text-xs body-text leading-relaxed">
                Your Rashi reveals your emotional patterns, mental tendencies, and how you respond to life's 
                experiences. It's crucial for gemstone recommendations because gemstones work with planetary 
                energies, and the Moon governs our mind and emotional well-being in Vedic astrology.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2 text-primary">How to Find Your Rashi?</h3>
              <ul className="text-xs body-text leading-relaxed space-y-1 list-disc list-inside">
                <li>You need your exact birth date, time, and place</li>
                <li>Use a Vedic astrology calculator or consult an astrologer</li>
                <li>Many free tools are available online (search "Rashi calculator")</li>
                <li>If unsure, you can use your Sun sign as a starting point</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2 text-primary">Quick Reference</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                {Object.entries(rashiDescriptions).map(([sign, info]) => (
                  <div key={sign} className="p-2 bg-background/50 rounded border border-border/50">
                    <div className="font-semibold text-primary mb-1">{sign}</div>
                    <div className="text-[10px] space-y-0.5 opacity-80">
                      <div>Element: {info.element} | Ruler: {info.ruling}</div>
                      <div>{info.traits}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-card/70 backdrop-blur-md border border-border p-8 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {rashis.map((rashi) => (
            <Button
              key={rashi}
              variant={value === rashi ? "default" : "outline"}
              className="text-xs h-12 relative group"
              onClick={() => onChange(rashi)}
            >
              {rashi}
              {value === rashi && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
              )}
            </Button>
          ))}
        </div>

        {value && rashiDescriptions[value] && (
          <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h4 className="font-semibold text-sm mb-2">Selected: {value}</h4>
            <div className="text-xs space-y-1">
              <p><span className="font-medium">Element:</span> {rashiDescriptions[value].element}</p>
              <p><span className="font-medium">Ruling Planet:</span> {rashiDescriptions[value].ruling}</p>
              <p><span className="font-medium">Key Traits:</span> {rashiDescriptions[value].traits}</p>
            </div>
          </div>
        )}

        <Button 
          onClick={onNext} 
          size="lg" 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={!value}
        >
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default AlignmentStep5Rashi;
