import { locationData } from "../data/siteData";
import locationMapImg from "../assets/images/30.jpg";
import Reveal from "./Reveal";

export default function LocSection1() {
  return (
    <section
      className="py-10 md:py-20 lg:py-24 overflow-visible bg-luxury-green-dark"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-start">

          {/* ── Left: sticky map image (desktop only) ── */}
          <div className="hidden lg:block relative">
            <div className="sticky top-24 w-full">
              <img
                src={locationMapImg}
                alt="Location Map"
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          </div>

          {/* ── Right: heading + accordions ── */}
          <div className="space-y-4 md:space-y-6 px-2 md:px-0">

            {/* Heading — desktop only */}
            <Reveal className="hidden lg:block">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold">
                AT THE CROSSROADS OF GROWTH AND CONVENIENCE.
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-left mt-4">
                Where Sarjapur's evolving skyline meets seamless connectivity, Codename
                Project 4 places you right amidst innovation, opportunity, and
                effortless access to the city's finest hubs.
              </p>
            </Reveal>

            {/* Accordions */}
            <div className="space-y-3 md:space-y-4 mt-6 md:mt-8">
              {locationData.map((category) => (
                <details
                  key={category.title}
                  className="group border-b border-white/20 pb-3 md:pb-4"
                >
                  <summary className="flex justify-between items-center cursor-pointer font-serif text-base sm:text-lg md:text-xl font-bold text-luxury-gold hover:text-luxury-gold/80 transition-colors py-3 md:py-4 list-none">
                    <span>{category.title}</span>
                    <span className="text-xl md:text-2xl text-white group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 font-sans text-xs sm:text-sm md:text-base text-white/90 pl-0">
                    {category.items.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}