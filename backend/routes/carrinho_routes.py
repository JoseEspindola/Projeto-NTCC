from dao.carrinhoDAO import CarrinhoDAO
from flask import Blueprint, jsonify, request
from itsdangerous import URLSafeTimedSerializer

def decode_cookie(cookie_value):
    s = URLSafeTimedSerializer("chave-super-secreta")
    data = s.loads(cookie_value)
    return data

carrinho_bp = Blueprint("carrinho", __name__)

@carrinho_bp.route("/adicionar", methods=["POST"])
def carrinho_adicionar():
    

    data = request.get_json()
    if not data:
        return jsonify({"erro": "Requisição inválida, envie JSON"}), 400

    cookieLogin = data.get("cookieLogin")
    if not cookieLogin:
        return jsonify({"erro": "Cookie de autenticação não fornecido"}), 405
    
    usuario_id = decode_cookie(cookieLogin).get("user_id")
    if not usuario_id:
        return jsonify({"erro": "Usuário não autenticado"}), 403

    produto_id = data.get("produto_id")
    quantidade = data.get("quantidade", 1)

    if not produto_id:
        return jsonify({"erro": "Produto não informado"}), 400

    carrinho_atualizado = CarrinhoDAO.adicionar(
        usuario_id=usuario_id,
        produto_id=produto_id,
        quantidade=quantidade
    )

    return jsonify({
        "success": True,
        "message": "Produto adicionado ao carrinho!",
        "carrinho": carrinho_atualizado.to_dict()
    }), 201
