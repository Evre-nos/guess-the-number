// ? Game Logic for 'Check' Button:
// * Listen for the 'check' button to retrieve the input from the user.
// * Convert the input string to a number.
// * Implement the following logic:
// If no number is entered in the input field, prompt the user to input a valid number.
// If the number matches the secretNumber, execute actions for a correct guess.
// If the number is greater than secretNumber, handle actions for a too high guess.
// If the number is less than secretNumber, handle actions for a too low guess.
// * Implement score decreasing for each wrong try.
// * Store and display the highscore.
// * Change the color of the webpage and adjust the width of the hidden number box for highlighting when the number is matched.

// ? Major Work for 'Again' Button:
// * Listen for the 'again' button click.
// * Reset the hidden number, input box content, score, and any webpage color and hidden number box width changes.
// * Provide a fresh start for the next round of the game.

"use script";
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let displaySecretNumber = false;
const secretPlaceholder = function () {
  document.querySelector(".number").textContent = displaySecretNumber
    ? secretNumber
    : "🔒";
};
secretPlaceholder();
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const scoreChanger = function (score) {
  document.querySelector(".score").textContent = score;
};
const backgroundChanger = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const widthChanger = function (width) {
  document.querySelector(".number").style.width = width;
};
const highscoreChanger = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};
const inputReset = function (input) {
  document.querySelector(".guess").textContent = input;
};

// Main work with 'check' button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Input a valid number!");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Too high guess!" : "Too low guess!"
      );
      score--;
      scoreChanger(score);
    } else {
      displayMessage("You lost the game!");
      scoreChanger(0);
    }
  } else if (guess === secretNumber) {
    displayMessage("Correct guess!");
    backgroundChanger("#90EE90");
    widthChanger("30rem");
    if (score > highscore) highscoreChanger(score);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = secretNumber;
  displayMessage("Start guessing...");
  score = 20;
  scoreChanger(score);
  inputReset("");
  backgroundChanger("#222");
  widthChanger("15rem");
  secretPlaceholder();
});
