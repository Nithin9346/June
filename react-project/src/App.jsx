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
// import Axios from "./Api Call 10-07-2026/Axios";
// import Post from "./Api Call 10-07-2026/post";
// import Task from "./Api Call 10-07-2026/task";

// import Auth from "./Context Api 13-07-2026/Authentication/context";
// import Home from "./Context Api 13-07-2026/Authentication/Home";
// import Login from "./Context Api 13-07-2026/Authentication/Login";
// import Student from "./Context Api 13-07-2026/Context Api";
// import Details from "./Context Api 13-07-2026/Student";
// import User from "./Context Api 13-07-2026/Theme management/Theme";
import { useSelector,useDispatch } from "react-redux";
// import { increment,decrement } from "./Redux 14-07-2026/redux tool  kit/Slice";
import { changeName, changeCourse } from "./Redux 14-07-2026/action";

function APP(){
  // const [message,setmessage]=useState("");
  // const user="Nithin";
  // const details={
  //   Name:"Nithin",
  //   age:23
  // }
  // const count = useSelector((state) => state.counter.count);
   const student = useSelector((state) => state);

  const dispatch = useDispatch();



  return(
    <>
    {/* <Student.Provider value={details}>
      <Details/>
    </Student.Provider>
    <User/>
    <Auth>
      <Home/>
      <Login/>
    </Auth> */}
      {/* <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      
       <h1>Name: {student.name}</h1>
      <h2>Course: {student.course}</h2> */}

       <h1>Name: {student.name}</h1>
      <h2>Course: {student.course}</h2>

      <button onClick={() => dispatch(changeName())}>
        Change Name
      </button>

      <button onClick={() => dispatch(changeCourse())}>
        Change Course
      </button>
    
    
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
  {/* <Post/>
  <Task/>
  <Axios/> */}

  </>

  )
  
}
export default APP;