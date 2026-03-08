const user = {
    username : "prem",
    loginCount : 8,
    signedIn : true,


    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`)
        console.log(this);
    }
}

console.log(user.username);
user.getUserDetails();
console.log(this);



// Constructor Functiom
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this;
    // Implicitly it return this
}

const userOne = new User("Prem", 12, true);
const userTwo = new User("Preeti", 10, false);
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);
console.log(userOne instanceof User);