import { useEffect, useRef } from "react";
import { LayoutGrid, Train, Dumbbell, TrendingUp } from "lucide-react";

const CARDS = [
  {
    Icon: LayoutGrid,
    title: "Low Density",
    desc: "Only 6 Units Per Floor & No Common Walls.",
  },
  {
    Icon: Train,
    title: "Prime Access",
    desc: "10-15 Minutes to ORR IT Corridor & Upcoming Metro.",
  },
  {
    Icon: Dumbbell,
    title: "Lifestyle",
    desc: "60+ Premium Amenities & 8,000+ Sq.ft Clubhouse.",
  },
  {
    Icon: TrendingUp,
    title: "Investment",
    desc: "Strong Rental Yield & High Appreciation Potential.",
  },
];

export default function HeritageSection() {
  const cardRefs = useRef([]);

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

    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .heritage-card {
          background: #ffffff;
          padding: 40px;
          border: 1px solid rgba(193,200,196,0.1);
          box-shadow: 0 10px 30px -15px rgba(0,22,16,0.05);
          transition: all 0.5s;
          position: relative;
          overflow: hidden;
        }
        .heritage-card:hover {
          border-color: rgba(119,90,25,0.3);
          box-shadow: 0 20px 40px -20px rgba(119,90,25,0.1);
        }
        .heritage-card .bubble {
          position: absolute;
          top: 0;
          right: 0;
          width: 64px;
          height: 64px;
          background: rgba(119,90,25,0.05);
          border-radius: 50%;
          transform: translate(32px, -32px);
          transition: transform 0.7s;
        }
        .heritage-card:hover .bubble {
          transform: translate(32px, -32px) scale(3);
        }
        .heritage-card .bottom-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          width: 0;
          background: #775a19;
          transition: width 0.5s;
        }
        .heritage-card:hover .bottom-line {
          width: 100%;
        }
        .heritage-card-title {
          font-family: "Playfair Display", serif;
          font-size: 32px;
          line-height: 1.3;
          font-weight: 500;
          color: #001610;
          margin: 0 0 16px;
        }
        .heritage-card-desc {
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #414845;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>

      <section
        id="heritage"
        style={{
          padding: "120px 80px",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "96px",
          }}
        >
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#001610",
              maxWidth: "896px",
              margin: 0,
            }}
          >
            The Legacy of <em style={{ color: "#775a19", fontStyle: "normal" }}>Project 4</em>
          </h1>

          {/* Gold rule */}
          <div
            style={{
              width: "96px",
              height: "4px",
              background: "#775a19",
              margin: "24px 0 32px",
            }}
          />

          <p
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "18px",
              lineHeight: 1.6,
              letterSpacing: "0.01em",
              fontWeight: 400,
              color: "#414845",
              maxWidth: "672px",
              margin: 0,
            }}
          >
            Binary Ventures brings a new dimension to Sarjapur Road with Project 4.
            An ultra-luxury residential enclave spanning 3.5 acres, designed for
            low-density living with 80% open spaces and uncompromising privacy.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px",
          }}
        >
          {CARDS.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="heritage-card"
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="bubble" />
              <div style={{ position: "relative", zIndex: 1 }}>
                <Icon
                  size={36}
                  strokeWidth={1.25}
                  style={{ color: "#001610", display: "block", marginBottom: "24px" }}
                />
                <h3 className="heritage-card-title">{title}</h3>
                <p className="heritage-card-desc">{desc}</p>
              </div>
              <div className="bottom-line" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}