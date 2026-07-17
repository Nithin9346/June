import { useState, useEffect } from "react";
import axios from "axios";

function Page() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUser(res.data);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      {user.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </>
  );
}

export default Page;