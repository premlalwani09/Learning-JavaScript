
// one.html

// setTimeout(function() {
//     console.log("Hello after 2 seconds");
// }, 2000);


// const sayHello = function() {
//     console.log("Hello after 2 seconds");
// }
// const changeText = function() {
//     document.querySelector('h1').innerHTML = "Text changed after 2 seconds";
// }

// // setTimeout(sayHello, 2000);
// const changeMe = setTimeout(changeText, 2000);

// document.querySelector('#stop').addEventListener('click', function() {
//     clearTimeout(changeMe);
//     console.log("STOPPED");
// });









// two.html

// setInterval(function() {
//     console.log("Hello every 2 seconds");
// }, 2000);

// const sayDate = function() {
//     console.log("Prem : ", Date.now());
// }


// const sayDate = function(str) {
//     console.log(str, Date.now());
// }

// document.querySelector('#start').addEventListener('click', function() {
//     const intervalId = setInterval(sayDate, 2000, "Hello every 2 seconds");
//     window.intervalId = intervalId; // Store intervalId in window object for access in stop button
// });

// document.querySelector('#stop').addEventListener('click', function() {
//     clearInterval(window.intervalId); // Access intervalId from window object
//     console.log("STOPPED");
// });


// Generate random color
// const changeBackgroundColor = function() {
//     const hex = '0123456789ABCDEF';
//     let randomColor = '#';
//     for (let i = 0; i < 6; i++) {
//         randomColor += hex[Math.floor(Math.random() * 16)];
//     }
//     document.body.style.backgroundColor = randomColor;
// }

// document.querySelector('#start').addEventListener('click', function() {
//     const intervalId = setInterval(changeBackgroundColor, 1000);
//     window.intervalId = intervalId; // Store intervalId in window object for access in stop button
// });

// document.querySelector('#stop').addEventListener('click', function() {
//     clearInterval(window.intervalId); // Access intervalId from window object
//     console.log("STOPPED");
// });


// let intervalId = null; 
// document.querySelector('#start').addEventListener('click', function() {
//     if(!intervalId) {
//         intervalId = setInterval(changeBackgroundColor, 1000);
//     }
// });

// document.querySelector('#stop').addEventListener('click', function() {
//     clearInterval(intervalId); 
//     intervalId = null;  
//     console.log("STOPPED");
// });










// three.html

const insert = document.querySelector('#insert');

window.addEventListener('keydown', function(event) {
    insert.innerHTML = `
        <div class='color'>
        <table>
            <tr>
                <td>Key</td>
                <td>Keycode</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>${event.key === ' ' ? 'Space' : event.key}</td>
                <td>${event.keyCode}</td>
                <td>${event.code}</td>
            </tr>
        </table>
        </div>
    `;
});
