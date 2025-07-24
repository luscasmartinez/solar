import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import Processo from '../components/sections/Processo';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';
import GoogleReviews from '../components/sections/GoogleReviews';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <Processo />
      <Contact />
      <GoogleReviews />
      <FaqSection />
      <WhatsAppButton 
        phoneNumber="5511999999999" 
        message="Olá! Vim pelo seu site e gostaria de mais informações."
      />
    </>
  );
}

export default Home;