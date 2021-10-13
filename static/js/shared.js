"use strict"
// Constant used for key for local storage
const ACCOUNT_DATA_KEY = "accountLocalData";

class Account{
    // constructor
    constructor(username, userEmail, password, phonenumber, last_login, number_of_login){
        this._username = username;
        this._userEmail = userEmail;
        this._password = password;
        this._phonenumber = phonenumber;
        this._isLoggedIn = false;
        this._number_of_login = number_of_login;
        this._last_login = last_login;
    }

    // Accessor
    get username(){
        return this._username;
    }
    get userEmail(){
        return this._userEmail;
    }
    
    get password(){
        return this._password;
    }
    get phonenumber(){
        return this._phonenumber;
    }
    get isLoggedIn(){
        return this._isLoggedIn;
    }
    // Mutator
    set isLoggedIn(login){
        this._isLoggedIn = login;
    }

    // Methods
    fromData(dataObject){
        this.username = dataObject._username;
        this._userEmail = dataObject.userEmail;
        this._password = dataObject.password;
        this._phonenumber = dataObject.phonenumber;
        this._isLoggedIn = dataObject._isLoggedIn;       
    }

}

class AccountList{
    // Constructor
    constructor(){
        this._accountsArray = [];
    }
    // Accessor
    get accounts(){
        return this._accountsArray;
    }
    
    get count(){
        return this._accountsArray.length;
    }

    // Methods
    addAccount(username, userEmail, password, phonenumber){
        let account = new Account(username, userEmail, password, phonenumber);
        this._accountsArray.push(account);
    }

    fromData(dataObject){
        // Create a temporary variable to hold the array of accounts given 
        let data = dataObject._accountsArray;
        // Ensures that the accountsArray attribute is empty
        this._accountsArray=[];        
        // For loop to run the fromData() from Class Account
        for (let i=0; i < data.length; i++)
        {
            // Create empty instance of Class Account in each iteration
            let account = new Account();
            // The data for this account is data[i] and is being restored as an instance of the class Account
            account.fromData(data[i]);
            // Push the data into the _accountsArray variable
            this._accountsArray.push(account);
        }
    }
    getAccount(index){
        return this._accountsArray[index];
    }


}

// check if local data exist
function checkIfDataExistsLocalStorage(){
	let jsonString = localStorage.getItem(ACCOUNT_DATA_KEY);
	if(typeof(Storage) !== "undefined"){
		if(jsonString !="undefined" && jsonString != "" && jsonString != null){   
			return true;
		}
		else{
			return false;
		} 
	}
}

// function updateLocalStorage
function updateLocalStorage(data){
	let dataString = JSON.stringify(data);
	localStorage.setItem(ACCOUNT_DATA_KEY,dataString)
}

// function getDataLocalStorage
function getDataLocalStorage(){
	let jsonData = localStorage.getItem(ACCOUNT_DATA_KEY);
	return JSON.parse(jsonData);
}

// Retrieve account_list from the previous save
let account_list = new AccountList();
if(checkIfDataExistsLocalStorage == true){
    let data = getDataLocalStorage();
    account_list.fromData(data);
}