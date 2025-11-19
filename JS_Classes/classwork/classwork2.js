const mousehover = document.getElementById("mouseHover")
const mouseBox = document.getElementById("mouseBox")
const form = document.getElementById("form")
const output = document.getElementById("output")

mousehover.addEventListener("click",function(){
    this.style.backgroundColor = "black";
    this.style.color = "white";

})

let setname = "rishabh"
let setpassword = "12345678"
let pattern = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;

if(form){
    form.addEventListener("submit",function(event){
        event.preventDefault();
        const name = document.getElementById("nameInput").value;
        const password1 = document.getElementById("password").value;
        const email = document.getElementById("emailInput").value;
        let errors = [];
        if(!pattern.test(email)){
            errors.push("Invalid email.");
        }
        if(name !== setname){
            errors.push("Incorrect name.");
        }
        if(password1 !== setpassword){
            errors.push("Incorrect password.");
        }
        if(errors.length === 0){
            output.textContent = "Login successful!";
        } else {
            output.textContent = errors.join(" ");
        }
    })

}
