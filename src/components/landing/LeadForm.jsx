import { useState } from "react";
import { Check } from "lucide-react";

/**
 * LeadForm — the single source of truth for every lead form on the page.
 * Same fields & behaviour everywhere:
 *   • Title (the section it belongs to) shown on top
 *   • Full Name  — required
 *   • Mobile     — required
 *   • Email      — optional
 *   • Submit button (label always "Submit")
 *   • Thank-you message after submit
 *
 * Props
 *   title       section title shown above the fields
 *   subtitle    optional supporting line under the title
 *   theme       "dark" (green panel) | "light" (cream/white panel)
 *   onSubmit    optional callback(data) — e.g. to close a modal or unlock a gate
 *   showThanks  show the built-in thank-you state (default true)
 *
 * All colours come from the index.css design tokens (var(--clr-*)).
 */
export default function LeadForm({
  title,
  subtitle,
  eyebrow,
  theme = "dark",
  onSubmit,
  showThanks = true,
  configOptions,
}) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: (fd.get("name") || "").toString().trim(),
      mobile: (fd.get("mobile") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      configuration: (fd.get("configuration") || "").toString().trim(),
    };
    // TODO: wire this up to your CRM / API endpoint.
    if (onSubmit) onSubmit(data);
    if (showThanks) setSent(true);
  };

  return (
    <div className={`lf lf-${theme}`}>
      {sent && showThanks ? (
        <div className="lf-success">
          <span className="lf-check">
            <Check size={28} strokeWidth={2.5} />
          </span>
          <h3 className="lf-thanks-title">Thank You</h3>
          <p className="lf-thanks-sub">
            Our team will reach out to you shortly.
          </p>
        </div>
      ) : (
        <>
          {eyebrow && <span className="lf-eyebrow">{eyebrow}</span>}
          {title && <h3 className="lf-title">{title}</h3>}
          {title && <span className="lf-rule" />}
          {subtitle && <p className="lf-sub">{subtitle}</p>}

          <form className="lf-form" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              autoComplete="name"
              className="lf-input"
            />

            <div className="lf-phone">
              <span className="lf-cc">+91</span>
              <input
                name="mobile"
                type="tel"
                required
                placeholder="Mobile Number"
                inputMode="numeric"
                maxLength={10}
                autoComplete="tel"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                }}
                className="lf-input lf-phone-input"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="lf-input"
            />

            {configOptions && configOptions.length > 0 && (
              <select name="configuration" defaultValue="" className="lf-input lf-select">
                <option value="" disabled>Choose Your Preferred Configuration</option>
                {configOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            )}

            <button type="submit" className="lf-submit">Submit</button>
          </form>
        </>
      )}

      <style>{STYLES}</style>
    </div>
  );
}

const STYLES = `
  .lf { font-family: var(--font-sans); }

  .lf-eyebrow {
    display: block; margin: 0 0 12px;
    font-size: 10px; font-weight: 600; letter-spacing: 0.3em;
    text-transform: uppercase;
  }
  .lf-title {
    font-family: var(--font-serif);
    font-size: 26px; font-weight: 600; line-height: 1.18; margin: 0 0 10px;
    letter-spacing: 0.005em;
  }
  .lf-rule {
    display: block; width: 44px; height: 2px; border-radius: 2px; margin: 0 0 16px;
    background: linear-gradient(90deg, var(--clr-gold-bright, #E8BA30), color-mix(in srgb, var(--clr-gold, #D7B975) 0%, transparent));
  }
  .lf-sub { font-size: 13px; line-height: 1.6; margin: 0 0 20px; }

  .lf-form { display: flex; flex-direction: column; gap: 13px; }
  .lf-input {
    width: 100%; box-sizing: border-box; border-radius: 12px; padding: 15px 16px;
    font-size: 14px; font-family: inherit; outline: none;
    transition: border-color .25s, background-color .25s, box-shadow .25s;
  }
  .lf-phone { display: flex; gap: 8px; }
  .lf-cc {
    display: flex; align-items: center; padding: 0 15px; border-radius: 12px;
    font-size: 14px; font-weight: 600; flex-shrink: 0; letter-spacing: 0.02em;
  }
  .lf-phone-input { flex: 1; min-width: 0; }

  .lf-select {
    width: 100%; box-sizing: border-box; cursor: pointer;
    -webkit-appearance: none; -moz-appearance: none; appearance: none;
    padding-right: 42px;
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px 16px;
  }

  .lf-submit {
    margin-top: 8px; width: 100%; border: none; cursor: pointer;
    padding: 16px; border-radius: 12px;
    font-size: 12px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
    font-family: inherit; position: relative; overflow: hidden;
    transition: transform .2s, box-shadow .25s, opacity .2s;
  }
  .lf-submit:hover { transform: translateY(-1px); }

  .lf-success {
    display: flex; flex-direction: column; align-items: center; text-align: center;
    gap: 8px; padding: 18px 6px;
  }
  .lf-check {
    width: 64px; height: 64px; border-radius: 50%; margin-bottom: 8px;
    display: flex; align-items: center; justify-content: center;
  }
  .lf-thanks-title {
    font-family: var(--font-serif);
    font-size: 26px; font-weight: 600; margin: 0;
  }
  .lf-thanks-sub { font-size: 13px; margin: 0; }

  /* ── Dark theme (sits on a green panel) ── */
  .lf-dark .lf-eyebrow { color: var(--clr-gold-bright, #E8BA30); }
  .lf-dark .lf-title { color: var(--clr-gold, #D7B975); }
  .lf-dark .lf-sub { color: var(--clr-cream-text, #FAF6EB); opacity: .78; }
  .lf-dark .lf-input {
    background-color: rgba(255,255,255,0.06);
    border: 1px solid color-mix(in srgb, var(--clr-gold, #D7B975) 25%, transparent);
    color: var(--clr-cream-text, #FAF6EB);
  }
  .lf-dark .lf-input::placeholder { color: var(--clr-cream-text, #FAF6EB); opacity: .45; }
  .lf-dark .lf-input:focus {
    border-color: var(--clr-gold, #D7B975); background-color: rgba(255,255,255,0.1);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--clr-gold, #D7B975) 16%, transparent);
  }
  .lf-dark .lf-cc {
    background-color: rgba(255,255,255,0.06);
    border: 1px solid color-mix(in srgb, var(--clr-gold, #D7B975) 25%, transparent);
    color: var(--clr-gold, #D7B975);
  }
  .lf-dark .lf-select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23D7B975' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  }
  .lf-dark .lf-select option { color: #082B1F; }
  .lf-dark .lf-submit {
    background: var(--grad-gold, linear-gradient(135deg, #E8BA30, #D7B975));
    color: var(--clr-green-dark, #062319);
    box-shadow: 0 12px 28px color-mix(in srgb, var(--clr-gold, #D7B975) 35%, transparent);
  }
  .lf-dark .lf-submit:hover { box-shadow: 0 16px 34px color-mix(in srgb, var(--clr-gold, #D7B975) 45%, transparent); }
  .lf-dark .lf-check { background: var(--clr-gold, #D7B975); color: var(--clr-green-dark, #062319); }
  .lf-dark .lf-thanks-title { color: var(--clr-gold, #D7B975); }
  .lf-dark .lf-thanks-sub { color: var(--clr-cream-text, #FAF6EB); opacity: .75; }

  /* ── Light theme (sits on a white / cream panel) ── */
  .lf-light .lf-eyebrow { color: var(--clr-gold, #D7B975); }
  .lf-light .lf-title { color: var(--clr-green-dark, #062319); }
  .lf-light .lf-sub { color: var(--clr-sage, #478570); }
  .lf-light .lf-input {
    background-color: var(--clr-bg-cream, #FAF7F0);
    border: 1px solid color-mix(in srgb, var(--clr-gold, #D7B975) 32%, transparent);
    color: var(--clr-fg-green, #082B1F);
    box-shadow: inset 0 1px 2px rgba(8,43,31,0.04);
  }
  .lf-light .lf-input::placeholder { color: var(--clr-fg-green, #082B1F); opacity: .42; }
  .lf-light .lf-input:focus {
    border-color: var(--clr-gold, #D7B975); background-color: var(--clr-white, #fff);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--clr-gold, #D7B975) 18%, transparent);
  }
  .lf-light .lf-cc {
    background-color: var(--clr-bg-cream, #FAF7F0);
    border: 1px solid color-mix(in srgb, var(--clr-gold, #D7B975) 32%, transparent);
    color: var(--clr-green-dark, #062319);
  }
  .lf-light .lf-select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23082B1F' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  }
  .lf-light .lf-select option { color: var(--clr-fg-green, #082B1F); }
  .lf-light .lf-submit {
    background: var(--grad-green, linear-gradient(180deg, #0B412F, #082B1F));
    color: var(--clr-cream-text, #FAF6EB);
    box-shadow: 0 12px 28px rgba(8,43,31,0.18);
  }
  .lf-light .lf-submit::after {
    content: ''; position: absolute; inset: 0; opacity: 0; transition: opacity .3s;
    background: linear-gradient(120deg, transparent, color-mix(in srgb, var(--clr-gold, #D7B975) 22%, transparent), transparent);
  }
  .lf-light .lf-submit:hover { box-shadow: 0 16px 34px rgba(8,43,31,0.26); }
  .lf-light .lf-submit:hover::after { opacity: 1; }
  .lf-light .lf-check { background: var(--clr-green-dark, #062319); color: var(--clr-gold, #D7B975); }
  .lf-light .lf-thanks-title { color: var(--clr-green-dark, #062319); }
  .lf-light .lf-thanks-sub { color: var(--clr-sage, #478570); }
`;