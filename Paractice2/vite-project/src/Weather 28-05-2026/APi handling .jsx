import { useEffect, useState } from "react";

function Users() {

  const [users, setUsers] = useState([]);
  const [loading,setloading]=useState(true);
  const [error,setError] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setloading(false)
      })
      .catch((err) => {
        setError("Failed to fetch users");
        setloading(false);
      });

  }, []);
   if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Users List</h1>

      {
        users.map((user) => (
          <h3 key={user.id}>{user.name}</h3>
        ))
      }
    </div>
  );
}

export default Users;

