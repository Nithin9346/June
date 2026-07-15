import { createContext, useState } from "react";

export const Context = createContext();

function Auth({ children }) {
  const [loggedin, setLoggedin] = useState(false);

  const login = () => {
    setLoggedin(true);
  };

  const logout = () => {
    setLoggedin(false);
  };

  return (
  <Context.Provider value={{ loggedin, login, logout }}>
    {children}
  </Context.Provider>
);
}

export default Auth;