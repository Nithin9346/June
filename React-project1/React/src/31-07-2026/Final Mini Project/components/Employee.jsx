function Employee(){
    const employees=[
        {id : 1 ,Name :"Varun" ,Age :25},
        {id : 2 ,Name :"Kiran" ,Age :36},
        {id : 3 ,Name :"Venkat" ,Age :47}
    ]
    return(
        <>
        <h1>Employees List</h1>
        {
            employees.map((employee)=>(
                <div key={employee.id}>
                    <h2>{employee.Name}</h2>
                    <h2>{employee.Age}</h2>
                    
                    </div>
            ))
        }
       
        </>
    )
}
export default Employee;