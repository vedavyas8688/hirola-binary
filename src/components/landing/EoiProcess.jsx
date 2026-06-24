import { lpProcess, lpProcessSection } from "../../data/landingData";
import { useModal } from "./Modalcontext";

const PANEL = "color-mix(in srgb, var(--clr-green-dark) 92%, #000)";
const GLASS = "color-mix(in srgb, var(--clr-gold) 8%, transparent)";
const GLASS_BORDER = "color-mix(in srgb, var(--clr-gold) 24%, transparent)";
const HAIRLINE = "color-mix(in srgb, var(--clr-gold) 30%, transparent)";
const SOFT_TEXT = "color-mix(in srgb, var(--clr-cream-text) 72%, transparent)";
const GLOW = "radial-gradient(circle at center, color-mix(in srgb, var(--clr-gold) 55%, transparent), transparent 70%)";

const gradText = {
  backgroundImage: "linear-gradient(110deg, var(--clr-gold), #f5e9d6)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

export default function EoiProcess() {
  const { openModal } = useModal();

  return (
    <section className="lp-fade bg-bg-cream py-[120px]">
      <div className="px-5 md:px-20 max-w-screen-xl mx-auto">
        <div className="relative overflow-hidden rounded-[1.75rem] px-6 py-10 md:px-12 md:py-14" style={{ background: PANEL }}>
          <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full opacity-[0.18] blur-3xl" style={{ background: GLOW }} />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-44 right-0 h-96 w-96 rounded-full opacity-[0.12] blur-3xl" style={{ background: GLOW }} />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />

          {/* Header */}
          <div className="relative">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-luxury-gold" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-luxury-gold">
                {lpProcessSection.eyebrow}
              </span>
            </div>
            <div className="mt-3 flex items-end gap-8">
              <h2 className="font-serif text-3xl font-semibold leading-[1.12] text-luxury-gold md:text-5xl">
                {lpProcessSection.titleLine1}
                <br />
                <span className="italic" style={gradText}>{lpProcessSection.titleLine2}</span>
              </h2>
              <span className="mb-2 hidden h-px flex-1 md:block" style={{ background: HAIRLINE }} />
            </div>
          </div>

          {/* Glass step cards */}
          <div className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lpProcess.map((s) => (
              <div
                key={s.n}
                className="group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 md:min-h-[250px] md:p-7"
                style={{
                  background: GLASS,
                  border: `1px solid ${GLASS_BORDER}`,
                  backdropFilter: "blur(14px) saturate(140%)",
                  WebkitBackdropFilter: "blur(14px) saturate(140%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 40px rgba(0,0,0,0.35)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-full top-0 h-full w-2/3 -skew-x-12 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100"
                  style={{ background: "linear-gradient(100deg, transparent, color-mix(in srgb, var(--clr-gold) 16%, transparent), transparent)" }}
                />

                <p className="font-serif text-3xl font-semibold leading-none" style={gradText}>
                  {String(s.n).padStart(2, "0")}.
                </p>

                <h3 className="mt-2.5 font-serif text-2xl font-semibold leading-snug text-luxury-gold">{s.title}</h3>
                <span
                  className="mt-2.5 block h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-14"
                  style={{ backgroundImage: "linear-gradient(90deg, var(--clr-gold), #E8BA30)" }}
                />

                <p className="mt-5 text-sm leading-relaxed" style={{ color: SOFT_TEXT }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom glass pill bar */}
          <div
            className="relative mt-6 flex flex-col items-start gap-4 rounded-2xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            style={{
              background: GLASS,
              border: `1px solid ${GLASS_BORDER}`,
              backdropFilter: "blur(14px) saturate(140%)",
              WebkitBackdropFilter: "blur(14px) saturate(140%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-sm" style={{ color: SOFT_TEXT }}>
              {lpProcessSection.bar.text}{" "}
              <span className="font-semibold text-cream-text">{lpProcessSection.bar.textBold}</span>
            </p>

            <button
              onClick={openModal}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-2 pr-6 font-sans text-sm font-semibold text-luxury-green-dark transition-transform duration-300 hover:-translate-y-0.5 border-0 cursor-pointer"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-cream-text transition-transform duration-300 group-hover:translate-x-0.5"
                style={{ backgroundImage: "linear-gradient(120deg, var(--clr-green-dark), var(--clr-gold))" }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
              {lpProcessSection.bar.cta.label}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
