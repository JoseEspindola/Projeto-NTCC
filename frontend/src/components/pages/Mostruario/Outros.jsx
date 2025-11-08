import '../../tudo.css';
function Outros() {
  return (
    <div class="body">
    <h1>Produtos Diversos</h1>
    <hr/>

    <div class="carrinho-container">
        <div class="carrinho-card">
            <div class="badge">Destaque</div>
            <img src="css/img/mochilae.webp" alt="Mochila Feminina"/>
            <h4>Mochila Escolar</h4>
            <p>Capacidade 20L </p>
            <p class="preco">R$ 45,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div class="carrinho-card">
            <img src="css/img/chapeu.webp" alt="Chapéu Unissex"/>
            <h4>Chapéu Casual</h4>
            <p>Tamanho Único</p>
            <p class="preco">R$ 30,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div class="carrinho-card">
            <div class="badge">Promoção</div>
            <img src="css/img/unissex.webp" alt="Camiseta Unissex"/>
            <h4>Camiseta Unissex</h4>
            <p>Tamanho G - Azul</p>
            <p class="preco">R$ 40,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div class="carrinho-card">
            <img src="css/img/adidas2.webp" alt="Boné Unissex"/>
            <h4>Boné Estiloso</h4>
            <p>Unissex - Preto</p>
            <p class="preco">R$ 25,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div class="carrinho-card">
            <img src="css/img/livro2.webp" alt="Livro Educativo"/>
            <h4>Livro Educativo</h4>
            <p>Material educativo infantil</p>
            <p class="preco">R$ 52,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>
    </div>
</div>
  );
}

export default Outros;