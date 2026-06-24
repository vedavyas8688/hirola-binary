 import { lpFooter, lpConfig } from "../../data/landingData";
import logoRealty from "../../assets/images/logo-right.png";
import logoCodename from "../../assets/images/logo-left3.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const SOCIALS = [
  { Icon: BsInstagram, href: lpConfig.social.instagram, label: "Instagram" },
  { Icon: FaFacebook, href: lpConfig.social.facebook, label: "Facebook" },
  { Icon: FaYoutube, href: lpConfig.social.youtube, label: "YouTube" },
  { Icon: FaLinkedin, href: lpConfig.social.linkedin, label: "LinkedIn" },
];

export default function LandingFooter() {
  return (
    <footer className="bg-luxury-green-dark text-cream-text">
      {/* gold top rule */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(215,185,117,0.5) 20%, rgba(215,185,117,0.7) 50%, rgba(215,185,117,0.5) 80%, transparent)" }} />

      <div className="px-5 sm:px-8 md:px-12 lg:px-20 max-w-screen-2xl mx-auto py-14 md:py-20">
        <div className="grid gap-12 md:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand + logos + ethos */}
          <div>
            <div className="flex items-center gap-4">
              <img src={logoRealty} alt="Binary Realty" className="h-11 w-auto" />
              <span className="w-px h-9 bg-luxury-gold/25" />
              <img src={logoCodename} alt="Project4 — Codename Project 4" className="h-12 w-auto" />
            </div>
            <p className="mt-3 text-luxury-gold text-[11px] font-semibold uppercase tracking-[0.22em]">
              {lpConfig.brandName} · Codename {lpConfig.codename}
            </p>
            <p className="mt-5 text-cream-text/65 text-[14px] leading-relaxed max-w-sm">{lpFooter.ethos}</p>

            {/* socials */}
            <div className="flex items-center gap-3 mt-7">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/25 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-green-dark transition-colors duration-200"
                >
                  <Icon size={17} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {/* col: project */}
          <FooterCol title={lpFooter.colCuration.title} links={lpFooter.colCuration.links} />

          {/* col: explore */}
          <FooterCol title={lpFooter.colRefinement.title} links={lpFooter.colRefinement.links} />

          {/* contact */}
          <div>
            <h4 className="text-luxury-gold text-[11px] font-semibold uppercase tracking-[0.22em] mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.6} className="text-luxury-gold flex-shrink-0 mt-0.5" />
                <span className="text-cream-text/70 text-[13.5px] leading-relaxed">{lpConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.6} className="text-luxury-gold flex-shrink-0" />
                <a href={lpConfig.phoneHref} className="lp-underline text-cream-text/80 text-[14px] hover:text-luxury-gold">{lpConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} strokeWidth={1.6} className="text-luxury-gold flex-shrink-0" />
                <a href={lpConfig.emailHref} className="lp-underline text-cream-text/80 text-[14px] hover:text-luxury-gold">{lpConfig.email}</a>
              </li>
            </ul>

            <a
              href={lpConfig.whatsapp} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 rounded-full border border-luxury-gold/30 px-5 py-2.5 text-luxury-gold text-[11px] font-semibold uppercase tracking-[0.16em] hover:bg-luxury-gold hover:text-luxury-green-dark transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 pt-7 border-t border-luxury-gold/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-text/45 text-[12px] text-center md:text-left">
            © {new Date().getFullYear()} {lpConfig.developer}. All rights reserved. · {lpConfig.rera}
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="lp-underline text-cream-text/55 text-[12px] hover:text-luxury-gold">Privacy Policy</a>
            <a href="/terms-and-conditions" className="lp-underline text-cream-text/55 text-[12px] hover:text-luxury-gold">Terms &amp; Conditions</a>
          </div>
        </div>

        <p className="mt-6 text-cream-text/35 text-[11px] leading-relaxed max-w-4xl">
          Disclaimer: This is not an offer, an invitation to offer and/or commitment of any nature. The images shown are artistic
          impressions and the project is subject to RERA approvals. "{lpConfig.codename}" is an internal codename for {lpConfig.brandName}.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-luxury-gold text-[11px] font-semibold uppercase tracking-[0.22em] mb-5">{title}</h4>
      <ul className="space-y-3.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="lp-underline text-cream-text/70 text-[14px] hover:text-luxury-gold transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
