import "../../tudo.css";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

function Carrinho() {
  const [cookies] = useCookies(["user_id", "user_info"]);
  const [itens, setItens] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [total, setTotal] = useState(0);

  // 🔹 Carregar itens do carrinho
  useEffect(() => {
    const carregarCarrinho = async () => {
      try {
        // ✅ Leitura segura do cookie
        let userInfo = null;
        try {
          const raw = cookies.user_info;
          if (typeof raw === "string") {
            userInfo = JSON.parse(raw);
          } else if (typeof raw === "object" && raw !== null) {
            userInfo = raw;
          }
        } catch (err) {
          console.error("Erro ao processar cookie user_info:", err);
        }

        if (!userInfo) {
          setMensagem("Você precisa estar logado para ver o carrinho.");
          return;
        }

        const resposta = await fetch(`http://127.0.0.1:5000/carrinho/${userInfo.id}`);
        if (!resposta.ok) throw new Error("Erro ao buscar carrinho.");

        const dados = await resposta.json();
        setItens(dados);

        // 🔹 Calcular total (usando o preço do produto)
        if (dados.length > 0) {
          const totalValor = dados.reduce(
            (acc, item) => acc + (item.produto?.preco || 0) * item.quantidade,
            0
          );
          setTotal(totalValor);
        }

      } catch (erro) {
        console.error("Erro ao carregar carrinho:", erro);
        setMensagem("Falha ao carregar o carrinho.");
      }
    };

    carregarCarrinho();
  }, [cookies]);

  // 🔹 Função para remover item
  const removerItem = async (itemId) => {
    if (!window.confirm("Deseja remover este item?")) return;

    try {
      const resposta = await fetch(`http://127.0.0.1:5000/carrinho/remover/${itemId}`, {
        method: "DELETE",
      });
      const dados = await resposta.json();

      if (dados.success) {
        setItens(itens.filter((i) => i.id !== itemId));
        setMensagem("Item removido com sucesso.");
      } else {
        setMensagem(dados.message || "Erro ao remover item.");
      }
    } catch (erro) {
      console.error("Erro ao remover item:", erro);
      setMensagem("Falha na conexão com o servidor.");
    }
  };

  return (
    <div className="body">
      <h1>🛒 Meu Carrinho</h1>
      {mensagem && <p>{mensagem}</p>}

      {itens.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="carrinho-container">
          {itens.map((item) => (
            <div className="carrinho-card" key={item.id}>
              <img
                src={item.produto?.imagem || "/css/img/sem-imagem.jpg"}
                alt={item.produto?.nome || "Produto"}
                width="150"
                height="150"
              />
              <h4>{item.produto?.nome}</h4>
              <p>{item.produto?.descricao}</p>
              <p>Quantidade: {item.quantidade}</p>
              <p className="preco">
                R$ {(item.produto?.preco || 0).toFixed(2)}
              </p>
              <button onClick={() => removerItem(item.id)}>Remover</button>
            </div>
          ))}
        </div>
      )}

      {itens.length > 0 && (
        <>
          <p
            style={{
              marginTop: "20px",
              fontWeight: "bold",
              color: "#39567d",
            }}
          >
            Total da compra: R$ {total.toFixed(2)}
          </p>

        </>
      )}
    </div>
  );
}

export default Carrinho;
