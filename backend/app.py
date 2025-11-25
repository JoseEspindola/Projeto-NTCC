import utils
from routes.carrinho_routes import carrinho_bp
from routes.user_routes import user_bp
from routes.produto_routes import produto_bp
from routes.carrinho_routes import carrinho_bp
app = utils.criar_app()

# Registrar Blueprints
app.register_blueprint(user_bp, url_prefix="/user")
app.register_blueprint(carrinho_bp, url_prefix="/carrinho")
app.register_blueprint(produto_bp, url_prefix="/produto")

if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)

