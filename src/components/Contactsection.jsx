import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />,
    label: "Address",
    content: "Chambenahalli, Sarjapur Road, Bengaluru, Karnataka.",
    href: null,
  },
  {
    icon: <Phone className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />,
    label: "Phone",
    content: "+91 00000 00000",
    href: "tel:+910000000000",
  },
  {
    icon: <Mail className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />,
    label: "Email",
    content: "info@binaryventures.in",
    href: "mailto:info@binaryventures.in",
  },
];

export default function ContactSection() {
  return (
    <section
      className="py-10 md:py-20 lg:py-24 overflow-hidden bg-luxury-green-dark"
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-start">

          {/* ── Left: Info ── */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">

            {/* Heading */}
            <div className="px-2 md:px-0">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-cream-text mb-4 md:mb-6">
                GET IN <span className="text-luxury-gold">TOUCH</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-cream-text/70 leading-relaxed">
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
                        className="font-sans text-sm md:text-base text-cream-text/70 hover:text-luxury-gold transition-colors break-all"
                      >
                        {content}
                      </a>
                    ) : (
                      <p className="font-sans text-sm md:text-base text-cream-text/70 leading-relaxed">
                        {content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="border border-luxury-gold/20 rounded-md p-4 md:p-6 lg:p-8 bg-luxury-gold/5">
              <h3 className="font-serif text-lg md:text-xl font-normal text-luxury-gold mb-3 md:mb-4">
                Site Office Hours
              </h3>
              <div className="space-y-2 font-sans text-sm md:text-base text-cream-text/70">
                <p className="flex justify-between gap-2">
                  <span className="text-cream-text font-medium">Monday – Saturday:</span>
                  <span>10:00 AM – 6:30 PM</span>
                </p>
                <p className="flex justify-between gap-2">
                  <span className="text-cream-text font-medium">Sunday:</span>
                  <span>10:00 AM – 6:30 PM</span>
                </p>
              </div>
            </div>

          </div>

          {/* ── Right: Map ── */}
          <div className="relative order-1 lg:order-2">
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
          </div>

        </div>
      </div>
    </section>
  );
}