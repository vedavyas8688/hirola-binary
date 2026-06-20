import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Amenities from "./pages/Amenities";
import UnitPlans from "./pages/UnitPlans";
import Gallery from "./pages/Gallery";
import ProjectStatus from "./pages/ProjectStatus";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/unit-plans" element={<UnitPlans />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/project-status" element={<ProjectStatus />} />
      <Route path="/location" element={<Location />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;