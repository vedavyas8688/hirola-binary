import React from "react";
import PageBanner from "../components/Pagebanner";
import AmenitiesGallery from "../components/Amenitiesgallery";
import AmenitiesList from "../components/Amenitieslist";
import BrochureSection from "../components/Brochuresection";
import ContactUs from "../components/Contactus";
import MasterPlanSection from "../components/Masterplansectio";
import banner4 from "../assets/images/banner4.jpg";
import Seo from "../components/Seo";

import { ModalProvider } from "../components/landing/Modalcontext";
import EnquiryModal from "../components/landing/EnquiryModal";
import LandingNavbar from "../components/landing/LandingNavbar";
import LandingFooter from "../components/landing/LandingFooter";
import SiteVisit from "../components/landing/SiteVisit";
import Faq from "../components/landing/Faq";
import Navbar from "../components/Navbar";

const Amenities = () => {
  return (
    <ModalProvider>
      <div>
        <Seo
          title="Amenities"
          description="Explore 60+ curated amenities at Project 4 — an 8,000+ sq.ft. clubhouse, swimming pools, fitness decks, landscaped gardens and wellness zones on Sarjapur Road."
        />
        <EnquiryModal />
        <Navbar />

        <PageBanner titleLine1="Amenities" image={banner4} />
        <AmenitiesGallery />
        <AmenitiesList />
        <BrochureSection />
        <MasterPlanSection />

        {/* <ContactUs /> */}

        <SiteVisit />
        <Faq />

        <LandingFooter />
      </div>
    </ModalProvider>
  );
};

export default Amenities;
