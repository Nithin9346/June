import { useState } from "react"
function Counter(){
    const [count,setcount]=useState(0);
    return(
        <>
        <h1>Apple Laptop </h1>
        <h1>Price : 1.2lac</h1>
        <h2>Likes : {count}</h2>
        <button onClick={()=>setcount(count+1)}>ADD</button>
        </>
    )
}
export default Counter