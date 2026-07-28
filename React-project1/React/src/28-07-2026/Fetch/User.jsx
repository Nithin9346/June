import useFetch from "./useFetch";

function Users() {

  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      {data.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </>
  );
}

export default Users;