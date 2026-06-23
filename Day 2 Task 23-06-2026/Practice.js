// Promise.All

var p1 = Promise.resolve("user")
var p2 = Promise.resolve("order")
var p3 = Promise.resolve("Products")
Promise.all([p1,p2,p3])
.then(result =>{
    console.log(result);
})

let a= Promise.resolve("A");
let b= Promise.resolve("B");
let c= Promise.reject("C");
let d= Promise.resolve("D");
let e= Promise.resolve("E");
Promise.all([a,b,c,d,e])
.then((result=>{
    console.log(result);
}))


//Promise.race


var p1 = new Promise(resolve =>
    setTimeout(() => resolve("Server A"), 3000)
);

var p2 = new Promise(resolve =>
    setTimeout(() => resolve("Server B"), 1000)
);

Promise.race([p1, p2])
.then(result => {
    console.log(result);
});

var name1 = new Promise(resolve=>{
    setTimeout(()=>resolve("nithin"),1000)
});

var name2 = new Promise(resolve=>{
    setTimeout(()=>resolve("Ramu"),2000)

})

Promise.race([name1,name2])
.then(result=>{
    console.log(result);
})

//Promise.allSettle

Promise.allSettled([
    Promise.resolve("Pass"),
    Promise.reject("Fail")
])
.then(result => {
    console.log(result);
});

let maths = Promise.resolve("pass")

//Promise.any

Promise.any([
    Promise.reject("Error"),
    Promise.resolve("Success"),
    Promise.reject("Error")
])
.then(result => {
    console.log(result);
});


//async

async function greet() {
    return "Hello";
}
greet();
console.log(greets);


//Destructring

let person = {
    name: "Nithin",
    age: 25
};

let { name, age } = person;
console.log(name);
console.log(age);

let colors = ["Red", "Blue", "Green"];

let [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);


//Generator

function* numbers() {

    yield 1;
    yield 2;
    yield 3;

}

let gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

