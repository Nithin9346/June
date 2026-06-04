function Validation (){
    let name = document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value
    if(name === ""){
        alert("please enter your name");
    }
     if(email ===""){
        alert("please enter your email");
    }
      if(!email.includes("@")){
        alert("please enter a valid email");
    }
    if(phone === ""){
        alert("please enter your phone number");
    }
    if(phone.length !== 10){
        alert("please enter a valid phone number");
    }
    else{
        alert("form submitted successfully");
    }
}