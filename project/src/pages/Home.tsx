import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import Processo from '../components/sections/Processo';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';
import GoogleReviews from '../components/sections/GoogleReviews';
import HomeProjects from '../components/sections/HomeProjects';
import WhatsAppCTAStrip from '../components/sections/WhatsAppCTAStrip';

function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <HomeProjects />
      <ServicesSection />
      
      <Processo />
      
      <Contact />
      <GoogleReviews />
      <FaqSection />
      <WhatsAppCTAStrip />
      <WhatsAppButton />
    </>
  );
}

export default Home;