import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
function AdicionarProduto() {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    preco: "",
    quantidade: ""
  });
  const [mensagem, setMensagem] = useState("");
  const [produtos, setProdutos] = useState([])
    // Função para enviar um único produto ao backend Flask
  
    useEffect(() => {
      fetch("http://127.0.0.1:5000/produto/recuperar_dados")
        .then((resposta) => resposta.json())
        .then((dados) => {
          setProdutos(dados);
        })
        .catch((erro) => {
          setMensagem(erro.message);
          console.error("Erro na requisição:", erro);
        });
    }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!form.nome || !form.preco) {
      setMensagem("Nome e preço são obrigatórios!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/produto/adicionar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: form.nome,
          descricao: form.descricao,
          preco: parseFloat(form.preco),
          quantidade: parseInt(form.quantidade || 1)
        })
      });

      if (response.ok) {
        setMensagem("Produto adicionado com sucesso!");
        
        window.location.reload();
        setForm({ nome: "", descricao: "", preco: "", quantidade: "" });
      } else {
        setMensagem("Erro ao adicionar produto!");
      }
    } catch (error) {
      console.error(error);
      setMensagem("Falha na conexão com o servidor.");
    }
  };
  const deletarProduto = async (produto) => {
    try {
      const resposta = await fetch(`http://127.0.0.1:5000/produto/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: produto.id }),
      });

      const dados = await resposta.json();

      if (dados.success) {
        alert(`${produto.nome} deletado!`);
        setMensagem("");
        window.location.reload();
      } else {
        setMensagem(dados.message || "Credenciais inválidas.");
      }
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Erro ao deletar produto.");
    }
  };

  return (
    <div>
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Digite o nome do produto"
          />
        </div>

        <div>
          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Descrição opcional"
          />
        </div>

        <div>
          <label>Preço:</label>
          <input
            type="number"
            step="0.01"
            name="preco"
            value={form.preco}
            onChange={handleChange}
            placeholder="Ex: 29.90"
          />
        </div>

        <div>
          <label>Quantidade:</label>
          <input
            type="number"
            name="quantidade"
            value={form.quantidade}
            onChange={handleChange}
            placeholder="Ex: 10"
          />
        </div>

        <button type="submit">Salvar Produto</button>
      </form>
      <div className="carrinho-container">
        {produtos.map((produto) => (
          <div className="carrinho-card" key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} />
            <h4>{produto.nome}</h4>
            <h4>{produto.quantidade}</h4>
            <p>{produto.descricao}</p>
            <p className="preco">R$ {produto.preco.toFixed(2)}</p>
            <Link to={`/editar/${produto.id}`}>
              <button>Editar</button>
            </Link>


            <button onClick={() => deletarProduto(produto)}>
              Deletar
            </button>
          </div>
        ))}
      </div>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default AdicionarProduto;
