import React from 'react'
import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import ContactSection from '../components/Contactsection'
import ContactUs from '../components/Contactus'
import Footer from '../components/Fotter'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageBanner
        titleLine1="Contact"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
      />
      <ContactSection/>
      <ContactUs />
      <Footer />

      
    </div>
  )
}

export default Contact;
