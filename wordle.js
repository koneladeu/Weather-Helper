const submitBtn = document.getElementById("submit-btn");
const guessInput = document.getElementById("guess");
const resultText = document.getElementById("result");
const attemptsText = document.getElementById("attempts");


let attempts = 0;
const maxAttempts = 6; // You can choose a different value.
let word = generateRandomWord(); // Replace with your word generation logic.

submitBtn.addEventListener("click", function (){
  const guess = guessInput.value.toLowerCase();
  let result = "";

  if (guess.length !== 5) {
    result = "Please enter a 5-letter word";
  } else if (guess === word) {
    result = "You win!";
    gameOver(result);
  } else {
    const letters = word.split("");
    for (let i = 0; i < letters.length; i++) {
      if (guess.includes(letters[i])) {
        result += "O";
      } else {
        result += "X";
      }
    }
    attempts++;
    updateUI(result, attempts);

    if (attempts >= maxAttempts) {
      gameOver(`Out of attempts. The word was "${word}".`);
    }
  }
});

function updateUI(result, attempts) {
  resultText.textContent = result;
  attemptsText.textContent = `Attempts: ${attempts}`;
}

function gameOver(message) {
  resultText.textContent = message;
  submitBtn.disabled = true;
  guessInput.disabled = true;
}

function generateRandomWord() {
  // Replace this with your word generation logic.
  const words = ["apple", "banana", "cherry", "grape", "lemon"];
  return words[Math.floor(Math.random() * words.length)];
}

function restartGame() {
  word = generateRandomWord();
  attempts = 0;
  resultText.textContent = "";
  attemptsText.textContent = "";
  guessInput.value = "";
  submitBtn.disabled = false;
  guessInput.disabled = false;
}