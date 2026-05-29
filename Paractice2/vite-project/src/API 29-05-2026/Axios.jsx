import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    getUsers();

  }, []);

  async function getUsers() {

    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(res.data);
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