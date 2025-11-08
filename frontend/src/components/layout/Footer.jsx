import '../tudo.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h4>Integração Solidária</h4>
        </div>
        <div className="footer-links">
          <a href="quem_somos.html">Quem somos</a>
          <a href="contato.html">Contato</a>
          <a href="politica.html">Política de Privacidade</a>
        </div>

        <div className="footer-social">
          <a href="#"><img src="css/img/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="css/img/facebook.png" alt="Facebook" /></a>
        </div>
      </div>

      <p className="footer-copy">© 2025 Integração Solidária. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
