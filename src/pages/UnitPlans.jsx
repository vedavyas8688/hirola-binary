import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import DesignPhilosophySection from "../components/Designphilosophysection";
import FloorPlanSection from "../components/FloorPlanSection";
import PricingSection from "../components/Pricingsection";
import SpecificationsSection from "../components/Specificationssection";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";
 
const UnitPlans = () => {
  return (
    <div>
      <Navbar />
      <PageBanner
        titleLine1="UnitPlans"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
      />
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
