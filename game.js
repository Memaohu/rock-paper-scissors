const gameValues = ["rock", "paper", "scissors"];

// Choose randomly computer choice

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computer = choices[Math.floor(Math.random() * choices.length)];
    return computer;
}

// Get player choice

function getPlayerChoice() {
    let playerChoice = prompt("rock, paper, or scissors?").toLowerCase(); 
    return playerChoice;
}


let playerChoice= getPlayerChoice;
let computerChoice = getComputerChoice;

let playerPoint = 0;
let computerPoint = 0;
let round = 0;

// Play a single round

function playRound(playerChoice, computerChoice) {
    
    let result;
    if (!gameValues.includes(playerChoice)) {
        return (result = "${playerChoice} is invalid");
    }
    
   if (playerChoice === computerChoice) {
    return (result = "TIE! Try again. Computer: " + computerPoint + " pts and Player: " + playerPoint + " pts");
   } 
   else if (playerChoice === "rock" && computerChoice === "paper"){ 
    return (result = computerPoint++, "LOSE! Computer choice: " + computerChoice + " beats player choice: " + playerChoice + "! " + "Computer has " + computerPoint + " pts.");
   }
   else if (playerChoice === "paper" && computerChoice === "scissors"){
    return (result = computerPoint++, "LOSE! Computer choice: " + computerChoice + " beats player choice: " + playerChoice + "! " + "Computer has " + computerPoint + " pts.");    
   }
   else if (playerChoice === "scissors" && computerChoice === "rock"){
    return (result = computerPoint++, "LOSE! Computer choice: " + computerChoice + " beats player choice: " + playerChoice + "! " + "Computer has " + computerPoint + " pts.");
   }
   else {
    return (result = playerPoint++, "WIN! Player choice: " + playerChoice + " beats computer choice: " + computerChoice + "! " + "Player has " + playerPoint + " pts.");
        
   }  
}
//console.log(playRound(playerChoice,computerChoice));
let result = (playRound(playerChoice,computerChoice));

//Play 5 rounds

function game() {
    for (let i = 1; i < 6; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice,computerChoice));
    }

    if (playerPoint > computerPoint){
        console.log("Player Wins the Game with " + playerPoint + " out of 5 Rounds");
    } else if (computerPoint > playerPoint){
        console.log("Computer Wins the Game with " + computerPoint + " out of 5 Rounds");
    } else if (playerPoint === computerPoint) {
        console.log("It's  draw");
    }

}

game();

