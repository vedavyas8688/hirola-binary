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
import banner1Mobile from "../assets/images/banner9.jpg";

export const bannerSlides = [
  {
    image: banner13,
    imageMobile: banner1Mobile,
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
    floorPlan: seventeen,
    description:
      "Spacious and sophisticated, our 3BED homes with dual balconies and open layouts are crafted for families who value comfort and luxury.",
  },
  {
    type: "2 BED",
    size: "1131 - 1451 sq.ft",
    logo: logoLeft,
    floorPlan: sixteen,
    description:
      "Elegantly designed 2BED homes with dual balconies that invite light, air, and warmth.",
  },
];

export const galleryCategories = [
  {
    label: "Interiors",
    image: thirteen,
  },
  {
    label: "Exteriors",
    image: fourteen,
  },
  {
    label: "Amenities",
    image: fifteen,
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
    items: ["D-Mart (2 Km)", "Forum The Prestige City (5 Km)"],
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

import masterPlanImg from "../assets/images/31.jpg";


export const masterPlan = {
  label: "Master Plan",
  titleLine1: "A Thoughtfully Designed",
  titleLine2: "3.5-Acre Master Plan",
  image: masterPlanImg,
  downloadName: "Binary-Project4-MasterPlan.jpg",
  description:
    "Project 4 is master-planned across 3.5 acres with 80%+ open space and only 234 residences — a rare low-density community on Sarjapur Road, with just 6 apartments per floor and no common walls.",
  description2:
    "At its heart lies a grand arrival plaza and a central landscape garden wrapped around an 8,000+ sq.ft clubhouse, with wide internal roads, community greens and leisure zones — ensuring privacy, ventilation and long-term livability.",
};

 export const videoSection = {
  title: "WATCH PROJECT 4 RISE",
  subtitle:
    "See the latest construction progress at Project 4 — from foundation to skyline, every milestone built with precision and care on Sarjapur Road.",
  youtubeId: "s-QL_tPe8CI",
};
 


import locationImg from "../assets/images/3.jpg";

export const locationSection = {
  eyebrow: "Location & Connectivity",
  title: "FROM SUBURBAN SOLITUDE TO URBAN CONNECTIVITY",
  intro:
    "Perfectly positioned on Sarjapur Road, Project 4 stands at the heart of Bengaluru's next big growth zone. With landmark projects like STRR, PRR, SWIFT City and Metro Phase 3A, the neighbourhood promises seamless connectivity and strong future value.",
  image: locationImg,
  categories: [
    {
      label: "Institutes",
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
      label: "IT Companies",
      items: [
        "Wipro Campus (3 Km)",
        "Infosys SEZ Sarjapur (4 Km)",
        "RGA Tech Park (6 Km)",
        "Cessna Business Park (7 Km)",
        "Salarpuria Softzone (8 Km)",
        "Embassy Tech Village (10 Km)",
        "Electronic City Phase 1 (12 Km)",
        "Bagmane Tech Park (14 Km)",
      ],
    },
    {
      label: "Hospitals",
      items: [
        "Motherhood Hospital Sarjapur (4 Km)",
        "Manipal Hospital Sarjapur (5 Km)",
        "Columbia Asia Hospital (6 Km)",
        "Narayana Multispeciality Hospital (8 Km)",
        "Sakra World Hospital (10 Km)",
        "Apollo Hospital Bannerghatta (12 Km)",
      ],
    },
    {
      label: "Shopping",
      items: [
        "Forum Mall Koramangala (8 Km)",
        "Total Mall Sarjapur (5 Km)",
        "DMart Sarjapur (3 Km)",
        "Market Square Mall (9 Km)",
        "Nexus Shantiniketan (11 Km)",
        "Phoenix Marketcity (13 Km)",
      ],
    },
  ],
};


export const faqs = [
  {
    question: "Where is Project 4 located?",
    answer:
      "Project 4 by Binary Ventures is on Sarjapur Road, Chambenahalli, Bengaluru — within 10–15 minutes of the ORR IT corridor and close to Whitefield, Electronic City and Bellandur.",
  },
  {
    question: "What configurations are available?",
    answer:
      "Ultra-luxury 2 and 3 BHK residences, with only 6 apartments per floor and homes designed with no common walls for maximum privacy.",
  },
  {
    question: "What are the starting prices?",
    answer:
      "2 BHK homes start from ₹95 Lakhs and 3 BHK homes from ₹1.35 Crore, at ₹8,499 per sq.ft. A launch offer of ₹8,500/sq.ft. applies to the first 50 flats.",
  },
  {
    question: "How large is the development?",
    answer:
      "Project 4 spans 3.5 acres with 234 residences, 80% open space, a grand 8,000+ sq.ft. clubhouse and 60+ amenities.",
  },
  {
    question: "What makes Project 4 different?",
    answer:
      "Low-density living — only 6 apartments per floor, no common walls, large balconies, Vaastu-compliant layouts and abundant cross-ventilation set within 80% open space.",
  },
  {
    question: "Is it a good investment?",
    answer:
      "Yes — a strong IT catchment with upcoming Metro Phase 3A, STRR and PRR connectivity makes it attractive for end-users and NRIs alike.",
  },
  {
    question: "Is the EOI refundable?",
    answer: "Yes, the Expression of Interest (EOI) is fully refundable.",
  },
];


import aboutCompanyImg from "../assets/images/banner3.jpg";

export const aboutCompany = {
  brand: "BINARY VENTURES",
  tagline: ["EXCELLENTLY BUILT,", "EXCLUSIVELY DELIVERED."],
  image: aboutCompanyImg,
  paragraphs: [
    "Binary Ventures presents Project 4 — an ultra-luxury, low-density community on Sarjapur Road, designed around 80% open space, only 6 apartments per floor and homes with no common walls.",
    "Set across 3.5 acres with 234 residences and a grand 8,000+ sq.ft. clubhouse, Project 4 places future-ready homes within 10–15 minutes of the ORR IT corridor, with upcoming metro connectivity and strong appreciation potential.",
  ],
};


export const contactSection = {
  phone: "+91 98765 43210",        // TODO: confirm the real number with client
  phoneHref: "tel:+919876543210",
  email: "info@binaryventures.in",
  address: "Chambenahalli, Sarjapur Road, Bengaluru",
  intro:
    "Have a question about Binary Project 4 — pricing, floor plans, or the launch offer? Reach us directly or drop a message and our team will call you back within 24 hours.",
  interests: ["2 BHK", "3 BHK", "Investment", "NRI Purchase", "General Enquiry"],
};

export const aboutFeatures = {
  eyebrow: "Why Binary",
  title1: "DESIGNED FOR",
  title2: "LIFE",

  items: [
    {
      title: "The Sarjapura Advantage",
      icon: "MapPin",
      description:
        "Strategically located in Sarjapura, the project offers seamless access to the ORR IT Corridor, major tech parks, leading schools, hospitals, and lifestyle destinations. With upcoming infrastructure developments such as STRR, Swift City, and Metro Phase 3A, it presents a future-ready investment opportunity backed by transparency, legal clarity, and a fully refundable EOI.",
    },

    {
      title: "Thoughtful by Design",
      icon: "Ruler",
      description:
        "Crafted for elevated living, the community features 80% open spaces, landscaped greens, and serene walkways. Homes are designed without common walls to ensure privacy, while Vastu-compliant layouts, expansive balconies, abundant natural light, and cross ventilation create a harmonious and comfortable living environment.",
    },

    {
      title: "The Flow of Community",
      icon: "Trees",
      description:
        "Inspired by nature's rhythm, the masterplan fosters a sense of connection, openness, and belonging. Carefully designed spaces encourage community interaction while dedicated wellness, recreation, and leisure zones create opportunities for residents to relax, engage, and thrive together.",
    },

    {
      title: "Beyond the Ordinary",
      icon: "Building2",
      description:
        "Experience a lifestyle enriched by an 8,000+ sq.ft. clubhouse and over 60 thoughtfully curated amenities. From sunlit swimming pools and recreation decks to fitness spaces, green retreats, smart living features, and sustainable design principles, every detail is crafted to deliver luxury, convenience, and well-being.",
    },
  ],
};