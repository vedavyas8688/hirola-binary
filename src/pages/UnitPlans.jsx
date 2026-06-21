import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/Pagebanner";
import DesignPhilosophySection from "../components/Designphilosophysection";
import FloorPlanSection from "../components/FloorPlanSection";
import PricingSection from "../components/Pricingsection";
import SpecificationsSection from "../components/Specificationssection";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";
import banner5 from "../assets/images/banner5.jpg";
import Seo from "../components/Seo";

const UnitPlans = () => {
  return (
    <div>
      <Seo
        title="Unit Plans & Pricing — 2 & 3 BHK"
        description="View 2 & 3 BHK floor plans, specifications and pricing for Project 4 on Sarjapur Road, Bengaluru. Starting ₹95 Lakhs with a fully refundable EOI."
      />
      <Navbar />
      <PageBanner titleLine1="UnitPlans" image={banner5} />
      <DesignPhilosophySection />
      <FloorPlanSection />
      <PricingSection />
      <SpecificationsSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default UnitPlans;
