import { useState, useEffect } from "react";

function Search() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log("Error:", err)); 
    }, []);

    const filteredData = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: "20px" }}>
            <h1>User Search</h1>
            
          
            <input 
                type="text"
                placeholder="Search by name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "20px", padding: "10px", width: "250px" }}
            />

            <ul>
               
                {filteredData.length > 0 ? (
                    filteredData.map((user) => (
                        <li key={user.id} style={{ listStyle: "none", margin: "5px 0", borderBottom: "1px solid #ddd" }}>
                            {user.name} - <small>{user.email}</small>
                        </li>
                    ))
                ) : (
                    <p>No users found!</p>
                )}
            </ul>
        </div>
    );
}

export default Search;