import React from "react";
import PageBanner from "../components/Pagebanner";
import LocSection1 from "../components/LocSection1";
import AddressSection from "../components/AddressSection";
import ContactUs from "../components/Contactus";
import banner14 from "../assets/images/banner14.jpg";
import Seo from "../components/Seo";

import { ModalProvider } from "../components/landing/Modalcontext";
import EnquiryModal from "../components/landing/EnquiryModal";
import LandingNavbar from "../components/landing/LandingNavbar";
import LandingFooter from "../components/landing/LandingFooter";
import SiteVisit from "../components/landing/SiteVisit";
import Faq from "../components/landing/Faq";
import Navbar from "../components/Navbar";


const Location = () => {
  return (
    <ModalProvider>
      <div>
        <Seo
          title="Location & Connectivity — Sarjapur Road"
          description="Project 4 sits on Sarjapur Road, minutes from the ORR IT corridor, top schools and hospitals, with STRR, SWIFT City and Metro Phase 3A driving future growth."
        />
        <EnquiryModal />
         <Navbar />
        <PageBanner
          titleLine1="Location"
          image={banner14}
        />
        <LocSection1 />
        <AddressSection />
        {/* <ContactUs /> */}

        <SiteVisit />
        <Faq />

        <LandingFooter />
      </div>
    </ModalProvider>
  );
};

export default Location;