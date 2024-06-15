// IF

// if(condition){

// }

// if(true){
//     console.log("Hello World");
// }


// < , > , <= , >= , == , != , === , !==

// const temperature = 41;

// if(temperature < 50){
//     console.log("less than 50");
// }



// IF-ELSE
// if(temperature <= 50){
//     console.log("less than 50");
// }
// else {
//     console.log("greater than 50");
// }







// // IF-ELSEIF-ELSE
// if (balance < 500) {
//     console.log("less than 500");
// }
// else if(balance > 500){
//     console.log("greater than 500");
// }
// else{
//     console.log("Equal to 500");
// }





// const userLoggedIn = true;
// const debitCard = true;

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course.");
// }





// SWITCH-CASE
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



// const month = 3;
// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;

//     default:
//         console.log("Your value should be 1 to 12");
//         break;
// }







const userEmail = "prem@.ai"
// const userEmail = "";   // false
// const userEmail = [];   // true


if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Don't have user Email");
}



// Falsy Value
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// Truthy Value
// true , "0" , 'false' , " " , [] , {} , function(){} 


const userArray = []

if (userArray.length === 0) {
    console.log("Array is empty.");
}

const userObject = {}

if (Object.keys(userObject).length === 0) {
    console.log("Object is empty.");
}


// console.log(false == 0);
// console.log(false == '');
// console.log(0 == '');






// Nullish Coalescing Operator (??) : null , undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15   // First value assign

console.log(val1);




// TERNARY OPERATOR
const balance = 500

balance >= 500 ? console.log("greater than 500"):console.log("less than 500");