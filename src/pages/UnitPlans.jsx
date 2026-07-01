import React from "react";
import PageBanner from "../components/Pagebanner";
import DesignPhilosophySection from "../components/Designphilosophysection";
import FloorPlanSection from "../components/FloorPlanSection";
import PricingSection from "../components/Pricingsection";
import SpecificationsSection from "../components/Specificationssection";
import ContactUs from "../components/Contactus";
import banner5 from "../assets/images/banner5.jpg";
import Seo from "../components/Seo";

import { ModalProvider } from "../components/landing/Modalcontext";
import EnquiryModal from "../components/landing/EnquiryModal";
import LandingNavbar from "../components/landing/LandingNavbar";
import LandingFooter from "../components/landing/LandingFooter";
import SiteVisit from "../components/landing/SiteVisit";
import Faq from "../components/landing/Faq";
import Navbar from "../components/Navbar";

const UnitPlans = () => {
  return (
    <ModalProvider>
      <div>
        <Seo
          title="Unit Plans & Pricing — 2 & 3 BHK"
          description="View 2 & 3 BHK floor plans, specifications and pricing for Project 4 on Sarjapur Road, Bengaluru. Starting ₹95 Lakhs with a fully refundable EOI."
        />
        <EnquiryModal />
         <Navbar />
        <PageBanner titleLine1="UnitPlans" image={banner5} />
        <DesignPhilosophySection />
        <FloorPlanSection />
        <PricingSection />
        <SpecificationsSection />
        {/* <ContactUs /> */}

        <SiteVisit />
        <Faq />

        <LandingFooter />
      </div>
    </ModalProvider>
  );
};

export default UnitPlans;