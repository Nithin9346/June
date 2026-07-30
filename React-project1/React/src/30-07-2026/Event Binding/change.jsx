import { useState } from "react";

function Change() {
  const [value, setValue] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)}/>

      <p>{value}</p>
    </>
  );
}

export default Change;