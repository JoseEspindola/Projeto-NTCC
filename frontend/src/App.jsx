import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Common/Home';
import Cadastro from './components/pages/Forms/Cadastro';
import Login from './components/pages/Forms/Login';
import Carrinho from './components/pages/User/Carrinho';
import Feminino from './components/pages/Mostruario/Fem';
import Masculino from './components/pages/Mostruario/Masc';
import Outros from './components/pages/Mostruario/Outros';
import Mapa from './components/pages/Common/Mapa';
import QuemSomos from './components/pages/Common/QuemSomos';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />\ 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/feminino" element={<Feminino />} />
        <Route path="/masculino" element={<Masculino />} />
        <Route path="/outros" element={<Outros />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
