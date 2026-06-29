import { Phone } from "lucide-react";
import { lpConfig } from "../../data/landingData";
import { useModal } from "./Modalcontext";

/**
 * Sticky bottom enquiry bar. Not rendered in the live page tree by default
 * (FloatingActions handles floating CTAs) — kept updated for reuse.
 */
export default function Floatingbar() {
  const { openModal } = useModal();
  return (
    <div
      style={{
        position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 80,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
        padding: "10px 16px", background: "#062319",
        borderTop: "1px solid rgba(215,185,117,0.25)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <p style={{ margin: 0, color: "#D7B975", fontSize: "12px", fontWeight: 700, letterSpacing: "0.04em" }}>
          {lpConfig.brandName}
        </p>
        <p style={{ margin: 0, color: "rgba(250,246,235,0.7)", fontSize: "11px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          2 &amp; 3 BHK · EOI ₹8,499/sq.ft · 100% refundable
        </p>
      </div>
      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        <a
          href={lpConfig.phoneHref}
          aria-label="Call"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", border: "1px solid rgba(215,185,117,0.4)", color: "#D7B975" }}
        >
          <Phone size={17} strokeWidth={1.8} />
        </a>
        <button
          onClick={() => openModal("Enquire Now")}
          style={{ border: "none", cursor: "pointer", padding: "0 18px", height: "40px", borderRadius: "8px", background: "linear-gradient(135deg,#E8BA30,#D7B975)", color: "#062319", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          Enquire
        </button>
      </div>
    </div>
  );
}