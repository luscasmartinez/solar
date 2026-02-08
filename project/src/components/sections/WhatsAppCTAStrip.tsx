import React from 'react';
import WhatsAppCTA from '../WhatsAppCTA';

const WhatsAppCTAStrip: React.FC = () => {
  return (
    <section className="py-16 bg-primary-800 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Pronto para reduzir sua conta de luz?
        </h2>
        <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
          Fale conosco pelo WhatsApp e receba um atendimento rápido. Nossa equipe está pronta para ajudar.
        </p>
        <WhatsAppCTA section="cta_before_footer" variant="section" className="!bg-green-500 hover:!bg-green-600" />
      </div>
    </section>
  );
};

export default WhatsAppCTAStrip;
