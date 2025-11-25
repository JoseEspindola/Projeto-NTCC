import '../tudo.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Logout from '../pages/Forms/Logout';

function NavBar() {
  const [cookies] = useCookies(['user_info']);
  
  // Tenta ler e converter o cookie user_info
  let userInfo = null;
  try {
    const raw = cookies.user_info;
    if (typeof raw === 'string') {
      userInfo = JSON.parse(raw);
    } else if (typeof raw === 'object' && raw !== null) {
      userInfo = raw;
    }
  } catch (err) {
    console.error("Erro ao ler cookie user_info:", err);
  }

  const isLoggedIn = !!userInfo;
  const isAdmin = userInfo?.is_admin;

  return (
    <header>
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/" className="fw-bold">
            Integração Solidária
          </Link>
        </div>

        <div className="nav-center">
          <Link to="/produtos"><button>Produtos</button></Link>
          <Link to="/quem-somos"><button>Quem somos nós?</button></Link>

          {/* 🌟 Exibir o Dashboard apenas para administradores */}
          {isAdmin && (
            <Link to="/admin">
              <button className="admin-btn">Dashboard Admin</button>
            </Link>
          )}
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

          {/* 🔒 Exibe o botão Login apenas se não estiver logado */}
          {!isLoggedIn && (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}

          {/* ✅ Exibe o botão Logout se estiver logado */}
          {isLoggedIn && <Logout />}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
