export default function Contact() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-transparent text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Contato</h2>
        <p className="text-base md:text-lg mb-4">
          Entre em contato conosco e venha fazer parte do mundo digital você também!
        </p>
        <p className="text-base md:text-lg">
          Envie um e-mail para{" "}
          <a
            href="mailto:contato@tabinfo.com.br?subject=Contato%20Site"
            className="text-secondary hover:underline font-medium"
          >
            contato@tabinfo.com.br
          </a>{" "}
          ou clique no botão do WhatsApp para conversar diretamente.
        </p>
      </div>
    </section>
  );
}


  