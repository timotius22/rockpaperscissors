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

let userChoice = "";
const rockButtonClicked = function(){
    userChoice = "rock";
    console.log(userChoice);
};


rockButton.addEventListener("click", rockButtonClicked); 







/* function determineWinner(computerChoice, userChoice){
    if (computerChoice === userChoice){
        return "No winner"
    } else if ((computerChoice === "rock" && userChoice === "scissors")|| 
    computerChoice === "paper" &&  userChoice === "rock" ||
    computerChoice === "scissors" &&  userChoice === "paper"){
        return "Computer wins"
    } else {
        return "You win"
    }
}     */
    
/* function playRound(){
    let userChoice = "";
    let computerChoice = "";

    let userInput = "no valid input";
    while (!(userInput === "rock" || userInput === "paper" || userInput === "scissors")){
        userInput = getUserChoice();
    }

    winner = "No winner"
    while (winner === "No winner"){
        winner = determineWinner(getComputerChoice(), userInput);
        console.log(winner);
        alert(winner);
    }
} */




