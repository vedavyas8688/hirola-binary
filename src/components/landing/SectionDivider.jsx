/**
 * Thin gold divider placed between two sections that share a background,
 * so they don't visually merge. tone = "green" | "cream".
 */
export default function SectionDivider({ tone = "cream" }) {
  const bg = tone === "green" ? "#082B1F" : "transparent";
  return (
    <div style={{ background: bg, width: "100%" }} aria-hidden="true">
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(215,185,117,0.45) 20%, rgba(215,185,117,0.55) 50%, rgba(215,185,117,0.45) 80%, transparent)",
          opacity: tone === "green" ? 0.5 : 0.7,
        }}
      />
    </div>
  );
}
