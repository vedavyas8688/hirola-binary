import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import GallerySec1 from "../components/GallerySec1";
import GallerySec2 from "../components/GallerySec2";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <PageBanner
        titleLine1="Gallery"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
      />
      <GallerySec1 />
      <GallerySec2 />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Gallery;
