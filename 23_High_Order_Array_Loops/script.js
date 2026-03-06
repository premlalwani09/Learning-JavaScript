// For Of Loop
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greeting = "Hello, World!";

for (const greet of greeting) {
    console.log(`Character: ${greet}`);
}

// Maps
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');

console.log(myMap)

for (const [key, value] of myMap) {
    console.log(`${key} :- ${value}`);
}


// For In Loop, because here for of loop will not work because it is used for iterables and objects are not iterables, so we will use for in loop for objects
const myObject = {
    name: 'Bob',
    age: 25,
    city: 'Los Angeles'
};

console.log(myObject);

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
}


const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];

for (const language in programmingLanguages) {
    console.log(language);  // This will give keys (indices) of the array
    console.log(programmingLanguages[language]);  // This will give values of the array
}


const newMap = new Map();
newMap.set('name', 'Alice');
newMap.set('age', 30);
newMap.set('city', 'New York');

for (const key in newMap) {
    console.log(key);  // This will not work as expected because Map is not an object, it is an iterable
}



// For Each Loop
const coding = ['JavaScript', 'Python', 'Java', 'C++'];

// normal function
coding.forEach(function(language, index) {
    console.log(`${index} :- ${language}`);
});

// arrow function
coding.forEach((language, index) => {
    console.log(`${index} :- ${language}`);
});

// method calling in forEach loop
function displayLanguage(language, index) {
    console.log(`${index} :- ${language}`);
}

coding.forEach(displayLanguage);


coding.forEach((item, index, array) => {
    console.log(`${index} :- ${item} in array ${array}`);
});




const myCoding = [
    { name: 'JavaScript', popularity: 10 },
    { name: 'Python', popularity: 9 },
    { name: 'Java', popularity: 8 },
    { name: 'C++', popularity: 7 }
]

myCoding.forEach((language) => {
    console.log(`${language.name} :- ${language.popularity}`);
});


const values = coding.forEach((language) => {
    console.log(language);
    return language;  // This return value will not be stored in the values variable because forEach does not return anything, it returns undefined
});
console.log(values)


// Note :- For of loop is used for iterables like arrays, strings, maps, sets, etc. It gives values of the iterable. 
//         For in loop is used for objects and it gives keys of the object.
//         For each loop is used for arrays and it gives values of the array along with index.