import { FaTimes, FaDownload, FaClock } from "react-icons/fa";

export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal box */}
      <div className="relative z-10 w-full max-w-md bg-[#0f2418] border border-luxury-gold/30 rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-luxury-gold/20">
          <div>
            <h2 className="font-serif text-xl md:text-2xl text-luxury-gold tracking-wide">
              Download Brochure
            </h2>
            <p className="font-sans text-xs text-white/50 mt-0.5">
              Project 4 by Binary Ventures
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-luxury-gold transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-8 flex flex-col items-center text-center gap-5">

          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-luxury-gold/10 border-2 border-luxury-gold/40 flex items-center justify-center text-luxury-gold text-3xl">
            <FaClock />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl text-luxury-gold">
              Coming Soon
            </h3>
            <p className="font-sans text-sm text-white/60 max-w-xs leading-relaxed">
              Our brochure is being prepared with all the details about Project
              4. In the meantime, feel free to enquire and our team will share
              it with you directly.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/10 my-1" />

          {/* CTA — open enquire instead */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={onClose}
              className="flex-1 py-3 border border-white/20 text-white/60 text-xs tracking-widest uppercase rounded-full hover:border-white/40 hover:text-white transition-all duration-200"
            >
              Close
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-luxury-gold text-[#0f2418] font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-luxury-gold/90 transition-all duration-200"
            >
              Enquire Instead
            </button>
          </div>

          <p className="text-xs text-white/25 -mt-1">
            Brochure download will be available soon
          </p>
        </div>
      </div>
    </div>
  );
}