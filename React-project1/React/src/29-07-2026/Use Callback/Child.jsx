import React from "react";

function Child({ onClick }) {
  console.log("Child Rendered");

  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
}

export default React.memo(Child);