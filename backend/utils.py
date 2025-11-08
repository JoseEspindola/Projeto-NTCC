from flask import Flask
from bancoDados.db_sqlite import db
from flask_cors import CORS
def criar_app():

    app = Flask(__name__)
    
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///dados.db"
    app.config["UPLOAD_FOLDER"] = './static/uploads'     #'.\\static\\uploads'

    db.init_app(app)
    CORS(app)
    with app.app_context():
        db.create_all()

    return app
