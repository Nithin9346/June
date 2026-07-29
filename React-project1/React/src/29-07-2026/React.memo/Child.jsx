import React from "react";
function Child({name}){
    console.log("Child")
    return(
        <>
        <h2>Child component</h2>
        <p>{name}</p>
        </>

    )
}
export default React.memo(Child);