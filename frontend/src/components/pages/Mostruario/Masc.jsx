import '../../tudo.css';

function Masc() {
  // Lista de produtos estáticos
  const produtos = [
    {
      id: 1,
      nome: "Camisa Social Slim",
      quantidade: 5,
      descricao: "Tamanho M - Azul Marinho",
      preco: 60.0,
      imagem: "css/img/slim.jpg",
      badge: "Promo"
    }
  ];

  // Função para enviar um único produto ao backend Flask
 const adicionarAoCarrinho = async (produto) => {
  try {
    const resposta = await fetch(`http://127.0.0.1:5000/carrinho/adicionar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ produto_id: produto.id })
    });

    const dados = await resposta.json();

    if (dados.success) {    
      alert(`${produto.nome} adicionado ao carrinho!`);
      setMensagem("");
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