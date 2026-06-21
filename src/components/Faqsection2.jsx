import { useState } from "react";
import { faqs } from "../data/siteData";

export default function FaqSection2() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="pt-16 pb-16 md:pt-12 md:pb-24 px-4 md:px-8 overflow-hidden bg-bg-cream">
      <div className="mx-auto w-full max-w-[900px]">

        {/* Heading — centered (unchanged) */}
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
                className="rounded-xl border border-border overflow-hidden bg-luxury-cream transition-all duration-300"
              >
                {/* Question row */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left px-5 py-4 md:px-7 md:py-5 gap-4 group"
                >
                  <span
                    className={`font-sans text-sm md:text-base font-normal md:font-medium md:tracking-[0.01em] transition-colors duration-200 ${
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
                  <p className="font-sans text-sm md:text-base text-muted-sage leading-relaxed px-5 pb-4 md:px-7 md:pb-5">
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