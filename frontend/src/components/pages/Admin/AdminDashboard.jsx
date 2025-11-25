import { Link } from "react-router-dom";
import '../../tudo.css'; // se você quiser manter o estilo global

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Painel do Administrador 👑</h1>

      <ul className="admin-menu">
        <li>
          <Link to="/admin/produtos/novo">
            <button>Cadastrar Produto</button>
          </Link>
        </li>

        <li>
          <Link to="/admin/usuarios">
            <button>Gerenciar Usuários</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
