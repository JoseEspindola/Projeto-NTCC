from dao.carrinhoDAO import CarrinhoDAO
from flask import Blueprint, jsonify, request, session

carrinho_bp = Blueprint("carrinho", __name__)

@carrinho_bp.route("/adicionar", methods=["POST"])
def carrinho_adicionar():
    print("Sessão atual:", dict(session))
    usuario_id = session.get("user_id")
    if not usuario_id:
        return jsonify({"erro": "Usuário não autenticado"}), 401

    data = request.get_json()
    if not data:
        return jsonify({"erro": "Requisição inválida, envie JSON"}), 400

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
