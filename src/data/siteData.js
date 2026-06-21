// src/data/siteData.js
import banner11 from "../assets/images/banner11.jpg";
import banner12 from "../assets/images/banner12.jpg";
import banner13 from "../assets/images/banner13.jpg";
import banner10 from "../assets/images/banner10.jpg";
import one from "../assets/images/1.jpg";
import two from "../assets/images/banner2.png";
import logoLeft from "../assets/images/logo-left.svg";
import seventeen from "../assets/images/17.jpg";
import sixteen from "../assets/images/16.jpg";
import thirteen from "../assets/images/13.jpg";
import fourteen from "../assets/images/14.jpg";
import fifteen from "../assets/images/15.jpg";

export const bannerSlides = [
   
  {
    image: banner13,
    alt: "Luxury Residential Tower",
  },
   {
    image: banner10,
    alt: "Luxury Residential Tower",
  },
  {
    image: banner11,
    alt: "Luxury Residential Tower",
  },
   {
    image: banner12,
    alt: "Luxury Residential Tower",
  },
    
  
];

// Keep mobile slides using the same source images as desktop so animations,
// responsive cropping and transitions remain visually consistent across
// breakpoints. We still include `label` and `title` for the mobile overlay.
const mobileMeta = [
  { label: "Binary Ventures", title: ["BUILDING THE", "FUTURE."] },
  { label: "Luxury Living", title: ["PREMIUM SPACES", "CRAFTED TO LAST."] },
  { label: "Modern Design", title: ["TIMELESS", "ARCHITECTURE."] },
  { label: "Trusted Quality", title: ["QUALITY IN", "EVERY DETAIL."] },
];

export const bannerSlidesMobile = bannerSlides.map((s, i) => ({
  // reuse the exact desktop image URL so both views show the same visuals
  image: s.image,
  alt: s.alt,
  label: mobileMeta[i]?.label || "",
  title: mobileMeta[i]?.title || [],
}));

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/amenities", label: "Amenities" },
  { href: "/unit-plans", label: "Unit Plans" },
  { href: "/gallery", label: "Gallery" },
  { href: "/project-status", label: "Project Status" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact Us" },
];

export const siteConfig = {
  projectName: "Project 4",
  phone: "+91 00000 00000",
  brochureUrl: "/brochure.pdf",
};

export const aboutImages = [
  one,
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
  two,
];

export const aboutContent = {
  titleGold: "PROJECT 4",
  titleGreen: "WHERE LOW DENSITY MEETS LUXURY",
  description:
    "Project 4 by Binary Ventures is ultra-luxury living reimagined on Sarjapur Road — where 80% open space, only 6 apartments per floor and homes with no common walls create a rare sense of privacy, light and calm. Thoughtfully designed 2 & 3 BHK residences welcome families, professionals, NRIs and first-time buyers into a future-ready, low-density community.",
};


export const unitPlans = [
  {
    type: "3 BED",
    size: "1296 - 1826 sq.ft",
    logo: logoLeft,
    floorPlan:
       seventeen,
    description:
      "Spacious and sophisticated, our 3BED homes with dual balconies and open layouts are crafted for families who value comfort and luxury.",
  },
  {
    type: "2 BED",
    size: "1131 - 1451 sq.ft",
    logo: logoLeft,
    floorPlan:
      sixteen,
    description:
      "Elegantly designed 2BED homes with dual balconies that invite light, air, and warmth.",
  },
];

export const galleryCategories = [
  {
    label: "Interiors",
    image:thirteen ,
  },
  {
    label: "Exteriors",
    image:
       fourteen,
  },
  {
    label: "Amenities",
    image:
       fifteen,
  },
];


export const locationData = [
  {
    title: "Institutes",
    items: [
      "Azim Premji University (3 Km)",
      "Endevour International School (5 Km)",
      "Champion International School (5 Km)",
      "Wellsprings Academy (5 Km)",
      "Vartika Montessori School (5 Km)",
      "Cambridge Innovative School (5 Km)",
      "Greenwood High Sarjapur (8 Km)",
      "TISB Academy School (9 Km)",
      "Oakridge International School (9 Km)",
      "Delhi Public School (DPS) (10 Km)",
      "Christ College of Science and Management (15 Km)",
    ],
  },
  {
    title: "IT Companies",
    items: [
      "Infosys Head Quarter (2 Km)",
      "Wipro (11 Km)",
      "RGA Tech Park (13 Km)",
      "Vaishnavi Tech Park (16 Km)",
      "RMZ Ecoworld (17 Km)",
      "TCS 360 Business Park (26 Km)",
    ],
  },
  {
    title: "Hospitals",
    items: [
      "Spandana Hospital (3 Km)",
      "Swastik Hospital (7 Km)",
      "Sparsh Hospital (8 Km)",
      "Natus Women & Children Hospital (12 Km)",
      "Mother Hood Hospital (16 Km)",
      "Manipal Hospital (17 Km)",
      "Narayana Multispeciality Hospital (21 Km)",
    ],
  },
  {
    title: "Shopping",
    items: [
      "D-Mart (2 Km)",
      "Forum The Prestige City (5 Km)",
    ],
  },
];


export const nextAddressCards = [
  {
    icon: "FaRoad",
    title: "Proposed STRR",
    subtitle: "(Satellite Town Ring Road)",
    description:
      "The upcoming STRR will enhance connectivity, linking major hubs around Bangalore by boosting real estate value in the Sarjapura region.",
    fullWidth: false,
  },
  {
    icon: "FaCity",
    title: "SWIFT City in Sarjapur",
    subtitle: "(1000-Acre SEZ)",
    description:
      "A massive government-planned Special Economic Zone (SEZ) aims at supporting startups and driving economic growth. This positions Sarjapura as a prime investment destination.",
    fullWidth: false,
  },
  {
    icon: "FaLaptopCode",
    title: "Growing IT & Commercial Hub",
    subtitle: null,
    description:
      "Sarjapura is surrounded by tech parks, co-working spaces, and multiple IT Sectors, making it a prime investment hotspot along with convenience.",
    fullWidth: false,
  },
  {
    icon: "FaSubway",
    title: "Metro Phase 3A, Red Line",
    subtitle: "Sarjapura to Hebbal",
    description:
      "The proposed metro extension will provide seamless public transport, and improve accessibility by reducing commute time for residents.",
    fullWidth: false,
  },
  {
    icon: "FaLeaf",
    title: "Green & Sustainable Development",
    subtitle: null,
    description:
      "Government initiatives include parks, open spaces, and eco-friendly infrastructure to enhance the quality of life.",
    fullWidth: true,
  },
];