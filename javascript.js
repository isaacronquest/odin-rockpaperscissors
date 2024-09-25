let humanScore = 0;
let computerScore = 0;
let endGame = false;
let rockBtn = document.querySelector('.rockBtn');
let paperBtn = document.querySelector('.paperBtn');
let scissorsBtn = document.querySelector('.scissorsBtn');
let score = document.querySelector('#score');
let scoreBoard = document.querySelector('#scoreBoard');
let winner = document.createElement('span');
let newLine = document.createElement('br');


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

function getWinner() {
    if (humanScore === 5) {
        winner.textContent = `You win the game! Score: ${humanScore} / ${computerScore}`;
        scoreBoard.appendChild(winner);
        scoreBoard.appendChild(newLine);
        endGame = true;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        winner.textContent = `You lose the game! Score: ${computerScore} / ${humanScore}`;
        scoreBoard.appendChild(winner);
        scoreBoard.appendChild(newLine);
        endGame = true;
        computerScore = 0;
        humanScore = 0;
    }
    else {
        endGame = false;
    }
}


function playRound(humanChoice, computerChoice) {
    let roundScore = document.createElement('li');

    if (endGame === true) {
        score.textContent = '';
        winner.textContent = '';
        newLine.remove;
    }

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        getWinner();
        roundScore.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        getWinner();
        roundScore.textContent = `You won this round! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        getWinner();
        roundScore.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }    
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        getWinner();
        roundScore.textContent = `You won this round! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        getWinner();
        roundScore.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }    
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        getWinner();
        roundScore.textContent =`You won this round! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        roundScore.textContent =`It's a tie!`;
        getWinner();
    }
    score.appendChild(roundScore);   
  }



rockBtn.addEventListener('click', () => {
    playRound("rock",getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound("paper",getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound("scissors",getComputerChoice());
});