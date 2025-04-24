export default function About() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-transparent text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left">Quem Somos</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <p className="mb-3 md:mb-4 text-base md:text-lg">
              Somos mais do que uma empresa de web apps e desenvolvimento de softwares.
            </p>
            <p className="mb-3 md:mb-4 text-base md:text-lg">
              Somos storytellers digitais, arquitetos e designers de inovação. O que queremos é transformar ideias em realidade e sonhos em conquistas.
            </p>
            <p className="mb-3 md:mb-4 text-base md:text-lg">
              Desde o começo, trabalhamos incansavelmente para tornar indivíduos capazes e organizações a alcançarem a sua potência máxima no mundo digital.
            </p>
            <p className="mb-3 md:mb-4 text-base md:text-lg">
              Nosso foco é sempre você, cliente, colaborando e orientando para resultados. Acreditamos que cada projeto é uma jornada compartilhada, onde nossos clientes são parte integrante do processo criativo.
            </p>
            <p className="mb-3 md:mb-4 text-base md:text-lg">
              No coração de tudo o que fazemos está o compromisso com a excelência, a inovação e a integridade.
            </p>
            <p className="mb-4 md:mb-6 text-base md:text-lg">
              Estamos constantemente buscando novas fronteiras, explorando novas tecnologias e adotando as melhores práticas da indústria para oferecer resultados excepcionais.
            </p>
            <p className="mt-6 md:mt-8 font-bold text-base md:text-lg">
              Vem com a gente nesta jornada de transformação digital!
            </p>
            <p className="font-bold text-base md:text-lg">
              Estamos aqui para fazer acontecer.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <img 
              src="/Images/Image5.png" 
              alt="Equipe TabInfo" 
              className="rounded-xl shadow-lg max-w-full h-auto object-cover" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

  