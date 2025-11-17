from bancoDados.db_sqlite import db

class Carrinho(db.Model):
    __tablename__ = "carrinho"

    id = db.Column(db.Integer, primary_key=True)

    usuario_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False
    )

    produto_id = db.Column(
        db.Integer,
        db.ForeignKey("produtos.id", ondelete="CASCADE"),
        nullable=False
    )

    quantidade = db.Column(db.Integer, default=1, nullable=False)

    # Relacionamentos
    usuario = db.relationship("User", back_populates="carrinho")
    produto = db.relationship("Produto", back_populates="itens_carrinho")

    def to_dict(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "produto_id": self.produto_id,
            "quantidade": self.quantidade,
        }
