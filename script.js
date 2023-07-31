// get computer getComputerChoice, this will randomly return either rock, paper, or scissors.
// play a single round that takes two parameters from plater and computer, return a string that declares the winner




function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0){
        computerChoice = "rock";
    } else if (randomNumber === 1){
        computerChoice = "paper";
    } else{
        computerChoice = "scissors";
    };

    
    return computerChoice;
}

// check playerSelection
// check computerSelection
// scissors beat paper, paper beats rock, rock beats scissors

function playRound(playerSelection, computerSelection){
    let roundResult;
    let playerScore = 0;
    let computerScore = 0;
    
    if (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")) {
        roundResult = `${playerSelection} is invalid`;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        roundResult = `You Win! Rock beats Scissors`;   
        playerScore += 1; 
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        roundResult = `You Win! Paper beats Rock`;
        playerScore += 1; 
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        roundResult = `You Win! Scissors beat Paper`;
        playerScore += 1; 
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        roundResult = `You Lose! Rock beats Scissors`;
        computerScore += 1; 
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        roundResult = `You Lose! Paper beats Rock`;
        computerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        roundResult = `You Lose! Scissors beat Paper`;
        computerScore += 1;
    } else {
        roundResult = `Both of you chose ${playerSelection}, It's a draw!`;
    };
    
    
    return roundResult;
}


// loop the playRound() 5 times
// keep track of the scores
// declare the final winner at the end of the game
function game(){
    for (let i = 0; i < 5; i++) {
        const playerInput = prompt("Choose between Rock, Paper, or Scissors:","");
        const playerSelection = playerInput.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

}

game();