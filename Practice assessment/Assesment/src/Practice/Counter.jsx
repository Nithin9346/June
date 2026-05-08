import { useState,useEffect } from "react";

function Counter (){
    const [count,setcount]=useState(0);
    const [items,setitems]=useState([])
     useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(res=>res.json())
       .then(data=>{console.log(data);setitems(data)})
    },[])
    return(
        <>
        <h2>counter : {count}</h2>
        <button onClick={()=>setcount(count+1)}>Click</button>
        <hr></hr>
        <h1>API Items</h1>
        <ul>
            {items.map((item)=>(
                <li key={item.id}>{item.id} {item.name} - {item.email}</li>
            ))}
        </ul>
        </>
    )
}
export default Counter;