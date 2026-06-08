//For Loop

for(let i = 1; i <= 5; i++){
    console.log(i);
}

for(let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}

//While Loop

let a = 1;

while(a <= 5){
    console.log(a);
    a++;
}


let count = 5;

while(count > 0){
    console.log(count);
    count--;
}

//d0 While Loop

let i = 1;

do{
    console.log(i);
    i++;
}
while(i <= 5);


let b = 10;

do{
    console.log("Executed");
}
while(b < 5);

//for of Loop

let skills = ["HTML", "CSS", "JavaScript", "React"];

for(let skill of skills){
    console.log(skill);
}


let marks = [80, 90, 75, 95];

for(let mark of marks){
    console.log(mark);
}

//for in loop

let student = {
    name: "Nithin",
    age: 23,
    city: "Vijayawada"
};

for(let key in student){
    console.log(key, student[key]);
}