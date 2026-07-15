import { useContext } from "react";
import { Context } from "./context";

function Home() {
  const { loggedin } = useContext(Context);

  return (
    <div>
      {loggedin ? (
        <h1>Welcome Nithin</h1>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
}

export default Home;