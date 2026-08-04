import {Link,Outlet} from 'react-router-dom'
function Dashboard(){
    return(
        <>
        <h1>Dashboard</h1>
       
            <Link to="Profile">Profile ||</Link>
            <Link to="Settings">Settings</Link>
        <Outlet/>
        
      

        </>
    )
}
export default Dashboard;