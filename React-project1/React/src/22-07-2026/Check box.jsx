import { useState } from "react";

function Checkbox() {
  const [agree, setAgree] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />

      I Agree

      <h3>{agree ? "Accepted" : "Not Accepted"}</h3>
    </>
  );
}

export default Checkbox;