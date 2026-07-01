import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import LandingNavbar from "./LandingNavbar";
import { ModalProvider } from "./Modalcontext";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please discontinue use of this website. These terms apply to all visitors, prospective buyers, and users of the Binary Ventures website regarding Codename Project 4 on Sarjapur Road, Bengaluru.`,
  },
  {
    title: "2. Informational Purpose Only",
    body: `The content on this website — including images, floor plans, renders, pricing, and project details — is for general informational purposes only and does not constitute a legal offer or contractual commitment. All images, including master plans, elevations, and interior visuals, are artistic impressions and may differ from the actual product.`,
  },
  {
    title: "3. No Warranty",
    body: `While we strive to keep information on this website accurate and up to date, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or availability of the website or the information, products, or services contained on it.`,
  },
  {
    title: "4. Pricing and Availability",
    body: `All prices, unit availability, specifications, and amenities mentioned on this website are subject to change without prior notice and are subject to final confirmation in the Agreement for Sale executed between the buyer and Binary Ventures. Nothing on this website should be construed as a final offer of sale.`,
  },
  {
    title: "5. Intellectual Property",
    body: `All content on this website, including but not limited to text, graphics, logos, images, and the overall design, is the property of Binary Ventures and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content from this website without our prior written consent.`,
  },
  {
    title: "6. User Conduct",
    body: `You agree not to use this website for any unlawful purpose or in any way that could damage, disable, or impair the website. You agree not to attempt to gain unauthorised access to any portion of the website, our servers, or any systems connected to the website.`,
  },
  {
    title: "7. Third-Party Links",
    body: `This website may contain links to third-party websites for your convenience. We do not endorse and are not responsible for the content, accuracy, or practices of any linked third-party websites.`,
  },
  {
    title: "8. RERA Compliance",
    body: `Codename Project 4 is registered under the Real Estate (Regulation and Development) Act, and all transactions are subject to applicable RERA guidelines. Buyers are encouraged to verify the RERA registration number and project details independently before making any purchase decision.`,
  },
  {
    title: "9. Limitation of Liability",
    body: `Binary Ventures shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of, or inability to use, this website, including but not limited to reliance on any information presented.`,
  },
  {
    title: "10. Governing Law",
    body: `These Terms of Use shall be governed by and construed in accordance with the laws of India, and any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.`,
  },
  {
    title: "11. Changes to These Terms",
    body: `We reserve the right to update or modify these Terms of Use at any time without prior notice. Continued use of the website following any changes constitutes your acceptance of the revised terms.`,
  },
  {
    title: "12. Contact Us",
    body: `For any questions regarding these Terms of Use, please contact us at sales@binaryrealty.com or +91 96112 11255.`,
  },
];

export default function LandingTermsAndConditions() {
  return (
    <ModalProvider>
      <LandingNavbar />
      <div className="min-h-screen bg-bg-cream">
        <div className="mx-auto w-full max-w-[900px] px-4 md:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-luxury-green-dark/60 hover:text-luxury-gold text-sm font-sans mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-green-dark uppercase mb-3">
            Terms <span className="text-luxury-gold">of Use</span>
          </h1>
          <p className="font-sans text-xs text-foreground-green/45 mb-10 md:mb-14">
            Last updated: June 2026
          </p>

          <div className="space-y-10">
            {sections.map(({ title, body }) => (
              <div key={title}>
                <h2 className="font-serif text-lg md:text-xl text-luxury-gold mb-3">
                  {title}
                </h2>
                <p className="font-sans text-sm md:text-base text-foreground-green/75 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}