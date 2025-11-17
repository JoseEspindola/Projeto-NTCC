import '../../tudo.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

function Login() {
  const [infoForm, setInfoForm] = useState({
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
      const resposta = await fetch("http://127.0.0.1:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: infoForm.email,
          senha: infoForm.senha,
        }),
      });


      const dados = await resposta.json();

      if (dados.success) {
        alert("Login realizado com sucesso!");
        setMensagem("");
        setInfoForm({ email: '', senha: '' });
      } else {
        setMensagem(dados.message || "Credenciais inválidas.");
      }

    } catch (erro) {
      console.error("Erro ao enviar dados:", erro);
      setMensagem("Erro ao realizar login. Tente novamente.");
    }
  };

  return (
    <div className="body">
      <h1 className="form-title">Login</h1>

      <form onSubmit={handleSubmit} method = "POST">
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

        <button type="submit">Entrar</button>

        <div className="form-link">
          Ainda não possui login? <Link to="/cadastro">Clique aqui</Link> para se cadastrar.
        </div>

        {mensagem && <p className="erro">{mensagem}</p>}
      </form>

      <p>
        Faça login para acessar seu perfil, acompanhar pedidos e apoiar ações solidárias. 
        O acesso é seguro e totalmente gratuito.
      </p>
    </div>
  );
}

export default Login;
