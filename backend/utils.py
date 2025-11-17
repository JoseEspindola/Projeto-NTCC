from flask import Flask
from flask_cors import CORS
from bancoDados.db_sqlite import db
from models.user_model import User
from models.produto_model import Produto
from models.carrinho_model import Carrinho
def criar_app():
    app = Flask(__name__)
    app.secret_key = "chave-super-secreta"

    # ⚙️ Configurações do banco e sessão
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///dados.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["UPLOAD_FOLDER"] = "./static/uploads"

    db.init_app(app)

  
    CORS(app, supports_credentials=True)

    with app.app_context():
        db.create_all()

    return app
