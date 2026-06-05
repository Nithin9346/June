let AGE = 20;

if(AGE >= 18){
    console.log("Eligible to Vote");
}

let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login Success");
}

let marks = 75;

if(marks >= 35){
    console.log("Pass");
}else{
    console.log("Fail");
}

// Template Literals

let Name = "Nithin";
let RoleNo = 23;
let City = "Vijayawada";

console.log(
    `My name is ${Name}.
Role Number is ${RoleNo}.
City is ${City}.`
);

let w = 10;
let s = 20;

console.log(`Sum = ${w + s}`);

let employee = "Nithin";
let salary = 30000;

console.log(
`Employee Name : ${employee}
Salary        : ₹${salary}`
);

let name="nithin";

let role="developer";
console.log(`my name is ${name}, and role is ${role}`);

//conditional Statements

let age = 16;

if(age >= 18){
    console.log("Eligible to Vote");
}
else{
    console.log("Not Eligible to Vote");
}


let Marks = 85;

if(Marks >= 90){
    console.log("Grade A+");
}
else if(Marks >= 75){
    console.log("Grade A");
}
else if(Marks >= 50){
    console.log("Grade B");
}
else{
    console.log("Fail");
}

let signal = "green";

if(signal === "red"){
    console.log("Stop");
}
else if(signal === "yellow"){
    console.log("Ready");
}
else if(signal === "green"){
    console.log("Go");
}
else{
    console.log("Invalid Signal");
}

let ADD=5;
ADD++;
console.log(ADD);

let sub=20;
sub--;
console.log(sub);

let p=5;
let t=10;
p++;
t--;
console.log(p,t)

console.log (++p + t++);