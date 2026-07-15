import { useState } from "react";
function Input(){
    const [input,setinput]=useState()
    return(
        <>
        <input type="text" placeholder="Enter your Name" 
        value={input}
         onChange={(e)=>setinput(e.target.value)}></input>
        <h2>{input}</h2>
       
        </>
    )
}
export default Input