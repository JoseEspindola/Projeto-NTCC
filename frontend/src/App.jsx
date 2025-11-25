import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Common/Home';
import Cadastro from './components/pages/Forms/Cadastro';
import Login from './components/pages/Forms/Login';
import Carrinho from './components/pages/User/Carrinho';
import Produtos from './components/pages/Common/Produtos';
import Mapa from './components/pages/Common/Mapa';
import QuemSomos from './components/pages/Common/QuemSomos';

// 🛠️ Páginas de Administração
import CadProd from './components/pages/Admin/CadProd';
import EditarProduto from './components/pages/Admin/EditarProd';
import AdminUsers from './components/pages/Admin/AdminUsers';
import AdminDashboard from './components/pages/Admin/AdminDashboard'; // opcional, tela principal do admin

import ProtectedAdminRoute from './components/pages/Admin/ProtectedAdminRoute'; // ✅ componente de proteção
import './App.css';

function App() {
  return (
    <CookiesProvider>
      <Router>
        <NavBar />

        <Routes>
          {/* 🌐 Páginas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/quem-somos" element={<QuemSomos />} />

          {/* 🧭 Rotas administrativas (somente para admin) */}
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard /> {/* Página inicial do painel admin */}
              </ProtectedAdminRoute>
            }
          />

          <Route
            path="/admin/produtos/novo"
            element={
              <ProtectedAdminRoute>
                <CadProd />
              </ProtectedAdminRoute>
            }
          />

          <Route
            path="/admin/produtos/editar/:produto_id"
            element={
              <ProtectedAdminRoute>
                <EditarProduto />
              </ProtectedAdminRoute>
            }
          />

          <Route
            path="/admin/usuarios"
            element={
              <ProtectedAdminRoute>
                <AdminUsers />
              </ProtectedAdminRoute>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </CookiesProvider>
  );
}

export default App;
