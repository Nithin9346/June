function Counter(){
    const countHandler =()=>{
        alert("Button Clicked")
    }
    return(
        <>
        <button onClick={countHandler}> Click</button>
        </>
    )
}
export default Counter;