export default function StatsSection() {
  const STATS = [
    { value: "3.5",    sub: "Acres",         label: "Total Land Area" },
    { value: "234",    sub: "Units",         label: "Total Apartments" },
    { value: "8,000+", sub: "Clubhouse Sq.Ft", label: "" },
    { value: "60+",    sub: "Amenities Count", label: "" },
    { value: "80%",    sub: "Open Space",    label: "" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Montserrat:wght@400;600&display=swap');

        .stats-section {
          background: #0B412F;
          padding: 0 80px 56px;
          width: 100%;
        }

        .stats-top-divider {
          max-width: 1440px;
          margin: 0 auto;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(215,185,117,0.45) 20%, rgba(215,185,117,0.45) 80%, transparent);
          margin-bottom: 56px;
        }

        .stats-row {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: stretch;
        }

        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 40px;
          position: relative;
        }

        .stat-item:first-child {
          padding-left: 0;
        }

        .stat-item:last-child {
          padding-right: 0;
        }

        .stat-divider {
          width: 1px;
          background: rgba(215, 185, 117, 0.25);
          align-self: stretch;
          margin: 4px 0;
          flex-shrink: 0;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 700;
          color: #FAF6EB;
          line-height: 1;
          margin: 0;
        }

        .stat-sub {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 600;
          color: #FAF6EB;
          line-height: 1;
          margin: 0;
        }

        .stat-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(215, 185, 117, 0.65);
          margin-top: 10px;
          white-space: nowrap;
        }

        /* large: number + unit stacked, label below */
        .stat-large .stat-value {
          font-size: clamp(40px, 5vw, 64px);
        }
        .stat-large .stat-sub {
          font-size: clamp(28px, 3.2vw, 44px);
        }

        /* small: number above, label below — same bottom alignment */
        .stat-small .stat-value {
          font-size: clamp(36px, 4.5vw, 58px);
        }
        .stat-small .stat-sub {
          font-size: 10px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(215, 185, 117, 0.65);
          margin-top: 8px;
        }

        @media (max-width: 860px) {
          .stats-section { padding: 48px 24px; }
          .stats-row { flex-wrap: wrap; gap: 32px; }
          .stat-divider { display: none; }
          .stat-item { flex: 0 0 calc(50% - 16px); padding: 0; }
          .stat-item:first-child { padding-left: 0; }
        }
      `}</style>

      <section className="stats-section">
        <div className="stats-top-divider" />
        <div className="stats-row">

          {/* Stat 1 — Large: 3.5 / Acres */}
          <div className="stat-item stat-large">
            <p className="stat-value">3.5</p>
            <p className="stat-sub">Acres</p>
            <p className="stat-label">Total Land Area</p>
          </div>

          <div className="stat-divider" />

          {/* Stat 2 — Large: 234 / Units */}
          <div className="stat-item stat-large">
            <p className="stat-value">234</p>
            <p className="stat-sub">Units</p>
            <p className="stat-label">Total Apartments</p>
          </div>

          <div className="stat-divider" />

          {/* Stat 3 — Small: 8,000+ */}
          <div className="stat-item stat-small">
            <p className="stat-value">8,000+</p>
            <p className="stat-sub">Clubhouse Sq.Ft</p>
          </div>

          <div className="stat-divider" />

          {/* Stat 4 — Small: 60+ */}
          <div className="stat-item stat-small">
            <p className="stat-value">60+</p>
            <p className="stat-sub">Amenities Count</p>
          </div>

          <div className="stat-divider" />

          {/* Stat 5 — Small: 80% */}
          <div className="stat-item stat-small">
            <p className="stat-value">80%</p>
            <p className="stat-sub">Open Space</p>
          </div>

        </div>
      </section>
    </>
  );
}