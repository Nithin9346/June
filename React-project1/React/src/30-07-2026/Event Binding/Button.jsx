import { useState } from "react";
function Button(){
    const [btn,setbtn]=useState(false)
    return(
        <>
        <button onClick={()=>setbtn(!btn)}>Click</button>
       {btn ? <h2>Welcome</h2> : <h2>"Please click the btn"</h2>}
        </>
    )
}
export default Button;
