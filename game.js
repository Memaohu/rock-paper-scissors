function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computer = choices[Math.floor(Math.random() * choices.length)];
    console.log(computer);
    return computer;
}

getComputerChoice();

let playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
let computerChoice = getComputerChoice();


function playRound(playerChoice, computerChoice) {
   if (playerChoice === computerChoice) {
    alert("It's a tie!");
   } 
   else if (playerChoice === "rock" && computerChoice === "paper"){
    alert("You lose! " + computerChoice + " beats " + playerChoice + "!");
   }
   else if (playerChoice === "paper" && computerChoice === "scissors"){
    alert("You lose! " + computerChoice + " beats " + playerChoice + "!");
   }
   else if (playerChoice === "scissors" && computerChoice === "rock"){
    alert("You lose! " + computerChoice + " beats " + playerChoice + "!");
   }
   else {
    alert("You win! " + playerChoice + " beats " + computerChoice + "!");
   }
}
console.log(playRound(playerChoice,computerChoice));
