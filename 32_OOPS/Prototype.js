// Goal

let myName = "Prem      ";

console.log(myName.trueLength);

// Basically i think so we need to create an trueLength method 




let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.prem = function(){
    console.log(`prem is present in all objects`);
}

heroPower.prem();
myHeros.prem();


Array.prototype.heyPrem = function(){
    console.log(`Hey Prem`);
}

myHeros.heyPrem();

// It will not be accessible to other, only array will get
// heroPower.heyPrem();




// Inheritance
const User = {
    name : "prem",
    email : "prem@google.com"
}


const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

// Outdated
Teacher.__proto__ = User


// Modern
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Prem Lalwani";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"  preeti  ".trueLength();
myName.trueLength();


