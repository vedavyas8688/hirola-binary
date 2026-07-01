import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Amenities from "./pages/Amenities";
import UnitPlans from "./pages/UnitPlans";
import Gallery from "./pages/Gallery";
// import ProjectStatus from "./pages/ProjectStatus";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import BlogsPage from "./components/BlogsPage";
import BlogDetailPage from "./components/BlogDetailPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import LandingPage from "./pages/LandingPage";
import LandingTermsAndConditions from "./components/landing/LandingTermsAndConditions";
import LandingPrivacyPolicy from "./components/landing/LandingPrivacyPolicy";
 
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/unit-plans" element={<UnitPlans />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/project-status" element={<ProjectStatus />} /> */}
        <Route path="/blogpage" element={<BlogsPage />} />
        <Route path="/blogpage/:id" element={<BlogDetailPage />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        {/* <Route path="/landingpage" element={<LandingPage />} /> */}
        <Route path="/terms-and-conditions" element={<LandingTermsAndConditions />} />
        <Route path="/privacypolicy" element={<LandingPrivacyPolicy />} />

         
      </Routes>
    </>
  );
}

export default App;