// import { useState, useMemo } from "react";

// function formatINR(amount) {
//   return new Intl.NumberFormat("en-IN", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   }).format(amount);
// }

// function formatINRCompact(amount) {
//   return new Intl.NumberFormat("en-IN").format(amount);
// }

// export default function EmiCalculator() {
//   const [loanAmount, setLoanAmount] = useState(2000000);
//   const [interestRate, setInterestRate] = useState(2);
//   const [tenure, setTenure] = useState(2);

//   // EMI = P × r × (1+r)^n / ((1+r)^n − 1)
//   const { emi, totalAmount } = useMemo(() => {
//     const P = loanAmount;
//     const r = interestRate / 12 / 100;
//     const n = tenure * 12;

//     if (n === 0 || r === 0) {
//       const emi = n > 0 ? P / n : 0;
//       return { emi, totalAmount: P };
//     }

//     const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
//     return { emi, totalAmount: emi * n };
//   }, [loanAmount, interestRate, tenure]);

//   return (
//     <section className="py-12 md:py-24 px-4 md:px-8 bg-card-white overflow-hidden">
//       <div className="mx-auto w-full max-w-[1600px]">

//         {/* Heading */}
//         <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-foreground-green mb-6 md:mb-10">
//           CALCULATE YOUR EMI
//         </h2>

//         <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-start">

//           {/* ── Left: Sliders ── */}
//           <div className="space-y-6 md:space-y-10">

//             {/* Loan Amount */}
//             <div>
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
//                 <p className="font-sans text-xs sm:text-sm text-muted-sage">Loan Amount :</p>
//                 <div className="flex items-center">
//                   <input
//                     type="text"
//                     readOnly
//                     value={formatINRCompact(loanAmount)}
//                     className="w-32 sm:w-40 text-right font-serif text-sm md:text-base bg-card-white border border-border px-2 md:px-3 py-1 outline-none"
//                   />
//                   <span className="inline-flex items-center justify-center bg-luxury-green text-cream-text px-2 md:px-3 py-1 text-sm md:text-base">
//                     ₹
//                   </span>
//                 </div>
//               </div>
//               <input
//                 type="range"
//                 className="w-full accent-[#0C3125]"
//                 min={2000000}
//                 max={18000000}
//                 step={100000}
//                 value={loanAmount}
//                 onChange={(e) => setLoanAmount(Number(e.target.value))}
//               />
//               <div className="flex justify-between font-sans text-xs text-muted-sage mt-1">
//                 <span>₹20L</span>
//                 <span>₹1.8Cr</span>
//               </div>
//             </div>

//             {/* Rate of Interest */}
//             <div>
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
//                 <p className="font-sans text-xs sm:text-sm text-muted-sage">Rate Of Interest :</p>
//                 <div className="flex items-center">
//                   <input
//                     type="number"
//                     value={interestRate}
//                     min={2}
//                     max={20}
//                     step={0.5}
//                     onChange={(e) => setInterestRate(Number(e.target.value))}
//                     className="w-20 sm:w-24 text-right font-serif text-sm md:text-base bg-card-white border border-border px-2 md:px-3 py-1 outline-none"
//                   />
//                   <span className="inline-flex items-center justify-center bg-luxury-green text-cream-text px-2 md:px-3 py-1 text-sm md:text-base">
//                     %
//                   </span>
//                 </div>
//               </div>
//               <input
//                 type="range"
//                 className="w-full accent-[#0C3125]"
//                 min={2}
//                 max={20}
//                 step={0.5}
//                 value={interestRate}
//                 onChange={(e) => setInterestRate(Number(e.target.value))}
//               />
//               <div className="flex justify-between font-sans text-xs text-muted-sage mt-1">
//                 <span>2%</span>
//                 <span>20%</span>
//               </div>
//             </div>

//             {/* Tenure */}
//             <div>
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
//                 <p className="font-sans text-xs sm:text-sm text-muted-sage">Tenure :</p>
//                 <div className="flex items-center">
//                   <input
//                     type="number"
//                     value={tenure}
//                     min={1}
//                     max={20}
//                     step={1}
//                     onChange={(e) => setTenure(Number(e.target.value))}
//                     className="w-20 sm:w-24 text-right font-serif text-sm md:text-base bg-card-white border border-border px-2 md:px-3 py-1 outline-none"
//                   />
//                   <span className="inline-flex items-center justify-center bg-luxury-green text-cream-text px-2 md:px-3 py-1 text-sm md:text-base">
//                     Y
//                   </span>
//                 </div>
//               </div>
//               <input
//                 type="range"
//                 className="w-full accent-[#0C3125]"
//                 min={1}
//                 max={20}
//                 step={1}
//                 value={tenure}
//                 onChange={(e) => setTenure(Number(e.target.value))}
//               />
//               <div className="flex justify-between font-sans text-xs text-muted-sage mt-1">
//                 <span>1 yr</span>
//                 <span>20 yrs</span>
//               </div>
//             </div>

//           </div>

//           {/* ── Right: Result Card ── */}
//           <div
//             className="w-full overflow-hidden shadow-lg rounded-md p-6 md:p-8 lg:p-10 text-cream-text"
//             style={{ background: "var(--grad-gold)" }}
//           >
//             {/* Total Amount */}
//             <div className="mb-6 md:mb-8">
//               <p className="font-sans text-xs sm:text-sm md:text-base opacity-80">
//                 Total Amount
//               </p>
//               <p className="font-serif text-2xl sm:text-3xl md:text-4xl mt-1 text-foreground-green">
//                 ₹{formatINR(totalAmount)}
//               </p>
//             </div>

//             {/* Detail grid */}
//             <div className="grid grid-cols-2 gap-4 md:gap-8">
//               <div>
//                 <p className="font-sans text-xs sm:text-sm md:text-base opacity-80">Term:</p>
//                 <p className="font-serif text-base sm:text-lg md:text-xl mt-1 text-foreground-green">
//                   {tenure} {tenure === 1 ? "year" : "years"}
//                 </p>
//               </div>
//               <div className="text-right">
//                 <p className="font-sans text-xs sm:text-sm md:text-base opacity-80">Your EMI:</p>
//                 <p className="font-serif text-base sm:text-lg md:text-xl mt-1 text-foreground-green">
//                   ₹{formatINR(emi)}<span className="text-xs font-sans opacity-70"> /month</span>
//                 </p>
//               </div>
//               <div>
//                 <p className="font-sans text-xs sm:text-sm md:text-base opacity-80">At Interest Rate of:</p>
//                 <p className="font-serif text-base sm:text-lg md:text-xl mt-1 text-foreground-green">
//                   {interestRate}%
//                 </p>
//               </div>
//               <div className="text-right">
//                 <p className="font-sans text-xs sm:text-sm md:text-base opacity-80">Loan Amount:</p>
//                 <p className="font-serif text-base sm:text-lg md:text-xl mt-1 text-foreground-green">
//                   ₹{formatINRCompact(loanAmount)}
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useMemo } from "react";

function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatINRCompact(amount) {
  return new Intl.NumberFormat("en-IN").format(amount);
}

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(2);
  const [tenure, setTenure] = useState(2);

  // EMI = P × r × (1+r)^n / ((1+r)^n − 1)
  const { emi, totalAmount, totalInterest, principalPct } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;

    if (n === 0 || r === 0) {
      const emi = n > 0 ? P / n : 0;
      return { emi, totalAmount: P, totalInterest: 0, principalPct: 100 };
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;
    const principalPct = Math.round((P / totalAmount) * 100);
    return { emi, totalAmount, totalInterest, principalPct };
  }, [loanAmount, interestRate, tenure]);

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-bg-cream overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold mb-6 md:mb-10">
          CALCULATE YOUR EMI
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* ── Left: Sliders (unchanged) ── */}
          <div className="space-y-6 md:space-y-10">
            {/* Loan Amount */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <p className="font-sans text-xs sm:text-sm text-muted-sage">
                  Loan Amount :
                </p>
                <div className="flex items-center">
                  <input
                    type="text"
                    readOnly
                    value={formatINRCompact(loanAmount)}
                    className="w-32 sm:w-40 text-right font-serif text-sm md:text-base bg-card-white border border-border px-2 md:px-3 py-1 outline-none"
                  />
                  <span className="inline-flex items-center justify-center bg-luxury-green text-cream-text px-2 md:px-3 py-1 text-sm md:text-base">
                    ₹
                  </span>
                </div>
              </div>
              <input
                type="range"
                className="w-full accent-[#0C3125]"
                min={2000000}
                max={18000000}
                step={100000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
              <div className="flex justify-between font-sans text-xs text-muted-sage mt-1">
                <span>₹20L</span>
                <span>₹1.8Cr</span>
              </div>
            </div>

            {/* Rate of Interest */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <p className="font-sans text-xs sm:text-sm text-muted-sage">
                  Rate Of Interest :
                </p>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={interestRate}
                    min={2}
                    max={20}
                    step={0.5}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-20 sm:w-24 text-right font-serif text-sm md:text-base bg-card-white border border-border px-2 md:px-3 py-1 outline-none"
                  />
                  <span className="inline-flex items-center justify-center bg-luxury-green text-cream-text px-2 md:px-3 py-1 text-sm md:text-base">
                    %
                  </span>
                </div>
              </div>
              <input
                type="range"
                className="w-full accent-[#0C3125]"
                min={2}
                max={20}
                step={0.5}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <div className="flex justify-between font-sans text-xs text-muted-sage mt-1">
                <span>2%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Tenure */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <p className="font-sans text-xs sm:text-sm text-muted-sage">
                  Tenure :
                </p>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={tenure}
                    min={1}
                    max={20}
                    step={1}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-20 sm:w-24 text-right font-serif text-sm md:text-base bg-card-white border border-border px-2 md:px-3 py-1 outline-none"
                  />
                  <span className="inline-flex items-center justify-center bg-luxury-green text-cream-text px-2 md:px-3 py-1 text-sm md:text-base">
                    Y
                  </span>
                </div>
              </div>
              <input
                type="range"
                className="w-full accent-[#0C3125]"
                min={1}
                max={20}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
              <div className="flex justify-between font-sans text-xs text-muted-sage mt-1">
                <span>1 yr</span>
                <span>20 yrs</span>
              </div>
            </div>
          </div>

          {/* ── Right: Enhanced Result Card ── */}
          <div
            className="rounded-2xl overflow-hidden text-cream-text"
            style={{ background: "var(--clr-primary-green)" }}
          >
            {/* ── Top Summary Row ── */}
            <div className="px-6 md:px-8 lg:px-10 py-8 border-b border-luxury-gold/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Total Payable Amount */}
                <div>
                  <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-luxury-gold/70 mb-2">
                    Total Payable Amount
                  </p>

                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream-text">
                    ₹{formatINR(totalAmount)}
                  </p>
                </div>

                {/* Monthly EMI */}
                <div className="md:text-right">
                  <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-luxury-gold/70 mb-2">
                    Your Monthly EMI
                  </p>

                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream-text">
                    ₹{formatINR(emi)}
                    <span className="font-sans text-xs ml-2 text-cream-text/60">
                      /month
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom section — stats grid + bars */}
            <div className="px-6 md:px-8 lg:px-10 py-6 md:py-8">
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
                {[
                  {
                    label: "Loan Amount",
                    value: `₹${formatINRCompact(loanAmount)}`,
                  },
                  {
                    label: "Tenure",
                    value: `${tenure} ${tenure === 1 ? "year" : "years"}`,
                  },
                  { label: "Interest Rate", value: `${interestRate}%` },
                  {
                    label: "Total Interest",
                    value: `₹${formatINR(totalInterest)}`,
                  },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-luxury-gold/60 mb-1">
                      {label}
                    </p>
                    <p className="font-serif text-base sm:text-lg text-cream-text">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Principal vs Interest bars */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1 rounded-full overflow-hidden bg-luxury-gold/15">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${principalPct}%`,
                        background: "var(--clr-gold)",
                      }}
                    />
                  </div>
                  <span className="font-sans text-[0.6rem] tracking-wide text-luxury-gold/70 w-24 text-right whitespace-nowrap">
                    Principal {principalPct}%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1 rounded-full overflow-hidden bg-luxury-gold/15">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${100 - principalPct}%`,
                        background: "rgba(215,185,117,0.35)",
                      }}
                    />
                  </div>
                  <span className="font-sans text-[0.6rem] tracking-wide text-luxury-gold/70 w-24 text-right whitespace-nowrap">
                    Interest {100 - principalPct}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
