import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1,
      };

    case "Decrement":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "Increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "Decrement" })}>
        Decrement
      </button>
    </>
  );
}

export default Counter;