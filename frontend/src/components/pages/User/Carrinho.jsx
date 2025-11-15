import "../../tudo.css";

function Carrinho() {
  return (
    <div className="body">
      <h1>Meu Carrinho</h1>
      <p>Confira os itens que você selecionou para compra:</p>

      <div className="carrinho-container">
        <div className="carrinho-card">
          <img src="css/img/tenis.jpg" alt="Tênis Esportivo" />
          <h4>Tênis Esportivo</h4>
          <p>Produto feminino, tamanho 38</p>
          <p className="preco">R$ 84,50</p>
          <button>Remover</button>
        </div>

        <div className="carrinho-card">
          <img src="css/img/jeans.webp" alt="Calça Jeans" />
          <h4>Calça Jeans</h4>
          <p>Feminina</p>
          <p className="preco">R$ 20,00</p>
          <button>Remover</button>
        </div>
      </div>

      <p
        style={{
          marginTop: "20px",
          fontWeight: "bold",
          color: "#39567d",
        }}
      >
        Total da compra: R$ 104,50
      </p>

      <button
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#4a6fa5",
          border: "none",
          color: "#fff",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Finalizar Compra
      </button>
    </div>
  );
}

export default Carrinho;
