
// Question : Can we change Math.PI value in js, if yes then how?

// console.log(Math.PI);

// Math.PI = 5;
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);



const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("Please order your chai!");
    }
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//     writable : false,
//     enumerable : false,
//     configurable : false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));



for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}



// console.log(Math.PI);

// Object.assign(Math, "PI", {
//     writable : true,
//     enumerable : true,
//     configurable : true
// })

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// Math.PI = 5;
// console.log(Math.PI);

// You cannot modify PI value, only you can modify your custom properties

