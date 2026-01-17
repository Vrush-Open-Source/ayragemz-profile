import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp, Info, Search } from "lucide-react";

const nakshatras = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

const nakshatraInfo: Record<string, { deity: string; symbol: string; nature: string }> = {
  "Ashwini": { deity: "Ashwini Kumaras", symbol: "Horse's Head", nature: "Swift, healing, pioneering" },
  "Bharani": { deity: "Yama", symbol: "Yoni", nature: "Creative, restraint, transformation" },
  "Krittika": { deity: "Agni", symbol: "Razor/Flame", nature: "Sharp, purifying, determined" },
  "Rohini": { deity: "Brahma", symbol: "Chariot", nature: "Growth, beauty, fertile" },
  "Mrigashira": { deity: "Soma", symbol: "Deer's Head", nature: "Searching, gentle, curious" },
  "Ardra": { deity: "Rudra", symbol: "Teardrop", nature: "Stormy, transformative, intense" },
  "Punarvasu": { deity: "Aditi", symbol: "Bow/Quiver", nature: "Renewal, nurturing, optimistic" },
  "Pushya": { deity: "Brihaspati", symbol: "Flower/Udder", nature: "Nourishing, spiritual, devoted" },
  "Ashlesha": { deity: "Nagas", symbol: "Coiled Serpent", nature: "Mystical, penetrating, wise" },
  "Magha": { deity: "Pitris", symbol: "Throne", nature: "Royal, ancestral, authoritative" },
  "Purva Phalguni": { deity: "Bhaga", symbol: "Hammock", nature: "Relaxation, pleasure, creative" },
  "Uttara Phalguni": { deity: "Aryaman", symbol: "Bed", nature: "Patronage, friendship, generous" },
  "Hasta": { deity: "Savitar", symbol: "Hand", nature: "Skillful, crafty, clever" },
  "Chitra": { deity: "Tvashtar", symbol: "Pearl/Gem", nature: "Artistic, bright, creative" },
  "Swati": { deity: "Vayu", symbol: "Coral/Sword", nature: "Independent, flexible, balanced" },
  "Vishakha": { deity: "Indra-Agni", symbol: "Triumphal Arch", nature: "Goal-oriented, determined, powerful" },
  "Anuradha": { deity: "Mitra", symbol: "Lotus", nature: "Friendship, devotion, success" },
  "Jyeshtha": { deity: "Indra", symbol: "Earring/Umbrella", nature: "Chief, protective, authoritative" },
  "Mula": { deity: "Nirriti", symbol: "Roots", nature: "Deep investigation, foundational" },
  "Purva Ashadha": { deity: "Apas", symbol: "Elephant Tusk", nature: "Invincible, purifying, proud" },
  "Uttara Ashadha": { deity: "Vishvadevas", symbol: "Elephant Tusk", nature: "Victory, leadership, enduring" },
  "Shravana": { deity: "Vishnu", symbol: "Ear", nature: "Learning, listening, connecting" },
  "Dhanishta": { deity: "Vasus", symbol: "Drum", nature: "Wealth, music, generous" },
  "Shatabhisha": { deity: "Varuna", symbol: "Empty Circle", nature: "Healing, mystical, secretive" },
  "Purva Bhadrapada": { deity: "Aja Ekapada", symbol: "Sword", nature: "Intense, transformative, dual" },
  "Uttara Bhadrapada": { deity: "Ahir Budhnya", symbol: "Twins/Serpent", nature: "Deep wisdom, mystical, compassionate" },
  "Revati": { deity: "Pushan", symbol: "Fish/Drum", nature: "Nourishing, journey, completion" }
};

interface AlignmentStep6NakshatraProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const AlignmentStep6Nakshatra = ({ value, onChange, onNext }: AlignmentStep6NakshatraProps) => {
  const [showGuide, setShowGuide] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNakshatras = nakshatras.filter(nak => 
    nak.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-4 block">
          Step 6 of 8
        </span>
        <h2 className="section-heading mb-6">What is your Nakshatra (Birth Star)?</h2>
        <p className="body-text text-sm">
          Your Nakshatra provides deeper insight into your personality and the 
          planetary ruler influencing your life.
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
            <span className="text-sm font-medium">Learn About Nakshatra (Birth Star)</span>
          </div>
          {showGuide ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {showGuide && (
          <div className="mt-4 bg-card/70 backdrop-blur-md border border-border p-6 space-y-4 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
            <div>
              <h3 className="font-semibold text-sm mb-2 text-primary">What is Nakshatra?</h3>
              <p className="text-xs body-text leading-relaxed">
                Nakshatras, also known as Lunar Mansions or Birth Stars, are the 27 divisions of the zodiac 
                used in Vedic astrology. Each nakshatra spans 13°20' of the zodiac and represents a specific 
                constellation through which the Moon passes during its monthly orbit around Earth. Your birth 
                nakshatra is determined by the Moon's exact position at the moment of your birth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2 text-primary">Why is Nakshatra Important?</h3>
              <p className="text-xs body-text leading-relaxed">
                While your Rashi (Moon Sign) provides a general overview of your emotional nature, your Nakshatra 
                offers a much more refined and detailed understanding. Each nakshatra has its own ruling deity, 
                planetary lord, symbols, and unique characteristics that influence your:
              </p>
              <ul className="text-xs body-text leading-relaxed space-y-1 list-disc list-inside ml-2 mt-2">
                <li>Core personality traits and behavioral patterns</li>
                <li>Life purpose and karmic lessons</li>
                <li>Compatible gemstones and remedies</li>
                <li>Favorable and unfavorable periods</li>
                <li>Health tendencies and vulnerabilities</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2 text-primary">How to Find Your Nakshatra?</h3>
              <ul className="text-xs body-text leading-relaxed space-y-1 list-disc list-inside">
                <li>You need your exact birth time, date, and location</li>
                <li>Use a Vedic astrology calculator (search "Nakshatra calculator")</li>
                <li>Consult with a Vedic astrologer for accurate determination</li>
                <li>Your birth chart (Kundali) will show your nakshatra</li>
                <li>Some online tools can calculate it using your birth details</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2 text-primary">The 27 Nakshatras Overview</h3>
              <p className="text-xs body-text leading-relaxed mb-3">
                The 27 nakshatras are grouped into three categories (Deva, Manushya, Rakshasa) and four 
                motivations (Dharma, Artha, Kama, Moksha). Each has unique characteristics:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-xs max-h-96 overflow-y-auto pr-2">
                {Object.entries(nakshatraInfo).map(([name, info]) => (
                  <div key={name} className="p-3 bg-background/50 rounded border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="font-semibold text-primary mb-1">{name}</div>
                    <div className="text-[10px] space-y-0.5 opacity-80">
                      <div><span className="font-medium">Deity:</span> {info.deity}</div>
                      <div><span className="font-medium">Symbol:</span> {info.symbol}</div>
                      <div><span className="font-medium">Nature:</span> {info.nature}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-border/50">
              <h3 className="font-semibold text-sm mb-2 text-primary">Nakshatra & Gemstone Connection</h3>
              <p className="text-xs body-text leading-relaxed">
                In Vedic gemology, your nakshatra is crucial for determining the most beneficial gemstones. 
                Each nakshatra is ruled by a specific planet, and wearing gemstones associated with your 
                nakshatra's ruling planet can enhance positive energies and mitigate negative influences in your life.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-card/70 backdrop-blur-md border border-border p-8 rounded-lg">
        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for your Nakshatra..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 h-64 overflow-y-auto mb-8 p-4 bg-background/30 border border-border/50 rounded-lg">
          {filteredNakshatras.map((nak) => (
            <Button
              key={nak}
              variant={value === nak ? "default" : "outline"}
              className="text-[10px] h-10 px-2 relative"
              onClick={() => onChange(nak)}
            >
              {nak}
              {value === nak && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
              )}
            </Button>
          ))}
        </div>

        {searchQuery && filteredNakshatras.length === 0 && (
          <div className="text-center text-sm text-muted-foreground mb-6">
            No nakshatras found matching "{searchQuery}"
          </div>
        )}

        {value && nakshatraInfo[value] && (
          <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h4 className="font-semibold text-sm mb-2">Selected: {value}</h4>
            <div className="text-xs space-y-1">
              <p><span className="font-medium">Ruling Deity:</span> {nakshatraInfo[value].deity}</p>
              <p><span className="font-medium">Symbol:</span> {nakshatraInfo[value].symbol}</p>
              <p><span className="font-medium">Characteristics:</span> {nakshatraInfo[value].nature}</p>
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

export default AlignmentStep6Nakshatra;
