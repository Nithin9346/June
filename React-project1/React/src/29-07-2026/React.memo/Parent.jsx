import { useState } from "react";
import Child from "./Child";


function Parent(){
    const [count,setcount] = useState(0);
    return(
        <>
        <h2>Parent Component</h2>
        <p>CART : {count}</p>
        <button onClick={()=>setcount(count+1)}>ADD</button>
        <Child name="Nithin"/>
        </>
    )
}
export default Parent;