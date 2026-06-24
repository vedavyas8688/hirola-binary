import { useEffect, useRef } from "react";
import { Tag, Building2, ShieldCheck, ArrowRight } from "lucide-react";

const BENEFITS = [
  {
    Icon: Tag,
    title: "Special Launch Pricing",
    desc: "Exclusive offer for the first 50 units. Lock in early-bird rates that appreciate upon project launch.",
  },
  {
    Icon: Building2,
    title: "Preferred Unit Selection",
    desc: "Get the first pick of premium corner units and high-floor apartments with panoramic skyline views.",
  },
  {
    Icon: ShieldCheck,
    title: "Refundable EOI",
    desc: "Fully refundable deposit ensuring a risk-free commitment. Secure your spot without hesitation.",
  },
];

const IMAGE_URL =
  "https://lh3.googleusercontent.com/aida/AP1WRLvSgNFVSEIN6gDH6R-scVUJAxeMJxvy-wVkZmklqKzGi_aPtye89-S-E-5z0CC0GaohcPBCNw8OfZSobzG6c6OiDQAB4bi8V-8RGptRLtuVR5spIStyA68edS3U83pIlhxdELQ9yb_rN91DF4js4plkddn6wHPvnx0IDBageACTZP2UZvrijZCzfqEemV5ArYXRsPqSeyY12CWPVp6Xqdokq1s9YpwzZQ5ez-n5ExttMvIV-1DQWt83Zh8";

export default function EOISection() {
  const benefitRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    benefitRefs.current.forEach((el) => {
      if (el) {
        el.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-10");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-20px); }
        }
        .eoi-bounce { animation: bounce-slow 5s ease-in-out infinite; }

        .eoi-icon-wrap {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: rgba(119,90,25,0.1);
          color: #775a19;
          transition: background 0.5s, color 0.5s;
        }
        .eoi-benefit:hover .eoi-icon-wrap {
          background: #775a19;
          color: #ffffff;
        }

        .eoi-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #0d2c24;
          color: #ffffff;
          padding: 20px 48px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(13,44,36,0.18);
          transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
        }
        .eoi-cta:hover {
          background: #001610;
          box-shadow: 0 16px 40px rgba(13,44,36,0.28);
          transform: translateY(-1px);
        }
        .eoi-cta:hover .eoi-cta-arrow {
          transform: translateX(4px);
        }
        .eoi-cta-arrow {
          transition: transform 0.3s;
        }

        @media (max-width: 1024px) {
          .eoi-grid { grid-template-columns: 1fr !important; }
          .eoi-img-col { order: 2; margin-top: 48px; }
          .eoi-content-col { order: 1; }
        }
      `}</style>

      <section
        style={{
          background: "#f6f3f2",
          padding: "120px 80px",
        }}
      >
        <div
          className="eoi-grid"
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
        >

          {/* ── Left — circular image only ── */}
          <div
            className="eoi-img-col"
            style={{ display: "flex", justifyContent: "center", position: "relative" }}
          >
            <div style={{ width: "100%", maxWidth: "560px", position: "relative" }}>

              {/* Circle image — no rings, no decorations */}
              <div style={{
                position: "relative",
                borderRadius: "9999px",
                overflow: "hidden",
                aspectRatio: "1 / 1",
              }}>
                <img
                  src={IMAGE_URL}
                  alt="Aerial view of Binary Project 4 landscape"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "9999px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* 80% Open Area badge — fixed, bouncing */}
              <div
                className="eoi-bounce"
                style={{
                  position: "absolute",
                  top: "48px",
                  right: "-48px",
                  background: "#0d2c24",
                  borderRadius: "9999px",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 24px 48px rgba(0,0,0,0.28)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  zIndex: 10,
                  minWidth: "160px",
                }}
              >
                <span style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "60px",
                  fontWeight: 600,
                  color: "#ffffff",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}>
                  80%
                </span>
                <span style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.75)",
                  textAlign: "center",
                }}>
                  Open Area
                </span>
              </div>

            </div>
          </div>

          {/* ── Right — content (untouched) ── */}
          <div
            className="eoi-content-col"
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >

            {/* Heading block */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(36px, 4.5vw, 60px)",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#001610",
                margin: 0,
              }}>
                Why Enter at the <br />
                <span style={{ color: "#775a19", fontWeight: 500 }}>
                  EOI Stage?
                </span>
              </h2>

              <p style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "18px",
                lineHeight: 1.6,
                letterSpacing: "0.01em",
                fontWeight: 400,
                color: "#414845",
                maxWidth: "560px",
                margin: 0,
              }}>
                The Expression of Interest (EOI) window offers a unique opportunity
                for discerning investors to secure their future at Binary Project 4
                before the general public release. Experience luxury from the very beginning.
              </p>
            </div>

            {/* Benefits */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px", padding: "8px 0" }}>
              {BENEFITS.map(({ Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="eoi-benefit"
                  ref={(el) => (benefitRefs.current[i] = el)}
                  style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}
                >
                  <div className="eoi-icon-wrap">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: "#0d2c24",
                      margin: 0,
                    }}>
                      {title}
                    </h3>
                    <p style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: 1.5,
                      color: "#414845",
                      margin: "8px 0 0",
                    }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ paddingTop: "16px" }}>
              <button className="eoi-cta">
                <span>Get EOI Pre-Booking Offer</span>
                <ArrowRight size={18} strokeWidth={1.5} className="eoi-cta-arrow" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}