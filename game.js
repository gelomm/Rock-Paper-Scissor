
/** 
 1. User input
      1.1 5 turns
      1.2 1 input executes the game. loop back to ask for another input (til 5 turns)
 2. computer random 3 inputs
 3. user input
 4. text indicating the winner 
 
  MECHANICS
 ROCK + ROCK = TIE
 PAPER + PAPER = TIE
 SCISSOR + SCISSOR = TIE
 
ROCK + PAPER = PAPER WINS
ROCK + SCISSOR = ROCK WINS
  
 PAPER + ROCK = PAPER WINS
 PAPER + SCISSOR = SCISSOR WINS
 
 SCISSOR + ROCK = ROCK WINS
 SCISSOR + PAPER = SCISSOR WINS
 */


 function computerPlay(){
    const value = Math.floor(Math.random() * 3);
  
    if(value == 0){
        return "ROCK";
    }else if(value == 1){
        return "PAPER";
    }else if (value == 2){
        return "SCISSOR";
    }
}

let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection){

    if ( playerSelection === computerSelection){
        console.log(`It's a tie!`);
        console.log(`You have chosen ${playerSelection}`);
        console.log(`The computer have chosen ${computerSelection}`);
    }else if(playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        console.log(`Paper beats Rock. You lose!`);
        console.log(`You have chosen ${playerSelection}`);
        console.log(`The computer have chosen ${computerSelection}`);
        ++computerScore;
    }else if(playerSelection == 'ROCK' && computerSelection == 'SCISSOR'){
        console.log(`Rock beats Scissor. You win!`);
        console.log(`You have chosen ${playerSelection}`);
        console.log(`The computer have chosen ${computerSelection}`);
        ++playerScore;
    }else if(playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        console.log(`Paper beats Rock. You win!`);
        console.log(`You have chosen ${playerSelection}`);
        console.log(`The computer have chosen ${computerSelection}`);
        ++playerScore;
    }else if(playerSelection == 'PAPER' && computerSelection == 'SCISSOR'){
        console.log(`Scissor beats Paper. You lose!`);
        console.log(`You have chosen ${playerSelection}`);
        console.log(`The computer have chosen ${computerSelection}`);
        ++computerScore;
    }else if(playerSelection == 'SCISSOR' && computerSelection == 'ROCK'){
        console.log(`Rock beats Scissor. You lose!`);
        console.log(`You have chosen ${playerSelection}`);
        console.log(`The computer have chosen ${computerSelection}`);
        ++computerScore;
    }else if(playerSelection == 'SCISSOR' && computerSelection == 'PAPER'){
        console.log(`Scissor beats Paper. You win!`);
        console.log(`You have chosen ${playerSelection}`);
        console.log(`The computer have chosen ${computerSelection}`);
        ++playerScore;
}

}

function game(){
    for (let round = 0; round < 5; round++){
        const playerSelection = prompt("ROCK * PAPER * SCISSOR : ").toUpperCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if (playerScore > computerScore){
        console.log (`You won the game!!! Your score ${playerScore} : Computer score ${computerScore}`);
    }else if (playerScore < computerScore){
        console.log (`You lost the game! Your score ${playerScore} : Computer score ${computerScore}`);
    }else {
        console.log (`It's a Draw. Your score ${playerScore} : Computer score ${computerScore}`);
    }
}
game();
