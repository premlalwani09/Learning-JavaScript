let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } 
    else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    } 
    else {
        previousGuesses.push(guess);
        if(numGuesses === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number in ${numGuesses} tries!`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage("Too low! Try again.");
    }
    else if (guess > randomNumber) {
        displayMessage("Too high! Try again.");
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {   
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;

    newGame();
}

function newGame() {

    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function() {
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuesses}`;
        lowOrHi.innerHTML = "";
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        
    });

}




