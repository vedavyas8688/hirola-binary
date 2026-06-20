import {
  FaSwimmingPool,
  FaBuilding,
  FaDumbbell,
  FaSpa,
  FaChild,
  FaTableTennis,
  FaTree,
  FaTheaterMasks,
  FaBook,
  FaDog,
  FaWalking,
  FaShieldAlt,
} from "react-icons/fa";

const amenities = [
  { label: "Swimming Pool",     icon: <FaSwimmingPool /> },
  { label: "Grand Clubhouse",   icon: <FaBuilding /> },
  { label: "Fitness Deck",      icon: <FaDumbbell /> },
  { label: "Yoga & Wellness",   icon: <FaSpa /> },
  { label: "Kids Play Zone",    icon: <FaChild /> },
  { label: "Sports Courts",     icon: <FaTableTennis /> },
  { label: "Landscape Gardens", icon: <FaTree /> },
  { label: "Amphitheatre",      icon: <FaTheaterMasks /> },
  { label: "Library Lounge",    icon: <FaBook /> },
  { label: "Pet Park",          icon: <FaDog /> },
  { label: "Walking Trails",    icon: <FaWalking /> },
  { label: "24/7 Security",     icon: <FaShieldAlt /> },
];

export default function AmenitiesSection() {
  return (
    <section className="bg-luxury-green-dark py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-widest text-luxury-gold mb-3">
            AN ENCLAVE OF EXQUISITE AMENITIES
          </h2>
          <p className="text-xs text-cream-text/50 tracking-[0.3em] uppercase">
            A Sanctuary of Belonging
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12">
          {amenities.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-5 py-10 px-4 border border-luxury-gold/25 rounded-xl bg-luxury-gold/[0.03] hover:bg-luxury-gold/[0.08] hover:border-luxury-gold/50 transition-all duration-250 cursor-default min-h-[180px]"
            >
              {/* Circle icon */}
              <div className="w-16 h-16 rounded-full border border-luxury-gold/50 flex items-center justify-center text-luxury-gold text-2xl flex-shrink-0">
                {item.icon}
              </div>
              {/* Label */}
              <span className="text-[0.78rem] text-luxury-gold text-center tracking-wide leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/amenities"
            className="inline-block px-10 py-3 border border-luxury-gold text-luxury-gold text-xs tracking-[0.15em] uppercase rounded-full hover:bg-luxury-gold hover:text-luxury-green-dark transition-all duration-200"
          >
            VIEW ALL 60+ AMENITIES
          </a>
        </div>

      </div>
    </section>
  );
}