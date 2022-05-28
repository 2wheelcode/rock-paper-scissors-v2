var options = ["Rock", "Paper", "Scissors"];
var computer = "No Selection";
var player = "No Selection";

var playerScore = 0;
var computerScore = 0;

function playGame() {
  document.getElementById("play-game-btn").innerHTML =
    '<button onclick="playerSelection()">Play Game?</button>';
}

function computerSelection() {
  const rpsValue = Math.floor(Math.random() * 3);
  computer = options[rpsValue];
  return options[rpsValue];
}

function playerSelection(string) {
  player = string;
  document.getElementById("play-game-btn").innerHTML = "";
  document.getElementById('label').innerHTML = '<h3>Choose Your Weapon!</h3>';
  document.getElementById("player-btns").innerHTML = `
  <button onclick="playerSelection('Rock')">Rock</button>
  <button onclick="playerSelection('Paper')">Paper</button>
  <button onclick="playerSelection('Scissors')">Scissors</button>`;
  if (player !== undefined) comparison();
  return string;
}

function playAgain() {
  document.getElementById("play-game-btn").innerHTML =
    '<button onclick="playerSelection()">Play Again?</button>';
  playerScore = 0;
  computerScore = 0;
  return playerScore, computerScore;
}

function gameOver() {
  document.getElementById('label').innerHTML = ``;
  document.getElementById("player-btns").innerHTML = ``;
  setTimeout(() => {
    playAgain();
    document.getElementById("choice").innerText = ``;
    document.getElementById("game-winner").innerText = "";
    document.getElementById("round-winner").innerText = "";
    document.getElementById("score").innerText = ``;
  }, 3500);
}

function comparison() {
  computerSelection();
  if (computer === player) {
    document.getElementById("choice").innerText = `${player} on ${computer}`;
    document.getElementById("round-winner").innerText = "It's a Tie";
    document.getElementById(
      "score"
    ).innerText = `Player: ${playerScore} Computer: ${computerScore}`;
    return;
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ) {
    playerScore = playerScore + 1;
    document.getElementById("choice").innerText = `${player} beats ${computer}`;
    document.getElementById("round-winner").innerText =
      "Player Wins the Round!!";
    document.getElementById(
      "score"
    ).innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
    if (playerScore >= 5) {
      document.getElementById("game-winner").innerText =
        "Man over Machine! Player wins the Game!!!";
      gameOver();
    }
    return;
  } else {
    computerScore = computerScore + 1;
    document.getElementById("choice").innerText = `${computer} beats ${player}`;
    document.getElementById("round-winner").innerText =
      "Computer Wins the Round :(";
    document.getElementById(
      "score"
    ).innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
    if (computerScore >= 5) {
      document.getElementById("game-winner").innerText =
        "When you match wits with a half wit, machines win the Game!";
      gameOver();
    }
    return computerScore;
  }
}

playGame();