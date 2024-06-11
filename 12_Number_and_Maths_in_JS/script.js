const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);


console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));



const otherNumber = 23.8966
const otherNumber2 = 123.8966
const otherNumber3 = 1123.8966

console.log(otherNumber.toPrecision(3));
console.log(otherNumber2.toPrecision(3));
console.log(otherNumber3.toPrecision(3));




const hundreds = 100000000

console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


/*
Read about more values of Number like
1. Min_Value
2. Max_Value
etc.
*/

console.log("++++++++++++++ Maths ++++++++++++++++");

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.abs(4));


console.log(Math.round(4.3));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));

console.log(Math.floor(4.9));


console.log(Math.min(4,3,7,9));
console.log(Math.max(4,3,7,9));

console.log(Math.random()); // Between 0 and 1
console.log(Math.random()*10 + 1); // Gurantee it will never be 0 because 0.05 can also be 0


console.log((Math.random()*10) + 1); 
console.log(Math.floor((Math.random()*10) + 1)); 


const min = 10;
const max = 20;

console.log( Math.floor(Math.random() * (max - min + 1)) + min );



