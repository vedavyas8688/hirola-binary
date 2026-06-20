import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TimelineProgressSection from "../components/TimelineProgressSection";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";
import ProgressSection from "../components/ProgressSection";
import banner6 from "../assets/images/banner6.jpg";

const ProjectStatus = () => {
  return (
    <div>
      <Navbar />
      <PageBanner
        titleLine1="ProjectStatus"
        image={banner6}
      />
      <TimelineProgressSection />
      <ProgressSection />

      <ContactUs />
      <Footer />
    </div>
  );
};

export default ProjectStatus;
