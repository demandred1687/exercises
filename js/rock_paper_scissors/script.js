const move = ['rock', 'paper', 'scissor'];
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
function getComputerChoice() {
    return move[Math.floor(Math.random()*move.length)];
}

function match(playerSelection, computerSelection) {
    switch(playerSelection){
    case 'rock':
        if(computerSelection == 'paper') {
            return `you lose ${computerSelection} beats rock`;
        } else if(computerSelection == 'rock') {
            return `it's a tie!!`
        } else {
            return `you win rock wins against ${computerSelection}`
        }
    }
}



function game() {

}

console.log(match(playerSelection, computerSelection));