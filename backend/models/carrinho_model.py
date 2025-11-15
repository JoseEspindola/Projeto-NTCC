from bancoDados.db_sqlite import db

class Carrinho(db.Model):
    __tablename__ = "carrinho"

    id = db.Column(db.Integer, primary_key=True)
    produto_id = db.Column(db.Integer, nullable=False)
    

    usuario = db.relationship("User", backref="carrinho")
    usuario_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    
    def to_dict(self):
        return {
            "id": self.id,
            "produto_id": self.produto_id,
            "usuario_id": self.usuario_id
        }