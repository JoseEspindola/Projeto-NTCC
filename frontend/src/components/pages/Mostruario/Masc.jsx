import '../../tudo.css';
function Masc() {
  return (
    <div class="body">
    <h1>Produtos Masculinos em Destaque</h1>
    <hr/>

    <div class="carrinho-container">
        <div class="carrinho-card">
            <div class="badge">Promoção</div>
            <img src="css/img/slim.jpg" alt="Camisa Social"/>
            <h4>Camisa Social Slim</h4>
            <p>Tamanho M - Azul Marinho</p>
            <p class="preco">R$ 60,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div class="carrinho-card">
            <div class="badge">Novo</div>
            <img src="css/img/tenis.jpg" alt="Tênis Esportivo"/>
            <h4>Tênis Esportivo Casual</h4>
            <p>Tamanho 42 - Cinza</p>
            <p class="preco">R$ 84,50</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div class="carrinho-card">
            <img src="css/img/jaqueta.jpg" alt="Jaqueta Casual"/>
            <h4>Jaqueta Casual Masculina</h4>
            <p>Tamanho G - Preto</p>
            <p class="preco">R$ 95,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div class="carrinho-card">
            <div class="badge">Promoção</div>
            <img src="css/img/mm.avif" alt="Mochila Masculina"/>
            <h4>Mochila Masculina Esportiva</h4>
            <p>Capacidade 25L - Azul</p>
            <p class="preco">R$ 70,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>
    </div>
</div>
  );
}

export default Masc;    