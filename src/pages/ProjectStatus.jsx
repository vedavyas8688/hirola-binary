import React from "react";
import PageBanner from "../components/Pagebanner";
import TimelineProgressSection from "../components/TimelineProgressSection";
import ContactUs from "../components/Contactus";
import ProgressSection from "../components/ProgressSection";
import banner6 from "../assets/images/banner6.jpg";

import { ModalProvider } from "../components/landing/Modalcontext";
import EnquiryModal from "../components/landing/EnquiryModal";
import LandingNavbar from "../components/landing/LandingNavbar";
import LandingFooter from "../components/landing/LandingFooter";
import SiteVisit from "../components/landing/SiteVisit";
import Faq from "../components/landing/Faq";
import Navbar from "../components/Navbar";

const ProjectStatus = () => {
  return (
    <ModalProvider>
      <div>
        <EnquiryModal />
         <Navbar />
        <PageBanner
          titleLine1="ProjectStatus"
          image={banner6}
        />
        <TimelineProgressSection />
        <ProgressSection />

        <ContactUs />

        <SiteVisit />
        <Faq />

        <LandingFooter />
      </div>
    </ModalProvider>
  );
};

export default ProjectStatus;