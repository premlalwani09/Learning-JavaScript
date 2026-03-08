
// function init(){

//     let name = "Mozilla";

//     function displayName(){
//         console.log(name);
//     }

//     displayName();
// }

// init();




// This is called Lexical Scoping, Inner function have access of Outer Function variables
function outer(){

    let username = "prem";

    function inner(){
        console.log("inner", username);
    }

    function innerTwo(){
        console.log("innerTwo", username);
    }

    inner();
    innerTwo();
}

// console.log(username)   // Not accessible due to scope 
outer();


// Lexical Scope get return means whole tree gets return
function makeFunc(){
    const name = "Mozilla";
    
    function displayName(){
        console.log(name);
    }

    return displayName;
}

const myFunc = makeFunc();
myFunc();





// HTML
// <button id="orange">Orange</button>
// <button id="green">Green</button>

document.getElementById("orange").onclick = function (){
    document.body.style.backgroundColor = `orange`;
}

document.getElementById("green").onclick = function (){
    document.body.style.backgroundColor = `green`;
}


// Now the scenario is, I was giving you 500 buttons do for that

// Generic
// If you see here, we are using Closure
function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`;

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");







