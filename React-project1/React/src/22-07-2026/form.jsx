import { useState } from "react";

function Input() {
  const [name, setName] = useState("");

  return (
    <>
      <h2>Controlled Text Input</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"/>

      <h3>Your Name: {name}</h3>
    </>
  );
}

export default Input;