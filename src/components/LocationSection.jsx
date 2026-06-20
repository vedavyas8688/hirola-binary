import { useState } from "react";
import three from "../assets/images/3.jpg";

const locationCategories = [
  {
    label: "Institutes",
    items: [
      "Azim Premji University (3 Km)",
      "Endevour International School (5 Km)",
      "Champion International School (5 Km)",
      "Wellsprings Academy (5 Km)",
      "Vartika Montessori School (5 Km)",
      "Cambridge Innovative School (5 Km)",
      "Greenwood High Sarjapur (8 Km)",
      "TISB Academy School (9 Km)",
      "Oakridge International School (9 Km)",
      "Delhi Public School (DPS) (10 Km)",
      "Christ College of Science and Management (15 Km)",
    ],
  },
  {
    label: "IT Companies",
    items: [
      "Wipro Campus (3 Km)",
      "Infosys SEZ Sarjapur (4 Km)",
      "RGA Tech Park (6 Km)",
      "Cessna Business Park (7 Km)",
      "Salarpuria Softzone (8 Km)",
      "Embassy Tech Village (10 Km)",
      "Electronic City Phase 1 (12 Km)",
      "Bagmane Tech Park (14 Km)",
    ],
  },
  {
    label: "Hospitals",
    items: [
      "Motherhood Hospital Sarjapur (4 Km)",
      "Manipal Hospital Sarjapur (5 Km)",
      "Columbia Asia Hospital (6 Km)",
      "Narayana Multispeciality Hospital (8 Km)",
      "Sakra World Hospital (10 Km)",
      "Apollo Hospital Bannerghatta (12 Km)",
    ],
  },
  {
    label: "Shopping",
    items: [
      "Forum Mall Koramangala (8 Km)",
      "Total Mall Sarjapur (5 Km)",
      "DMart Sarjapur (3 Km)",
      "Market Square Mall (9 Km)",
      "Nexus Shantiniketan (11 Km)",
      "Phoenix Marketcity (13 Km)",
    ],
  },
];

export default function LocationSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="relative overflow-hidden py-12 md:py-16 lg:py-0 bg-luxury-green-dark"
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-12 h-full">
        <div className="grid gap-8 md:gap-10 lg:gap-0 lg:grid-cols-2 items-start relative h-full">

          {/* ── Left: Text + Accordion ── */}
          <div className="w-full py-4 md:py-6 lg:py-12 relative z-20">
            <div className="text-left mb-6 md:mb-8">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-luxury-gold">
                FROM SUBURBAN SOLITUDE TO URBAN CONNECTIVITY
              </h2>
              <p className="font-sans text-base md:text-lg text-cream-text/80 max-w-4xl mt-3 md:mt-4">
                Perfectly positioned on Sarjapur Road, Project 4 stands at the
                heart of Bengaluru's next big growth zone. With landmark
                projects like STRR, PRR, SWIFT City and Metro Phase 3A, the
                neighbourhood promises seamless connectivity and strong future
                value.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-0">
              {locationCategories.map((cat, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={cat.label} className="relative">
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between text-left py-4 md:py-5 border-b border-cream-text/20 pr-4 hover:opacity-80 transition-opacity"
                    >
                      <span className="font-serif text-lg md:text-xl lg:text-2xl font-normal text-luxury-gold">
                        {cat.label}
                      </span>
                      <span
                        className="text-2xl md:text-3xl text-cream-text leading-none select-none transition-transform duration-300 flex-shrink-0"
                        style={{
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {cat.items.length > 0 ? (
                        <ul className="mt-2 mb-4 md:mt-3 md:mb-5 space-y-1.5 md:space-y-2">
                          {cat.items.map((item) => (
                            <li
                              key={item}
                              className="font-sans text-xs sm:text-sm md:text-base text-cream-text/90 leading-relaxed"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 mb-4 font-sans text-sm text-cream-text/50 italic">
                          Coming soon…
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Location Image ── */}
          <div className="w-full flex items-start justify-end lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full pb-8 lg:pb-0">
            <img
              src={three}
              alt="Project 4 Location"
              className="w-full h-full object-cover rounded-md lg:rounded-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}