import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Ground</h3>
            <p className="text-white mb-4 leading-relaxed">
              Soluções solares que respeitam o planeta e oferecem economia real para você, unindo tecnologia, sustentabilidade e compromisso com um futuro mais verde..
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/groundenergia/" className="text-white hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/groundenergiasolar" className="text-white hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              
            </div>
          </div>
          
          
          
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a  className="text-white hover:text-white transition-colors">Geração Solar Fotovoltaica</a>
              </li>
              <li>
                <a  className="text-white hover:text-white transition-colors">Instalações Elétricas</a>
              </li>
              <li>
                <a  className="text-white hover:text-white transition-colors">Medição Coletiva/Agrupada</a>
              </li>
              <li>
                <a className="text-white hover:text-white transition-colors">Subestações Aéreas /Cabines Primárias</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-white">(55) 9 9931-4171</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-white">groundenergiasolar@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-white">Alegrete, RS - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-8 pt-6 text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Ground. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;