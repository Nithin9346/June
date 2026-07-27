import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function Memo() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("App rendered");

  return (
    <>
      <h1>Users</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </>
  );
}

export default Memo;