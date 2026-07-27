import { useEffect, useState } from "react";

function Api() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>Posts</h2>

      {posts.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}

export default Api;