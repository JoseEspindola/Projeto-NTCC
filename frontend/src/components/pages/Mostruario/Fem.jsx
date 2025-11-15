import '../../tudo.css';
function Fem() {


  return (
    <div class="body">
    <h1>Produtos Femininos em Destaque</h1>
    <hr/>

    <div class="carrinho-container">
        <div class="carrinho-card">
            <div class="badge">Promoção</div>
            <img src="css/img/floral.webp" alt="Vestido Floral"/>
            <h4>Vestido Floral</h4>
            <p>Tamanho M</p>
            <p class="preco">R$ 75,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div class="carrinho-card">
            <div class="badge">Novo</div>
            <img src="css/img/loubotin.jpg" alt="Salto-Alto"/>
            <h4>Salto-Alto Elegante</h4>
            <p>Tamanho 37</p>
            <p class="preco">R$ 90,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div class="carrinho-card">
            <img src="css/img/blusacasual.webp" alt="Blusa Casual"/>
            <h4>Blusa Casual</h4>
            <p>Tamanho G</p>
            <p class="preco">R$ 45,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div class="carrinho-card">
            <div class="badge">Destaque</div>
            <img src="css/img/jeans.webp" alt="Calça Jeans"/>
            <h4>Calça Jeans</h4>
            <p>Tamanho 44</p>
            <p class="preco">R$ 20,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>
    </div>
</div>
  );
}

export default Fem;