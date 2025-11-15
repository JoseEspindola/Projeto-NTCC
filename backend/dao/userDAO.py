from models.user_model import User
from bancoDados.db_sqlite import db

class UserDAO:
    @staticmethod
    def create_user(nome, email, senha):
        novo_user = User(nome=nome, email=email, senha=senha)
        db.session.add(novo_user)
        db.session.commit()
        return novo_user

    @staticmethod
    def get_by_email(email):
        return User.query.filter_by(email=email).first()

    @staticmethod
    def get_all():
        return User.query.all()
