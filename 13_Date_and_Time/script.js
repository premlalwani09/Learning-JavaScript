// Dates

let myDate = new Date()
console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());


console.log(typeof myDate);


// let myCreatedDate = new Date(2024,5,11)
// let myCreatedDate = new Date(2024,5,11,10,30)
// let myCreatedDate = new Date("2024-06-11")
let myCreatedDate = new Date("11-06-2024")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());




// Time
let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);


// `${newDate.getDay()} and the time`



console.log(
    newDate.toLocaleString('default',{
        weekday: "long", 
    })
);



console.log(myDate.setDate(15));







