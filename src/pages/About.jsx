import AboutFeatures from "../components/Aboutfeatures";
import AboutStory from "../components/Aboutstory";
import ContactUs from "../components/Contactus";
import FaqSection2 from "../components/Faqsection2";
import Footer from "../components/Fotter";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import banner3 from "../assets/images/banner3.jpg";

export default function About() {
  return (
    <div>
      <Navbar />
      <PageBanner
        // eyebrow="Who We Are"
        titleLine1="About Us"
        // titleLine2="Binary Ventures"
        image={banner3}
        // alt="About Binary Ventures"
      />
      <AboutStory />
      <AboutFeatures />
      <ContactUs />
      <FaqSection2 />
      <Footer />
    </div>
  );
}
