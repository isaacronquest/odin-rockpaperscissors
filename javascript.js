let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) ;
    if (randomNumber === 0) {
        return 'rock';
    }
    else if (randomNumber === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getHumanChoice () {
    let choice = prompt('Choose between Rock / Paper / Scissors')
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log(`You won this round! ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    }    
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log(`You won this round! ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    }    
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log(`You won this round! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        console.log(`It's a tie!`)
    }   
  }



function playGame() {
    let i = 0;
    while (i < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        i++;
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Score: ${humanScore} / ${computerScore}`);
    }
    else {
        console.log(`You lose the game! Score: ${computerScore} / ${humanScore}`);
    }

}

playGame();
