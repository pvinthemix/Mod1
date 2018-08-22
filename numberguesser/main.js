
var numberInput = document.querySelector('.number-input');
var clearButton = document.querySelector('.clear-button');
var guessButton = document.querySelector('.guess-button');
var lastGuess = document.querySelector('.last-guess');
var numberResult = document.querySelector('.number-result');
var outcome = document.querySelector('.outcome');
var resetButton = document.querySelector('.reset-button');

//defining my random number variable as a function//
var randomNumber = createRandom();

console.log(randomNumber);

clearButton.addEventListener("click", clearsInput);
guessButton.addEventListener("click", usersGuess);
resetButton.addEventListener('click', resetGame);

//this is the function for clearing the input field//
function clearsInput(){
  numberInput.value = "";
}
//This creates the random number in the console//
function createRandom(){
  return Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
};
//This function makes the whatever the user guessed be shown in the middle//
function usersGuess() {
  numberResult.innerText = numberInput.value;
  feedBack();
};
//This function resets the game, clears the input using the input function, and then creates a random number.
function resetGame(){
  clearsInput();
  randomNumber = createRandom();
  numberResult.innerText = '?';
  outcome.innerText = 'Make a guess';
  console.log(randomNumber);
};

/*This function runs once the userGuess function has run and spits out feedback on their guess*/
function feedBack() {
  var convertNum = parseInt(numberInput.value);
  if (convertNum > randomNumber) {
    outcome.innerText = `That is too high`;
  } else if (convertNum < randomNumber) {
    outcome.innerText = `That is too low`;
  } else {
    outcome.innerText = `Boom`;
    }
}

numberInput.addEventListener('keyup', enabledButtons);

function enabledButtons(){
  if (numberInput.value === ""){
    guessButton.disabled = true;
    resetButton.disabled = true;
    clearButton.disabled = true;
  } else if (numberInput.value !== ""){
    guessButton.disabled = false;
    resetButton.disabled = false;
    clearButton.disabled = false;
  }
}


