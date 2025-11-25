import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

function Logout() {
  const [cookies, , removeCookie] = useCookies(['user_id']);
  const navigate = useNavigate();

  const realizarLogout = () => {
    removeCookie('user_id', { path: '/' });
    removeCookie('user_info', { path: '/' });
    alert("Logout realizado com sucesso!");
    navigate('/login');
  };

  return <button onClick={realizarLogout}>Logout</button>;
}

export default Logout;