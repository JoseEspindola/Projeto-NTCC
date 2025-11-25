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
        produto = Produto(nome = data['nome'],descricao = data.get('descricao'),
        preco = data['preco'],quantidade = data.get('quantidade', 1))
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
    
    @staticmethod
    def diminuir_quantidade(produto_id):
        produto = Produto.query.get(produto_id)
        if not produto:
            return None  

        if produto.quantidade > 0:
            produto.quantidade -= 1
            db.session.commit()
        return produto
    @staticmethod
    def aumentar_quantidade(produto_id, qtd=1):
        produto = Produto.query.get(produto_id)
        if produto:
            produto.quantidade += qtd
            db.session.commit()
