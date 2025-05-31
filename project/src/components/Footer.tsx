import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Brand</h3>
            <p className="text-white mb-4 leading-relaxed">
              Criamos experiências digitais modernas e impactantes para elevar sua presença online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-white hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-white transition-colors">Design UI/UX</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white transition-colors">Desenvolvimento Web</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white transition-colors">Marketing Digital</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white transition-colors">Consultoria</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-white">(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-white">contato@exemplo.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-white">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-8 pt-6 text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Brand. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;