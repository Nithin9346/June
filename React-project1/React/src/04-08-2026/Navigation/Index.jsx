import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  function handleLogin() {
    const isLoggedIn = true;
    if (isLoggedIn) {
      navigate("Dash");
    }

  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}

export default Login;