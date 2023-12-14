// headline
const headline = document.createElement('h1')
headline.textContent = "The ultimate Rock Paper Scissors Game";
document.body.appendChild(headline);

// score board
const scoreBoard = document.createElement("div");
const scoreBoardTitle = document.createElement("h2");
scoreBoardTitle.textContent = "SCOREBOARD";
scoreBoard.appendChild(scoreBoardTitle);
const scoreBoardNumbers = document.createElement("div");
scoreBoardNumbers.style.display = "flex";
scoreBoard.appendChild(scoreBoardNumbers);
const scoreBoardPlayer = document.createElement("div")
scoreBoardPlayer.textContent = "0";
scoreBoardNumbers.appendChild(scoreBoardPlayer);
const scoreBoardMiddle = document.createElement("div");
scoreBoardMiddle.textContent = ":";
scoreBoardNumbers.appendChild(scoreBoardMiddle);
const scoreBoardComputer = document.createElement("div")
scoreBoardComputer.textContent = "0";
scoreBoardNumbers.appendChild(scoreBoardComputer);

document.body.appendChild(scoreBoard)

// player choice field with button
const playersChoice = document.createElement("div");
playersChoice.style.display = "flex"

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
playersChoice.appendChild(rockButton);
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
playersChoice.appendChild(paperButton);
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
playersChoice.appendChild(scissorsButton);

document.body.appendChild(playersChoice);

// what was picked
const gameField = document.createElement("div");
gameField.style.display = "flex";
const PlayerHasPicked = document.createElement("div");
PlayerHasPicked.textContent = "???";
gameField.appendChild(PlayerHasPicked);
const dividerPicks = document.createElement("div");
dividerPicks.textContent = " : ";
gameField.appendChild(dividerPicks)
const ComputerHasPicked = document.createElement("div");
ComputerHasPicked.textContent = "???";
gameField.appendChild(ComputerHasPicked)

document.body.appendChild(gameField)


function getComputerChoice(){
    let randomNumber = Math.ceil(Math.random()*3);
    let computerChoice = "";
    if (randomNumber === 1){
        computerChoice = "rock";
        return computerChoice;
    } else if (randomNumber===2){
        computerChoice = "paper";
        return computerChoice
    } else {
        computerChoice = "scissors";
        return computerChoice;
    }
}

// Rock Button
rockButton.addEventListener("click", () => buttonClicked("rock")); 

// Paper Button
paperButton.addEventListener("click", () => buttonClicked("paper")); 

// Scissors Button
scissorsButton.addEventListener("click", () => buttonClicked("scissors")); 

let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

const buttonClicked = function(playerChoice){
    console.log(playerChoice);
    computerChoice = getComputerChoice();
    PlayerHasPicked.textContent = playerChoice;
    ComputerHasPicked.textContent = computerChoice;
    let winner = determineWinner(computerChoice, playerChoice);
    increaseScore(winner);
    checkIfSomebodyWon();
};

const increaseScore = function(winner){
    if (winner === "player"){
        playerScore += 1;
        scoreBoardPlayer.textContent = playerScore;
    } else if (winner === "computer"){
        computerScore += 1;
        scoreBoardComputer.textContent = computerScore;
    } 
}


function determineWinner(computerChoice, userChoice){
    if (computerChoice === userChoice){
        console.log("no winner")
        return "no winner"
    } else if ((computerChoice === "rock" && userChoice === "scissors")|| 
    computerChoice === "paper" &&  userChoice === "rock" ||
    computerChoice === "scissors" &&  userChoice === "paper"){
        console.log("computer wins")
        return "computer"
    } else {
        console.log("you win")
        return "player"
    }
}    
    

function checkIfSomebodyWon(){
    const currentComputerScore = parseInt(scoreBoardComputer.textContent);
    const currentPlayerScore = parseInt(scoreBoardPlayer.textContent);
    if (currentComputerScore === 3){
        alert("COMPUTER WON");
        resetScore();
    } else if (currentPlayerScore === 3){
        alert("PLAYER WON")
        resetScore();
    }
}

function resetScore(){
    playerScore = 0;
    scoreBoardPlayer.textContent = playerScore;
    computerScore = 0;
    scoreBoardComputer.textContent = computerScore;
}


