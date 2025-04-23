export default function Navbar({ onSectionChange, activeSection }) {
  // Handle navigation click
  const handleNavClick = (e, section) => {
    e.preventDefault();
    onSectionChange(section);
    window.location.hash = section; // Update URL hash
  };

  // Function to determine if a link is active
  const isActive = (section) => activeSection === section;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm text-white flex justify-between items-center px-6 py-4 z-50 shadow-md">
      <a 
        href="#home" 
        className="flex items-center gap-2"
        onClick={(e) => handleNavClick(e, 'home')}
      >
        <img src="/Logo Tabinfo 4.png" alt="Logo TabInfo" className="w-32" />
      </a>
      <div className="flex gap-6 font-semibold text-sm md:text-base">
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
    </nav>
  );
}


