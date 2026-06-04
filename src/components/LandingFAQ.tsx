import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

interface LandingFAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

const LandingFAQ = ({
  title = "Questions fréquentes",
  subtitle = "Vous avez des questions ? On y répond.",
  items,
}: LandingFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4 text-primary" />
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {title}
            </h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border border-border/50 overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-muted-foreground text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
