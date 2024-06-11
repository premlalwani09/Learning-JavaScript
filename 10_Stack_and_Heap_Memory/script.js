// let person = {
//     name: "James",
//     age: 23,
//     isMale: true,
// };
// console.log(person);


// let newPerson = person;
// newPerson.isMale = false;
// console.log(person);



// Deep Copy
// let person = {
//     name: "James",
//     age: 23,
//     isMale: true,
//   };
// let newPerson = JSON.parse(JSON.stringify(person));
// console.log(newPerson);



// Shallow Copy using Object.assign()
// let person = {
//     name: "James",
//     age: 23,
//     isMale: true,
//   };
// let newPerson = Object.assign({}, person);
// console.log(newPerson);




// Shallow Copy using Spread(...)
let person = {
    name: "James",
    age: 23,
    isMale: true,
  };
let newPerson = { ...person };
console.log(newPerson);
