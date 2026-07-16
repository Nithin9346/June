import { createContext, useState } from "react";

export const UserContext = createContext();

function Login({ children }) {
  const [user, setuser] = useState(true);
  function login(){
    alert("user Loggedin")
  }
  function logout(){
    alert("user loggedpout")
  }

  return (
    <UserContext.Provider value={{ user, setuser,login,logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default Login;