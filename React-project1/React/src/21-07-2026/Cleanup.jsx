import { useState, useEffect } from "react";

function Clean() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect Started");

    return () => {
      console.log("Cleanup");
    };
  }, [count]);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default Clean;