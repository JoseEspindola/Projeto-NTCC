from models.produto_model import Produto
from bancoDados.db_sqlite import db

class ProdutoDAO:
    @staticmethod
    def listar():
        return Produto.query.all()

    @staticmethod
    def buscar_por_id(produto_id):
        return Produto.query.get(produto_id)

    @staticmethod
    def adicionar(data):
        produto = Produto(**data)
        db.session.add(produto)
        db.session.commit()
        return produto

    @staticmethod
    def atualizar(produto_id, data):
        produto = Produto.query.get(produto_id)
        if not produto:
            return None
        
        for chave, valor in data.items():
            setattr(produto, chave, valor)
        db.session.commit()
        return produto

    @staticmethod
    def remover(produto_id):
        produto = Produto.query.get(produto_id)
        if produto:
            db.session.delete(produto)
            db.session.commit()
            return True
        return False
