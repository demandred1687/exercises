const move = ['rock', 'paper', 'scissor'];
const computerSelection = getComputerChoice();
function getComputerChoice() {
    return move[Math.floor(Math.random()*move.length)];
}

function match(playerSelection, computerSelection) {
    switch(playerSelection){
    case 'rock':
        if(computerSelection == 'paper') {
            return `you lose ${computerSelection} beats ${playerSelection}`;
        } else if(computerSelection == 'rock') {
            return `it's a tie!!`
        } else {
            return `you win ${playerSelection} beats ${computerSelection}`
        }
        break
    case 'paper':
        if(computerSelection == 'scissor') {
            return `you lose ${computerSelection} beats ${playerSelection}`;
        } else if(computerSelection == 'paper') {
            return `it's a tie!!`
        } else {
            return `you win ${playerSelection} beats ${computerSelection}`
        }
        break
    case 'scissor':
        if(computerSelection == 'rock') {
            return `you lose ${computerSelection} beats ${playerSelection}`;
        } else if(computerSelection == 'scissor') {
            return `it's a tie!!`
        } else {
            return `you win ${playerSelection} beats ${computerSelection}`
        }
        break
    }
}



function game() {

}

console.log(match('paper', computerSelection));