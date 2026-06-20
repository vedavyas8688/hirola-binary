import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/Pagebanner";
import AmenitiesGallery from "../components/Amenitiesgallery";
import AmenitiesList from "../components/Amenitieslist";
import BrochureSection from "../components/Brochuresection";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";
import MasterPlanSection from "../components/Masterplansectio";
import banner4 from "../assets/images/banner4.jpg";

const Amenities = () => {
  return (
    <div>
      <Navbar />
      <PageBanner
        titleLine1="Amenities"
        image={banner4}
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
