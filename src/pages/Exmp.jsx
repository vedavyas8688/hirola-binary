

// import { useEffect } from "react";
// import "../components/landing/landing.css";

// import Navbar from "../components/landing/Navbar";
// import Hero from "../components/landing/Hero";
// import Legacy from "../components/landing/Legacy";
// import WhyEoi from "../components/landing/WhyEoi";
// import StatsBar from "../components/landing/StatsBar";
// import Features from "../components/landing/Features";
// import PriceAdvantage from "../components/landing/PriceAdvantage";
// import EoiProcess from "../components/landing/EoiProcess";
// import MasterPlan from "../components/landing/MasterPlan";
// import Clubhouses from "../components/landing/Clubhouses";
// import Faq from "../components/landing/Faq";
// import Location from "../components/landing/Location";
// import SiteVisit from "../components/landing/SiteVisit";
// import Footer from "../components/landing/Footer";
// import FloatingActions from "../components/landing/FloatingActions";
// import Amenities from "../components/landing/Amenities";
// import Enquire from "../components/landing/Enquire";
//  import Floating from "../components/landing/Floating";
// import FloorPlans from "../components/landing/FloorPlans";
//  import Gallery from "../components/landing/Gallery";
// import Investment from "../components/landing/Investment";
// import Marquee from "../components/landing/Marquee";
// import Nav from "../components/landing/Nav";
// import Overview from "../components/landing/Overview";
// import Pillars from "../components/landing/Pillars";
// import Pricing from "../components/landing/Pricing";
// import Residences from "../components/landing/Residences";
// import Specifications from "../components/landing/Specifications";
// import Walkthrough from "../components/landing/Walkthrough";

// export default function Exmp() {
//   // Same fade-in behaviour as the original page's IntersectionObserver
//   useEffect(() => {
//     const io = new IntersectionObserver(
//       (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("lp-in"); io.unobserve(e.target); } }),
//       { threshold: 0.1 }
//     );
//     document.querySelectorAll(".lp-fade").forEach((el) => io.observe(el));
//     return () => io.disconnect();
//   }, []);

//   return (
//     <div className="bg-bg-cream text-foreground-green font-sans overflow-x-hidden">
//       <Navbar />
//       <Hero />
//       <Legacy />
//       <WhyEoi />
//       <StatsBar />
//       <Features />
//       <PriceAdvantage />
//       <EoiProcess />
//       <MasterPlan />
//       <Clubhouses />
//       <Faq />
//       <Location />
//       <SiteVisit />
//       <Footer />
//       <FloatingActions />
//       <Nav />
//       <Hero />
//       <Marquee />
//       <Overview />
//       <Residences />
//       <FloorPlans />
//       <Pillars />
//       <Specifications />
//       <MasterPlan />
//       <Amenities />
//       <Gallery />
//       <Walkthrough />
//       <Investment />
//       <Pricing />
      
//       <Location />
       
//       <Enquire />
      
//       <Floating />
//     </div>
//   );
// }