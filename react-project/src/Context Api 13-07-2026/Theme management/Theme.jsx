import {useState} from "react";


function User(){
    const [theme,settheme]=useState(true);
    
    return(
        <>
        <button onClick={()=>{settheme(!theme)}}>Switch to {theme ? "Dark" : "Light"} mode</button>

        {theme  ? <h1>Light</h1> : <h1>Dark</h1> }

        </>
    )
}
export default User;