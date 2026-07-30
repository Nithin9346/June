import { useState } from "react";
import Modal from "./Modal";

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="container">

      <h1>React Portal Example</h1>

      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      {open && (
        <Modal
          closeModal={() => setOpen(false)}
        />
      )}

    </div>
  );
}

export default App;