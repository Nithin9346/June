import { useState , useEffect} from "react";

function API(){
    const [data,setdata]=useState([]);
    const [error,seterror]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setdata(data)
        })
        .catch((err)=>{
            seterror("someThing went Wrong")
        })
    })
    return(
        <div>
            {error && <h1>{error}</h1>}
            {data.map((item)=>(
                <h3 key={item.id}>{item.name} - {item.email} - {item.phone}</h3>

            ))}

        </div>
    )

}
export default API;

import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {
        users.map((user) => (
          <h2 key={user.id}>{user.name}</h2>
        ))
      }
    </div>
  );
}

export default App;
