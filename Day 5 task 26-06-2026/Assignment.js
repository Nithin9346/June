//Event Handling

const button = document.getElementById("btn");

button.addEventListener("click", () => {
    alert("Button Clicked");
});

//Event Bubbling

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child");
});

//Promise

const promise = new Promise((resolve, reject) => {

    resolve("Success");

});

promise.then(console.log);

//async/await


async function getData() {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

}

async function users() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);

}

//Destructring

const ar = [10, 20];

const [a, b] = ar;



const person = {

    name: "Nithin",

    age: 24

};

const { name, age } = person;

//iterator


const arr = [10, 20, 30];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());

console.log(iterator.next());

//throw error

function vote(age) {

    if (age < 18) {

        throw new Error("Not Eligible");

    }

}