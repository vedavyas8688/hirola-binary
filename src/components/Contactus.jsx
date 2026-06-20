import logoLeft from "../assets/images/logo-left.svg";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="py-12 md:py-20 px-4 md:px-8"
      style={{ background: "var(--grad-green)" }}
    >
      <div className="mx-auto w-full max-w-[1400px]">

        {/* ── Header ── */}
        <div className="text-center mb-8 md:mb-10">
          <img
            src={logoLeft}
            alt="Binary Ventures logo"
            className="h-10 sm:h-12 md:h-16 mx-auto mb-4 md:mb-6"
          />

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed mb-3 md:mb-4">
            <span className="text-luxury-gold">CONTACT</span>{" "}
            <span className="text-cream-text">US</span>
          </h2>

          <div className="h-1 w-24 bg-luxury-gold mx-auto mb-4 md:mb-6" />

          <p className="font-sans text-sm sm:text-base md:text-lg text-cream-text/80 max-w-3xl mx-auto leading-relaxed">
            Tell us a little about yourself to receive personalised details,
            brochures and exclusive offers for a seamless home-buying experience.
          </p>
        </div>

        {/* ── Form ── */}
        <form className="max-w-4xl mx-auto space-y-4 md:space-y-6">

          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
            >
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text placeholder:text-cream-text/60 px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
            />
          </div>

          {/* Email + Phone row */}
          <div className="grid gap-4 md:gap-6 md:grid-cols-[1fr_minmax(240px,0.6fr)]">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text placeholder:text-cream-text/60 px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
              >
                Phone *
              </label>
              <div className="flex gap-2">
                <select
                  aria-label="Country code"
                  className="rounded-full bg-luxury-cream text-foreground-green font-semibold px-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+65">🇸🇬 +65</option>
                </select>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text placeholder:text-cream-text/60 px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center pt-2 md:pt-4">
            <button
              type="submit"
              className="rounded-full bg-luxury-gold hover:bg-bright-gold text-foreground-green font-semibold px-8 md:px-10 py-2 md:py-3 text-sm md:text-base transition-colors duration-200"
            >
              SUBMIT
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}



// import logoLeft from "../assets/images/logo-left.svg";

// export default function ContactSection() {
//   return (
//     <section
//       id="contact"
//       className="py-12 md:py-20 px-4 md:px-8"
//       style={{ background: "var(--grad-green)" }}
//     >
//       <div className="mx-auto w-full max-w-[1400px]">

//         {/* ── Header ── */}
//         <div className="text-center mb-8 md:mb-10">
//           <img
//             src={logoLeft}
//             alt="Binary Ventures logo"
//             className="h-10 sm:h-12 md:h-16 mx-auto mb-4 md:mb-6"
//           />

//           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed mb-3 md:mb-4">
//             <span className="text-luxury-gold">CONTACT</span>{" "}
//             <span className="text-cream-text">US</span>
//           </h2>

//           <div className="h-1 w-24 bg-luxury-gold mx-auto mb-4 md:mb-6" />

//           <p className="font-sans text-sm sm:text-base md:text-lg text-cream-text/80 max-w-3xl mx-auto leading-relaxed">
//             Tell us a little about yourself to receive personalised details,
//             brochures and exclusive offers for a seamless home-buying experience.
//           </p>
//         </div>

//         {/* ── Form ── */}
//         <form className="max-w-4xl mx-auto space-y-4 md:space-y-6">

//           {/* Full Name */}
//           <div>
//             <label
//               htmlFor="name"
//               className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
//             >
//               Full Name *
//             </label>
//             <input
//               id="name"
//               type="text"
//               required
//               placeholder="Enter your full name"
//               className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text placeholder:text-cream-text/60 px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
//             />
//           </div>

//           {/* Email + Phone row */}
//           <div className="grid gap-4 md:gap-6 md:grid-cols-[1fr_minmax(240px,0.6fr)]">

//             {/* Email */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
//               >
//                 Email Address *
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 required
//                 placeholder="your.email@example.com"
//                 className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text placeholder:text-cream-text/60 px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
//               >
//                 Phone *
//               </label>
//               <div className="flex gap-2">
//                 <select
//                   aria-label="Country code"
//                   className="rounded-full bg-luxury-cream text-foreground-green font-semibold px-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
//                 >
//                   <option value="+91">🇮🇳 +91</option>
//                   <option value="+1">🇺🇸 +1</option>
//                   <option value="+44">🇬🇧 +44</option>
//                   <option value="+65">🇸🇬 +65</option>
//                 </select>
//                 <input
//                   id="phone"
//                   type="tel"
//                   required
//                   placeholder="Phone number"
//                   className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text placeholder:text-cream-text/60 px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Unit Type + Budget row */}
//           <div className="grid gap-4 md:gap-6 md:grid-cols-2">

//             {/* Unit Type */}
//             <div>
//               <label
//                 htmlFor="unitType"
//                 className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
//               >
//                 Unit Type *
//               </label>
//               <select
//                 id="unitType"
//                 required
//                 className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
//               >
//                 <option value="" disabled selected className="text-foreground-green">Select unit type</option>
//                 <option value="1bhk" className="text-foreground-green">1 BHK</option>
//                 <option value="2bhk" className="text-foreground-green">2 BHK</option>
//                 <option value="3bhk" className="text-foreground-green">3 BHK</option>
//                 <option value="4bhk" className="text-foreground-green">4 BHK</option>
//                 <option value="penthouse" className="text-foreground-green">Penthouse</option>
//                 <option value="villa" className="text-foreground-green">Villa / Duplex</option>
//               </select>
//             </div>

//             {/* Budget Range */}
//             <div>
//               <label
//                 htmlFor="budget"
//                 className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
//               >
//                 Budget Range *
//               </label>
//               <select
//                 id="budget"
//                 required
//                 className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
//               >
//                 <option value="" disabled selected className="text-foreground-green">Select budget</option>
//                 <option value="50-75" className="text-foreground-green">₹50L – ₹75L</option>
//                 <option value="75-1cr" className="text-foreground-green">₹75L – ₹1 Cr</option>
//                 <option value="1-1.5cr" className="text-foreground-green">₹1 Cr – ₹1.5 Cr</option>
//                 <option value="1.5-2cr" className="text-foreground-green">₹1.5 Cr – ₹2 Cr</option>
//                 <option value="2cr+" className="text-foreground-green">₹2 Cr &amp; above</option>
//               </select>
//             </div>
//           </div>

//           {/* Purchase Intent + Possession Timeline row */}
//           <div className="grid gap-4 md:gap-6 md:grid-cols-2">

//             {/* Purchase Intent */}
//             <div>
//               <label
//                 htmlFor="intent"
//                 className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
//               >
//                 Purpose of Purchase *
//               </label>
//               <select
//                 id="intent"
//                 required
//                 className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
//               >
//                 <option value="" disabled selected className="text-foreground-green">Select purpose</option>
//                 <option value="self-use" className="text-foreground-green">Self Use / End Use</option>
//                 <option value="investment" className="text-foreground-green">Investment</option>
//                 <option value="nri" className="text-foreground-green">NRI Investment</option>
//                 <option value="rental" className="text-foreground-green">Rental Income</option>
//               </select>
//             </div>

//             {/* Possession Timeline */}
//             <div>
//               <label
//                 htmlFor="timeline"
//                 className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
//               >
//                 Preferred Possession Timeline
//               </label>
//               <select
//                 id="timeline"
//                 className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
//               >
//                 <option value="" disabled selected className="text-foreground-green">Select timeline</option>
//                 <option value="immediate" className="text-foreground-green">Immediate / Ready to move</option>
//                 <option value="6months" className="text-foreground-green">Within 6 months</option>
//                 <option value="1year" className="text-foreground-green">Within 1 year</option>
//                 <option value="2years" className="text-foreground-green">1 – 2 years</option>
//                 <option value="flexible" className="text-foreground-green">Flexible</option>
//               </select>
//             </div>
//           </div>

//           {/* Loan Requirement + Source row */}
//           <div className="grid gap-4 md:gap-6 md:grid-cols-2">

//             {/* Home Loan */}
//             <div>
//               <label
//                 htmlFor="loan"
//                 className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
//               >
//                 Home Loan Required?
//               </label>
//               <select
//                 id="loan"
//                 className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
//               >
//                 <option value="" disabled selected className="text-foreground-green">Select option</option>
//                 <option value="yes" className="text-foreground-green">Yes, need assistance</option>
//                 <option value="pre-approved" className="text-foreground-green">Already pre-approved</option>
//                 <option value="no" className="text-foreground-green">No, self-funded</option>
//               </select>
//             </div>

//             {/* How did you hear */}
//             <div>
//               <label
//                 htmlFor="source"
//                 className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
//               >
//                 How Did You Hear About Us?
//               </label>
//               <select
//                 id="source"
//                 className="w-full rounded-full bg-white/10 border border-white/30 text-cream-text px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60"
//               >
//                 <option value="" disabled selected className="text-foreground-green">Select source</option>
//                 <option value="google" className="text-foreground-green">Google / Search</option>
//                 <option value="social" className="text-foreground-green">Social Media</option>
//                 <option value="referral" className="text-foreground-green">Friend / Referral</option>
//                 <option value="site-visit" className="text-foreground-green">Site Hoarding / Banner</option>
//                 <option value="broker" className="text-foreground-green">Broker / Agent</option>
//                 <option value="newspaper" className="text-foreground-green">Newspaper / Magazine</option>
//                 <option value="other" className="text-foreground-green">Other</option>
//               </select>
//             </div>
//           </div>

//           {/* Message */}
//           <div>
//             <label
//               htmlFor="message"
//               className="font-sans text-sm md:text-base text-cream-text font-medium mb-2 block"
//             >
//               Additional Requirements
//             </label>
//             <textarea
//               id="message"
//               rows={4}
//               placeholder="E.g. preferred floor, facing direction, site visit request, any specific queries…"
//               className="w-full rounded-2xl bg-white/10 border border-white/30 text-cream-text placeholder:text-cream-text/60 px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-luxury-gold/60 resize-none"
//             />
//           </div>

//           {/* Submit */}
//           <div className="text-center pt-2 md:pt-4">
//             <button
//               type="submit"
//               className="rounded-full bg-luxury-gold hover:bg-bright-gold text-foreground-green font-semibold px-8 md:px-10 py-2 md:py-3 text-sm md:text-base transition-colors duration-200"
//             >
//               SUBMIT
//             </button>
//           </div>

//         </form>
//       </div>
//     </section>
//   );
// }