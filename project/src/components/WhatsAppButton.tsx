import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, trackWhatsAppClick } from '../config/whatsapp';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => trackWhatsAppClick('floating');

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-medium hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 animate-button-pulse focus:outline-none"
      aria-label="Clique e fale conosco"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;