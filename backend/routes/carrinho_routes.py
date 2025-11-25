
from dao.carrinhoDAO import CarrinhoDAO
from dao.produtoDAO import ProdutoDAO
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
    ProdutoDAO.diminuir_quantidade(produto_id)

    return jsonify({
        "success": True,
        "message": "Produto adicionado ao carrinho!",
        "carrinho": carrinho_atualizado.to_dict()
    }), 201


@carrinho_bp.route("/<int:user_id>", methods=["GET"])
def listar_carrinho(user_id):
    itens = CarrinhoDAO.listar(user_id)
    if not itens:
        return jsonify([])
    # retorna produto dentro do item
    return jsonify([item.to_dict() for item in itens]), 200

@carrinho_bp.route("/remover/<int:item_id>", methods=["DELETE"])
def remover_item(item_id):

    item = CarrinhoDAO.get_by_id(item_id)
    if not item:
        return jsonify({"success": False, "message": "Item não encontrado"}), 404

    item_atualizado, msg = CarrinhoDAO.remover_uma_unidade(item_id)

    ProdutoDAO.aumentar_quantidade(item.produto_id)

    resposta = {
        "success": True,
        "message": msg,
        "quantidade_restante": item_atualizado.quantidade if item_atualizado else 0,
    }
    return jsonify(resposta), 200
