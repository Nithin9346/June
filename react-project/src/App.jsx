// import Child from "./props08-07-2026/props";
// import Receiver from "./props08-07-2026/receiver";
// import Sender from "./props08-07-2026/sender";
// import { useState } from "react";
// import Counter from "../../Context Api 09-07-2026/Local";
// import Input from "../../Context Api 09-07-2026/input";
// import Card from "../../Context Api/context api/cardcontent";
// import Dashboard from "../../Context Api/context api/dashboard";
// import Navbar from "../../Context Api/context api/navbar";
// import Profile from "../../Context Api/context api/profile";
// import API from "./Api Call 10-07-2026/api";
import Axios from "./Api Call 10-07-2026/Axios";
import Post from "./Api Call 10-07-2026/post";
import Task from "./Api Call 10-07-2026/task";

function APP(){
  // const [message,setmessage]=useState("");
  // const user="Nithin";
  return(
    <>
  {/* <Child name= "Nithin"/>
  <Sender sendmessage={setmessage}/>
  <Receiver message={message}/> */}
  {/* <Counter/>
  <br></br>
  <Input/>
  <Card.Provider value={user}>
   <Navbar/>
   <Profile/>
   <Dashboard/>
  </Card.Provider> */}
  {/* <API/> */}
  <Post/>
  <Task/>
  <Axios/>

  </>

  )
  
}
export default APP;