import { useContext } from "react";
import Card from "./cardcontent";
function Profile(){
    const user=useContext(Card);
    return(
        <>
        <h2>Profile : {user}</h2>
        </>
    )
}
export default Profile;
