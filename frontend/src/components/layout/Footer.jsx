import '../tudo.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* 🔹 Seção: nome / identidade */}
        <div className="footer-about">
          <h4>Integração Solidária</h4>
          <p>Conectando solidariedade e inovação para um mundo melhor.</p>
        </div>

        {/* 🔹 Seção: navegação interna */}
        <div className="footer-links">
          <Link to="/quem-somos">Quem somos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/politica">Política de Privacidade</Link>
        </div>

        {/* 🔹 Seção: redes sociais */}
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/css/img/instagram.png" alt="Instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/css/img/facebook.png" alt="Facebook" />
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © 2025 Integração Solidária. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
