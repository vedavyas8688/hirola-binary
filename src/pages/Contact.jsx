import React from 'react'
import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import ContactSection from '../components/Contactsection'
import ContactUs from '../components/Contactus'
import Footer from '../components/Fotter'
import banner8 from "../assets/images/banner8.jpg";


const Contact = () => {
  return (
    <div>
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
