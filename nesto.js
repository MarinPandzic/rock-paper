const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    return choice[Math.floor(Math.random() * 3)];
}

function playerSelection() {
    let result;
    do {
        result = prompt('Enter 0 for rock, 1 for paper and 2 for scissors');
    } while (result != 1 && result != 2 && result != 0)

    return choice[result];
}
function playRound(playerSelection, getComputerChoice) {
   if(playerSelection === 'rock') {
        if(getComputerChoice === 'rock') {
            return 'Tie';
        } else if(getComputerChoice === 'paper') {
            return 'You lost!'
        } else {
            return 'You win!'
        }
   } else if(playerSelection === 'paper') {
        if(getComputerChoice === 'rock') {
            return 'You win';
        } else if(getComputerChoice === 'paper') {
            return 'Tie'
        } else {
            return 'You lost!'
        }
   } else {
        if(getComputerChoice === 'rock') {
            return 'You lost';
        } else if(getComputerChoice === 'paper') {
            return 'You win'
        } else {
            return 'Tie!'
        }
   }
}
function game() {
    let playerWins = 0;
    let computerWins = 0;
    let numbOfTies = 0;
    let playerChoice;
    let computerChoice;
    for (let i = 0; i < 5; i++) {
        playerChoice = playerSelection();
        computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        if(result === 'You lost') {
            computerWins++;
        } else if(result === 'You win') {
            playerWins++;
        } else {
            numbOfTies++;
        }
    }
    if(playerWins > computerWins) {
        console.log('Congrats! You won!')
    } else if(playerWins < computerWins) {
        console.log('Looks like you lost!')
    } else {
        console.log('It is a Tie!')
    }
}
game();
