import { useEffect, useRef } from "react";
import { Tag, Building2, ShieldCheck, ArrowRight } from "lucide-react";

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
    desc: "100% fully refundable deposit ensuring a completely risk-free commitment. Secure your spot at Binary Project 4 without hesitation.",
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
        el.style.transition = "opacity 0.7s cubic-bezier(0.22,0.61,0.36,1), transform 0.7s cubic-bezier(0.22,0.61,0.36,1)";
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

        /* ── Icon wrap ── */
        .eoi-icon-wrap {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: rgba(215, 185, 117, 0.12);
          color: #D7B975;
          transition: background 0.5s, color 0.5s;
        }
        .eoi-benefit:hover .eoi-icon-wrap {
          background: #D7B975;
          color: #082B1F;
        }

        /* ── CTA button ── */
        .eoi-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #0B412F;
          color: #FAF6EB;
          padding: 20px 48px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(11, 65, 47, 0.2);
          transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
        }
        .eoi-cta:hover {
          background: #062319;
          box-shadow: 0 16px 40px rgba(11, 65, 47, 0.32);
          transform: translateY(-1px);
        }
        .eoi-cta:hover .eoi-cta-arrow { transform: translateX(4px); }
        .eoi-cta-arrow { transition: transform 0.3s; }

        /* ── Section outer ── */
        .eoi-outer {
          background: #F0EBDB;
          padding: 120px 80px;
        }

        /* ── Grid ── */
        .eoi-grid {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* ── Circle image container ── */
        .eoi-circle-wrap {
          width: 100%;
          max-width: 560px;
          position: relative;
        }

        /* ── Benefit text ── */
        .eoi-benefit-title {
          font-family: "Playfair Display", serif;
          font-size: 22px;
          font-weight: 500;
          line-height: 1.3;
          color: #082B1F;
          margin: 0;
        }
        .eoi-benefit-desc {
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
          color: #478570;
          margin: 8px 0 0;
        }

        /* ── Heading ── */
        .eoi-heading {
          font-family: "Playfair Display", serif;
          font-size: clamp(34px, 4.5vw, 60px);
          font-weight: 600;
          line-height: 1.2;
          color: #082B1F;
          margin: 0;
        }
        .eoi-heading span {
          color: #D7B975;
          font-weight: 500;
        }

        /* ── Subtext ── */
        .eoi-subtext {
          font-family: "Poppins", sans-serif;
          font-size: 17px;
          line-height: 1.7;
          letter-spacing: 0.01em;
          font-weight: 400;
          color: #478570;
          max-width: 520px;
          margin: 0;
        }

        /* ── Badge ── */
        .eoi-badge-number {
          font-family: "Playfair Display", serif;
          font-size: 60px;
          font-weight: 600;
          color: #FAF6EB;
          line-height: 1;
          margin-bottom: 4px;
        }
        .eoi-badge-label {
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(250, 246, 235, 0.75);
          text-align: center;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .eoi-grid {
            grid-template-columns: 1fr;
          }
          .eoi-img-col {
            order: 2;
            margin-top: 48px;
          }
          .eoi-content-col {
            order: 1;
          }
          .eoi-outer {
            padding: 96px 48px;
          }
        }

        @media (max-width: 768px) {
          .eoi-outer {
            padding: 72px 24px;
          }
          .eoi-grid {
            gap: 40px;
          }
          .eoi-badge-number {
            font-size: 44px;
          }
          /* ── Shrink circle on tablet ── */
          .eoi-circle-wrap {
            max-width: 340px;
          }
        }

        @media (max-width: 540px) {
          .eoi-outer {
            padding: 56px 16px;
          }
          .eoi-cta {
            padding: 16px 28px;
            width: 100%;
            justify-content: center;
          }
          .eoi-img-col {
            margin-top: 32px;
          }
          /* ── Shrink circle further on small mobile ── */
          .eoi-circle-wrap {
            max-width: 260px;
          }
          .eoi-badge-number {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="eoi-outer">
        <div className="eoi-grid">

          {/* Left — circular image */}
          <div className="eoi-img-col" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <div className="eoi-circle-wrap">
              <div style={{ position: "relative", borderRadius: "9999px", overflow: "hidden", aspectRatio: "1 / 1" }}>
                <img
                  src={IMAGE_URL}
                  alt="Aerial view of Binary Project 4 — 80% open landscape"
                  style={{ width: "100%", height: "100%", borderRadius: "9999px", objectFit: "cover", display: "block" }}
                />
              </div>

              {/* 80% badge */}
              <div
                className="eoi-bounce"
                style={{
                  position: "absolute",
                  top: "48px",
                  right: "-48px",
                  background: "#0B412F",
                  borderRadius: "9999px",
                  padding: "30px 32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 24px 48px rgba(8, 43, 31, 0.32)",
                  border: "1px solid rgba(215, 185, 117, 0.15)",
                  zIndex: 10,
                  minWidth: "160px",
                }}
              >
                <span className="eoi-badge-number">80%</span>
                <span className="eoi-badge-label">Open Area</span>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="eoi-content-col" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            {/* Heading */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h2 className="eoi-heading">
                Why Enter at the <br />
                <span>EOI Stage?</span>
              </h2>
              <p className="eoi-subtext">
                The EOI window offers discerning investors a unique opportunity
                to secure their future at Binary Project 4 before public launch —
                at ₹8,499/sq.ft with 100% refundable deposit.
              </p>
            </div>

            {/* Benefits */}
            <div style={{ display: "flex", flexDirection: "column", gap: "36px", padding: "8px 0" }}>
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
                    <h3 className="eoi-benefit-title">{title}</h3>
                    <p className="eoi-benefit-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ paddingTop: "8px" }}>
              <button
                className="eoi-cta"
                onClick={() => document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" })}
              >
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