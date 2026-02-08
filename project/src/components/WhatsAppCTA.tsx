import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_BUTTON_TEXT, trackWhatsAppClick } from '../config/whatsapp';

type Variant = 'primary' | 'navbar' | 'section';

interface WhatsAppCTAProps {
  section: string;
  variant?: Variant;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-[0.98] animate-button-pulse',
  navbar:
    'inline-flex items-center gap-2 font-medium px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300 hover:scale-105 active:scale-[0.98]',
  section:
    'inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-[0.98] animate-button-pulse',
};

const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  section,
  variant = 'primary',
  className = '',
}) => {
  const handleClick = () => trackWhatsAppClick(section);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${variantStyles[variant]} ${className}`}
      aria-label={WHATSAPP_BUTTON_TEXT}
    >
      <MessageCircle size={variant === 'section' ? 24 : 20} />
      {WHATSAPP_BUTTON_TEXT}
    </a>
  );
};

export default WhatsAppCTA;
