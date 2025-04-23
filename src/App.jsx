import React, { useState, useEffect, useRef } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Refs for each section
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    clients: useRef(null),
    contact: useRef(null)
  };

  // Function to update active section
  const handleSetActiveSection = (section) => {
    setActiveSection(section);
    // Scroll to the section
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
      // Scroll to the section when hash changes (without smooth behavior to ensure instant navigation on page load)
      sectionRefs[hash]?.current?.scrollIntoView();
    };

    // Set initial section based on URL hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset for navbar

      // Find which section is currently in view
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (!ref.current) return;
        
        const element = ref.current;
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          if (activeSection !== section) {
            setActiveSection(section);
            // Update URL hash without triggering scroll (to avoid loops)
            history.replaceState(null, null, `#${section}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <ParticlesBackground />
      <Navbar onSectionChange={handleSetActiveSection} activeSection={activeSection} />
      
      <div className="flex-grow">
        <section id="home" ref={sectionRefs.home} className="pt-24 min-h-screen">
          <HeroSection onSectionChange={handleSetActiveSection} />
        </section>
        
        <section id="about" ref={sectionRefs.about} className="py-24 min-h-screen">
          <About />
        </section>
        
        <section id="services" ref={sectionRefs.services} className="py-24 min-h-screen">
          <Services />
        </section>
        
        <section id="clients" ref={sectionRefs.clients} className="py-24 min-h-screen">
          <Clients />
        </section>
        
        <section id="contact" ref={sectionRefs.contact} className="py-24 pb-36 min-h-screen">
          <Contact />
        </section>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

