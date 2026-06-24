import { useEffect } from "react";
import "../styles/globalstyles.css";

import { ModalProvider } from "../components/landing/Modalcontext";
import EnquiryModal from "../components/landing/EnquiryModal";
import SectionDivider from "../components/landing/SectionDivider";

import WhyEoi from "../components/landing/WhyEoi";
import StatsBar from "../components/landing/StatsBar";
import Features from "../components/landing/Features";
import PriceAdvantage from "../components/landing/PriceAdvantage";
import EoiProcess from "../components/landing/EoiProcess";
import LandingNavbar from "../components/landing/LandingNavbar";
import LandingHero from "../components/landing/LandingHero";
import HeritageSection from "../components/landing/Heritagsection";
import MainMasterplansection from "../components/MainMasterplansection";
import Clubhouses from "../components/landing/Clubhouses";
import Faq from "../components/landing/Faq";
import Locations from "../components/landing/Locations";
import SiteVisit from "../components/landing/SiteVisit";
import LandingFooter from "../components/landing/LandingFooter";
import FloatingActions from "../components/landing/FloatingActions";
import LeadPopup from "../components/landing/LeadPopup";

export default function LandingPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("lp-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".lp-fade").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <ModalProvider>
      <div className="bg-bg-cream text-foreground-green font-sans overflow-x-hidden">
        {/* Lead capture popup — appears after 5s */}
        <LeadPopup />
        {/* Shared quick-enquire modal — opened by every CTA button */}
        <EnquiryModal />

        <LandingNavbar />
        <LandingHero />

        {/* cream → cream */}
        <HeritageSection />
        <SectionDivider tone="cream" />
        <WhyEoi />

        {/* green → green */}
        <StatsBar />
        <SectionDivider tone="green" />
        <Features />

        {/* cream → cream */}
        <PriceAdvantage />
        <SectionDivider tone="cream" />
        <EoiProcess />

        {/* green → green */}
        <MainMasterplansection />
        <SectionDivider tone="green" />
        <Clubhouses />

        <Faq />
        <Locations />
        <SiteVisit />
        <LandingFooter />
        <FloatingActions />
      </div>
    </ModalProvider>
  );
}