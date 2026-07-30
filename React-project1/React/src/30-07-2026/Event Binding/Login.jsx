import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");

  const handleLogin = () => {
    alert(`Welcome ${email}`);
  };

  return (
    <>
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </>
  );
}

export default Login;