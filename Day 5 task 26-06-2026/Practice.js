//API Call

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  async function getUsers() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        let output = "";

        data.forEach(user => {

            output += `
            <div>
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>
            `;

        });

        document.getElementById("users").innerHTML = output;

    }

    catch(error){

        console.log(error);

    }

}