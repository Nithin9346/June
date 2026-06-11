(function (a, b) {
    console.log("Sum =", a + b);
})(10, 20);

const counter = (function () {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
})();

counter();
counter();
counter();

//Clouser

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const result = outer();
result();



function createUser() {
    let password = "12345";

    return {
        getPassword() {
            return password;
        }
    };
}

const user = createUser();

console.log(user.getPassword());


//Pure Function

function addToCart(total, price) {
    return total + price;
}

console.log(addToCart(0, 500));
console.log(addToCart(500, 500));

let marks = 50;


//impure Function
function addMarks() {
    marks += 10;
    return marks;
}
//pure function
function addMarks(marks) {
    return marks + 10;
}

console.log(addMarks(50));


//This KeyWord

const person = {
    name: "Nithin",

    student() {
        console.log(this.name);
    }
};

person.student();

const student = {
    name: "Nithin",
    show() {
        console.log(this.name);
    }
};

const employee = {
    name: "Ravi",
    show() {
        console.log(this.name);
    }
};

student.show();
employee.show();

function outer(){
    let name="nithin";
    function inner(){
        console.log(name)
    }
    return inner;

}
let a=outer()
a()