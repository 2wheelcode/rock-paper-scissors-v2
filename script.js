var options = ["Rock", "Paper", "Scissors"];
var computer = "No Selection";
var player = "No Selection";

var playerScore = 0;
var computerScore = 0;

function playGame() {
  console.log("playGame() called");
  document.getElementById("play-game-btn").innerHTML =
    '<button onclick="playerSelection()">Play Game?</button>';
}

function computerSelection() {
  const rpsValue = Math.floor(Math.random() * 3);
  computer = options[rpsValue];
  //console.log('computerSelection() called: ', options[rpsValue]);
  // working, console.log() not needed, schedule removal
  return options[rpsValue];
}

function playerSelection(string) {
  player = string;
  document.getElementById("play-game-btn").innerHTML = "";
  document.getElementById("player-btns").innerHTML = `
  <h3>Choose Your Weapon!</h3>
  <button onclick="playerSelection('Rock')">Rock</button>
  <button onclick="playerSelection('Paper')">Paper</button>
  <button onclick="playerSelection('Scissors')">Scissors</button>`;
  //console.log(string);
  // let promptSelection = prompt("Please enter your selection");
  //console.log("playerSelection() called: ", string);
  // working, console.log() & prompt not needed, schedule removal
  if (player !== undefined) comparison();
  // comparison();
  return string;
}

function playAgain() {
  console.log("playAgain() called");
  document.getElementById("play-game-btn").innerHTML =
    '<button onclick="playerSelection()">Play Again?</button>';
  /*  setTimeout(() => {
    console.log("playAgain() delayed for 5s");
    document.getElementById("play-again").innerHTML = "";
  }, 5000); */
  /* document.getElementById("choice").innerText = ``;
  document.getElementById("round-winner").innerText = "";
  document.getElementById("score").innerText = ``;
  document.getElementById("game-winner").innerText = ""; */
  playerScore = 0;
  computerScore = 0;
  return playerScore, computerScore;
}

function gameOver() {
  console.log("gameOver() called");
  document.getElementById("player-btns").innerHTML = ``;
  setTimeout(() => {
    console.log("Game Over delayed for 3s");
    playAgain();
    document.getElementById("choice").innerText = ``;
    document.getElementById("round-winner").innerText = "";
    document.getElementById("score").innerText = ``;
    document.getElementById("game-winner").innerText = "";
    /* playAgain(); */
  }, 3000);
  /* document.getElementById("choice").innerText = ``;
  document.getElementById("round-winner").innerText = "";
  document.getElementById("score").innerText = ``;
  document.getElementById("game-winner").innerText = ""; */
  // playAgain();
}

function comparison() {
  console.log("comparison() called");
  console.log("Player", playerScore, "Computer", computerScore);
  // working, console.log() not needed, schedule removal
  computerSelection();
  /* if (playerScore === 3) {
        console.log("Player has Won!!");
        //break;
      } else if (computerScore === 3) {
        console.log("Computer has Won :(");
        //break;
      } else {
        console.log("Next Round");
        /* function computerSelection();
      } */
  // working, ^this not needed, schedule removal

  if (computer === player) {
    /* console.log("Tie Game"); */
    // working, console.log() not needed, schedule removal
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
    /* console.log("Player Wins!");
        console.log("Player", playerScore, "Computer", computerScore); */
    // working, console.log() not needed, schedule removal
    document.getElementById("choice").innerText = `${player} beats ${computer}`;
    document.getElementById("round-winner").innerText =
      "Player Wins the Round!!";
    document.getElementById(
      "score"
    ).innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
    if (playerScore >= 3) {
      document.getElementById("game-winner").innerText =
        "Man over Machine! Player wins the Game!!!";
      /* setTimeout(() => {
          console.log('Game Over delayed for 1.5s');
          document.getElementById("game-winner").innerText =
        "Man over Machine! Player wins the Game!!!";
        }, 1500); */
      gameOver();
    }
    return;
  } else {
    computerScore = computerScore + 1;
    /* console.log("Computer Wins!");
        console.log("Player", playerScore, "Computer", computerScore); */
    // working, console.log() not needed, schedule removal
    document.getElementById("choice").innerText = `${computer} beats ${player}`;
    document.getElementById("round-winner").innerText =
      "Computer Wins the Round :(";
    document.getElementById(
      "score"
    ).innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
    if (computerScore >= 3) {
      document.getElementById("game-winner").innerText =
        "When you match wits with a half wit, machines win the Game!";
      /* setTimeout(() => {
          console.log('Game Over delayed for 1.5s');
          document.getElementById("game-winner").innerText =
        "When you match wits with a half wit, machines win the Game!";
        }, 1500); */
      gameOver();
    }
    return;
  }
}

//function game() {}
playGame();