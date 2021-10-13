function addAccount() {
    let username = document.getElementById("signupUsername").value;
    let email= document.getElementById("signupEmail").value;
    let phone_number = document.getElementById("signupPhoneNumber").value;
    let password = document.getElementById("password1").value;
    let confirm_password = document.getElementById("password2").value;
    let errorMessage = document.getElementById("errorMessageField");


    if(username == "" || email == "" || phone_number == "" || password.length == "" || confirm_password ==""){
        // Tested this by leaving one field empty and correct error message displayed.
        errorMessage.innerHTML = "Please fill up all of the sections"
    }else if (password != confirm_password) {
        // Tested this by having a different password to confirmed password and correct error message displayed.
        errorMessage.innerHTML = "Password does not match, pls try again!"
        
    } else {
        // Filled in the signup page as requested and message shown the signup was successfull
        account_list.addAccount(username,email,password,phone_number);
        updateLocalStorage(account_list);
        alert("Sign Up Successfull");
        showSignIn();
        
    }
}