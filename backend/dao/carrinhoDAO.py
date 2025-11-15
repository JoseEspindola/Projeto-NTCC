from models.carrinho_model import Carrinho
from bancoDados.db_sqlite import db

class CarrinhoDAO:
    @staticmethod
    def adicionar(produto_id, usuario_id):
        carrinho_adicionado = Carrinho(produto_id=produto_id, usuario=usuario_id)
        db.session.add(carrinho_adicionado)
        db.session.commit()
        return carrinho_adicionado
    
    @staticmethod
    def get_all():
        return Carrinho.query.all()