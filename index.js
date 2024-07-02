const resultText = document.getElementById("resultText");
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const choiceButtons = document.querySelectorAll(".choiceBtn");

let playerChoice;
let computerChoice;
let gameResult;

choiceButtons.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.textContent;
    computerTurn();
    playerText.textContent = `Me: ${playerChoice}`;
    computerText.textContent = `Computer: ${computerChoice}`;
    resultText.textContent = checkWinner();
  })
);

function checkWinner() {
  if (playerChoice === computerChoice) {
    return "Draw!";
  } else if (computerChoice === "✊") {
    return playerChoice === "✋" ? "You Win! 😊" : "You Lose! 😢";
  } else if (computerChoice === "✋") {
    return playerChoice === "✌️" ? "You Win! 😊" : "You Lose! 😢";
  } else if (computerChoice === "✌️") {
    return playerChoice === "✊" ? "You Win! 😊" : "You Lose! 😢";
  }
}

function computerTurn() {
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      computerChoice = "✊";
      break;
    case 1:
      computerChoice = "✋";
      break;
    case 2:
      computerChoice = "✌️";
      break;
  }
}
