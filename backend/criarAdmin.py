from models.user_model import User
from bancoDados.db_sqlite import db

def criarAdmin():
    admin_email = "admin.secure_9834@system-root.io"
    admin_nome = "Administrador Mestre"
    admin_senha = "T@97k!_Qp4z#F1xL"

    admin_existente = User.query.filter_by(email=admin_email).first()
    if not admin_existente:
        novo_admin = User(
            nome=admin_nome,
            email=admin_email,
            senha=admin_senha  
        )
        db.session.add(novo_admin)
        db.session.commit()
    else:
        pass
