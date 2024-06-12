// Singleton
// Object.create // Constructor method

const { use } = require("express/lib/application");

// Object literals (Id doesn't create singleton)

const mySym = Symbol("key1")

const user = {
    name: "Prem",
    "Full name": "Prem Lalwani",   // This time value cannot be access by .(one-way)
    age: 18,
    [mySym] :"myKey1",
    location: "Jaipur",
    email: "prem@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(user);
console.log(user.name);          //one-way
console.log(user["email"]);      //another-way
console.log(user["Full name"]); 

console.log(user[mySym]);        // (Very-Imp) It is used as a symbol
console.log(user);
console.log(typeof user[mySym]); 

user.email = "prem@chatgpt.com"
console.log(user.email);




// Object.freeze(user)  // now you cannot update the object

user.email = "prem@outlook.com"
console.log(user.email);





user.greeting = function(){
    console.log("Hello JS user");
}

user.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting);
console.log(user.greeting());
console.log(user.greeting2());










// const tinderUser = new Object()     // Singleton Object
const tinderUser = {}               // Non-Singleton Object

tinderUser.Id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

console.log(tinderUser);



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prem",
            lastname: "lalwani"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstname);


console.log(regularUser.fullname?.userfullname.firstname);  // Important




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const concatObject = {obj1 , obj2}
// console.log(concatObject);


// const concatObject1 = Object.assign(obj1, obj2)   // It is combined the value of obj1 and obj2 into obj1
// console.log(concatObject1);

const obj3 = {5: "e", 6: "f"}

// const concatObject2 = Object.assign({}, obj1, obj2, obj3)  // It doesn't combine values
// console.log(concatObject2);


const concatObject3 = {...obj1 , ...obj2 , ...obj3}   // Mostly use this due to easily usable and readability
// console.log(concatObject3); 






const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
]

console.log(users[1].email);
console.log(tinderUser);


console.log(Object.keys(tinderUser));   // Very-Important
console.log(Object.values(tinderUser)); // Very-Important
console.log(Object.entries(tinderUser)); // Important

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // Important

