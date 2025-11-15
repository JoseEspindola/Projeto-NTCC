from dao.carrinhoDAO import CarrinhoDAO
from flask import Blueprint, jsonify, request, session

carrinho_bp = Blueprint("carrinho", __name__)

@carrinho_bp.route("/adicionar/", methods=["POST"])
def carrinho_adicionar():
    
    usuario_id = session.get("usuario_id")
    if not usuario_id:
        return jsonify({"erro": "Usuário não autenticado"}), 401
    
    data = request.get_json()
    produto_id = data.get("produto_id")
    if not produto_id:
        return jsonify({"erro": "Produto não informado"}), 400
    
    carrinho_atualizado = CarrinhoDAO.adicionar(produto_id, usuario_id)

    return jsonify({
        "succes": True,
        "message": "Produto adicionado ao carrinho!",
        "carrinho": carrinho_atualizado.to_dict()
    })
    