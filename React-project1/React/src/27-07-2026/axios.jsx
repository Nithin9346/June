import axios from "axios";
import { useEffect, useState } from "react";

function Axios() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {posts.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}
export default Axios