import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import IntroOverlay from './IntroOverlay';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-secondary-50 font-sans text-primary-800">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <IntroOverlay />
    </div>
  );
};

export default Layout;