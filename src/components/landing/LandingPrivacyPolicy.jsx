import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import LandingNavbar from "./LandingNavbar";
import { ModalProvider } from "./Modalcontext";

const sections = [
  {
    title: "1. Introduction",
    body: `Binary Ventures ("we", "us", "our") is committed to protecting the privacy of visitors to our website and prospective customers of Codename Project 4 on Sarjapur Road, Bengaluru. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with us regarding our residential project.`,
  },
  {
    title: "2. Information We Collect",
    body: `We may collect personal information that you voluntarily provide to us, including but not limited to your name, phone number, email address, and any preferences shared through our enquiry forms, brochure download requests, or callback requests. We may also automatically collect certain technical information such as your IP address, browser type, device information, and pages visited, through cookies and similar technologies.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information collected to respond to your enquiries, share project details, floor plans, pricing, and brochures, schedule site visits or callbacks, send updates about Codename Project 4 (with your consent where required), and improve our website and services. We do not use your personal information for any purpose beyond what is reasonably necessary to serve you as a prospective or existing customer.`,
  },
  {
    title: "4. Sharing of Information",
    body: `We do not sell, rent, or trade your personal information to third parties. We may share your information with trusted partners who assist us in our business operations — such as CRM providers, marketing platforms, or our internal sales team — solely for the purpose of fulfilling your enquiry. We may also disclose information if required by law or to protect our legal rights.`,
  },
  {
    title: "5. Cookies",
    body: `Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and understand visitor behaviour. You can choose to disable cookies through your browser settings, though this may affect certain website functionality.`,
  },
  {
    title: "6. Data Security",
    body: `We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "7. Your Rights",
    body: `You may request access to, correction of, or deletion of your personal information held by us at any time. You may also opt out of receiving promotional communications from us by contacting us directly using the details below.`,
  },
  {
    title: "8. Third-Party Links",
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites and encourage you to review their respective privacy policies.`,
  },
  {
    title: "9. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page with a revised "last updated" date.`,
  },
  {
    title: "10. Contact Us",
    body: `If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us at sales@binaryrealty.com or +91 96112 11255.`,
  },
];

export default function LandingPrivacyPolicy() {
  return (
    <ModalProvider>
      <LandingNavbar />
      <div className="min-h-screen bg-bg-cream">
        <div className="mx-auto w-full max-w-[900px] px-4 md:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
          <Link
            to="/landingpage"
            className="inline-flex items-center gap-2 text-luxury-green-dark/60 hover:text-luxury-gold text-sm font-sans mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-green-dark uppercase mb-3">
            Privacy <span className="text-luxury-gold">Policy</span>
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