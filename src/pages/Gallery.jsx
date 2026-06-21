import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/Pagebanner";
import GallerySec1 from "../components/GallerySec1";
import GallerySec2 from "../components/GallerySec2";
import ContactUs from "../components/Contactus";
import Footer from "../components/Fotter";
import banner3 from "../assets/images/banner3.jpg";
import Seo from "../components/Seo";


const Gallery = () => {
  return (
    <div>
      <Seo
        title="Gallery"
        description="A visual journey through Project 4 — clubhouse, interiors, exteriors, amenities and landscaped spaces of this ultra-luxury Sarjapur Road community in Bengaluru."
      />
      <Navbar />
      <PageBanner
        titleLine1="Gallery"
        image={banner3}
      />
      <GallerySec1 />
      <GallerySec2 />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Gallery;
