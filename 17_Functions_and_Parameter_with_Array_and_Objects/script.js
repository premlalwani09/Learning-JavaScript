function sayMyName(){    // Function Defintion and Function Scope 
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("M");
}

// sayMyName     // Function Reference
// sayMyName()   // Function Execution





// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2); 
// }

function addTwoNumbers(number1 , number2){

    let result = number1 + number2
    return result

}


const result = addTwoNumbers(3 , 4)
console.log(result);





function loginUserMessage(username = "Samay") {
    if(username === undefined){                
        return `Please peovide username!`;
    }
    return `${username} just logged in!`;
}

const answer = loginUserMessage("prem");
console.log(answer);







function calculateCartPrice(...num1){        // ...num1 => REST Operator
    return num1
}

console.log(calculateCartPrice(200, 300, 400));

function calculateCartPrice2(val1, val2, ...num1){      
    return num1
}

console.log(calculateCartPrice2(200, 300, 400, 500)); 



const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "samay",
    price: 399
})





const myNewArr = [200, 400, 500, 700]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 300, 500, 1000]));