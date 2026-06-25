import { useEffect, useRef } from "react";
import { Tag, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { useModal } from "./Modalcontext";
import landingimage3 from "../../assets/images/landingimage3.jpg"

const BENEFITS = [
  {
    Icon: Tag,
    title: "Special Launch Pricing",
    desc: "Exclusive offer for the first 50 units at ₹8,499/sq.ft. Lock in early-bird rates that appreciate significantly upon public project launch.",
  },
  {
    Icon: Building2,
    title: "Preferred Unit Selection",
    desc: "Get the first pick of premium corner units, high-floor apartments with panoramic views, and coveted East & North facing configurations.",
  },
  {
    Icon: ShieldCheck,
    title: "Refundable EOI",
    desc: "100% fully refundable deposit ensuring a completely risk-free commitment. Secure your spot at Project4 without hesitation.",
  },
];

const IMAGE_URL =landingimage3;
export default function EOISection() {
  const { openModal } = useModal();
  const benefitRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    benefitRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition =
          "opacity 0.7s cubic-bezier(0.22,0.61,0.36,1), transform 0.7s cubic-bezier(0.22,0.61,0.36,1)";
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-18px); }
        }
        .badge-bounce { animation: bounceSlow 5s ease-in-out infinite; }

        .benefit-icon { transition: background 0.4s ease, color 0.4s ease; }
        .benefit-row:hover .benefit-icon {
          background: #D7B975 !important;
          color: #082B1F !important;
        }

        .cta-arrow { transition: transform 0.3s; }
        .eoi-cta-btn { transition: background 0.3s, box-shadow 0.3s, transform 0.2s; }
        .eoi-cta-btn:hover { background: #062319 !important; transform: translateY(-1px); }
        .eoi-cta-btn:hover .cta-arrow { transform: translateX(5px); }
      `}</style>

      {/* ── Section wrapper ── */}
      <section
        className="w-full min-h-screen flex items-center justify-center py-20 lg:py-24"
        style={{ backgroundColor: "#F0EBDB" }}
      >
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* ── Two-column grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ══ LEFT — Circular Image ══
                Mobile: stacks below content (order-2)
                Desktop: sits left (order-1)                    */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] xl:max-w-[440px]">

                {/* Circle */}
                <div className="aspect-square w-full rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={IMAGE_URL}
                    alt="Aerial view of Project4 — 80% open landscape"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Floating 80% badge */}
                <div
                  className="badge-bounce absolute flex flex-col items-center justify-center rounded-full z-10"
                  style={{
                    top: "40px",
                    right: "-28px",
                    background: "#0B412F",
                    padding: "26px 28px",
                    minWidth: "130px",
                    boxShadow: "0 20px 48px rgba(8,43,31,0.35)",
                    border: "1px solid rgba(215,185,117,0.2)",
                  }}
                >
                  <span
                    className="leading-none mb-1 block"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(36px, 3.8vw, 50px)",
                      fontWeight: 600,
                      color: "#FAF6EB",
                    }}
                  >
                    80%
                  </span>
                  <span
                    className="text-center block"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(250,246,235,0.7)",
                    }}
                  >
                    Open Area
                  </span>
                </div>

              </div>
            </div>

            {/* ══ RIGHT — Content ══
                Mobile: shown first (order-1)
                Desktop: sits right (order-2)                   */}
            <div className="order-1 lg:order-2 flex flex-col gap-8 lg:gap-10">

              {/* Heading + intro */}
              <div className="flex flex-col gap-4">
                <h2
                  className="m-0 leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(30px, 3.2vw, 50px)",
                    fontWeight: 600,
                    color: "#082B1F",
                  }}
                >
                  Why Enter at the{" "}
                  <br className="hidden sm:block" />
                  <span style={{ color: "#D7B975", fontWeight: 500 }}>
                    EOI Stage?
                  </span>
                </h2>

                <p
                  className="m-0 leading-relaxed max-w-[440px]"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "15px",
                    color: "#478570",
                  }}
                >
                  The EOI window offers discerning investors a unique opportunity
                  to secure their future at Project4 before public launch — at
                  ₹8,499/sq.ft with a 100% refundable deposit.
                </p>
              </div>

              {/* Divider */}
              <div
                className="w-12 h-px"
                style={{ backgroundColor: "rgba(215,185,117,0.4)" }}
              />

              {/* Benefits */}
              <div className="flex flex-col gap-7">
                {BENEFITS.map(({ Icon, title, desc }, i) => (
                  <div
                    key={title}
                    className="benefit-row flex items-start gap-5"
                    ref={(el) => (benefitRefs.current[i] = el)}
                  >
                    {/* Icon bubble */}
                    <div
                      className="benefit-icon flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{
                        width: "52px",
                        height: "52px",
                        background: "rgba(215,185,117,0.1)",
                        color: "#D7B975",
                      }}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    {/* Copy */}
                    <div className="flex flex-col gap-1 pt-1">
                      <h3
                        className="m-0 leading-snug"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "18px",
                          fontWeight: 500,
                          color: "#082B1F",
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        className="m-0 leading-relaxed"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "13.5px",
                          color: "#478570",
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  className="eoi-cta-btn inline-flex items-center gap-3 rounded-lg border-none cursor-pointer w-full sm:w-auto justify-center sm:justify-start"
                  onClick={openModal}
                  style={{
                    background: "#0B412F",
                    color: "#FAF6EB",
                    padding: "18px 40px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    boxShadow: "0 10px 30px rgba(11,65,47,0.22)",
                  }}
                >
                  <span>Get EOI Pre-Booking Offer</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="cta-arrow" />
                </button>
              </div>

            </div>
            {/* end right col */}

          </div>
          {/* end grid */}

        </div>
      </section>
    </>
  );
}