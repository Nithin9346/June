import { useEffect, useState } from "react";

function API() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts ();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1>Posts</h1>

      {posts.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default API;