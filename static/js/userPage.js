function retrieveUserInfo(){
    let getInfo = getDataLocalStorage();
    document.getElementById("username").innerHTML = getInfo._username;
    document.getElementById("phoneNumber").innerHTML = getInfo._phonenumber;
    document.getElementById("emailAddress").innerHTML = getInfo._userEmail;
    document.getElementById("password").innerHTML = getInfo._password;
    document.getElementById("lastLogin").innerHTML = getInfo._last_login;
    document.getElementById("numberOfLogin").innerHTML = getInfo._number_of_login;
    

    
    // for (let i = 0; i < getAccount._accountsArray.length; i++) {
    //     if(username == "" || password == ""){
    //     // Tested that both fields need to be filled, otherwise user cannot login
    //     errorMessage.innerHTML = "Please fill up all of the sections";
    //     break
    //     }else if(username != getAccount._accountsArray[i]._username || password != getAccount._accountsArray[i]._password){
    //     // Tested that if either the username OR password is wrong, user cannot login.
    //     errorMessage.innerHTML = "Account does not exist";
    //     } else if (username == getAccount._accountsArray[i]._username && password == getAccount._accountsArray[i]._password){
    //     // Tested that only if username AND password is correct, only then the user will be moved to the dashboard
    //     getAccount._accountsArray[i]._isLoggedIn = true;
    //     updateLocalStorage(getAccount);
    //     window.location = "index.html";
    //     }
    // }
}

retrieveUserInfo();