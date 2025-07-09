import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-300 mb-4">Ground</h3>
            <p className="text-gray-300 mb-4">
              Transformando espaços em experiências únicas através de design inovador e sustentável.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="text-primary-300 mr-2" />
                <span className="text-gray-300">contato@ground.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-primary-300 mr-2" />
                <span className="text-gray-300">xxxxxxxxxxxxxxxxx</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="text-primary-300 mr-2" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-6 text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Ground. Todos os direitos reservados.</p>
          <div className="mt-2">
            <Link 
              to="/admin/login" 
              className="text-primary-300 hover:text-white transition-colors text-xs opacity-60 hover:opacity-100"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

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