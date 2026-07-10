import React from "react";

function Task() {
  // PUT Request
  const updatePost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            title: "Updated Title",
            body: "This is updated using PUT",
            userId: 1,
          }),
        }
      );

      const data = await response.json();
      console.log("PUT Response:", data);
      alert("PUT Request Successful");
    } catch (error) {
      console.log(error);
    }
  };

  // PATCH Request
  const patchPost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Patched Title",
          }),
        }
      );

      const data = await response.json();
      console.log("PATCH Response:", data);
      alert("PATCH Request Successful");
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE Request
  const deletePost = async () => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      });

      console.log("DELETE Successful");
      alert("DELETE Request Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>PUT, PATCH & DELETE Example</h1>

      <button onClick={updatePost}>PUT</button>

      <br />
      <br />

      <button onClick={patchPost}>PATCH</button>

      <br />
      <br />

      <button onClick={deletePost}>DELETE</button>
    </div>
  );
}

export default Task;