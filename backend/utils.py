from flask import Flask
from flask_cors import CORS
from bancoDados.db_sqlite import db
def criar_app():
    app = Flask(__name__)
    
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///dados.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["UPLOAD_FOLDER"] = "./static/uploads"

    db.init_app(app)

    CORS(app)

    # Cria as tabelas automaticamente
    with app.app_context():
        db.create_all()

    return app
