import React from 'react';
import { Helmet } from 'react-helmet';
import './LandingPage.css';

const LandingPage = () => {
  // Função para mostrar/ocultar os detalhes
  return (
    <div className="landing-page">
      <Helmet>
        <link rel="icon" type="image/png" href="/images/861054.png" />
      </Helmet>
      <header className="header">
        <nav>
          <a href="#sobre" className="link-branco">
            <img src="/images/logooo.png" alt="Logo" className="logo-icon" />
            Sobre
          </a>
          <a href="#servicos" className="link-branco">Serviços</a>
          <a href="#contato" className="link-branco">Contato</a>
        </nav>
        <h1 className="main-title">
          <span>Tech</span>
          <em>Agro</em>
        </h1>
        {/* Espaço em branco de 4 linhas antes das footer-boxes */}
        <div className="blank-space" style={{ height: '1em' }} />
        <p className="slogan slogan-cursive">
          A TechAgro é uma empresa líder <br /> no setor de agronegócio, oferecendo soluções inovadoras <br /> para produtores rurais em todo o país.
        </p>
      </header>
      <main className="main-content">
        <section id="sobre" className="section">
          {/* Conteúdo da seção Sobre */}
        </section>
        {/* Outras seções conforme necessário */}
      </main>

      {/* Espaço em branco de 4 linhas antes das footer-boxes */}
      <div className="blank-space" style={{ height: '8em' }} />

      <footer className="footer">
        <div className="footer-boxes">
          <div className="footer-box revolution-box" id="revolution-box">
            <h3><strong>REVOLUCIONANDO A AGRICULTURA</strong></h3>
            <p>
              Nossa abordagem inovadora e tecnologia de ponta estão redefinindo os limites do setor, trazendo eficiência, sustentabilidade e resultados excepcionais para produtores em todo o mundo. Junte-se a nós nessa jornada de revolução agrícola e descubra um futuro mais promissor para o campo.
            </p>
          </div>
          <div className="footer-box">
            <h3><strong>NOSSOS SERVIÇOS</strong></h3>
            <p>
              Ao contratar nossos serviços, você terá acesso a expertise e tecnologia avançada que podem impulsionar o seu negócio agrícola. Recomendamos que você explore mais detalhes sobre cada serviço abaixo e descubra como podemos ajudar a transformar o seu empreendimento.
            </p>
          </div>
          <div className="footer-box">
            <h3><strong>ENTRE EM CONTATO</strong></h3>
            <p>
              Para mais informações sobre nós, entre em contato conosco através do formulário abaixo ou utilizando os dados de contato fornecidos. Estamos à disposição para esclarecer dúvidas, fornecer detalhes adicionais e discutir como podemos ajudar no setor de agronegócio.
            </p>
          </div>
        </div>
      </footer>

      {/* Rodapé final */}
      <footer className="footer-final">
        <div className="footer-container">
          <div className="footer-column">
            <h3><strong><a href="#sobre">Sobre</a></strong></h3>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3><strong><a href="#servicos">Nossos Serviços</a></strong></h3>
            <ul>
              <li>Consultoria em Agricultura Digital</li>
              <li>Tecnologia de Monitoramento de Lavouras</li>
              <li>Sistemas de Irrigação Inteligente</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3><strong><a href="#redes-sociais">Redes Sociais</a></strong></h3>
            <ul>
              <li><a href="https://www.facebook.com">Facebook</a></li>
              <li><a href="https://www.twitter.com">Twitter</a></li>
              <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3><strong><a href="#contato">Contato</a></strong></h3>
            <p>Email: contato@techagro.com</p>
            <p>Telefone: +55 123 456 789</p>
            <p>Endereço: Rua TechAgro, 123 - Cidade, País</p>
          </div>
        </div>
        <p className="copyright">&copy; 2024 TechAgro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
