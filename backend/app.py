import utils
from routes.carrinho_routes import carrinho_bp
from routes.user_routes import user_bp
from routes.produto_routes import produto_bp
from routes.carrinho_routes import carrinho_bp
from bancoDados.db_sqlite import db
from models.produto_model import Produto
app = utils.criar_app()

with app.app_context():
    produto_teste = Produto(
        nome="Camisa Social Slim",
        descricao="Tamanho M - Azul Marinho",
        preco=60.0,
        quantidade=5
    )
    db.session.add(produto_teste)
    db.session.commit()
    print("Produto criado com ID:", produto_teste.id)

# Registrar Blueprints
app.register_blueprint(user_bp, url_prefix="/user")
app.register_blueprint(carrinho_bp, url_prefix="/carrinho")
app.register_blueprint(produto_bp, url_prefix="/produto")

if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)

