function Practice(){
    const users=[
         { id: 1, name: "Nithin", age: 22 },
         { id: 2, name: "Rahul", age: 23 },
         { id: 3, name: "Kiran", age: 21 },
    ]
    return(
        <>
        <h1>Users Names</h1>
        {users.map((user)=>(
            <p key={user.id}>{user.id}.{user.name}</p>
        ))}
        </>
    )
}
export default Practice;
