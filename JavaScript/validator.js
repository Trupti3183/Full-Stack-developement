function validate(e){
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    console.log(name,mobile,email,password,password2);

    const name_error = document.getElementById("name_error");
    const mobile_error = document.getElementById("mobile_error");
    const email_error = document.getElementById("email_error");
    const password_error = document.getElementById("password_error");
    const password2_error = document.getElementById("password2_error");
     
    let error = false;

    if (name === "") {
        name_error.innerHTML="Name required.";
        error = true;
    } else{
        name_error.innerHTML = " ";

    }
    if (mobile === "") {
        mobile_error.innerHTML="mobile no is required.";
        error = true;
    }else if (isNaN(mobile) || mobile.length != 10) {
        mobile_error.innerHTML = "please enter a 10 digit valid mobile number";
        error = true;
    }else{
        mobile_error,innerHTML = " ";
    }
    let atPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");
    if (email === "") {
        email_error.innerHTML ="Email is required";
        error = true;
    }else if (atPos <4 || dotPos-atPos <4 || dotPos === email.length-3) {
        email_error.innerHTML = "please enter a valid email id.";
        error = true;
    }
    else{
        email_error.innerHTML = "";
    }
    if (password === "") {
        password_error.innerHTML = "password is required";
        error = true;
    }else if(password.length < 6 || password.length > 16){
        password_error.innerHTML = "password must be 6 - 15 character long ";
        error = true;
    }
    else if (!password.match(/[a-z]/)) {
        password_error.innerHTML = "password must have one lower case  charecter";
        error = true;
    }
    else if (!password.match(/[A-Z]/)) {
        password_error.innerHTML = "password must have one upper case  charecter";
        error = true;
    }
    else if (!password.match(/[0-9]/)) {
        password_error.innerHTML = "password must have one number";
        error = true;
    }
    else if (!password.match(/[!@#$^%]/)) {
        password_error.innerHTML = "password must have one special  charecter";
        error = true;
    }
    else{
        password_error.innerHTML = "";
    }
    if (password2 === "") {
        password2_error.innerHTML = "confirm password is required";
        error = true;
    }
    else if (password2 !== password) {
        password2_error.innerHTML = "password and confirm password must be same ";
        error = true;
    }else{
        password2_error,innerHTML = "";
    }

    if(error){
        e.preventDefault();
    }
}