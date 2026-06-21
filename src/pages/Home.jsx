import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import AmenitiesSection from "../components/AmenitiesSection";
import VideoSection from "../components/VideoSection";
import UnitPlansSection from "../components/UnitPlansSection";
import GallerySection from "../components/GallerySection";
import LocationSection from "../components/LocationSection";
import FaqSection from "../components/Faqsection";
import AboutContent from "../components/Aboutcontent";
import EmiCalculator from "../components/Emicalculator";
import ContactSection from "../components/Contactsection";
import Contactus from "../components/Contactus";
import Footer from "../components/Fotter";
import FaqSection2 from "../components/Faqsection2";
import MainMasterplansection from "../components/MainMasterplansection";

const Home = () => {
  return (
    <div>
      <Seo
        title="Ultra-Luxury 2 & 3 BHK on Sarjapur Road, Bengaluru"
        description="Project 4 by Binary Ventures — ultra-luxury 2 & 3 BHK homes on Sarjapur Road, Bengaluru. 3.5 acres, 80% open space, only 6 apartments per floor and 60+ amenities."
      />
      <Navbar />
      <Banner />
      <AboutSection />
      <GallerySection />
      <UnitPlansSection />
      <MainMasterplansection />
      <AmenitiesSection />
      <VideoSection />

      <LocationSection />
      {/* <FaqSection /> */}
      <FaqSection2 />
      <AboutContent />
      <EmiCalculator />
      <ContactSection />
      <Contactus />
      <Footer />
    </div>
  );
};

export default Home;