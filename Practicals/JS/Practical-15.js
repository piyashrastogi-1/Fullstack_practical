document.querySelector(".myform").addEventListener("keyup", function (e) {
    e.preventDefault();
    const nameV = document.querySelector("#namee").value.trim();
    const emailV = document.querySelector("#email").value.trim();
    const passwordV = document.querySelector("#password").value.trim();
    const cpasswordV = document.querySelector("#cpassword").value.trim();
    console.log(nameV, emailV, passwordV, cpasswordV);
    if (nameV === "") {
        document.querySelector(".error.namee").innerHTML = "*Username cannot be blank!";
        document.querySelector("#namee").style.borderColor = "red";
        document.querySelector("#namee ~ .fa-exclamation-circle").style.display = "inline-flex";
        document.querySelector("#namee ~ .fa-check-circle").style.display = "none";
    } else if(ValidateUsername(nameV) == false){
        document.querySelector(".error.namee").innerHTML = "*Username must have lowercase letters only";
        document.querySelector("#namee").style.borderColor = "red";
        document.querySelector("#namee ~ .fa-exclamation-circle").style.display = "inline-flex";
        document.querySelector("#namee ~ .fa-check-circle").style.display = "none";
    } 
    else {
        document.querySelector(".error.namee").innerHTML = " ";
        document.querySelector("#namee").style.borderColor = "green";
        document.querySelector("#namee ~ .fa-exclamation-circle").style.display = "none";
        document.querySelector("#namee ~ .fa-check-circle").style.display = "inline-flex";
    }
    if (emailV === "") {
        document.querySelector(".error.email").innerHTML = "*Email cannot be blank!";
        document.querySelector("#email").style.borderColor = "red";
        document.querySelector("#email ~ .fa-exclamation-circle").style.display = "inline-flex";
        document.querySelector("#email ~ .fa-check-circle").style.display = "none";
    } else if (ValidateEmail(emailV) === false) {
        document.querySelector(".error.email").innerHTML = "*Email is not valid!";
        document.querySelector("#email").style.borderColor = "red";
        document.querySelector("#email ~ .fa-exclamation-circle").style.display = "inline-flex";
        document.querySelector("#email ~ .fa-check-circle").style.display = "none";
    } else {
        document.querySelector(".error.email").innerHTML = " ";
        document.querySelector("#email").style.borderColor = "green";
        document.querySelector("#email ~ .fa-exclamation-circle").style.display = "none";
        document.querySelector("#email ~ .fa-check-circle").style.display = "inline-flex";
    }
    if (passwordV.length === 0) {
        document.querySelector(".error.password").innerHTML = "*Password cannot be blank!";
        document.querySelector("#password").style.borderColor = "red";
        document.querySelector("#password ~ .fa-exclamation-circle").style.display = "inline-flex";
        document.querySelector("#password ~ .fa-check-circle").style.display = "none";
    } else if (passwordV.length < 6) {
        document.querySelector(".error.password").innerHTML = "*Password should atleast be 6 charachters long!";
        document.querySelector("#password").style.borderColor = "red";
        document.querySelector("#password ~ .fa-exclamation-circle").style.display = "inline-flex";
        document.querySelector("#password ~ .fa-check-circle").style.display = "none";
    } else {
        document.querySelector(".error.password").innerHTML = " ";
        document.querySelector("#password").style.borderColor = "green";
        document.querySelector("#password ~ .fa-exclamation-circle").style.display = "none";
        document.querySelector("#password ~ .fa-check-circle").style.display = "inline-flex";
    }
    if (cpasswordV.length === 0) {
        document.querySelector(".error.cpassword").innerHTML = "*Password cannot be blank!";
        document.querySelector("#cpassword").style.borderColor = "red";
        document.querySelector("#cpassword ~ .fa-exclamation-circle").style.display = "inline-flex";
        document.querySelector("#cpassword ~ .fa-check-circle").style.display = "none";
    } else if (cpasswordV.length < 6) {
        document.querySelector(".error.cpassword").innerHTML = "*Password length should atleast be 6!";
        document.querySelector("#cpassword").style.borderColor = "red";
        document.querySelector("#cpassword ~ .fa-exclamation-circle").style.display = "inline-flex";
        document.querySelector("#cpassword ~ .fa-check-circle").style.display = "none";
    } else {
        document.querySelector(".error.cpassword").innerHTML = " ";
        document.querySelector("#cpassword").style.borderColor = "green";
        document.querySelector("#cpassword ~ .fa-exclamation-circle").style.display = "none";
        document.querySelector("#cpassword ~ .fa-check-circle").style.display = "inline-flex";
    }
    if (passwordV.length > 5 && cpasswordV !== passwordV) {
            document.querySelector(".error.cpassword").innerHTML = "Incorrect Password!";
            document.querySelector("#cpassword").style.borderColor = "red";
            document.querySelector("#cpassword ~ .fa-exclamation-circle").style.display = "inline-flex";
            document.querySelector("#cpassword ~ .fa-check-circle").style.display = "none";
    }
});

function ValidateEmail(emailV) {
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailV)) {
    return true;
}
return false;
}

function ValidateUsername(nameV){
if(/^[a-z]+$/g.test(nameV))
    return true;
return false;
}
