let playerScore = 0
let computerScore = 0 

// game();

// Game function runs the playRound function 5 times and evaluate who is the winner of the game
// function game(){  
//   for (i=0; i<5; i++){
//     playRound()
// }
//   if (playerScore > computerScore) {
//     alert(`You win! Your score: ${playerScore} - Computer score: ${computerScore}`)}
//   else{
//     alert(`You lose! Computer score: ${computerScore} - Your score: ${playerScore}`)}
// }
// Function that decides the winner
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function playRound(){
let playerSelection = prompt(`Rock, paper or scissors? :)`,`Make your choice...`)
let computerSelection = computerPlay()
playerSelection = playerSelection.toLowerCase()

  if (playerSelection === `rock` || playerSelection === `paper` || playerSelection === `scissors`){

    if ((playerSelection == `rock` && computerSelection == `scissors`) ||
    (playerSelection == `paper` && computerSelection == `rock`) ||
    (playerSelection == `scissors` && computerSelection == `paper`))
    {
      playerScore++
      message = alert(`You win! ${playerSelection}  beats  ${computerSelection} | Your score: ${playerScore} - Computer score: ${computerScore}`)
      
    }
    else if (playerSelection == computerSelection){
      message = alert(`It's a draw! You both chose ${playerSelection} | Your score: ${playerScore} - Computer score: ${computerScore}`);
    }
    else {
      computerScore++
      message = alert(`You lose! ${computerSelection}  beats  ${playerSelection} | Your score: ${playerScore} - Computer score: ${computerScore}`);
      
    }
  return message;
}
else {
    alert(`You have to enter "rock", "paper" or "scissors"`)
  }
}
//helper function RANDOM
function randomZeroToTwo(){
  return Math.floor(Math.random()*3);
}
// Make Selection for Computer//
function computerPlay(){ // Returns Rock, paper or scissors for computer

let computerChoice = randomZeroToTwo()   // Assigns a randnom 0 to 2 number to computerChoice

switch(computerChoice){
  
  case 0:
    return `rock`

  case 1:                                 
    return `paper`;

  case 2:
    return `scissors`;
}
};
