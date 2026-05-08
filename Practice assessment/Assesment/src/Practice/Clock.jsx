import { useState,useEffect } from "react";
function Clock(){
    const[time,settime]=useState(new Date().toLocaleTimeString())
    const [hide,sethide]=useState(false)
    useEffect(()=>{
        const interval=setInterval(() => {
            settime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(interval);
    }, [])
    return(
        <div>
            {!hide && <h1>{time}</h1>}
            <button onClick={()=>sethide(!hide)}>{hide ? "show" : "hide"}</button>
        </div>
    )
}
export default Clock;
