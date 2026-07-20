import { useState } from "react"
function Dashboard(){
    const [user,setuser]=useState();
    

    return(
        <>
        <h1>Dashboard</h1>
        <div>
            <button onClick={()=>setuser("Admin")}>Admin</button>
            <button onClick={()=>setuser("Student")}>Student</button>
            <button onClick={()=>setuser("Teacher")}>Teacher</button>
        </div>
        <hr></hr>
        {
           user==="Admin" &&(
            <div>
            <h2>Admin Details</h2>
            <p>Manage Users</p>
              <p>Manage Courses</p>
            <p>View Reports</p>
            </div>
           )
        }
        {
            user==="Student" &&(
            <div>
            <h2>Student Details</h2>
            <p>Student Users</p>
              <p>Student Courses</p>
            <p>View Reports</p>
            </div>
           )
        }
        {
            user==="Teacher" &&(
            <div>
            <h2>Teacher Details</h2>
            <p>Teacher Users</p>
              <p>Teacher Courses</p>
            <p>View Reports</p>
            </div>
           )
        }
        </>
    )
}
export default Dashboard