const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
  },
];

return (
  <>
    {products.map((item) => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
      </div>
    ))}
  </>
);