// import User from "./Revision 16-07-2026/Context Api/Parent"
// import Login from "./Revision 16-07-2026/Context Api/Createcontext"
// import Navbar from "./Revision 16-07-2026/Mini Project/components/navbar"
// import { Student } from "./Revision 16-07-2026/Mini Project/Redux/Store"
// import Theme from "./Revision 16-07-2026/Mini Project/context/Theme Context"
// import Dashboard from "./Condetional rendering 20-07-2026/dashboard"
// import Loading from "./Condetional rendering 20-07-2026/Loading"
// import Practice from "./Condetional rendering 20-07-2026/login"
// import Page from "./React All 17-07-2026/Axios"
// import Counter from "./UseReducer 15-07-2026/Counter"
// import Reducer from "./UseReducer 15-07-2026/use reducer"

// import Axios from "./21-07-2026/Axios"
// import Clean from "./21-07-2026/Cleanup"
// import Fetch from "./21-07-2026/Fetch"
// import Checkbox from "./22-07-2026/Check box"
// import Input from "./22-07-2026/form"
// import Radio from "./22-07-2026/Radio"
// import RegistrationForm from "./22-07-2026/Validation"
// import Users from "./24-07-2026/fetch"
// import Login from "./24-07-2026/login"
// import Search from "./24-07-2026/search"
// import Api from "./27-07-2026/API Call"
// import Axios from "./27-07-2026/axios"
// import Practice from "./27-07-2026/Reactmemo"
// import withAuth from "./28-07-2026/HOC/authentication"
import Hook from "./28-07-2026/Custom Hooks/Practice";
import Dashboard from "./28-07-2026/HOC/Dashboard"
import withLoading from "./28-07-2026/HOC/authentication";



const ProtectedDashboard = withLoading(Dashboard);



function APP(){
  return(
    <>
    <ProtectedDashboard/>
    <Hook/>
    {/* <Reducer/>
    <Counter/> */}
    {/* <Login>
      <User/>
    </Login>
    {/* <Navbar/>
    <Student/> */}
    {/* <Theme/> */} *
    {/* <Page/> */}
    {/* <Practice/>
    <Dashboard/>
    <Loading/> */}
    {/* <Clean/>
    <Fetch/>
    <Axios/> */}
    {/* <Input/>
    <Radio/>
    <Checkbox/>
    <RegistrationForm/> */}
    {/* <Login/>
    <Users/> */}
    {/* <Map/> */}
    {/* <Search/> */}
    {/* <Api/>
    <Axios/>
    <Practice/> */}
    

    </>
  )
}
export default APP