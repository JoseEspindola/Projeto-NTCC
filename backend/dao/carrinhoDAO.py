from models.carrinho_model import Carrinho
from bancoDados.db_sqlite import db

class CarrinhoDAO:
    @staticmethod
    def adicionar(usuario_id, produto_id, quantidade=1):
        item_existente = Carrinho.query.filter_by(
            usuario_id=usuario_id, produto_id=produto_id
        ).first()

        if item_existente:
            item_existente.quantidade += quantidade
        else:
            item_existente = Carrinho(
                usuario_id=usuario_id,
                produto_id=produto_id,
                quantidade=quantidade
            )
            db.session.add(item_existente)

        db.session.commit()
        return item_existente

    @staticmethod
    def listar(usuario_id):
        return Carrinho.query.filter_by(usuario_id=usuario_id).all()

    @staticmethod
    def remover(item_id):
        item = Carrinho.query.get(item_id)
        if item:
            db.session.delete(item)
            db.session.commit()
            return True
        return False

    @staticmethod
    def limpar(usuario_id):
        Carrinho.query.filter_by(usuario_id=usuario_id).delete()
        db.session.commit()
        return True
    @staticmethod
    def get_by_id(item_id):
        return Carrinho.query.get(item_id)
    @staticmethod
    def remover_uma_unidade(item_id):
        item = Carrinho.query.get(item_id)
        if not item:
            return None, "Item não encontrado"

        if item.quantidade > 1:
            item.quantidade -= 1
            db.session.commit()
            return item, "Uma unidade removida do carrinho."

        db.session.delete(item)
        db.session.commit()
        return None, "Produto removido do carrinho."