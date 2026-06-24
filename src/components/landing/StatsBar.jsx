export default function StatsSection() {
  const STATS = [
    { value: "3.5",    sub: "Acres",            label: "Total Land Area",     large: true },
    { value: "234",    sub: "Units",             label: "Total Apartments",    large: true },
    { value: "8,000+", sub: "Sq.Ft",            label: "Clubhouse Size",      large: false },
    { value: "60+",    sub: "Amenities",         label: "World-Class Features",large: false },
    { value: "80%",    sub: "Open Space",        label: "Of Total Land Area",  large: false },
  ];

  return (
    <>
      <style>{`
        .stats-section {
          background: #0B412F;
          padding: 0 80px 64px;
          width: 100%;
          box-sizing: border-box;
        }

        .stats-divider {
          max-width: 1440px;
          margin: 0 auto 56px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(215,185,117,0.4) 20%,
            rgba(215,185,117,0.4) 80%,
            transparent
          );
        }

        .stats-row {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: flex-end;
        }

        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 40px;
        }
        .stat-item:first-child { padding-left: 0; }
        .stat-item:last-child  { padding-right: 0; }

        .stat-sep {
          width: 1px;
          background: rgba(215, 185, 117, 0.22);
          align-self: stretch;
          margin: 6px 0;
          flex-shrink: 0;
        }

        /* Large stats — number + unit on separate lines */
        .stat-value {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          color: #FAF6EB;
          line-height: 1;
          margin: 0;
        }
        .stat-large .stat-value {
          font-size: clamp(42px, 5vw, 64px);
        }
        .stat-small .stat-value {
          font-size: clamp(38px, 4.5vw, 58px);
        }

        .stat-sub-large {
          font-family: "Playfair Display", serif;
          font-size: clamp(26px, 3vw, 42px);
          font-weight: 600;
          color: #FAF6EB;
          line-height: 1.1;
          margin: 4px 0 0;
        }

        /* Small stats — unit label uses gold muted style */
        .stat-sub-small {
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(215, 185, 117, 0.65);
          margin: 10px 0 0;
        }

        /* Bottom label — same for all */
        .stat-label {
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(215, 185, 117, 0.65);
          margin: 10px 0 0;
          white-space: nowrap;
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .stats-section { padding: 0 48px 56px; }
          .stat-item { padding: 0 24px; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .stats-section {
            padding: 0 24px 48px;
          }
          .stats-divider {
            margin-bottom: 40px;
          }
          .stats-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 36px 0;
            align-items: start;
          }
          .stat-sep { display: none; }
          .stat-item {
            padding: 0;
            border-bottom: 1px solid rgba(215, 185, 117, 0.15);
            padding-bottom: 28px;
          }
          /* Last row items — no bottom border */
          .stat-item:nth-last-child(-n+2) {
            border-bottom: none;
            padding-bottom: 0;
          }
          /* Odd items get a right border as column divider */
          .stat-item:nth-child(odd) {
            padding-right: 24px;
            border-right: 1px solid rgba(215, 185, 117, 0.15);
          }
          .stat-item:nth-child(even) {
            padding-left: 24px;
          }
          /* 5th item — span full width, centered */
          .stat-item:last-child {
            grid-column: 1 / -1;
            border-right: none;
            border-bottom: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .stat-large .stat-value { font-size: 48px; }
          .stat-small .stat-value { font-size: 42px; }
          .stat-sub-large { font-size: 28px; }
        }

        @media (max-width: 400px) {
          .stats-section { padding: 0 16px 40px; }
          .stat-large .stat-value { font-size: 40px; }
          .stat-small .stat-value { font-size: 36px; }
          .stat-sub-large { font-size: 24px; }
        }
      `}</style>

      <section className="stats-section">
        <div className="stats-divider" />

        <div className="stats-row">

          {/* 1 — 3.5 Acres */}
          <div className="stat-item stat-large">
            <p className="stat-value">3.5</p>
            <p className="stat-sub-large">Acres</p>
            <p className="stat-label">Total Land Area</p>
          </div>

          <div className="stat-sep" />

          {/* 2 — 234 Units */}
          <div className="stat-item stat-large">
            <p className="stat-value">234</p>
            <p className="stat-sub-large">Units</p>
            <p className="stat-label">Total Apartments</p>
          </div>

          <div className="stat-sep" />

          {/* 3 — 8,000+ */}
          <div className="stat-item stat-small">
            <p className="stat-value">8,000+</p>
            <p className="stat-sub-small">Sq.Ft Clubhouse</p>
          </div>

          <div className="stat-sep" />

          {/* 4 — 60+ */}
          <div className="stat-item stat-small">
            <p className="stat-value">60+</p>
            <p className="stat-sub-small">Amenities</p>
          </div>

          <div className="stat-sep" />

          {/* 5 — 80% */}
          <div className="stat-item stat-small">
            <p className="stat-value">80%</p>
            <p className="stat-sub-small">Open Space</p>
          </div>

        </div>
      </section>
    </>
  );
}