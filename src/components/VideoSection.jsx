import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

 //   Option A (hosted): paste a direct video URL below.
//   Option B (local):  import myVideo from "../assets/videos/walkthrough.mp4";
//                      then set VIDEO_SRC = myVideo;
const VIDEO_SRC =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <section className="bg-bg-cream py-20 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-widest text-foreground-green">
          A JOURNEY THROUGH YOUR FUTURE HOME
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-foreground-green/60 max-w-xl leading-relaxed text-center">
          Take a cinematic walk through Project 4 — the grand arrival, the open
          spaces, and the life that waits within.
        </p>

        {/* Video frame — dark green with gold play button */}
        <div
          className="w-full max-w-3xl aspect-video rounded-xl relative overflow-hidden group"
          style={{ background: "var(--grad-green)" }}
        >
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            controls={playing}
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {/* Gold play overlay — hidden once the video starts */}
          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play walkthrough video"
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-luxury-gold flex items-center justify-center text-luxury-green-dark text-xl md:text-2xl pl-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-bright-gold shadow-lg">
                <FaPlay />
              </span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
}