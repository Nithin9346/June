import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Keyboard", price: 2000 },
];

function Practice() {
  const [search, setSearch] = useState("");

  const total = useMemo(() => {
    console.log("Calculating Total...");

    return products.reduce((sum, product) => sum + product.price, 0);
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Total Price: {total}</h2>
    </>
  );
}

export default Practice;