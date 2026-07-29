import { useCallback, useState } from "react";
import Child from "./Child";

function Parent1() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Hello");
  }, []);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child onClick={handleClick} />
    </>
  );
}

export default Parent1;