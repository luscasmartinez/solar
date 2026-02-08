import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import WhatsAppCTA from './WhatsAppCTA';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            {/* Substituição do texto Brand pela imagem */}
            <img 
              src="https://i.imgur.com/Nd4zBTN.png" 
              alt="Logo Solar Energy" 
              className={`h-10 transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#home" className="font-medium text-primary-700 hover:text-primary-500 transition-colors">
                  Início
                </a>
                <a href="#about" className="font-medium text-primary-700 hover:text-primary-500 transition-colors">
                  Sobre
                </a>
                <a href="#services" className="font-medium text-primary-700 hover:text-primary-500 transition-colors">
                  Serviços
                </a>
                <a href="#contact" className="font-medium text-primary-700 hover:text-primary-500 transition-colors">
                  Contato
                </a>
              </>
            ) : (
              <Link to="/" className="font-medium text-primary-700 hover:text-primary-500 transition-colors">
                Voltar para Home
              </Link>
            )}
            <WhatsAppCTA section="navbar" variant="navbar" />
            <Link 
              to="/projects" 
              className="font-medium px-4 py-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors"
            >
              Projetos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-medium p-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {isHomePage && (
                <>
                  <a 
                    href="#hero" 
                    className="font-medium text-primary-700 hover:text-primary-500 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Início
                  </a>
                  <a 
                    href="#about" 
                    className="font-medium text-primary-700 hover:text-primary-500 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre
                  </a>
                  <a 
                    href="#services" 
                    className="font-medium text-primary-700 hover:text-primary-500 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Serviços
                  </a>
                  <a 
                    href="#contact" 
                    className="font-medium text-primary-700 hover:text-primary-500 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </a>
                </>
              )}
              <WhatsAppCTA section="navbar_mobile" variant="navbar" className="justify-center" />
              <Link 
                to="/projects"
                className="font-medium text-white bg-primary-500 hover:bg-primary-600 transition-colors py-2 px-4 rounded-xl text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </Link>
              {!isHomePage && (
                <Link 
                  to="/"
                  className="font-medium text-primary-700 hover:text-primary-500 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Voltar para Home
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
