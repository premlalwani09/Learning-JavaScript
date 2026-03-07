// one.html

// Old approach to handle events, not give propagation and not recommended
// document.getElementById('owl').onclick = function() {
//     alert('You clicked the owl image!');
// }


// Click Event
// document.getElementById('owl').addEventListener('click', function(e) {
//     // alert('You clicked the owl image!');
//     console.log('Event object: ', e);
// }, false);

// attachEvent()
// jQuery - on() method

// type, timestamp, preventDefault, 
// target, toElement, srcElement, currentTarget 
// clientX, clientY, pageX, pageY, screenX, screenY
// altKey, ctrlKey, shiftKey, keycode



document.getElementById('images').addEventListener('click', function(e) {
    console.log("Clicked inside the UI");
}, false);

document.getElementById('owl').addEventListener('click', function(e) {
    console.log("Clicked on the owl image");
    // e.stopPropagation(); // stop the event from bubbling up to parent elements
}, false);

// false - bubbling phase
// true - capturing phase


document.getElementById('google').addEventListener('click', function(e) {
    e.preventDefault();
    // e.stopPropagation();
    alert('You clicked the Google link!');
}, false);



document.querySelector('#images').addEventListener('click', function(e) {
    console.log('Clicked on the images container');
    console.log('Event target: ', e.target.parentNode);

    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    // removeIt.parentNode.removeChild(removeIt);
}, false);