// Immediately Invoked Function Expression (IIFE)
// It executes immediately. 
// Global scope ke pollution se problem hoti hai kai baar, uss global ke joh variables yaa aur joh bhi declaration hai uske pollution ko htane ke liye use krte

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // semicolon is imp

// chai()


( (name) => {
    // Unnamed IIFE and Simple IIFE
    console.log(`DB CONNECTED 2 ${name}`);
})("prem");