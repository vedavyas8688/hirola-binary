import React from "react";
import { Building2, ChefHat, Bath, LayoutGrid, PaintRoller, DoorOpen } from "lucide-react";

const SPECIFICATIONS = [
  {
    title: "Structure",
    icon: Building2,
    items: [
      "High ceilings and robust walls (150mm/100mm) for an enduring impression of elegance and stability.",
      "Performance meets quality at Project 4.",
    ],
  },
  {
    title: "Kitchen",
    icon: ChefHat,
    items: [
      "Designed with efficiency at its core.",
      "Premium CP fittings from KOHLER for unmatched quality and performance.",
    ],
  },
  {
    title: "Bathroom",
    icon: Bath,
    items: [
      "Embodies both function and luxury.",
      "Sanitary ware and CP fittings by KOHLER.",
    ],
  },
  {
    title: "Flooring",
    icon: LayoutGrid,
    items: [
      "High quality Vitrified double-charge tiles.",
      "Graces the foyer, living, dining, kitchen, and bedrooms for a refined finish throughout.",
    ],
  },
  {
    title: "Wall Finish",
    icon: PaintRoller,
    items: [
      "Toilet walls finished with glazed ceramic tiles up to false ceiling level.",
      "All internal walls with 2 coats of putty, 1 coat of primer and 2 coats of premium emulsion.",
    ],
  },
  {
    title: "Doors & Windows",
    icon: DoorOpen,
    items: [
      "UPVC framed windows and French windows elevate the master bedroom with grace and quality.",
      "Pre-hung laminated doors add a refined aesthetic.",
    ],
  },
];

const SpecificationsSection = () => {
  return (
    <section className="py-10 md:py-20 lg:py-24 overflow-hidden bg-bg-cream">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold uppercase">
            Specifications
          </h2>
          <p className="mt-4 max-w-3xl mx-auto font-sans text-sm sm:text-base md:text-lg text-muted-sage">
            Every home at Project 4 is crafted with premium materials,
            thoughtful detailing and future-ready services, ensuring comfort,
            safety and longevity for your family.
          </p>
        </div>

        {/* ── Spec cards ── */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {SPECIFICATIONS.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-card-white to-luxury-cream/30 border-2 border-luxury-gold/30 rounded-xl shadow-lg p-4 md:p-5 lg:p-6 space-y-3 hover:shadow-2xl hover:border-luxury-gold/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-luxury-green border-4 border-luxury-gold flex items-center justify-center shadow-lg">
                  <Icon
                    className="w-9 h-9 md:w-11 md:h-11 text-luxury-gold"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-luxury-gold text-center uppercase">
                {title}
              </h3>
              <ul className="mt-2 space-y-2 font-sans text-xs sm:text-sm text-muted-sage leading-relaxed">
                {items.map((item) => (
                  <li key={item} className="leading-relaxed">
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
};

export default SpecificationsSection;