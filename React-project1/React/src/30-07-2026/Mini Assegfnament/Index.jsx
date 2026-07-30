import { createPortal } from "react-dom";

function Modal({ closeModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    closeModal();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return createPortal(
    <div className="overlay">

      <div
        className="modal"
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => console.log(e.target.value)}
          />

          <br />
          <br />

          <button type="submit">
            Submit
          </button>

          <button
            type="button"
            onClick={closeModal}
          >
            Close
          </button>

        </form>

      </div>

    </div>,

    document.getElementById("portal-root")
  );
}

export default Modal;