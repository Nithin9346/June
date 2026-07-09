import { useContext } from "react";
import Card from "./cardcontent";
function Dashboard(){
    const value=useContext(Card)
    return(
        <>
        <h2>Dashboard :{value}</h2>

        </>
    )
}
export default Dashboard