import {Routes,Route} from "react-router-dom";
import Dashboard from "./Dahboard";
import Profile from "./Profile";
import Settings from "./Settings";
import Error from "./Error";
function Practice(){
    return(
        <>
       
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
             <Route path="Profile" element={<Profile/>}></Route>
             <Route path="settings" element={<Settings/>}></Route>

             <Route path="*" element={<Error/>}></Route>
        </Routes>
       
        </>
    )
}
export default Practice;