import AboutFeatures from "../components/Aboutfeatures";
import AboutStory from "../components/Aboutstory";
import ContactUs from "../components/Contactus";
import FaqSection2 from "../components/Faqsection2";
import Footer from "../components/Fotter";
import Navbar from "../components/Navbar";
import PageBanner from "../components/Pagebanner";
import banner10 from "../assets/images/banner10.jpg";

export default function About() {
  return (
    <div>
      <Navbar />
      <PageBanner
        // eyebrow="Who We Are"
        titleLine1="About Us"
        // titleLine2="Binary Ventures"
        image={banner10}
        // alt="About Binary Ventures"
      />
      <AboutStory />
      <AboutFeatures />
       <FaqSection2 />
      <ContactUs />
      
      <Footer />
    </div>
  );
}
