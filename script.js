function validateForm() {
    //
    document.getElementById("msg_A").innerHTML = "";
    document.getElementById("msg_B").innerHTML = "";
    document.getElementById("msg_One").innerHTML = "";
    document.getElementById("msg_Two").innerHTML = "";
    document.getElementById("msg_Three").innerHTML = "";
    document.getElementById("msg_Four").innerHTML = "";
    document.getElementById("msg_Five").innerHTML = "";
    document.getElementById("msg_questionOne").innerHTML = "";
    document.getElementById("msg_questionTwo").innerHTML = "";
    document.getElementById("msg_questionThree").innerHTML = "";
    document.getElementById("msg_Success").innerHTML = "";
    
    let isValid = true;

    //

    let fullname = document.getElementById("fullname").value.trim();
    if (fullname.length < 2) {
        document.getElementById("msg_A").innerHTML = "Must be at least 2 characters.";
        isValid = false;
    }

    //

    let birthdate = document.getElementById("birthdate").value;
    if (birthdate == "") {
        document.getElementById("msg_B").innerHTML = "Must not be empty.";
        isValid = false;
    }

    let age = new Date().getFullYear() - new Date(birthdate).getFullYear();
    if (age < 13) {
        document.getElementById("msg_B").innerHTML = "Must be 13 years of age or older.";
        isValid = false;
    }

    // 
    let sex = document.getElementsByName("sex");
    let isCheckedSex = false;
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            isCheckedSex = true;
        }
    }

    if (!isCheckedSex) {
        document.getElementById("msg_One").innerHTML = "Select one.";
        isValid = false;
    }

    //
    let email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("msg_Two").innerHTML = "Must not be empty.";
        isValid = false;
    }

    //
    let userName = document.getElementById("username").value;
    const lettersAndNumbers = /^[a-zA-Z0-9]+$/;
    if (userName.length < 8 || userName.length > 20) {
        document.getElementById("msg_Three").innerHTML = "Must be 8-20 characters.";
        isValid = false;
    } else if (!lettersAndNumbers.test(userName)) { 
        document.getElementById("msg_Three").innerHTML = "Username may only contain letters and numbers."; 
        isValid = false; 
    }
    

    //
    let pwd = document.getElementById("pwd").value;
    if (pwd.length < 10) {
        document.getElementById("msg_Four").innerHTML = "Must be at least 10 characters.";
        isValid = false;
    }
    if (!/[A-Z]/.test(pwd)) {
        document.getElementById("msg_Four").innerHTML += "<br>Must contain uppercase letter.";
        isValid = false;
    }
    if (!/[a-z]/.test(pwd)) {
        document.getElementById("msg_Four").innerHTML += "<br>Must contain lowercase letter.";
        isValid = false;
    }
    if (!/[0-9]/.test(pwd)) {
        document.getElementById("msg_Four").innerHTML += "<br>Must contain a number.";
        isValid = false;
    }

    //
    let pwdcnfrm = document.getElementById("pwdcnfrm").value;
    if (pwdcnfrm !== pwd) {
        document.getElementById("msg_Five").innerHTML = "Must match password field input.";
        isValid = false;
    }

    //--
    if (document.getElementById("questionOne").value == "blank") {
        document.getElementById("msg_questionOne").innerHTML = "Must not be blank.";
        isValid = false;
    }

    //--
    let questionTwoOption = document.getElementsByName("questionTwoOption");
    let isChecked = false;
    for (let i = 0; i < questionTwoOption.length; i++) {
        if (questionTwoOption[i].checked) {
            isChecked = true;
        }
    }

    if (!isChecked) {
        document.getElementById("msg_questionTwo").innerHTML = "Select at least one option.";
        isValid = false;
    }

    //--
    if (document.getElementById("questionThree").value == "blankclass") {
        document.getElementById("msg_questionThree").innerHTML = "Must not be blank.";
        isValid = false;
    }

    //----
    if (isValid) {
        document.getElementById("msg_Success").innerHTML = "Signup successful!";
    }

    return isValid;
}

function fullNameBlurField() {
    document.getElementById("fullname").style.border = "3px solid yellowgreen";
}
