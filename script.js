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
    let roundResult = document.querySelector('#roundResult');
    
    if (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")) {
        roundResult.textContent = `${playerSelection} is invalid`;
        winner = "none";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        roundResult.textContent = `You Win! Rock beats Scissors`;   
        winner = "player";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        roundResult.textContent = `You Win! Paper beats Rock`;
        winner = "player";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        roundResult.textContent = `You Win! Scissors beat Paper`;
        winner = "player";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        roundResult.textContent = `You Lose! Rock beats Scissors`;
        winner = "computer";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        roundResult.textContent = `You Lose! Paper beats Rock`;
        winner = "computer";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        roundResult.textContent = `You Lose! Scissors beat Paper`;
        winner = "computer";
    } else {
        roundResult.textContent = `Both of you chose ${playerSelection}, It's a draw!`;
        winner = "none";
    };
    
    return roundResult;
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerSelection;
let computerSelection;

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});


let winner;
// loop the playRound() 5 times
// keep track of the scores
// declare the final winner at the end of the game
function game(){
    let playerScore = 0;
    let computerScore = 0;
    // ------------Temporary Remove--------------------
    
    // for (let i = 0; i < 5; i++) {
    //     const playerInput = prompt("Choose between Rock, Paper, or Scissors:","");
    //     const playerSelection = playerInput.toLowerCase();
    //     const computerSelection = getComputerChoice();
    //     console.log(playRound(playerSelection, computerSelection));
    //     if (winner === "player") {
    //             playerScore++;
    //     } else if (winner === "computer") {
    //                 computerScore++;
    //     } else {
    //         //
    //     }
    //     console.log(`Score: ${playerScore} - ${computerScore}`);
    // }
                
    // if (playerScore > computerScore) {
    //     console.log("YOU ARE THE WINNER!!!");
    // } else if (playerScore < computerScore) {
    //     console.log("YOU LOST! COMPUTER IS THE WINNER!!!");
    // } else {
    //     console.log("IT'S A DRAW");
    // };

    // --------------------------------

}

game();