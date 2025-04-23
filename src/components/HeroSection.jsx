export default function HeroSection({ onSectionChange }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    if (onSectionChange) {
      onSectionChange('contact');
      window.location.hash = 'contact'; // Update URL hash
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-black text-white px-4 md:px-8 py-16 md:py-20 relative z-10">
      <div className="w-full md:w-1/2 text-left mt-8 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
          <span className="text-primary">BEM VINDO</span> A ERA DA TRANSFORMAÇÃO DIGITAL<br />
          O INÍCIO DE UM NOVO TEMPO <span className="text-secondary">TRANSFORME!</span>
        </h1>
        <p className="text-base md:text-lg mb-6 md:mb-8 text-grayish">
          automatizando processos <span className="text-secondary">humanizando negócios.</span>
        </p>
        <button 
          onClick={handleContactClick}
          className="bg-secondary text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold hover:bg-white hover:text-secondary transition cursor-pointer text-sm md:text-base"
        >
          Quero TRANSFORMAR!
        </button>
      </div>

      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        {/* Image removed as requested */}
      </div>
    </section>
  );
}
  
  