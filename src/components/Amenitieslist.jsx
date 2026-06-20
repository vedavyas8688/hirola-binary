const categories = [
  {
    title: "Arrival & Access",
    items: [
      "Entry/Exit Gate with Security Cabin",
      "Clubhouse Drop-Off",
      "Tower Lobby Drop-Off",
      "Service Entry/Exit",
      "Waiting Plaza",
      "Viewing Gallery",
    ],
  },
  {
    title: "Spiritual & Wellness",
    items: [
      "Temple Garden",
      "Meditation Court",
      "Ritual Court",
      "Wellness Garden",
      "Reflexology Path",
      "Fragrance Garden",
      "Interactive Sensory Garden Pavilion",
    ],
  },
  {
    title: "Community & Social Spaces",
    items: [
      "Community Plaza",
      "Amphitheatre & Performance Stage",
      "Community Lawn",
      "Informal Seating Area",
      "Leisure Court",
      "Sculpture Court",
      "Working Pod",
      "Resting Pavilion",
      "Library & Reading Pavilion",
    ],
  },
  {
    title: "Sports & Fitness",
    items: [
      "Multi-Purpose Play Court",
      "Outdoor Exercise Station",
      "Fitness Deck",
      "Skating Rink",
      "Cricket Practice Nets",
      "Walking Trail",
    ],
  },
  {
    title: "Kids Recreation",
    items: [
      "Adventure Play Area",
      "Toddler Interactive Play Zone",
      "Kids Play Lawn",
      "Circle of Joy Play Zone",
      "Tree House & Jungle Gym",
    ],
  },
  {
    title: "Senior & Pet Zones",
    items: [
      "Senior Citizen Corner",
      "Pet Play Park",
    ],
  },
  {
    title: "Landscape Features",
    items: [
      "Earth Berms",
      "Floral Garden",
      "Butterfly Garden",
      "Avenue Plantation",
      "Community Spine Walkway",
    ],
  },
  {
    title: "Swimming Pool Zone",
    items: [
      "Main Swimming Pool",
      "Kids Pool",
      "Premium Pool Lounge",
      "Pool Deck Cabanas",
    ],
  },
  {
    title: "Terrace Amenities",
    items: [
      "Yoga Court",
      "Sky Cinema Terrace",
      "BBQ Lawn Court",
      "Juice Bar Counter",
      "Bonfire Court",
      "Sun Deck Lounge",
      "Star Gazing Court",
      "Sunrise Court",
      "Sunset Deck",
    ],
  },
  {
    title: "Utilities",
    items: ["Services Area"],
  },
];

export default function AmenitiesList() {
  return (
    <section className="py-12 md:py-20 lg:py-28 overflow-hidden bg-luxury-green-dark">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-cream-text uppercase mb-4">
            60+ Curated{" "}
            <span className="text-luxury-gold">Amenities</span>
          </h2>
           
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map(({ title, items }) => (
            <div
              key={title}
              className="bg-card-white rounded-lg shadow-lg p-6 md:p-8"
            >
              <h3 className="font-serif text-xl md:text-2xl text-luxury-gold mb-4 pb-2 border-b border-luxury-gold/40">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-sm md:text-base text-muted-sage leading-relaxed"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}