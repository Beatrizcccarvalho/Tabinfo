export default function Clients() {
  const clientData = [
    { name: "CloserCare", imgSrc: "/clientes/CloserCare 15.05.23.png", url: "https://closercare.com" },
    { name: "LuaBar", imgSrc: "/clientes/LuaBar.png", url: "https://luabar.com" },
    { name: "Agua", imgSrc: "/clientes/Agua.png", url: "https://agua.com" },
    { name: "Best in Class", imgSrc: "/clientes/Best in Class.png", url: "https://bestinclass.com" },
    { name: "Role", imgSrc: "/clientes/Role.png", url: "https://role.com" },
    { name: "Ideia", imgSrc: "/clientes/Ideia.png", url: "https://ideia.com" },
    { name: "Plantar Arvore", imgSrc: "/clientes/PlantarArvore .png", url: "https://plantararvore.com" },
    { name: "Glass Color", imgSrc: "/clientes/GlassColor.png", url: "https://glasscolor.com" },
    { name: "Taurus Laundry", imgSrc: "/clientes/Taurus Laundry.png", url: "https://tauruslaundry.com" },
    { name: "Usual Brinquedos", imgSrc: "/clientes/Usual.png", url: "https://usualbrinquedos.com" },
    { name: "Grupo Novo", imgSrc: "/clientes/Grupo novo.png", url: "https://gruponovo.com" },
    { name: "Pro Contratos", imgSrc: "/clientes/Contratos.png", url: "https://procontratos.com" },
    { name: "CompraVenda", imgSrc: "/clientes/CompraVenda.png", url: "https://compravenda.com" },
    { name: "X3Pro", imgSrc: "/clientes/X3Pro.png", url: "https://x3pro.com" },
    { name: "Capricho", imgSrc: "/clientes/Capricho.png", url: "https://capricho.com" },
    { name: "Dona Alca", imgSrc: "/clientes/Dona Alca.png", url: "https://donaalca.com" }
  ];

  return (
    <section className="py-20 px-6 bg-transparent text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Nossos Clientes: Juntos Rumo ao Sucesso</h2>
        
        <p className="mb-6">
          Estamos comprometidos em fornecer um serviço excepcional, apoiado por uma equipe dedicada e apaixonada, 
          pronta para superar desafios e entregar resultados excepcionais a cada passo do caminho.
        </p>
        
        <p className="mb-6">
          Ao nos associarmos, você não apenas obtém acesso a produtos e serviços de alta qualidade, 
          mas também a uma equipe que se preocupa genuinamente com o seu sucesso. Juntos, estamos moldando 
          o futuro dos negócios, impulsionados pela confiança, integridade e uma dedicação incansável à excelência.
        </p>

        <p className="mb-6">
          Junte-se a nós nesta jornada rumo ao sucesso duradouro. Juntos, podemos alcançar novos patamares 
          e prosperar em um mundo cada vez mais dinâmico e desafiador.
        </p>

        <p className="mb-12">
          Na nossa jornada para oferecer excelência e soluções sob medida, valorizamos cada conexão que construímos 
          ao longo do caminho. Nossos parceiros são a espinha dorsal do nosso sucesso, confiando em nossa expertise 
          para alcançar seus objetivos de negócios de forma confiável e eficaz.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clientData.map((client, index) => (
            <div className="client-card" key={index}>
              <a 
                href={client.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                title={`Visite o site de ${client.name}`}
                aria-label={`Visite o site de ${client.name}`}
                className="client-link"
              >
                <div className="logo-circle">
                  <img 
                    src={client.imgSrc} 
                    alt={client.name} 
                    className="client-image" 
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .client-card {
          background-color: #1a1a1a;
          border-radius: 1.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          aspect-ratio: 16 / 10;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        
        .client-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .client-link {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }

        .logo-circle {
          background-color: white;
          border-radius: 50%;
          width: 60%;
          height: 0;
          padding-bottom: 60%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .client-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 75%;
          max-height: 75%;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .logo-circle {
            width: 70%;
            padding-bottom: 70%;
          }
        }

        @media (max-width: 480px) {
          .client-card {
            aspect-ratio: 3 / 2;
          }
          
          .logo-circle {
            width: 80%;
            padding-bottom: 80%;
          }
        }
      `}</style>
    </section>
  );
} 