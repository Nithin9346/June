function Users(){
    const array = ["Car","Bus","Train"]
    return(
        <>
        <h1>Transport</h1>
        {array.map((array,index)=>(
            <p key={index}>{index +1} .{array}</p>

        ))}
        
        </>
    )
}
export default Users;