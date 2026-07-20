import { useState } from "react";

function Practice() {
  const [log, setLog] = useState(true);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (input.trim() === "") {
      setError("Details  is required");
      return;
    }

    setError("");
    setLog(!log);
  };

  return (
    <>
      <h2>
        {log ? (
          <h3>Please Login</h3>
        ) : (
          <h3>User Logged in Successfully!!</h3>
        )}
      </h2>

      <label>UserName</label>
    
      <input
        type="text"
        placeholder="Enter UserName"
       
        onChange={(e) => setInput(e.target.value)}
      />

      
      {error && <p style={{ color: "red" }}>{error}</p>}

      <label>Password</label>
      <input type="password" placeholder="Enter Password"
       onChange={(e) => setInput(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleLogin}>
        {log ? "Login" : "Logout"}
      </button>
    </>
  );
}

export default Practice;