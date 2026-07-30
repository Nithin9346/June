import { useState } from "react";
import Modal from "./Modal";

function Practice() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open
      </button>

      {open && (
        <Modal>
          <h2>Welcome</h2>

          <button onClick={() => setOpen(false)}>
            Close
          </button>
        </Modal>
      )}
    </>
  );
}

export default Practice;
