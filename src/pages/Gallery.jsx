import React from "react";
import PageBanner from "../components/Pagebanner";
import GallerySec1 from "../components/GallerySec1";
import GallerySec2 from "../components/GallerySec2";
import ContactUs from "../components/Contactus";
import banner3 from "../assets/images/banner3.jpg";
import Seo from "../components/Seo";

import { ModalProvider } from "../components/landing/Modalcontext";
import EnquiryModal from "../components/landing/EnquiryModal";
import LandingNavbar from "../components/landing/LandingNavbar";
import LandingFooter from "../components/landing/LandingFooter";
import SiteVisit from "../components/landing/SiteVisit";
import Faq from "../components/landing/Faq";
import Navbar from "../components/Navbar";


const Gallery = () => {
  return (
    <ModalProvider>
      <div>
        <Seo
          title="Gallery"
          description="A visual journey through Project 4 — clubhouse, interiors, exteriors, amenities and landscaped spaces of this ultra-luxury Sarjapur Road community in Bengaluru."
        />
        <EnquiryModal />
         <Navbar />
        <PageBanner
          titleLine1="Gallery"
          image={banner3}
        />
        <GallerySec1 />
        <GallerySec2 />
        {/* <ContactUs /> */}

        <SiteVisit />
        <Faq />

        <LandingFooter />
      </div>
    </ModalProvider>
  );
};

export default Gallery;