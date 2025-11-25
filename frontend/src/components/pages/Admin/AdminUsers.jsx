import { useEffect, useState } from "react";

function AdminUsers() {
  const [usuarios, setUsuarios] = useState([]);
  const [mensagem, setMensagem] = useState("");

  // Buscar todos os usuários ao carregar a página
  useEffect(() => {
    const carregarUsuarios = async () => {
      try {
        const resposta = await fetch("http://127.0.0.1:5000/user/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!resposta.ok) {
          throw new Error("Erro ao buscar usuários.");
        }

        const dados = await resposta.json();

        // ✅ Remove o usuário com id 1 (Administrador Mestre)
        const usuariosFiltrados = dados.filter((u) => u.id !== 1);

        setUsuarios(usuariosFiltrados);
      } catch (erro) {
        console.error("Erro ao carregar usuários:", erro);
        setMensagem("Falha ao carregar lista de usuários.");
      }
    };

    carregarUsuarios();
  }, []);

  // Função para deletar um usuário
  const deletarUsuario = async (userId) => {
    if (!window.confirm("Tem certeza que deseja deletar este usuário?")) return;

    try {
      const resposta = await fetch(`http://127.0.0.1:5000/user/${userId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const dados = await resposta.json();

      if (dados.success) {
        setMensagem(`Usuário ${userId} deletado com sucesso!`);
        setUsuarios(usuarios.filter((u) => u.id !== userId));
      } else {
        setMensagem(dados.message || "Erro ao deletar usuário.");
      }
    } catch (erro) {
      console.error("Erro ao deletar usuário:", erro);
      setMensagem("Falha na conexão com o servidor.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Painel de Administração de Usuários</h2>

      {mensagem && <p>{mensagem}</p>}

      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => deletarUsuario(user.id)}
                    style={{ color: "red" }}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminUsers;
