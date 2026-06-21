import { Link } from "react-router-dom";
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
    { label: "Blog", href: "/blogpage" },
    { label: "Location", href: "/location" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-luxury-green-dark text-white">

      <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-8 -pt-5 pb-12">
        <div className="grid gap-12 md:grid-cols-[1.8fr_1fr_1fr]">

          {/* ── Brand ── */}
          <div className="space-y-6">
            <img src={logoLeft} alt="Binary Ventures" className="h-12 md:h-16" />
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
            <Link
              to="/contact"
              className="inline-block rounded-full font-sans font-semibold text-sm px-7 py-2.5 text-luxury-green-dark bg-luxury-gold hover:bg-luxury-gold/90 transition-colors duration-200"
            >
              Enquire Now
            </Link>
          </div>

          {/* ── Explore ── */}
          <div>
            <h4 className="font-serif text-lg text-luxury-gold mb-1">Explore</h4>
            <div className="h-px w-10 bg-luxury-gold/40 mb-5" />
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="font-sans text-sm text-white/60 hover:text-luxury-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="text-luxury-gold/50 group-hover:text-luxury-gold" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Find Us ── */}
          <div>
            <h4 className="font-serif text-lg text-luxury-gold mb-1">Find Us</h4>
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
                href="tel:+919611211255"
                className="flex items-center gap-3 font-sans text-sm text-white/60 hover:text-luxury-gold transition-colors"
              >
                <Phone size={16} className="text-luxury-gold" />
                +91 96112 11255
              </a>
              <a
                href="mailto:sales@binaryventures.in"
                className="flex items-center gap-3 font-sans text-sm text-white/60 hover:text-luxury-gold transition-colors"
              >
                <Mail size={16} className="text-luxury-gold" />
                 sales@binaryrealty.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar with watermark ── */}
      <div className="relative border-t border-white/10 overflow-hidden">

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-sans text-xs text-white/40">
            © 2026 Binary Ventures. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="font-sans text-xs text-white/40 hover:text-luxury-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              className="font-sans text-xs text-white/40 hover:text-luxury-gold transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}