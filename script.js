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

function getUserChoice(){
    userChoice = prompt("Rock, Paper, Scissors");
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice ==="scissors"){
        return userChoice
    } else
    return "no valid input"
}




function determineWinner(computerChoice, userChoice){
    if (computerChoice === userChoice){
        return "No winner"
    } else if ((computerChoice === "rock" && userChoice === "scissors")|| 
    computerChoice === "paper" &&  userChoice === "rock" ||
    computerChoice === "scissors" &&  userChoice === "paper"){
        return "Computer wins"
    } else {
        return "You win"
    }
}    
    
function playRound(){
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
}


playRound();

