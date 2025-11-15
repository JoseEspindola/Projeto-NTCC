import '../../tudo.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

function Cadastro() {
  const navigate = useNavigate();

  const [infoForm, setInfoForm] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://127.0.0.1:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: infoForm.nome, 
          email: infoForm.email,
          senha: infoForm.senha
        }),
      });

      if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
      }

      const dados = await resposta.json();

      if (dados.success) {
        alert("Cadastro realizado com sucesso!");
        setMensagem("");
        setInfoForm({ nome: '', email: '', senha: '' });
        navigate('/login');
      } else {
        setMensagem(dados.message || "Credenciais inválidas.");
      }

    } catch (erro) {
      console.error("Erro ao enviar dados:", erro);
      setMensagem("Erro ao realizar cadastro. Tente novamente.");
    }
  };

  return (
    <div className="body">
      {mensagem && <p className="erro">{mensagem}</p>}
      <h1 className="form-title">Cadastro</h1>

      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="nome">Nome Completo</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="ex: Mariana Perez"
          required
          value={infoForm.nome}
          onChange={handleChange}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="seuemail@gmail.com"
          required
          value={infoForm.email}
          onChange={handleChange}
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Sua senha"
          required
          value={infoForm.senha}
          onChange={handleChange}
        />

        <button type="submit">Criar Conta</button>

        <div className="form-link">
          Já possui login? <Link to="/login">Clique aqui</Link> para entrar.
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
