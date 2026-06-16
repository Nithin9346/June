let arr = [23,45,45,3,356,6,655,6]
// console.log(... new set(arr))
console.log(arr.some(arr => arr>20)) // if one value is true finall condition is true
console.log(arr.every(arr => arr>20))// if one value is false finall condition is false

let arr1=[14,25,345,56]
for(let i=0 ; i<=arr1.length ; i++){
    console.log(arr1[i])
}

for(i of arr1){
    console.log(i)
}

for(i in arr1){
    console.log(i)
}

let arr2 = [10, 20, 30, 20, 10, 40, 50, 40];

let result = [...new Set(arr2)];

console.log(result);


let numbers = [1, 2, 3, 4, 5];
let reversed = [];

numbers.forEach(num => {
    reversed.unshift(num);
});

console.log(reversed);

//Join

let fruits = ["Apple", "Mango", "Banana"];

let w = fruits.join(",");
fruits.sort();

console.log(fruits);

console.log(w);


let q = [40, 10, 100, 25, 5];

q.sort((a, b) => a - b);

console.log(q);


let x = [1, 2, 3, 4];

let doubled = x.map(num => num * 2);

console.log(doubled);


//Filter


let marks = [30, 45, 20, 80, 60];

let passed = marks.filter(mark => mark >= 35);

console.log(passed);


//reduce

let s = [15, 45, 10, 80, 25];

let max = s.reduce((largest, num) => {
    return num > largest ? num : largest;
});

console.log(max);


//Sorting without using sort method

let g = [5, 3, 8, 4, 2];

for (let i = 0; i < g.length - 1; i++) {
    for (let j = 0; j < g.length - 1 - i; j++) {
        if (g[j] > g[j + 1]) {
            let temp = g[j];
            g[j] = g[j + 1];
            g[j + 1] = temp;
        }
    }
}

console.log(g);


//Object

let r = new Object();

r.name = "Nithin";
r.age = 25;

console.log(r);


function A(name, age){
    this.name = name;
    this.age = age;
}

let s1 = new A("Nithin", 25);