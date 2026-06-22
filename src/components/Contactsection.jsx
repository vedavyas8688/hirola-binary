import { MapPin, Phone, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { contactSection } from "../data/siteData";

export default function ContactSection() {
  const { phone, phoneHref, email, address } = contactSection;

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />,
      label: "Address",
      content: address,
      href: null,
    },
    {
      icon: <Phone className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />,
      label: "Phone",
      content: phone,
      href: phoneHref,
    },
    {
      icon: <Mail className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />,
      label: "Email",
      content: email,
      href: `mailto:${email}`,
    },
  ];

  return (
    <section className="py-10 md:py-20 lg:py-24 overflow-hidden bg-luxury-green-dark">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-start">

          {/* ── Left: Info ── */}
          <Reveal variant="left" className="space-y-6 md:space-y-8 order-2 lg:order-1">

            {/* Heading */}
            <div className="px-2 md:px-0">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-cream-text mb-4 md:mb-6">
                GET IN <span className="text-luxury-gold">TOUCH</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-white leading-relaxed">
                We'd love to hear from you. Whether you have a question about
                features, plans, pricing, or anything else, our team is ready
                to answer all your questions.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-6 md:space-y-8 px-2 md:px-0">
              {contactInfo.map(({ icon, label, content, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-luxury-gold/40 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg md:text-xl font-normal text-luxury-gold mb-1">
                      {label}
                    </h3>
                    {href ? (
                      <a
                        href={href}
                        className="font-sans text-sm md:text-base text-white hover:text-luxury-gold transition-colors break-all"
                      >
                        {content}
                      </a>
                    ) : (
                      <p className="font-sans text-sm md:text-base text-white leading-relaxed">
                        {content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </Reveal>

          {/* ── Right: Map ── */}
          <Reveal variant="right" delay={150} className="relative order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 rounded-xl overflow-hidden shadow-2xl border-4 border-luxury-gold/30">
              <iframe
                src="https://www.google.com/maps?q=Chambenahalli,+Sarjapur+Road,+Bengaluru&output=embed"
                width="100%"
                height="500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Binary Ventures Project 4 Location"
                className="w-full"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>

        </div>

        {/* ── Divider line after the section ── */}
        <div className="mt-2 md:mt-16 lg:mt-20 h-px w-full bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent" />

      </div>
    </section>
  );
}