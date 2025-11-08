import '../../tudo.css';
function Home() {
return (
    <>
        <div className="body">
            <h1>Bem-vindo ao Integração Solidária!</h1>
            <hr />
            <p>Conectamos brechós e bazares em uma plataforma digital gratuita, promovendo consumo consciente, solidariedade e apoio a comunidades locais.</p>

            <h2>Alguns Produtos do Bazar: </h2>
            <div className="carrinho-container">
                <div className="carrinho-card">
                    <img src="css/img/tenis.jpg" alt="Tênis Esportivo" />
                    <h4>Tênis Esportivo</h4>
                    <p>Produto feminino, tamanho 38</p>
                    <p className="preco">R$ 84,50</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
                <div className="carrinho-card">
                    <img src="css/img/jaqueta.jpg" alt="Jaqueta Casual" />
                    <h4>Jaqueta Casual</h4>
                    <p>Produto masculino, tamanho M</p>
                    <p className="preco">R$ 70,00</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
                <div className="carrinho-card">
                    <img src="css/img/livro2.webp" alt="Livro Educativo" />
                    <h4>Livro Educativo</h4>
                    <p>Material educativo infantil</p>
                    <p className="preco">R$ 52,00</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
                <div className="carrinho-card">
                    <img src="css/img/mochilae.webp" alt="Mochila Escolar" />
                    <h4>Mochila Escolar</h4>
                    <p>Unissex, capacidade 20L</p>
                    <p className="preco">R$ 45,00</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    </>
);
}
export default Home;