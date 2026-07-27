import React, { useState } from "react";

const Child = React.memo(function Child({ name }) {
  console.log("Child rendered");

  return <h2>Hello {name}</h2>;
});

function Practice() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child name="Nithin" />
    </>
  );
}

export default Practice;