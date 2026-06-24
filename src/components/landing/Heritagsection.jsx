import { useEffect, useRef } from "react";
import { LayoutGrid, Train, Dumbbell, TrendingUp } from "lucide-react";

const CARDS = [
  {
    Icon: LayoutGrid,
    title: "Low Density",
    desc: "Only 6 Units Per Floor & No Common Walls — Maximum Privacy.",
  },
  {
    Icon: Train,
    title: "Prime Access",
    desc: "10–15 Minutes to ORR IT Corridor & Upcoming Metro Connectivity.",
  },
  {
    Icon: Dumbbell,
    title: "Lifestyle",
    desc: "60+ Premium Amenities & 8,000+ Sq.ft Clubhouse.",
  },
  {
    Icon: TrendingUp,
    title: "Investment",
    desc: "Strong Rental Yield & High Appreciation Potential on Sarjapura Road.",
  },
];

export default function HeritageSection() {
  const cardRefs = useRef([]);

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

    cardRefs.current.forEach((card) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition =
          "opacity 0.7s cubic-bezier(0.22,0.61,0.36,1), transform 0.7s cubic-bezier(0.22,0.61,0.36,1)";
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .heritage-section { padding: 60px 80px 120px; max-width: 1440px; margin: 0 auto; }
        @media (max-width: 1024px) { .heritage-section { padding: 48px 48px 96px; } }
        @media (max-width: 768px)  { .heritage-section { padding: 36px 24px 72px; } }
        @media (max-width: 480px)  { .heritage-section { padding: 28px 16px 56px; } }

        .heritage-header { display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 96px; }
        @media (max-width: 768px) { .heritage-header { margin-bottom: 64px; } }
        @media (max-width: 480px) { .heritage-header { margin-bottom: 48px; } }

        .heritage-heading {
          font-family: "Playfair Display", serif;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 700; line-height: 1.1; letter-spacing: -0.02em;
          color: #082B1F; max-width: 896px; margin: 0;
        }
        .heritage-heading em { color: #D7B975; font-style: normal; }

        .heritage-subtext {
          font-family: "Poppins", sans-serif;
          font-size: clamp(15px, 2vw, 18px);
          line-height: 1.7; letter-spacing: 0.01em; font-weight: 400;
          color: #478570; max-width: 672px; margin: 24px 0 0;
        }

        .heritage-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px; }
        @media (max-width: 640px) { .heritage-grid { grid-template-columns: 1fr; gap: 20px; } }

        .heritage-card {
          background: #ffffff; padding: 40px; border: 1px solid #E0D8C7;
          box-shadow: 0 10px 30px -15px rgba(8, 43, 31, 0.06);
          transition: border-color 0.5s, box-shadow 0.5s;
          position: relative; overflow: hidden;
        }
        @media (max-width: 480px) { .heritage-card { padding: 28px 24px; } }
        .heritage-card:hover { border-color: rgba(215, 185, 117, 0.45); box-shadow: 0 20px 40px -20px rgba(215, 185, 117, 0.18); }

        .heritage-card .bubble {
          position: absolute; top: 0; right: 0; width: 64px; height: 64px;
          background: rgba(215, 185, 117, 0.08); border-radius: 50%;
          transform: translate(32px, -32px); transition: transform 0.7s;
        }
        .heritage-card:hover .bubble { transform: translate(32px, -32px) scale(3); }

        .heritage-card .bottom-line {
          position: absolute; bottom: 0; left: 0; height: 4px; width: 0;
          background: #D7B975; transition: width 0.5s;
        }
        .heritage-card:hover .bottom-line { width: 100%; }

        .heritage-card-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(22px, 3vw, 32px); line-height: 1.3; font-weight: 500;
          color: #082B1F; margin: 0 0 16px;
        }
        .heritage-card-desc {
          font-family: "Montserrat", sans-serif; font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: #478570;
          line-height: 1.6; margin: 0;
        }
      `}</style>

      <section id="heritage" className="heritage-section">
        <div className="heritage-header">
          <h2 className="heritage-heading">
            The Legacy of<br />
            <em>Project4</em>
          </h2>

          <p className="heritage-subtext">
            Binary Realty redefines ultra-luxury living on Sarjapura Road.
            A 3.5-acre residential enclave with 234 exclusive homes, 80% open spaces,
            and only 6 apartments per floor — built for those who choose privacy, space and legacy.
          </p>
        </div>

        <div className="heritage-grid">
          {CARDS.map(({ Icon, title, desc }, i) => (
            <div key={title} className="heritage-card" ref={(el) => (cardRefs.current[i] = el)}>
              <div className="bubble" />
              <div style={{ position: "relative", zIndex: 1 }}>
                <Icon size={36} strokeWidth={1.25} style={{ color: "#0C3125", display: "block", marginBottom: "24px" }} />
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
