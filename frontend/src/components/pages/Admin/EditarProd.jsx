import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarProduto() {
  const { produto_id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    preco: "",
    quantidade: ""
  });

  const [mensagem, setMensagem] = useState("");

  // Buscar os dados do produto atual
  useEffect(() => {
    const carregarProduto = async () => {
      try {
        const resposta = await fetch(`http://127.0.0.1:5000/produto/${produto_id}`);
        if (!resposta.ok) {
          throw new Error("Produto não encontrado");
        }
        const dados = await resposta.json();
        setForm({
          nome: dados.nome || "",
          descricao: dados.descricao || "",
          preco: dados.preco || "",
          quantidade: dados.quantidade || ""
        });
      } catch (erro) {
        console.error("Erro ao carregar produto:", erro);
        setMensagem("Erro ao carregar produto.");
      }
    };

    carregarProduto();
  }, [produto_id]);

  // Atualizar campos do formulário
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enviar atualização ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nome || !form.preco) {
      setMensagem("Nome e preço são obrigatórios!");
      return;
    }

    try {
      const resposta = await fetch(`http://127.0.0.1:5000/produto/${produto_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: form.nome,
          descricao: form.descricao,
          preco: parseFloat(form.preco),
          quantidade: parseInt(form.quantidade || 1)
        })
      });

      if (resposta.ok) {
        setMensagem("Produto atualizado com sucesso!");
        setTimeout(() => navigate("/"), 1500); 
      } else {
        setMensagem("Erro ao atualizar produto.");
      }
    } catch (erro) {
      console.error("Erro:", erro);
      setMensagem("Falha na conexão com o servidor.");
    }
  };

  return (
    <div>
      <h2>Editar Produto</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Preço:</label>
          <input
            type="number"
            step="0.01"
            name="preco"
            value={form.preco}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Quantidade:</label>
          <input
            type="number"
            name="quantidade"
            value={form.quantidade}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Salvar Alterações</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default EditarProduto;
