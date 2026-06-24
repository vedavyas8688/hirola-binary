import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { lpConfig } from "../../data/landingData";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5">
      {/* Call */}
      <a
        href={lpConfig.phoneHref}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-luxury-green-dark text-cream-text shadow-lg ring-1 ring-luxury-gold/30 transition-transform duration-300 hover:scale-110"
      >
        <FaPhoneAlt className="text-[20px]" />
      </a>

      {/* WhatsApp */}
      <a
        href={lpConfig.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-[28px]" />
      </a>
    </div>
  );
}