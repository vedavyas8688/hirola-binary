import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import AmenitiesGallery from "../components/Amenitiesgallery";
import AmenitiesList from "../components/Amenitieslist";
import BrochureSection from "../components/Brochuresection";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";
import MasterPlanSection from "../components/Masterplansectio";

const Amenities = () => {
  return (
    <div>
      <Navbar />
      <PageBanner
        titleLine1="About Us"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
      />
      <AmenitiesGallery />
      <AmenitiesList />
      <BrochureSection />
      <MasterPlanSection />

      <ContactUs />
      <Footer />
    </div>
  );
};

export default Amenities;
