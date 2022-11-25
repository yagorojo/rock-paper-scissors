function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(e) {
  const playerSelection = parseInt(e.target.dataset.tag);
  const computerSelection = getComputerChoice();
  const result = playerSelection - computerSelection;

  if (result === -1 || result === 2) {
    playerScore += 1;
    message.textContent = `You win! ${options[playerSelection]} 
      beats ${options[computerSelection]}`;
  } else if (result === 0) {
    message.textContent = `It's a tie!`;
  } else {
    computerScore += 1;
    message.textContent = `You lose! ${options[computerSelection]}
      beats ${options[playerSelection]}`;
  }

  score.textContent = `${playerScore} - ${computerScore}`;  
  checkWinner();
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach(button => button.disabled = true);
  }

  if (playerScore === 5) {
    message.textContent = `Congratulations, you won!`;
  } else if (computerScore === 5) {
    message.textContent = `Maybe next time :(`;
  }
}

let options = ["Rock", "Paper", "Scissors"];
let buttons = Array.from(document.querySelectorAll('button'));
let score = document.querySelector('.score');
let message = document.querySelector('.message');
let computerScore = 0;
let playerScore = 0;
let winner = '';

buttons.forEach(button => 
  button.addEventListener('click', playRound)
);
