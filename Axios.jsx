import { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>

      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Axios;