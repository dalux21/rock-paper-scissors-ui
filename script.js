let playerScore = 0
let computerScore = 0 

const rock = document.querySelector("#rock");
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const lastRoundMessage = document.querySelector('#last-round');


rock.addEventListener('click', function(){
  playRound('rock');

lastRoundMessage.textContent = message
document.querySelector('#player-score').textContent = playerScore;
document.querySelector('#pc-score').textContent = computerScore;
})
paper.addEventListener('click', function(){
  playRound('paper');

lastRoundMessage.textContent = message
document.querySelector('#player-score').textContent = playerScore;
document.querySelector('#pc-score').textContent = computerScore;
})
scissors.addEventListener('click', function(){
  playRound('scissors');
document.querySelector('#player-score').textContent = playerScore;
document.querySelector('#pc-score').textContent = computerScore;
})


function playRound(playerSelection){
let computerSelection = computerPlay()

if (playerScore < 5 && computerScore < 5){
  if (playerSelection === `rock` || playerSelection === `paper` || playerSelection === `scissors`){

    if ((playerSelection == `rock` && computerSelection == `scissors`) ||
    (playerSelection == `paper` && computerSelection == `rock`) ||
    (playerSelection == `scissors` && computerSelection == `paper`))
    {
      playerScore++
      message = `You win! ${playerSelection}  beats  ${computerSelection}`
      
    }
    else if (playerSelection == computerSelection){
      message = `It's a draw! You both chose ${playerSelection}`
    }
    else {
      computerScore++
      message = `You lose! ${computerSelection}  beats  ${playerSelection}`;
      
    }
}
}
else if (playerScore === 5){

  playAgain(lastRoundMessage)
  message = 'Game Over!! You reached ' + playerScore + 'Points! You win!'

}
else if (computerScore === 5){
  message = 'Game Over!! Computer reached ' + computerScore + 'Points! You lose!!' 
  playAgain(lastRoundMessage)

}

return message;
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

function playAgain(lastRoundMessage){

  const playAgainBtn = document.createElement('btn')
  let container = document.getElementById('container')
  playAgainBtn.id = "play-again-btn"
  playAgainBtn.innerText = 'Play Again?'
  playAgainBtn.style.fontSize = '40px'
  playAgainBtn.style.cursor = 'pointer'

  if (!container.querySelector('#play-again-btn')){
  container.appendChild(playAgainBtn)
  playAgainBtn.addEventListener('click', function(e){
    playerScore = 0
    computerScore = 0
    lastRoundMessage.innerText = ''
    playAgainBtn.remove()
  })


}
}
