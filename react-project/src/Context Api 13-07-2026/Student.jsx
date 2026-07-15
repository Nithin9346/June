import { useContext } from "react";
import Student from "./Context Api";

function Details(){
    const User=useContext(Student);
    return(
        <>
        <h1>Name : {User.Name}</h1>
         <h1>Age : {User.age}</h1>
        </>
    )
}
export default Details;