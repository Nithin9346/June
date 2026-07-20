import { useState, useEffect } from "react";

function Loading() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Nithin" },
        { id: 2, name: "Rahul" },
        { id: 3, name: "Priya" },
      ]);
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>User List</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default Loading;