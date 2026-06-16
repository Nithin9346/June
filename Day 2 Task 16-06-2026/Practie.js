//Normal Copy

let obj = {a : 1 , b : 2 , c : 3 , d:{e : 5,f : 6}}
let obj1=obj;
console.log(obj1)

//Shallow Copy

let obj2={...obj}
obj.c = 4;
obj.d.f=7;
console.log(obj)


let obj6 = {
    name: "Nithin",
    address: {
        city: "Vijayawada"
    }
};

let obj7 = { ...obj6 };

obj6.address.city = "Hyderabad";

console.log(obj6.address.city);
console.log(obj7)

//Deep Copy

let obj8=JSON.parse(JSON.stringify(obj))
obj.d.f=8;
console.log(obj)

let obj4 = {
    today: new Date()
};

let copy =
JSON.parse(JSON.stringify(obj4));

console.log(copy);


let obj5 = {
    name: "Nithin",
    greet() {
        console.log("Hello");
    }
};

let copy1 =
JSON.parse(JSON.stringify(obj5));

console.log(copy1);


let person1 = {
    name: "Nithin",
    age: 25
};

let person2 = Object.assign({}, person1);

person2.age = 30;

console.log(person1);
console.log(person2);