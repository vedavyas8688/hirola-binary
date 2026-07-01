import React from "react";
import PageBanner from "../components/Pagebanner";
import ContactSection from "../components/Contactsection";
import ContactUs from "../components/Contactus";
import banner8 from "../assets/images/banner8.jpg";
import Seo from "../components/Seo";

import { ModalProvider } from "../components/landing/Modalcontext";
import EnquiryModal from "../components/landing/EnquiryModal";
import LandingNavbar from "../components/landing/LandingNavbar";
import LandingFooter from "../components/landing/LandingFooter";
import SiteVisit from "../components/landing/SiteVisit";
import Faq from "../components/landing/Faq";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <ModalProvider>
      <div>
        <Seo
          title="Contact Us"
          description="Get in touch with Binary Ventures for pricing, floor plans and the launch offer on Project 4, Sarjapur Road. Our team responds within 24 hours."
        />
        <EnquiryModal />
        <Navbar />

        <PageBanner titleLine1="Contact" image={banner8} />
        <ContactSection />
        {/* <ContactUs /> */}

        <SiteVisit />
        <Faq />

        <LandingFooter />
      </div>
    </ModalProvider>
  );
};

export default Contact;
