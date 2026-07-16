import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h2>Current Theme : {theme}</h2>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </>
  );
}

export default Navbar;