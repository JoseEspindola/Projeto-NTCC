import '../../tudo.css';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
function Masc() {
  // Lista de produtos estáticos
  const [cookies] = useCookies(['user_id']);
  const [mensagem, setMensagem] = useState('');
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

  const adicionarAoCarrinho = async (produto) => {
    try {
      const resposta = await fetch("http://127.0.0.1:5000/carrinho/adicionar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ produto_id: produto.id, cookieLogin: cookies.user_id }),
        credentials: "include",
      });

      const dados = await resposta.json();

      if (dados.success) {
        alert(`${produto.nome} adicionado ao carrinho!`);
        setMensagem("");
        window.location.reload();
      } else {
        setMensagem(dados.message || "Credenciais inválidas.");
      }
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      alert("Erro ao enviar produto.");
    }
  };



  return (
    <div className="body">
      <h1>Produtos Masculinos em Destaque</h1>
      <hr />

      <div className="carrinho-container">
        {produtos.map((produto) => (
          <div className="carrinho-card" key={produto.id}>
            {produto.badge && <div className="badge">{produto.badge}</div>}
            <img src={produto.imagem} alt={produto.nome} />
            <h4>{produto.nome}</h4>
            <h4>{produto.quantidade}</h4>
            <p>{produto.descricao}</p>
            <p className="preco">R$ {produto.preco.toFixed(2)}</p>
            <button onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Masc;