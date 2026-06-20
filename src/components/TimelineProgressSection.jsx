import React from "react";

const PLACEHOLDER_PHOTO =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23e9e5dc%22/%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23968c7c%22%20stroke-opacity%3D%220.28%22%20stroke-width%3D%226%22%3E%3Crect%20x%3D%22510%22%20y%3D%22336%22%20width%3D%22180%22%20height%3D%22128%22%20rx%3D%2214%22/%3E%3Ccircle%20cx%3D%22545%22%20cy%3D%22382%22%20r%3D%2218%22/%3E%3C/g%3E%3Cpolygon%20points%3D%22530%2C454%20588%2C394%20630%2C430%20672%2C388%20672%2C454%22%20fill%3D%22%23968c7c%22%20fill-opacity%3D%220.22%22/%3E%3C/svg%3E";

const PROGRESS_IMAGES = [
  { id: 1, alt: "Project progress 1", image: PLACEHOLDER_PHOTO },
  { id: 2, alt: "Project progress 2", image: PLACEHOLDER_PHOTO },
  { id: 3, alt: "Project progress 3", image: PLACEHOLDER_PHOTO },
  { id: 4, alt: "Project progress 4", image: PLACEHOLDER_PHOTO },
  { id: 5, alt: "Project progress 5", image: PLACEHOLDER_PHOTO },
];

const TimelineProgressSection = () => {
  return (
    <section
      className="py-10 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGPkMVRlIAUwkaR6VMOohiGlAQBfYgCCrIcb8AAAAABJRU5ErkJggg==")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-luxury-gold mb-4 md:mb-6 uppercase">
            Timeline Progress
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-cream-text/90 max-w-4xl mx-auto leading-relaxed">
            Track the progress of the project month by month.
          </p>
        </div>

        {/* ── Progress photo grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {PROGRESS_IMAGES.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineProgressSection;