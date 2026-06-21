import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/Pagebanner";
import LocSection1 from "../components/LocSection1";
import AddressSection from "../components/AddressSection";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";
import banner14 from "../assets/images/banner14.jpg";
import Seo from "../components/Seo";


const Location = () => {
  return (
    <div>
      <Seo
        title="Location & Connectivity — Sarjapur Road"
        description="Project 4 sits on Sarjapur Road, minutes from the ORR IT corridor, top schools and hospitals, with STRR, SWIFT City and Metro Phase 3A driving future growth."
      />
      <Navbar />
      <PageBanner
        titleLine1="Location"
        image={banner14}
      />
      <LocSection1 />
      <AddressSection />
      <ContactUs />
      <Footer />

    </div>
  );
};

export default Location;
