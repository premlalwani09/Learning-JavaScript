// Array

const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr);
// console.log(myArr[1]);

// const myHeroes = ['Shaktiman','Naagraj']
// const newArr = new Array(1,2,3,4);

// console.log(newArr);




// METHODS
myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(0)
console.log(myArr);
myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(4));


const newArr2 = myArr.join(' ')

console.log(newArr2);
console.log(typeof newArr2);




// slice , splice (Imp)

console.log('A ',myArr);

const myn1 = myArr.slice(1,3); // It only returns value from 1 to lastindex-1
console.log(myn1);

console.log('B ',myArr);

const myn2 = myArr.splice(1,3); // It returns value from 1 to lastindex and also removed from the array
console.log(myn2);

console.log('C ',myArr);









// forEach()
myArr.forEach(element => {
    console.log(element);
});



// map()
const doubledArray = myArr.map(element => {
    return element * 2;
});

console.log(doubledArray);



// filter()
const evenArray = myArr.filter(element => {
    return element % 2 === 0;
});

console.log(evenArray);



// reduce()
const sum = myArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);



// find()
const foundElement = myArr.find(element => {
    return element > 3;
});

console.log(foundElement);









const marvelHeroes = ["thor", "Ironman", "Spiderman"]
const dcHeroes = ["Superman", "Flash", "Batman"]

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes =  marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);


// SPREAD OPERATOR
const allHeroes = [...marvelHeroes , ...dcHeroes]
console.log(allHeroes);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);



console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));  // Used to convert any values into the array
console.log(Array.from({name: "hitesh"}));  // Intersting Case :- So we need to tell in which form we need to convert like here as a key-value pair.




let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));