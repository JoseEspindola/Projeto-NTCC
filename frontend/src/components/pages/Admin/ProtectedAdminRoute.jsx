// src/components/auth/ProtectedAdminRoute.jsx
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function ProtectedAdminRoute({ children }) {
  const [cookies] = useCookies(['user_info']);
  let userInfo = null;

  try {
    const raw = cookies.user_info;
    if (typeof raw === "string") {
      userInfo = JSON.parse(raw);
    } else if (typeof raw === "object" && raw !== null) {
      // Caso o cookie já venha como objeto (em alguns navegadores)
      userInfo = raw;
    }
  } catch (err) {
    console.error("Erro ao parsear user_info:", err);
  }

  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  if (!userInfo.is_admin) {
    alert("Acesso negado: Você não tem permissão para acessar esta página.");
    return <Navigate to="/login" replace />;
  }

  return children;
}
export default ProtectedAdminRoute;