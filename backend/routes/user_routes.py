from dao.userDAO import UserDAO
from flask import Blueprint, jsonify, request, session
from itsdangerous import URLSafeTimedSerializer
user_bp = Blueprint("user", __name__)

@user_bp.route("/register", methods=["GET", "POST"])
def register():
    data = request.get_json()
    nome = data.get("nome")
    email = data.get("email")
    senha = data.get("senha")

    if not nome or not email or not senha:
        return jsonify({"success": False, "message": "Campos obrigatórios faltando."}), 400

    if UserDAO.get_by_email(email):
        return jsonify({"success": False, "message": "E-mail já cadastrado."}), 400

    novo_user = UserDAO.create_user(nome, email, senha)
    return jsonify({
        "success": True,
        "message": "Usuário cadastrado com sucesso!",
        "user": novo_user.to_dict()
    }), 201
    

@user_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    senha = data.get("senha")

    if not email or not senha:
        return jsonify({"success": False, "message": "Campos obrigatórios faltando"}), 400

    user = UserDAO.get_by_email(email)
    if not user or user.senha != senha:
        return jsonify({"success": False, "message": "E-mail ou senha incorretos"}), 401

    session["user_id"] = user.id
    s = URLSafeTimedSerializer("chave-super-secreta")
    cookie_value = s.dumps(dict(session))

    is_admin = (
        user.email == "admin.secure_9834@system-root.io"
        or user.nome == "Administrador Mestre"
    )

    return jsonify({
        "success": True,
        "message": "Login realizado com sucesso!",
        "session_cookie": cookie_value,
        "user": {
            "id": user.id,
            "nome": user.nome,
            "email": user.email,
            "is_admin": is_admin
        }
    })

    
@user_bp.route("/", methods=["GET"])
def listar_usuarios():
    usuarios = UserDAO.get_all()
    return jsonify([u.to_dict() for u in usuarios]), 200


@user_bp.route("/<int:user_id>", methods=["DELETE"])
def deletar_usuario(user_id):
    usuario = UserDAO.get_by_id(user_id)
    if not usuario:
        return jsonify({"success": False, "message": "Usuário não encontrado."}), 404

    try:
        UserDAO.delete(user_id)
        return jsonify({"success": True, "message": "Usuário deletado com sucesso!"}), 200
    except Exception as e:
        print("Erro ao deletar usuário:", e)
        return jsonify({"success": False, "message": "Erro ao deletar usuário."}), 500
