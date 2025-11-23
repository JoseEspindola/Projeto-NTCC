import Logout from '../pages/Forms/Logout';
import '../tudo.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/" className="fw-bold">
            Integração Solidária
          </Link>
        </div>

        <div className="nav-center">
          <Link to="/feminino"><button>Feminino</button></Link>
          <Link to="/masculino"><button>Masculino</button></Link>
          <Link to="/outros"><button>Outros</button></Link>
          <Link to="/quem-somos"><button>Quem somos nós?</button></Link>
        </div>

        <div className="nav-login">
          <Link to="/mapa">
            <img src="/css/img/localizacao.png" width="40" height="40" alt="Mapa" />
          </Link>
          <Link to="/carrinho">
            <img
              className="carrinho"
              src="/css/img/carrinho-de-compras.png"
              width="40"
              height="40"
              alt="Carrinho"
            />
          </Link>
          <Link to="/login"><button>Login</button></Link>
          <Logout />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
