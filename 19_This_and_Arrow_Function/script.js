const user={
    username: "prem",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to Website!`);
        // console.log(this);
    }


}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);



// Very Imp (Asked in interviews)
// Note:- In browser , this is used then global object will be the Window. But in node , it is empty object.




// function chai(){
//     let username = "prem";
//     console.log(this.username); // Right now , It is cannot be used in function. It is only used in object. But there are other ways we will discussed later.
// }
// chai()




// Arrow Function
const chai = () =>{
    let username = "prem"
    console.log(this);
    console.log(this.username);
}
chai()




// Explicitely return
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));





// Implicit return
const addTwo2 = (num1, num2) => (num1 + num2);
console.log(addTwo2(4,5));

const addTwo3 = (num1, num2) => ({username: "prem"});
console.log(addTwo3(4,5));




const myArray = [2, 3, 5, 7, 8]
// myArray.forEach(() => {})