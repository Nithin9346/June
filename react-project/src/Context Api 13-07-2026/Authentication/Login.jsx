import { useContext } from "react";
import { Context } from "./context";

function Login() {
  const { loggedin, login, logout } = useContext(Context);

  return (
    <div>
      <h2>{loggedin ? "User Logged In" : "User Logged Out"}</h2>

      {loggedin ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Login;