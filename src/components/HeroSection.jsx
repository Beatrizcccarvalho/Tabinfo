export default function HeroSection({ onSectionChange }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    if (onSectionChange) {
      onSectionChange('contact');
      window.location.hash = 'contact'; // Update URL hash
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-black text-white px-8 py-20 relative z-10">
      <div className="md:w-1/2 text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-primary">BEM VINDO</span> A ERA DA TRANSFORMAÇÃO DIGITAL<br />
          O INÍCIO DE UM NOVO TEMPO <span className="text-secondary">TRANSFORME!</span>
        </h1>
        <p className="text-lg mb-8 text-grayish">
          automatizando processos <span className="text-secondary">humanizando negócios.</span>
        </p>
        <button 
          onClick={handleContactClick}
          className="bg-secondary text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-secondary transition cursor-pointer"
        >
          Quero TRANSFORMAR!
        </button>
      </div>

      <div className="md:w-1/2 mb-12 md:mb-0">
        {/* Image removed as requested */}
      </div>
    </section>
  );
}
  
  