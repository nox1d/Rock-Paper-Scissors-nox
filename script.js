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

// check winner
// add score to the winner
let winner;
const playerScore = document.querySelector('#playerScoreValue');
const computerScore = document.querySelector('#computerScoreValue');
let playerScoreValue = 0;
let computerScoreValue = 0;

function addScore() {
    if (winner === 'player') {
        playerScoreValue++;
        playerScore.textContent = playerScoreValue.toString();
    } else if (winner === 'computer') {
        computerScoreValue++;
        computerScore.textContent = computerScoreValue.toString();
    } else {
        //
    };
    

    console.log(playerScore, computerScore);
}

// check which player has score 5
// display the winner

function displayWinner() {
    if (playerScoreValue === 5) {
        roundResult.textContent = "YOU WIN!!!";
    } else if (computerScoreValue === 5) {
        roundResult.textContent = "COMPUTER WINS!!!"
    } else return;
}

// hide reset button
const resetButton = document.querySelector('#reset');
resetButton.style.display = 'none';

// check playerSelection
// check computerSelection
// scissors beat paper, paper beats rock, rock beats scissors

function playRound(playerSelection, computerSelection){
    let roundResult = document.querySelector('#roundResult');
    
    if (playerScoreValue === 5 || computerScoreValue === 5) {
        resetButton.style.display = 'initial';
        resetButton.addEventListener('click', () => {
            playerScoreValue = 0;
            computerScoreValue = 0;
            playerScore.textContent = playerScoreValue;
            computerScore.textContent = computerScoreValue;
            roundResult.textContent = '';
        });
    } else {
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
        addScore();
        displayWinner();
    }
    
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

