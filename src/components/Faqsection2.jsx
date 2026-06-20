import { useState } from "react";

const faqs = [
  {
    question: "Where is Project 4 located?",
    answer:
      "Project 4 by Binary Ventures is on Sarjapur Road, Chambenahalli, Bengaluru — within 10–15 minutes of the ORR IT corridor and close to Whitefield, Electronic City and Bellandur.",
  },
  {
    question: "What configurations are available?",
    answer:
      "Ultra-luxury 2 and 3 BHK residences, with only 6 apartments per floor and homes designed with no common walls for maximum privacy.",
  },
  {
    question: "What are the starting prices?",
    answer:
      "2 BHK homes start from ₹95 Lakhs and 3 BHK homes from ₹1.35 Crore, at ₹8,499 per sq.ft. A launch offer of ₹8,500/sq.ft. applies to the first 50 flats.",
  },
  {
    question: "How large is the development?",
    answer:
      "Project 4 spans 3.5 acres with 234 residences, 80% open space, a grand 8,000+ sq.ft. clubhouse and 60+ amenities.",
  },
  {
    question: "What makes Project 4 different?",
    answer:
      "Low-density living — only 6 apartments per floor, no common walls, large balconies, Vaastu-compliant layouts and abundant cross-ventilation set within 80% open space.",
  },
  {
    question: "Is it a good investment?",
    answer:
      "Yes — a strong IT catchment with upcoming Metro Phase 3A, STRR and PRR connectivity makes it attractive for end-users and NRIs alike.",
  },
  {
    question: "Is the EOI refundable?",
    answer: "Yes, the Expression of Interest (EOI) is fully refundable.",
  },
];

export default function FaqSection2() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-bg-cream">
      <div className="mx-auto w-full max-w-[900px]">

        {/* Heading — centered */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-relaxed text-foreground-green">
            FREQUENTLY ASKED{" "}
            <span className="text-luxury-gold">QUESTIONS</span>
          </h2>
        </div>

        {/* Accordion — card style */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-border overflow-hidden transition-all duration-300"
                style={{ background: "var(--clr-cream)" }}
              >
                {/* Question row */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left px-5 md:px-6 py-4 md:py-5 gap-4 group"
                >
                  <span
                    className={`font-sans text-sm md:text-base font-normal transition-colors duration-200 ${
                      isOpen
                        ? "text-luxury-gold"
                        : "text-foreground-green group-hover:text-luxury-gold"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* + / × circle icon */}
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full border border-luxury-gold/50 flex items-center justify-center text-luxury-gold text-lg leading-none transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-sans text-sm md:text-base text-muted-sage leading-relaxed px-5 md:px-6 pb-4 md:pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}