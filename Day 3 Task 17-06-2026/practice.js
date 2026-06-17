// for..in loop


let person = {
    name: "Nithin",
    age: 25,
    city: "Vijayawada"
};


for (let key in person) {
    console.log(key, ":", person[key]);
}


let Employee = {
    id: 101,
    name: "Ravi",
    salary: 30000
};

for (let key in Employee) {
    console.log(`${key} => ${Employee[key]}`);
}

//Data of an object

let today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getDay());

let now = new Date();

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());


//template literals

let name = "Nithin";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);

let employee = {
    name: "Ravi",
    salary: 30000
};

console.log(
    `${employee.name} earns ₹${employee.salary} per month`
);


//Math Objects

var a=234;
var b=1.457;
console.log(Math.floor(b))
console.log(Math.round(b))
console.log(Math.ceil(b))
console.log(Math.max(20,30,40,29,100,300))
console.log(Math.min(20,30,40,29,100,300))
console.log(Math.random())
console.log(Math.sqrt(36))
console.log(Math.pow(5,2))

let OTP=Math.floor(Math.random()*10000);
console.log(OTP)


//String Object Methods


let D="Java Script"
console.log(D.length)
console.log(D.toUpperCase())
console.log(D.toLowerCase())
console.log(D.includes("Java"))

var str = "Hello World";

console.log(str.replace("World", "Nithin"));

var str = "HTML,CSS,JavaScript";

console.log(str.split(","));

var str = "   Hello   ";

console.log(str.trim());

//Mini Assessment

let details={
    id : 2,
    name : "Raj",
    role : "ASE",
    salary : 15000
}

let joiningday = new Date();

let bonus = Math.floor(Math.random()*5000);

console.log(
    `employee details
     name : ${details.name} 
     id : ${details.id}
     role : ${details.role}
     salary : ${details.salary}
     bonus : ${bonus}
     date : ${joiningday.getDay()} - ${joiningday.getMonth() +1} - ${joiningday.getFullYear()}
     `)

     for(let key in details){
        console.log(`${key} : ${details[key]}`)
     }

     //max num in an array

     let arr = [3,42,24,53,56,75,8,856,433]
     let arr1=arr[0];
     for(let i=1;i<=arr.length; i++){
        if(arr[i]>arr1){
            arr1=arr[i]
        }
     }
     console.log(arr1)