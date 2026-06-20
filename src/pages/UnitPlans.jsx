import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import DesignPhilosophySection from "../components/Designphilosophysection";
import FloorPlanSection from "../components/FloorPlanSection";
import PricingSection from "../components/Pricingsection";
import SpecificationsSection from "../components/Specificationssection";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";
import banner5 from "../assets/images/banner5.jpg";

const UnitPlans = () => {
  return (
    <div>
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
