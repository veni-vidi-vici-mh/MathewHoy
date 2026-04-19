/*
Purpose: Validate all inputs for signup and edit details for event attribute for full name input field
Author: M HOY
Date: 04-18-2026
*/

function validateForm() {
    // clears span text
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
    
    // preparing flag for checks
    let isValid = true;

    // if conditions are met for the following checks, certain error messages are displayed depending on specific condition, and isValid is assigned false.

    // 1. PERSONAL INFORMATION
    // declares fullname, checks to see if length of inputted full name is at least 2 characters. if check fails, isValid flag is false.
    let fullname = document.getElementById("fullname").value.trim();
    if (fullname.length < 2) {
        document.getElementById("msg_A").innerHTML = "Must be at least 2 characters.";
        isValid = false;
    }

    // if birthdate field left blank, isValid is false.
    let birthdate = document.getElementById("birthdate").value;
    if (birthdate == "") {
        document.getElementById("msg_B").innerHTML = "Must not be empty.";
        isValid = false;
    }

    // age is current year minus year of birthdate. if age is less than 13, isValid is false.
    let age = new Date().getFullYear() - new Date(birthdate).getFullYear();
    if (age < 13) {
        document.getElementById("msg_B").innerHTML = "Must be 13 years of age or older.";
        isValid = false;
    }

    // one of the radio buttons MUST be checked.
    let sex = document.getElementsByName("sex");
    let isCheckedSex = false;
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            isCheckedSex = true;
        }
    }

    // error message would not display if isCheckedSex is true, since the ! inverts the boolean value of the condition.
    if (!isCheckedSex) {
        document.getElementById("msg_One").innerHTML = "Select one.";
        isValid = false;
    }

    // email should not be blank. as for requiring @ and . , the email input field by default requires the user to include those characters
    let email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("msg_Two").innerHTML = "Must not be empty.";
        isValid = false;
    }

    // 2. ACCOUNT DETAILS
    // username should be 8-20 characters long and must only have certain characters.
    let userName = document.getElementById("username").value;
    const lettersAndNumbers = /^[a-zA-Z0-9]+$/;
    if (userName.length < 8 || userName.length > 20) {
        document.getElementById("msg_Three").innerHTML = "Must be 8-20 characters.";
        isValid = false;
    } else if (!lettersAndNumbers.test(userName)) { 
        document.getElementById("msg_Three").innerHTML = "Username may only contain letters and numbers."; 
        isValid = false; 
    }
    

    // password should be greater than 10.
    let pwd = document.getElementById("pwd").value;
    if (pwd.length < 10) {
        document.getElementById("msg_Four").innerHTML = "Must be at least 10 characters.";
        isValid = false;
    }
    // password should include at least one of the characters specified in the error messages
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

    // password in this field must match input in previous field
    let pwdcnfrm = document.getElementById("pwdcnfrm").value;
    if (pwdcnfrm !== pwd) {
        document.getElementById("msg_Five").innerHTML = "Must match password field input.";
        isValid = false;
    }

    // 3. TOPIC QUESTIONS
    // dropdown should not have blank default option chosen.
    if (document.getElementById("questionOne").value == "blank") {
        document.getElementById("msg_questionOne").innerHTML = "Must not be blank.";
        isValid = false;
    }

    // checks if at least one checkbox is checked using for loop
    let questionTwoOption = document.getElementsByName("questionTwoOption");
    let isChecked = false;
    for (let i = 0; i < questionTwoOption.length; i++) {
        if (questionTwoOption[i].checked) {
            isChecked = true;
        }
    }

    // displays error message is no checkbox is checked
    if (!isChecked) {
        document.getElementById("msg_questionTwo").innerHTML = "Select at least one option.";
        isValid = false;
    }

    // dropdown should not have the blank default option chosen.
    if (document.getElementById("questionThree").value == "blankclass") {
        document.getElementById("msg_questionThree").innerHTML = "Must not be blank.";
        isValid = false;
    }

    // does not display if inputs in above fields do not pass check.
    if (isValid) {
        document.getElementById("msg_Success").innerHTML = "Signup successful!";
    }

    // if isValid is false, page does not reload. otherwise, it does.
    return isValid;
}

// responds to event attribute of fullname field
function fullNameBlurField() {
    document.getElementById("fullname").style.border = "3px solid yellowgreen";
}
