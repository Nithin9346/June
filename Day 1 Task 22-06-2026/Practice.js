//Event Bubbling

document.getElementById("parent")
.addEventListener("click" , ()=>{
    console.log("Parent Clicked");
})
document.getElementById("child")
    .addEventListener("click" , ()=>{
        console.log("Child Clicked");
    })

 //Event Capturing

    parent.addEventListener(
    "click",
    () => {
        console.log("Parent");
    },
    true
);

child.addEventListener(
    "click",
    () => {
        console.log("Child");
    },
    true
);


document.getElementById("list")
.addEventListener("click", (event) => {

    console.log(event.target.innerText);

});

//Throtting

function showMessage() {
    console.log("Function Executed");
}

const throttledFunction = throttle(showMessage, 2000);

window.addEventListener("scroll", throttledFunction);


window.addEventListener(
    "resize",
    throttle(() => {
        console.log("Window Resized");
    }, 1000)
);

//Debounce

function searchData() {
    console.log("Searching...");
}

function debounce(func, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

const debouncedSearch = debounce(searchData, 1000);

document
    .getElementById("search")
    .addEventListener("keyup", debouncedSearch);

    // Call Back Function


    function greet(name, callback){

    console.log("Hello " + name);

    callback();

}

function sayBye(){
    console.log("Bye");
}

greet("Nithin", sayBye);


//Promise


let promise = new Promise(
    (resolve, reject) => {

        let success = true;

        if(success){
            resolve("Success");
        }else{
            reject("Failed");
        }

    }
);


let userLogin = new Promise(
    (resolve, reject) => {

        let loggedIn = true;

        if(loggedIn){
            resolve("Login Successful");
        }else{
            reject("Login Failed");
        }

    }
);

userLogin
.then(message => {
    console.log(message);
})
.catch(error => {
    console.log(error);
});