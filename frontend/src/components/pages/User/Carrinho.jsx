import '../../tudo.css';
function Carrinho() {
  return (
    <div class="body">
    <h1>Meu Carrinho</h1>
    <p>Confira os itens que você selecionou para compra:</p>

    <div class="carrinho-container">
        <div class="carrinho-card">
            <img src="css/img/tenis.jpg" alt="Tênis Esportivo"/>
            <h4>Tênis Esportivo</h4>
            <p>Produto feminino, tamanho 38</p>
            <p class="preco">R$ 84,50</p>
            <button>Remover</button>
        </div>

        <div class="carrinho-card">
            <img src="css/img/jeans.webp" alt="Mochila Escolar"/>
            <h4>Calça Jeans </h4>
            <p>Feminina</p>
            <p class="preco">R$ 20,00</p>
            <button>Remover</button>
        </div>
    </div>

    <p style="margin-top: 20px; font-weight: bold; color: #39567d;">
        Total da compra: R$ 104,50
    </p>

    <button style="margin-top: 10px; padding: 10px 20px; background-color: #4a6fa5; border: none; color: #fff; border-radius: 6px; cursor: pointer;">
        Finalizar Compra
    </button>
</div>
  );
}

export default Carrinho;