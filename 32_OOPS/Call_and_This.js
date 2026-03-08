function setUsername(username){
    // Complex DB calls
    this.username = username;
    console.log("Called");
}


function createUser(username, email, password){
    // call for to call method, and this pass is for to store method data because their object and their variable will be destroyed after execution
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}


const testUser = new createUser("prem", "prem@test.com", "123");
console.log(testUser);


