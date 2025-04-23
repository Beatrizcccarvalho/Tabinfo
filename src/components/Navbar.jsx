import { useState } from 'react';

export default function Navbar({ onSectionChange, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle navigation click
  const handleNavClick = (e, section) => {
    e.preventDefault();
    onSectionChange(section);
    window.location.hash = section; // Update URL hash
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
  };

  // Function to determine if a link is active
  const isActive = (section) => activeSection === section;

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm text-white flex justify-between items-center px-6 py-4 z-50 shadow-md">
      <a 
        href="#home" 
        className="flex items-center gap-2"
        onClick={(e) => handleNavClick(e, 'home')}
      >
        <img src="/Logo Tabinfo 4.png" alt="Logo TabInfo" className="w-24 md:w-32" />
      </a>
      
      {/* Mobile hamburger button */}
      <button 
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Desktop navigation */}
      <div className="hidden md:flex gap-6 font-semibold text-sm md:text-base">
        <a 
          href="#home" 
          className={`transition ${isActive('home') ? 'text-blue-400' : 'hover:text-secondary'}`}
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={`transition ${isActive('about') ? 'text-blue-400' : 'hover:text-secondary'}`}
          onClick={(e) => handleNavClick(e, 'about')}
        >
          Quem Somos
        </a>
        <a 
          href="#services" 
          className={`transition ${isActive('services') ? 'text-blue-400' : 'hover:text-secondary'}`}
          onClick={(e) => handleNavClick(e, 'services')}
        >
          Serviços
        </a>
        <a 
          href="#clients" 
          className={`transition ${isActive('clients') ? 'text-blue-400' : 'hover:text-secondary'}`}
          onClick={(e) => handleNavClick(e, 'clients')}
        >
          Clientes
        </a>
        <a 
          href="#contact" 
          className={`transition ${isActive('contact') ? 'text-blue-400' : 'hover:text-secondary'}`}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contato
        </a>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm flex flex-col items-center pt-4 pb-6 shadow-lg">
          <a 
            href="#home" 
            className={`py-3 px-4 w-full text-center ${isActive('home') ? 'text-blue-400' : 'hover:text-secondary'}`}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`py-3 px-4 w-full text-center ${isActive('about') ? 'text-blue-400' : 'hover:text-secondary'}`}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            Quem Somos
          </a>
          <a 
            href="#services" 
            className={`py-3 px-4 w-full text-center ${isActive('services') ? 'text-blue-400' : 'hover:text-secondary'}`}
            onClick={(e) => handleNavClick(e, 'services')}
          >
            Serviços
          </a>
          <a 
            href="#clients" 
            className={`py-3 px-4 w-full text-center ${isActive('clients') ? 'text-blue-400' : 'hover:text-secondary'}`}
            onClick={(e) => handleNavClick(e, 'clients')}
          >
            Clientes
          </a>
          <a 
            href="#contact" 
            className={`py-3 px-4 w-full text-center ${isActive('contact') ? 'text-blue-400' : 'hover:text-secondary'}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
}


