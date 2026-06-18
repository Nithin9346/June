let heading = document.getElementById("title");

console.log(heading.innerText);

console.log(heading.innerHTML);

let Name = document.getElementsByClassName("name")


console.log(Name.innerText);

let elements =
document.getElementsByClassName("info");

console.log(elements.innerText);

let paragraphs =
document.getElementsByTagName("p");

console.log(paragraphs)

let child =
document.querySelector("p");

console.log(child.parentElement);


let button =
document.getElementById("btn");

button.addEventListener(
    "click",
    () => {

        let item =
        document.createElement("p");

        item.innerText =
        "New Item";

        document
        .getElementById("container")
        .appendChild(item);

    }
);

let input= document.getElementById("input")

input.addEventListener(
    "input",()=>{
  console.log(input.value)
    }
)

