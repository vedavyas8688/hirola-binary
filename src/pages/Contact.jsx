import React from 'react'
import Navbar from '../components/Navbar'
import PageBanner from '../components/Pagebanner'
import ContactSection from '../components/Contactsection'
import ContactUs from '../components/Contactus'
import Footer from '../components/Fotter'
import banner8 from "../assets/images/banner8.jpg";
import Seo from '../components/Seo'


const Contact = () => {
  return (
    <div>
      <Seo
        title="Contact Us"
        description="Get in touch with Binary Ventures for pricing, floor plans and the launch offer on Project 4, Sarjapur Road. Our team responds within 24 hours."
      />
      <Navbar />
      <PageBanner
        titleLine1="Contact"
        image={banner8}
      />
      <ContactSection/>
      <ContactUs />
      <Footer />

      
    </div>
  )
}

export default Contact;
