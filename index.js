function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function parseInput(input) {
  return input.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
  let result;
  let condition = playerSelection - computerSelection;

  if (condition === -1 || condition === 2)
    result = `You win! ${options[playerSelection]} beats ${options[computerSelection]}`;
  else if (condition === 0)
    result = `It's a draw!`;
  else
    result = `You lose! ${options[computerSelection]} beats ${options[playerSelection]}`;


  return result;
}

function game() {
  let playerSelection = null;
  let message = "0 - Rock! 1 - Paper! 2 - Scissors!\n\nChoose:";

  for (let i = 0; i < 5; i++) {
    playerSelection = parseInt(prompt(message));

    console.log(playRound(playerSelection, getComputerChoice()));
  }
}

let options = ["Rock", "Paper", "Scissors"];
game();
