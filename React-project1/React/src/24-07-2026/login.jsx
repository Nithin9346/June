import { useState } from "react";

function Login() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>

      {login ? (
        <h2>Welcome User</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </>
  );
}

export default Login;