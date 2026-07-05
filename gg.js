let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

function checkGuess() {
let guess = Number(document.getElementById("guessInput").value);
let message = document.getElementById("message");

if (attemptsLeft <= 0){
    return;
}

if (guess < 1 || guess > 100) {
    message.textContent = " enter a number between  1 and 100";
    return;
}

attemptsLeft--;
document.getElementById("attemtsLeft").textContent = attemptsLeft;

if (guess === randomNumber) {
    message.textContent = "Correct! The Number was " + randomNumber;
} else if (attemptsLeft === 0) {
     message.textContent = " Game Over! the number was" + randomNumber + "you stupid!";
} else if (guess > randomNumber) {
     message.textContent = "Too high!";
} else if (guess < randomNumber) {
     message.textContent = " Too Low!"
}

}