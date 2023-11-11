const moves = ['rock', 'paper', 'scissor'];
function getComputerChoice() {
    return moves[Math.floor(Math.random()*moves.length)];
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

let you = 0;
let enemy = 0;

const game = (a) => {
    if (a == 0) {return you > enemy ? 'you win' : 'you lose'}
    else {
        let move = window.prompt(`you: ${you} vs enemy: ${enemy}`).toLowerCase();
        const computerSelection = getComputerChoice();
        if (/win/.test(match(move, computerSelection))== true) {
            you++;
            console.log(`you won! your move was ${move} and enemy move was ${computerSelection}`);
            return game(a-1);
        } else if (/tie/.test(match(move, computerSelection))== true) {
            console.log(`it was a tie! no count your move was ${move} and enemy move was ${computerSelection}`)
            return game(a);
        } else {
            enemy++;
            console.log(`you lost! your move was ${move} and enemy move was ${computerSelection}`);
            return game(a-1);
        } 
    }

    };

console.log(game(5),you,enemy);