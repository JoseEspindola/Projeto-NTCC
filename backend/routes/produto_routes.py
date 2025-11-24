from flask import Blueprint, jsonify, request
from dao.produtoDAO import ProdutoDAO

produto_bp = Blueprint("produto_bp", __name__)

@produto_bp.route("/recuperar_dados", methods=["GET"])
def recuperar_dados():
    produtos = ProdutoDAO.listar()
    return jsonify([p.to_dict() for p in produtos])

@produto_bp.route("/", methods=["GET"])
def adicionar_produto():
    data = request.json
    produto = ProdutoDAO.adicionar(data)
    return jsonify(produto.to_dict()), 201
