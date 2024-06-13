// let a = 10
// const b = 20
// var c  = 30

// console.log(a);
// console.log(b);
// console.log(c);





var c = 300   // Global Scope
let a = 300

if(true){    // Local Scope
    let a = 10    
    const b = 20  
    c  = 30  
    console.log("INNER: ", a); 
}

console.log(a);
// console.log(b);
console.log(c);


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }




// Scope Level and Mini Hoisting


function one(){
    
    const username = "prem"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);   

    two()
}

one()




if(true){
    const username = "premlalwani09"
    if(username === "premlalwani09"){
        const website = " youtube"
        console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);






// Interesting concept
console.log(addone(5));
function addone(num){
    return num + 1
}


// console.log(addTwo(5));          // Hoisting Problem (You cannot access before initialization)
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));

