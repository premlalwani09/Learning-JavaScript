
class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(email){
        this._email = email;
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}prem`;
    }

    set password(password){
        this._password = password;
    }
}


const prem = new User("prem@gmail.com", "abc");
console.log(prem.password);
console.log(prem.email);





// Before getter and setter through properties and objects

// Function
function User2(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        
        get: function(){
            return this._email.toUpperCase();
        },

        set: function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        
        get: function(){
            return this._password.toUpperCase();
        },

        set: function(value){
            this._password = value;
        }
    })
}


const chai = new User2("chai@chai.com", "chai");
console.log(chai.email);
console.log(chai.password);




// Object
const User3 = {
    _email : "h@hc.com",
    _password : "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return this._password.toUpperCase();
    },

    set password(value){
        this._password = value;
    }
}

const tea = Object.create(User3);
// tea._email = 'test@gmail.com';   // This is getting modify, you need to study how to make it private
console.log(tea.email);
console.log(tea.password);




