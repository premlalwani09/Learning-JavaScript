"use strict"; // treat all JS code as newer version

// alert(3+3) // We are using nodejs, not browser
// console.log(3+3);
// console.log("Prem");


let name  = "prem" //String
let age = 18 //number
let isLoggedIn = false //boolean
let state = null

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined
// symbol => unique

// Object

console.log(typeof state); // object
console.log(typeof undefined); //undefined


let score = "33abc";
// score = null;
// score = undefined;
// score = true;

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0



isLoggedIn = 1
// isLoggedIn = ""
// isLoggedIn = "prem"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

// 1 => true; 0=> false
// "" => false 
// "prem" => true



let someNumber = 33
// someNumber = true
// someNumber = null
// someNumber = undefined

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// 33 => "33"
// true => "true"
// undefined = "undefined"
// null => "null"


/************Operations*************/ 
let value = 3;
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%3)


let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); // Left to right

console.log(true);
console.log(+true);
console.log(true+2);
console.log(+"");


let num1, num2, num3 
num1 = num2 = num3 = 2+2  //Not a good way

