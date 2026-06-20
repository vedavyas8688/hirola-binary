import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TimelineProgressSection from "../components/TimelineProgressSection";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";
import ProgressSection from "../components/ProgressSection";

const ProjectStatus = () => {
  return (
    <div>
      <Navbar />
      <PageBanner
        titleLine1="ProjectStatus"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
      />
      <TimelineProgressSection />
      <ProgressSection />

      <ContactUs />
      <Footer />
    </div>
  );
};

export default ProjectStatus;
