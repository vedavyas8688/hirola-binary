import {
  FaRoad,
  FaCity,
  FaLaptopCode,
  FaSubway,
  FaLeaf,
} from "react-icons/fa";
import { nextAddressCards } from "../data/siteData";

const iconMap = {
  FaRoad: <FaRoad />,
  FaCity: <FaCity />,
  FaLaptopCode: <FaLaptopCode />,
  FaSubway: <FaSubway />,
  FaLeaf: <FaLeaf />,
};

export default function AddressSection() {
  return (
    <section
      className="py-10 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">

        {/* Heading */}
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold">
            THE NEXT BIG ADDRESS
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-foreground mt-3 md:mt-4">
            Where Sarjapur's Progress Finds Home.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {nextAddressCards.map((card) => (
            <div
              key={card.title}
              className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border-2 border-luxury-gold/20 hover:border-luxury-gold/40 hover:shadow-xl transition-all duration-300 ${
                card.fullWidth ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Icon circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-luxury-green border-4 border-luxury-gold flex items-center justify-center shadow-lg text-luxury-gold text-2xl md:text-3xl">
                    {iconMap[card.icon]}
                  </div>
                </div>
                {/* Title + subtitle */}
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-luxury-gold">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <h4 className="font-sans text-xs md:text-sm font-semibold text-green-800">
                      {card.subtitle}
                    </h4>
                  )}
                </div>
              </div>
              <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}