import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import LocSection1 from "../components/LocSection1";
import AddressSection from "../components/AddressSection";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";

const Location = () => {
  return (
    <div>
      <Navbar />
      <PageBanner
        titleLine1="Location"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
      />
      <LocSection1 />
      <AddressSection />
      <ContactUs />
      <Footer />

    </div>
  );
};

export default Location;
