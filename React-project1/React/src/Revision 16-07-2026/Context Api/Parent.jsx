import { useContext } from "react";
import  { UserContext } from "./Createcontext";


function User(){
    const {user,setuser} = useContext(UserContext)

    return(
        <>
        <h1 className={user ? "login" : "logout"}>{user ? "user loggedin" : "user loggedout" }</h1>

        <button className={user ? "logout" : "login"} onClick={()=>setuser(!user)}>
            {user ? "logout" : "login"}
        </button>
        </>
    )
}
export default User