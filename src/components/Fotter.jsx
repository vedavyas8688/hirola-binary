import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logoLeft from "../assets/images/logo-left.svg";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebook },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
];

export default function Footer() {
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Amenities", href: "/amenities" },
    { label: "Unit Plans", href: "/unit-plans" },
    { label: "Gallery", href: "/gallery" },
    { label: "Project Status", href: "/project-status" },
    { label: "Location", href: "/location" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-luxury-green-dark text-white">

      {/* Top gold hairline */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(42 55% 65%), transparent)",
        }}
      />

      {/* ── Background watermark ── */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-2 md:-bottom-4 lg:-bottom-8 left-1/2 -translate-x-1/2 font-serif leading-none whitespace-nowrap text-[28vw] md:text-[22vw] lg:text-[18vw] text-luxury-gold/[0.08]"
      >
        Binary
      </span>

      <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-8 pt-16 pb-12">
        <div className="grid gap-12 md:grid-cols-[1.8fr_1fr_1fr]">

          {/* ── Brand ── */}
          <div className="space-y-6">
            <img
              src={logoLeft}
              alt="Binary Ventures"
              className="h-12 md:h-16"
            />

            <p className="font-sans text-sm leading-relaxed text-white/60 max-w-xs">
              Ultra-luxury 2 &amp; 3 BHK living on Sarjapur Road by Binary
              Ventures — 80% open space, only 6 apartments per floor and homes
              with no common walls.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-luxury-gold/40 flex items-center justify-center hover:border-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300"
                >
                  <Icon size={16} className="text-luxury-gold" />
                </a>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-block rounded-full font-sans font-semibold text-sm px-7 py-2.5 text-luxury-green-dark bg-luxury-gold hover:bg-luxury-gold/90 transition-colors duration-200"
            >
              Enquire Now
            </a>
          </div>

          {/* ── Explore ── */}
          <div>
            <h4 className="font-serif text-lg text-luxury-gold mb-1">
              Explore
            </h4>
            <div className="h-px w-10 bg-luxury-gold/40 mb-5" />
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-sm text-white/60 hover:text-luxury-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="text-luxury-gold/50 group-hover:text-luxury-gold"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Find Us ── */}
          <div>
            <h4 className="font-serif text-lg text-luxury-gold mb-1">
              Find Us
            </h4>
            <div className="h-px w-10 bg-luxury-gold/40 mb-5" />
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-luxury-gold mt-1 shrink-0" />
                <div className="font-sans text-sm text-white/60 leading-relaxed">
                  <p>Chambenahalli,</p>
                  <p>Sarjapur Road,</p>
                  <p>Bengaluru, Karnataka – 560035</p>
                </div>
              </div>

              <a
                href="tel:+918000000000"
                className="flex items-center gap-3 font-sans text-sm text-white/60 hover:text-luxury-gold transition-colors"
              >
                <Phone size={16} className="text-luxury-gold" />
                +91 80 0000 0000
              </a>

              <a
                href="mailto:sales@binaryventures.in"
                className="flex items-center gap-3 font-sans text-sm text-white/60 hover:text-luxury-gold transition-colors"
              >
                <Mail size={16} className="text-luxury-gold" />
                sales@binaryventures.in
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-sans text-xs text-white/40">
            © 2026 Binary Ventures. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              className="font-sans text-xs text-white/40 hover:text-luxury-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-use"
              className="font-sans text-xs text-white/40 hover:text-luxury-gold transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}