import AboutFeatures from "../components/Aboutfeatures";
import AboutStory from "../components/Aboutstory";
import ContactUs from "../components/Contactus";
import FaqSection2 from "../components/Faqsection2";
import PageBanner from "../components/Pagebanner";
import banner10 from "../assets/images/banner10.jpg";
import Seo from "../components/Seo";

import { ModalProvider } from "../components/landing/Modalcontext";
import EnquiryModal from "../components/landing/EnquiryModal";
 import LandingFooter from "../components/landing/LandingFooter";
import SiteVisit from "../components/landing/SiteVisit";
import Faq from "../components/landing/Faq";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <ModalProvider>
      <div>
        <Seo
          title="About Binary Ventures"
          description="The vision behind Project 4 — a low-density, ultra-luxury community on Sarjapur Road with 80% open space and homes designed with no common walls."
        />
        <EnquiryModal />
        <Navbar />
        <PageBanner
          // eyebrow="Who We Are"
          titleLine1="About Us"
          // titleLine2="Binary Ventures"
          image={banner10}
          // alt="About Binary Ventures"
        />
        <AboutStory />
        <AboutFeatures />
         <FaqSection2 />
        {/* <ContactUs /> */}

        <SiteVisit />
        <Faq />

        <LandingFooter />
      </div>
    </ModalProvider>
  );
}