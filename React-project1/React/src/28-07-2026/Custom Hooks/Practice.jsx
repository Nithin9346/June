import useCounter from ".";

function Hook() {

  const { count, increment } = useCounter();

  return (

    <>
      <h2>Count : {count}</h2>

      <button onClick={increment}>
        +
      </button>

    </>

  );

}
export default Hook