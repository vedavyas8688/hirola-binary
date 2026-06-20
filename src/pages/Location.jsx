import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/Pagebanner";
import LocSection1 from "../components/LocSection1";
import AddressSection from "../components/AddressSection";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";
import banner7 from "../assets/images/banner7.jpg";


const Location = () => {
  return (
    <div>
      <Navbar />
      <PageBanner
        titleLine1="Location"
        image={banner7}
      />
      <LocSection1 />
      <AddressSection />
      <ContactUs />
      <Footer />

    </div>
  );
};

export default Location;
