import { MapPin, Ruler, Trees, Building2 } from "lucide-react";

const features = [
  {
    title: "The Sarjapura Advantage",
    icon: MapPin,
    points: [
      "10–15 minutes to the ORR IT corridor, major tech parks and business hubs.",
      "Close to leading schools, hospitals, and lifestyle avenues.",
      "Future-ready location with STRR, Swift City and Metro Phase 3A connectivity.",
      "EOI refundable, with transparency and complete legal clarity.",
    ],
  },
  {
    title: "Thoughtful by Design",
    icon: Ruler,
    points: [
      { bold: "80% ", text: "open spaces with landscaped greens and serene walkways." },
      "No common walls for unmatched privacy.",
      "Vastu-compliant layouts that balance energy and comfort.",
      "Large balconies that open up to light, air, and views.",
    ],
  },
  {
    title: "The Flow of Community",
    icon: Trees,
    points: [
      "A masterplan inspired by nature's rhythm — open, connected, alive.",
      "Spaces that spark connection and nurture belonging.",
      "Dedicated zones for wellness, play, and shared joy.",
    ],
  },
  {
    title: "Beyond the Ordinary",
    icon: Building2,
    points: [
      { bold: "8,000+ sq.ft. ", text: "clubhouse for leisure, fitness, and celebration." },
      { bold: "60+ ", text: "curated amenities for wellness, play, and relaxation." },
      "Sunlit pools, recreation decks, and green escapes.",
      "Smart living systems for ease and comfort.",
      "Sustainable design where luxury meets responsibility.",
    ],
  },
];

export default function AboutFeatures() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-bg-cream">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* ── Heading ── */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-foreground-green">
            DESIGNED FOR{" "}
            <span className="text-luxury-gold">LIFE</span>
          </h2>
           
        </div>

        {/* ── Cards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map(({ title, icon: Icon, points }) => (
            <div
              key={title}
              className="rounded-xl overflow-hidden border-2 border-luxury-gold/40 shadow-lg bg-card-white"
            >
              {/* Card header */}
              <div className="bg-luxury-green-dark px-4 py-5 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-luxury-gold/90 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-foreground-green" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-base md:text-lg font-normal text-cream-text/80">
                  {title}
                </h3>
              </div>

              {/* Card body */}
              <div className="bg-card-white px-4 py-4 min-h-[180px]">
                <ul className="space-y-2">
                  {points.map((point, i) => (
                    <li
                      key={i}
                      className="font-sans text-sm md:text-base text-muted-sage leading-relaxed"
                    >
                      {"• "}
                      {typeof point === "string" ? (
                        point
                      ) : (
                        <>
                          <span className="font-semibold text-foreground-green">
                            {point.bold}
                          </span>
                          {point.text}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}