async function updateData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      title: "Updated Title",
      body: "Updated Body",
      userId: 1,
    }),
  });

  const data = await response.json();

  console.log(data);
}

updateData();

export default updateData