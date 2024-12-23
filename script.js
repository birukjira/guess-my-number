"use strict";
// selecting the elements
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score");
const highScoreDisplay = document.querySelector(".highscore");
const numberDisplay = document.querySelector(".number");
const againBtn = document.querySelector(".again");

// generating a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// initial score value
let score = 20;
let highScore = 0;

// display message function
function displayMessage(messages) {
  message.textContent = messages;
}

// adding event listener to check button
checkBtn.addEventListener("click", () => {
  // getting the user input
  const userGuess = Number(guessInput.value);
  if (score > 0) {
    if (userGuess < 1 || userGuess > 20) {
      // inform the user to enter a number between 1 and 20
      displayMessage("Please enter a number between 1 and 20");
    } else if (userGuess > secretNumber || userGuess < secretNumber) {
      // inform the user if the guess is higher than the random number
      userGuess > secretNumber
        ? (message.textContent = "📈 Too high, try again")
        : (message.textContent = "📉 Too low, try again");
      // decreasing the score by 1
      score--;
      scoreDisplay.textContent = score;
      if (score === 0) {
        score = 0;
        // message.textContent =
        //   "😭 You lost the game, the number was " + secretNumber;
        displayMessage("😭 You lost the game, the number was " + secretNumber);
        scoreDisplay.textContent = 0;
        document.body.style.backgroundColor = "red";
        numberDisplay.textContent = secretNumber;
      }
    } else if (userGuess === secretNumber) {
      // inform the user if the guess is correct
      // message.textContent = "🎉 Congratulations, you guessed the number!";
      displayMessage("🎉 Congratulations, you guessed the number!");
      // changing the background color of the body
      document.body.style.backgroundColor = "#60b347";
      numberDisplay.textContent = secretNumber;
      // saving the high score if the current score is higher than the high score
      if (score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;
      }
    }
  }
});

// adding event listener to again button
againBtn.addEventListener("click", () => {
  // resetting the score and high score
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // changing the background color of the body
  document.body.style.backgroundColor = "#222";
  // resetting the message and score display
  message.textContent = "Start guessing...";
  numberDisplay.textContent = "?";
  scoreDisplay.textContent = score;
  guessInput.value = "";
});
