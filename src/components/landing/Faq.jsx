import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { lpFaqs } from "../../data/landingData";
import { useModal } from "./Modalcontext";

export default function Faq() {
  const [open, setOpen] = useState(0);
  const { openModal } = useModal();

  return (
    <section id="faq" className="lp-fade py-20 md:py-28 lg:py-[120px] px-5 sm:px-8 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      {/* header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-8 md:w-10 bg-luxury-gold" />
          <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3em] md:tracking-[0.35em] text-luxury-gold">Questions</span>
          <span className="h-px w-8 md:w-10 bg-luxury-gold" />
        </div>
        <h2 className="text-[28px] leading-[34px] md:text-[40px] md:leading-[48px] font-serif font-medium text-luxury-green-dark">
          Frequently Asked <span className="italic text-luxury-gold">Questions</span>
        </h2>
      </div>

      {/* list */}
      <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
        {lpFaqs.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div
              key={q}
              className={`relative overflow-hidden rounded-xl border bg-luxury-cream transition-colors duration-300 ${
                isOpen ? "border-luxury-gold/40" : "border-luxury-gold/15 hover:border-luxury-gold/30"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 h-full w-1 bg-luxury-gold transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
              />

              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 md:px-7 py-5 md:py-6 text-left bg-transparent border-0 cursor-pointer"
              >
                <h3 className="text-[16px] leading-[24px] md:text-[19px] md:leading-[28px] font-serif font-medium text-luxury-green-dark">
                  {q}
                </h3>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen ? "border-luxury-gold bg-luxury-gold text-luxury-green-dark rotate-180" : "border-luxury-gold/30 text-luxury-gold"
                  }`}
                >
                  <ChevronDown size={16} strokeWidth={2} />
                </span>
              </button>

              <div className="grid transition-all duration-400 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                  <p className="px-5 md:px-7 pb-5 md:pb-6 text-[14px] md:text-[15px] leading-relaxed text-foreground-green/65">
                    {a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* footer link → opens modal */}
      <div className="text-center mt-10 md:mt-12">
        <button
          onClick={openModal}
          className="lp-underline inline-block bg-transparent border-0 cursor-pointer text-luxury-green-dark text-[13px] tracking-[0.05em] font-semibold uppercase pb-1 hover:text-luxury-gold transition-colors"
        >
          Have more questions? Talk to us
        </button>
      </div>
    </section>
  );
}
