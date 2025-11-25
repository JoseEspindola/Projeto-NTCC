from flask import Blueprint, jsonify, request
from sqlalchemy import desc
from dao.produtoDAO import ProdutoDAO

produto_bp = Blueprint("produto_bp", __name__)

@produto_bp.route("/recuperar_dados", methods=["GET"])
def recuperar_dados():
    produtos = ProdutoDAO.listar()
    return jsonify([p.to_dict() for p in produtos])

@produto_bp.route("/<int:produto_id>", methods=["GET"])
def buscar_produto_por_id(produto_id):
    produto = ProdutoDAO.buscar_por_id(produto_id)
    if produto:
        return jsonify(produto.to_dict()), 200
    return jsonify({"erro": "Produto não encontrado"}), 404

@produto_bp.route("/adicionar", methods=["POST"])
def adicionar_produto():
    data = request.get_json()
    if not data:
        return jsonify({"erro": "Requisição inválida, envie JSON"}), 400
    try:
        novo_produto = ProdutoDAO.adicionar(data)
        return jsonify(novo_produto.to_dict()), 201
    except Exception as e:
        print("Erro ao adicionar produto:", e)
        return jsonify({"erro": "Falha ao adicionar produto"}), 400

@produto_bp.route("/<int:produto_id>", methods=["PUT"])
def atualizar_produto(produto_id):
    data = request.get_json()
    produto_atualizado = ProdutoDAO.atualizar(produto_id, data)
    if produto_atualizado:
        return jsonify(produto_atualizado.to_dict()), 200
    return jsonify({"erro": "Produto não encontrado"}), 404

@produto_bp.route("/", methods=["DELETE"])
def deletar_produto():
    data = request.get_json()
    produto_id = data.get("id")

    if not produto_id:
        return jsonify({"success": False, "message": "ID do produto não informado."}), 400

    produto = ProdutoDAO.buscar_por_id(produto_id)
    if not produto:
        return jsonify({"success": False, "message": "Produto não encontrado."}), 404

    try:
        ProdutoDAO.remover(produto_id)
        return jsonify({"success": True, "message": "Produto deletado com sucesso!"}), 200
    except Exception as e:
        print("Erro ao deletar produto:", e)
        return jsonify({"success": False, "message": "Erro ao deletar produto."}), 500
