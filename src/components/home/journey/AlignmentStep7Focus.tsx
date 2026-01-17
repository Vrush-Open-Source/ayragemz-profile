import { motion } from "framer-motion";

const focuses = [
  { id: "career", title: "Career clarity", desc: "Growth, stability, or direction at work" },
  { id: "relationship", title: "Relationship stability", desc: "Marriage, partnership, or emotional understanding" },
  { id: "health", title: "Health support", desc: "Strength, recovery, or overall well-being" },
  { id: "family", title: "Family responsibilities", desc: "Balancing duties and expectations" },
  { id: "finance", title: "Financial stability", desc: "Money concerns, security, or planning" },
  { id: "mental", title: "Mental stress / overthinking", desc: "Peace of mind and emotional calm" },
];

interface AlignmentStep7FocusProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const AlignmentStep7Focus = ({ value, onChange, onNext }: AlignmentStep7FocusProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-4 block">
          Step 7 of 8
        </span>
        <h2 className="section-heading mb-6">What are you seeking in life right now?</h2>
        <p className="body-text text-sm mb-2">
          Life moves in phases. This helps us understand where you need support at this stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {focuses.map((focus) => (
          <motion.button
            key={focus.id}
            whileHover={{ y: -5 }}
            onClick={() => {
              onChange(focus.id);
              onNext();
            }}
            className={`p-8 border text-left transition-all duration-300 relative overflow-hidden group ${
              value === focus.id 
                ? "border-primary bg-primary/5" 
                : "border-border bg-card/70 backdrop-blur-md"
            }`}
          >
            <h3 className="font-serif text-lg font-medium mb-3 group-hover:text-primary transition-colors">
              {focus.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              {focus.desc}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default AlignmentStep7Focus;
