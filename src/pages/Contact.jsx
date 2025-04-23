export default function Contact() {
  return (
    <section className="py-20 px-6 bg-transparent text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Contato</h2>
        <p className="text-lg mb-4">
          Entre em contato conosco e venha fazer parte do mundo digital você também!
        </p>
        <p className="text-lg">
          Envie um e-mail para{" "}
          <a
            href="mailto:contato@tabinfo.com.br?subject=Contato%20Site"
            className="text-secondary hover:underline"
          >
            contato@tabinfo.com.br
          </a>{" "}
          ou clique no botão do WhatsApp para conversar diretamente.
        </p>
      </div>
    </section>
  );
}


  