from dao.userDAO import UserDAO
from flask import Blueprint, jsonify, request, session

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
    print("Sessão criada para user_id:", user.id)
    return jsonify({
        "success": True,
        "message": "Login realizado com sucesso!",
        "user": user.to_dict()
    }), 200