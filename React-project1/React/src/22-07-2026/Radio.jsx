import { useState } from "react";

function Radio() {
  const [gender, setGender] = useState("");

  return (
    <>
      <h2>Select Gender</h2>

      <input
        type="radio"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
      />
      Male

      <input
        type="radio"
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
      />
      Female

      <h3>{gender}</h3>
    </>
  );
}

export default Radio;