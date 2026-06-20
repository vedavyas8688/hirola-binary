import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function EnquireModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal box */}
      <div className="relative z-10 w-full max-w-lg bg-luxury-green-dark border border-luxury-gold/30 rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-luxury-gold/20">
          <div>
            <h2 className="font-serif text-xl md:text-2xl text-luxury-gold tracking-wide">
              Enquire Now
            </h2>
            <p className="font-sans text-xs text-white/50 mt-0.5">
              Our team will get back to you within 24 hours
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
        <div className="px-6 py-6">
          {submitted ? (
            <div className="text-center py-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-luxury-gold/10 border-2 border-luxury-gold flex items-center justify-center text-luxury-gold text-3xl">
                ✓
              </div>
              <h3 className="font-serif text-xl text-luxury-gold">
                Thank You!
              </h3>
              <p className="font-sans text-sm text-white/60 max-w-xs">
                We've received your enquiry. Our team will reach out to you
                shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-8 py-2.5 border border-luxury-gold text-luxury-gold text-xs tracking-widest uppercase rounded-full hover:bg-luxury-gold hover:text-luxury-green-dark transition-all duration-200"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label className="block font-sans text-xs text-white/60 mb-1.5 tracking-wide uppercase">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-luxury-gold/60 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-sans text-xs text-white/60 mb-1.5 tracking-wide uppercase">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-luxury-gold/60 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-sans text-xs text-white/60 mb-1.5 tracking-wide uppercase">
                  Phone Number *
                </label>
                <div className="flex gap-2">
                  <select className="bg-white/5 border border-white/15 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-luxury-gold/60 transition-colors">
                    <option value="+91" className="bg-luxury-green-dark">🇮🇳 +91</option>
                    <option value="+1"  className="bg-luxury-green-dark">🇺🇸 +1</option>
                    <option value="+44" className="bg-luxury-green-dark">🇬🇧 +44</option>
                    <option value="+65" className="bg-luxury-green-dark">🇸🇬 +65</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="flex-1 bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-luxury-gold/60 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-xs text-white/60 mb-1.5 tracking-wide uppercase">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for..."
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-luxury-gold/60 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 bg-luxury-gold text-luxury-green-dark font-sans font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-luxury-gold/90 transition-all duration-200 mt-2"
              >
                Submit Enquiry
              </button>

              <p className="text-center text-xs text-white/30 mt-2">
                Your information is safe with us. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}