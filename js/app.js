const form = document.querySelector("#form");
const btnSubmit = document.querySelector(".submit");
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const input = document.querySelectorAll("input");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const psword = document.querySelector("#psword");
const fnameWarning = document.querySelector(".fname-warning");
const lnameWarning = document.querySelector(".lname-warning");
const emailWarning = document.querySelector(".email-warning");
const pswordWarning = document.querySelector(".psword-warning");

console.log(pswordWarning.classList);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    input.forEach(item => {
        switch(item.id) {
            case "fname":
                if(fname.value == ""){
                    fnameWarning.classList.remove("none");
                    fname.style.border = "1.5px solid hsl(0, 100%, 74%)";
                }else {
                    fnameWarning.classList.add("none");
                    fname.style.border = "0.5px solid #ccc";
                }
                break;
            case "lname":
                if(lname.value == "") {
                    lnameWarning.classList.remove("none");
                    lname.style.border = "1.5px solid hsl(0, 100%, 74%)";
                }else {
                    lnameWarning.classList.add("none");
                    lname.style.border = "0.5px solid #ccc";
                }
                break;
            case "email":
                if(!regex.test(email.value)) {
                    emailWarning.classList.remove("none");
                    email.style.border = "1.5px solid hsl(0, 100%, 74%)";
                    email.placeholder = "email@example.com"
                    email.classList.add("change")
                }else {
                    emailWarning.classList.add("none");
                    email.style.border = "0.5px solid #ccc";
                    email.placeholder = "Email Address"
                    email.classList.remove("change");
                }
                break;
            case "psword":
                if(psword.value == "") {
                    pswordWarning.classList.remove("none");
                    psword.style.border = "1.5px solid hsl(0, 100%, 74%)";
                }else {
                    pswordWarning.classList.add("none");
                    psword.style.border = "0.5px solid #ccc";
                }
                break;
            default:
                break;
        }
    });
    if(!fname.value == "" && !lname.value == "" && regex.test(email.value) && !psword.value == "") {
        input.forEach(item => {
            item.value = ""
        })
    }
})