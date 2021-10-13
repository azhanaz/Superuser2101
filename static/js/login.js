// function loginNow() {
//   let username = document.getElementById("loginUsername").value;
//   let password = document.getElementById("loginPassword").value;
//   let errorMessage = document.getElementById("errorMessageField");
//   let getAccount = getDataLocalStorage();
//   if(getAccount == null){
//     errorMessage.innerHTML = "Account does not exist";
    
//   }else{
    
//     for (let i = 0; i < getAccount._accountsArray.length; i++) {
//       if(username == "" || password == ""){
//         // Tested that both fields need to be filled, otherwise user cannot login
//         errorMessage.innerHTML = "Please fill up all of the sections";
//         break
//       }else if(username != getAccount._accountsArray[i]._username || password != getAccount._accountsArray[i]._password){
//         // Tested that if either the username OR password is wrong, user cannot login.
//         errorMessage.innerHTML = "Account does not exist";
//       } else if (username == getAccount._accountsArray[i]._username && password == getAccount._accountsArray[i]._password){
//         // Tested that only if username AND password is correct, only then the user will be moved to the dashboard
//         getAccount._accountsArray[i]._isLoggedIn = true;
//         updateLocalStorage(getAccount);
//         window.location = "index.html";
//       }
//     }
//   }
//  }

function showSignUp() {
  // Hide login form
  var loginElements = document.getElementById("loginElements");
  loginElements.setAttribute('style', 'display:none');

  // Display signup form
  var signupElements = document.getElementById("signupElements");
  signupElements.setAttribute('style', '');

  // Change login tab inactive
  var loginTab = document.getElementById("loginTab");
  loginTab.setAttribute('class','inactive underlineHover');

  // Change sign up tab active
  var signUpTab = document.getElementById("signUpTab");
  signUpTab.setAttribute('class','active');
}
  
function showSignIn() {
  // Hide signup form
  var signupElements = document.getElementById("signupElements");
  signupElements.setAttribute('style', 'display:none');

  // Display login form
  var loginElements = document.getElementById("loginElements");
  loginElements.setAttribute('style', '');

  // Change signup tab tab inactive
  var signUpTab= document.getElementById("signUpTab");
  signUpTab.setAttribute('class','inactive underlineHover');

  var loginTab= document.getElementById("loginTab");
  loginTab.setAttribute('class','active');
}
  
//Add visibility option
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#loginPassword');
const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#password1');
const togglePassword2 = document.querySelector('#togglePassword2');
const password2 = document.querySelector('#password2');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});

togglePassword1.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
  password1.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});

togglePassword2.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  password2.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});
