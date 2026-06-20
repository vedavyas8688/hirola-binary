import eighteen from "../assets/images/18.jpg";
import nineteen from "../assets/images/19.jpg";
import twenty from "../assets/images/20.jpg";
import twentyone from "../assets/images/21.jpg";
import twentytwo from "../assets/images/22.jpg";
 
const images = [
    {
    src: eighteen,
    alt: "Grand Arrival Plaza",
    span: "col-span-2 row-span-2",
  },
  {
    src: nineteen,
    alt: "Ultra Luxury 2 & 3 BHK Homes",
    span: "col-span-1",
  },
  {
    src: twenty,
    alt: "Fitness Deck",
    span: "col-span-1",
  },
  {
    src: twentyone,
    alt: "Clubhouse Drop-Off",
    span: "col-span-1",
  },
  {
    src: twentytwo,
    alt: "Multi-Purpose Play Court",
    span: "col-span-1",
  },
];

function ImagePlaceholder({ alt }) {
  return (
    <div className="w-full h-full min-h-[180px] rounded-lg bg-luxury-cream border border-border flex flex-col items-center justify-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-muted-sage"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="font-sans text-xs text-muted-sage text-center px-3">{alt}</span>
    </div>
  );
}

export default function AmenitiesGallery() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-bg-cream overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-10 md:mb-14 lg:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-foreground-green uppercase mb-4 md:mb-6">
            Elevate Your Everyday with
            <br />
            <span className="text-luxury-gold">World-Class Amenities</span>
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-sage max-w-4xl mx-auto leading-relaxed">
            Experience a lifestyle where every moment is crafted for comfort,
            leisure, and well-being. Our thoughtfully designed amenities bring
            together the finest elements of modern living, ensuring you and your
            family enjoy the best of everything, right at your doorstep.
          </p>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6 auto-rows-[220px] md:auto-rows-[200px] lg:auto-rows-[240px]">
          {images.map(({ src, alt, span }) => (
            <div key={alt} className={span}>
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              ) : (
                <ImagePlaceholder alt={alt} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}