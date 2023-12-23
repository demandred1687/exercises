const moves = ['rock', 'paper', 'scissor'];
function getComputerChoice() {
    return moves[Math.floor(Math.random()*moves.length)];
}

let banner = document.querySelector('#announce');
let rock = document.querySelector('.r')
let paper = document.querySelector('.p')
let scissor = document.querySelector('.s')
let u_pts = document.querySelector('#u_points')
let cmp_pts = document.querySelector('#comp_points')

rock.addEventListener('click', (e) => {return match('rock', getComputerChoice())});
paper.addEventListener('click', (e) => {return match('paper', getComputerChoice())});
scissor.addEventListener('click', (e) => {return match('scissor', getComputerChoice())});

function match(playerSelection, computerSelection) {
    switch(playerSelection){
    case 'rock':
        if(computerSelection == 'paper') {
            return banner.textContent = `you lose ${computerSelection} beats ${playerSelection}`;
        } else if(computerSelection == 'rock') {
            return banner.textContent = `it's a tie!!`;
        } else {
            return banner.textContent = `you win ${playerSelection} beats ${computerSelection}`;
        }
        break
    case 'paper':
        if(computerSelection == 'scissor') {
            return banner.textContent =`you lose ${computerSelection} beats ${playerSelection}`;
        } else if(computerSelection == 'paper') {
            return `it's a tie!!`
        } else {
            return banner.textContent =`you win ${playerSelection} beats ${computerSelection}`
        }
        break
    case 'scissor':
        if(computerSelection == 'rock') {
            return banner.textContent =`you lose ${computerSelection} beats ${playerSelection}`;
        } else if(computerSelection == 'scissor') {
            return banner.textContent =`it's a tie!!`
        } else {
            return banner.textContent =`you win ${playerSelection} beats ${computerSelection}`
        }
        break
    }
}

let you = 0;
let enemy = 0;

/*const game = (a) => {
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
*/