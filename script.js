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

