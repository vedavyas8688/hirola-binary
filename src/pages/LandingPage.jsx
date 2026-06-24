import { useEffect } from "react";
import "../styles/globalstyles.css";
import Legacy from "../components/landing/Legacy";
import WhyEoi from "../components/landing/WhyEoi";
import StatsBar from "../components/landing/StatsBar";
import Features from "../components/landing/Features";
import PriceAdvantage from "../components/landing/PriceAdvantage";
import EoiProcess from "../components/landing/EoiProcess";
import MasterPlan from "../components/landing/MasterPlan";
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

export default function LandingPage() {
  // Same fade-in behaviour as the original page's IntersectionObserver
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
    <div className="bg-bg-cream text-foreground-green font-sans overflow-x-hidden">
      <LandingNavbar />
      <LandingHero />
      <HeritageSection />

      <WhyEoi />
      <StatsBar />
      <Features />
      <PriceAdvantage />
      <EoiProcess />
      <MainMasterplansection />
      <Clubhouses />
      <Faq />
      <Locations />
      <SiteVisit />
       <LandingFooter />
      <FloatingActions />
    </div>
  );
}
