import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import Processo from '../components/sections/Processo';
import FaqSection from '../components/FaqSection';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Processo />
      <Contact />
      <FaqSection />
      <WhatsAppButton 
        phoneNumber="5511999999999" 
        message="Olá! Vim pelo seu site e gostaria de mais informações."
      />
    </>
  );
}

export default Home;