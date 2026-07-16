import { useState } from "react";
function Theme(){
    const [theme,settheme]=useState(true)
    return(
        <div className={theme ? "light" : "dark"}>
        <h2>{theme ? "Light" : "Dark"}</h2>
        <button onClick={()=>settheme(!theme)}>{theme ? "Dark Theme" : "Light Theme"}</button>
        </div>
    )
}
export default Theme;