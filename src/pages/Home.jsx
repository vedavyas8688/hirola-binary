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

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutSection />
      <GallerySection />
      <UnitPlansSection />
      <AmenitiesSection />
      <VideoSection />
      <UnitPlansSection />

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
