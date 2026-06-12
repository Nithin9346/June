//ARRAYS

let arr=[1,2,3,4,5]
console.log(arr)

//MultiDimensional Arrays

let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr1)

let studentMarks = [
    ["Nithin", 85],
    ["Ravi", 90],
    ["Kiran", 78]
];

console.log(studentMarks[0]);
console.log(studentMarks[1][0]);
console.log(studentMarks[1][1]);


let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);


let Names = ["Ravi", "Kiran", "Sai"];
Names.pop();
console.log(Names);


let Colors = ["Yellow", "Orange"];
Colors.unshift("Red");
console.log(Colors);


let Countrys = ["India", "England", "Iceland"];
Countrys.shift();
console.log(Countrys);

let A = [10, 12];
A.splice(1, 0,11);
console.log(A);


let marks = [50, 60, 70];

marks[0] = 80;
marks[2] = 90;

console.log(marks);

let users = ["A", "R","K"];

if (users.includes("A")) {
    console.log("User Found");
}

// let Data = [23,45,56,86]
// console.log(Data.indexof(56))


let numbers = [10, 20, 30, 20, 40];

console.log(numbers.lastIndexOf(20));
console.log(numbers.length)


let Fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < Fruits.length; i++) {
    console.log(Fruits[i]);
}


let marks = [80, 90, 75, 95];

for (let mark of marks) {
    console.log(mark);
}