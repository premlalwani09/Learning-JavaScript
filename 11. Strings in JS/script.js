// const name = "hitesh"
// const repoCount = 50

// console.log(name + repoCount + " Value");


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh-hc-com');
console.log(gameName);


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('t'));



const newString = gameName.substring(0,4);
// const newString = gameName.substring(-8,4); // It does not change
console.log(newString);


const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newString2 = "    hitesh     "
console.log(newString2);
console.log(newString2.trim());


const url = "https://hitesh.com/hitesh%20chauudhary"
console.log(url.replace('%20','-')); 

console.log(url.includes('hitesh'));


console.log(gameName.split());
console.log(gameName.split('-'));


/*
Read about more properties of Strings like
1. blink
2. bold
3. codePointerAt
4. concat
5. endsWith
6. fixed
7. 

*/

