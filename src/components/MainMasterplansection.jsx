import { useState } from "react";
import { X, Download, CheckCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import { masterPlan } from "../data/siteData";

export default function MainMasterplansection() {
  const [showForm, setShowForm] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const downloadImage = async () => {
    try {
      const response = await fetch(masterPlan.image);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = masterPlan.downloadName || "MasterPlan.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(masterPlan.image, "_blank");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
    await new Promise((r) => setTimeout(r, 1500));
    setShowForm(false);
    setUnlocked(true);
    setSubmitted(false);
    downloadImage();
  };

  const inputClass =
    "w-full font-sans text-sm text-foreground-green bg-white rounded-md px-4 py-3 outline-none appearance-none transition-colors placeholder:text-muted-sage";

  // Inline style guarantees border visibility — bypasses Tailwind token resolution entirely
  const inputStyle = {
    border: "2px solid #6b8f71",
    boxSizing: "border-box",
  };

  const inputFocusHandlers = {
    onFocus: (e) => { e.target.style.borderColor = "#C9A84C"; },
    onBlur:  (e) => { e.target.style.borderColor = "#6b8f71"; },
  };

  const labelClass =
    "font-serif text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-sage";

  return (
    <>
      {/* ── Section (BEIGE background) ── */}
      <section id="masterplan" className="overflow-hidden py-16 md:py-24 bg-bg-cream">
        <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">

            {/* ── Left: text ── */}
            <Reveal variant="left" className="flex flex-col">
              <div className="mb-6 flex items-center gap-3">
                <span className="block h-px w-8 flex-shrink-0 bg-luxury-gold" />
                <span className="font-serif text-xs font-semibold uppercase tracking-[0.24em] text-luxury-gold">
                  {masterPlan.label}
                </span>
              </div>

              <h2 className="mb-8 font-serif font-normal leading-tight text-foreground-green text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {masterPlan.titleLine1}
                <br />
                <span className="text-luxury-gold">{masterPlan.titleLine2}</span>
              </h2>

              <p className="mb-6 font-sans text-base leading-relaxed text-muted-sage">
                {masterPlan.description}
              </p>
              <p className="font-sans text-base leading-relaxed text-muted-sage">
                {masterPlan.description2}
              </p>
            </Reveal>

            {/* ── Right: blurred image + unlock ── */}
            <Reveal variant="right" delay={150}>
              <div className="relative overflow-hidden rounded-2xl bg-card-white border border-border shadow-xl">
                <img
                  src={masterPlan.image}
                  alt="Master Plan"
                  className="w-full h-[420px] object-cover transition-all duration-700"
                  style={{
                    filter: unlocked ? "none" : "blur(14px)",
                    transform: unlocked ? "scale(1)" : "scale(1.06)",
                  }}
                />

                {!unlocked && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-luxury-green-dark/30">
                    <button
                      onClick={() => setShowForm(true)}
                      className="group inline-flex items-center gap-3 bg-luxury-green-dark px-8 py-3.5 font-serif text-sm font-semibold uppercase tracking-[0.18em] text-cream-text transition-all duration-300 hover:bg-luxury-green"
                    >
                      View Full Masterplan
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                    <p className="font-sans text-xs text-cream-text/90 tracking-wide">
                      Fill a quick form to unlock &amp; download
                    </p>
                  </div>
                )}

                {unlocked && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-luxury-green-dark/80 px-4 py-2 rounded-md">
                    <CheckCircle size={14} className="text-luxury-gold" />
                    <span className="font-serif text-[10px] uppercase tracking-[0.2em] text-cream-text">
                      Masterplan Unlocked
                    </span>
                  </div>
                )}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-luxury-green-dark/80"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-xl bg-card-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold top bar */}
            <div className="h-1 bg-gradient-to-r from-luxury-gold via-bright-gold to-luxury-gold" />

            {/* Header */}
            <div className="flex items-start justify-between px-8 pb-5 pt-7 bg-luxury-cream">
              <div>
                <p className="mb-2 font-serif text-[10px] font-semibold uppercase tracking-[0.3em] text-luxury-gold">
                  Binary Ventures
                </p>
                <h3 className="font-serif font-semibold leading-[1.2] text-foreground-green text-2xl">
                  Unlock Master Plan
                </h3>
                <p className="mt-1.5 font-sans text-sm text-muted-sage">
                  Share your details to download the full master plan instantly.
                </p>
              </div>
              <button
                onClick={() => setShowForm(false)}
                aria-label="Close"
                className="mt-0.5 text-foreground-green transition-opacity hover:opacity-70"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-card-white px-8 py-7">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-luxury-cream">
                    <Download size={28} className="text-luxury-gold" />
                  </div>
                  <p className="text-center font-serif text-2xl font-semibold text-foreground-green">
                    Download Starting...
                  </p>
                  <p className="text-center font-sans text-sm text-muted-sage">
                    Your master plan will download shortly. Unlocking the image now.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className={inputClass}
                        style={inputStyle}
                        {...inputFocusHandlers}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className={inputClass}
                        style={inputStyle}
                        {...inputFocusHandlers}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                      className={inputClass}
                      style={inputStyle}
                      {...inputFocusHandlers}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Message (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any specific questions about the project?"
                      rows={3}
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                      {...inputFocusHandlers}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-1 inline-flex w-full items-center justify-center gap-2 bg-luxury-green-dark px-8 py-3.5 font-serif text-sm font-semibold uppercase tracking-[0.18em] text-cream-text transition-all duration-300 hover:bg-luxury-green disabled:opacity-70"
                  >
                    <Download size={15} />
                    {submitting ? "Processing..." : "Download Master Plan"}
                  </button>

                  <p className="text-center font-serif text-[9px] uppercase tracking-[0.15em] text-muted-sage/60">
                    Your details are safe with us · No spam
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}