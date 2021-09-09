// return computer's random choice
function computerPlay() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getResult(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        return (computerSelection === "scissors") ? 1 : 0 ;
    } else if (playerSelection === "paper") {
        return (computerSelection === "rock") ? 1 : 0 ;

    } else {
        return (computerSelection === "paper") ? 1 : 0 ;
    }
}
// plays single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { // tie case
        console.log("Tie!")
        return 0;
    } else if (getResult(playerSelection, computerSelection)) { // win case
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else { // lose case
        console.log(`You Lose! ${playerSelection} loses to ${computerSelection}`);
        return -1;
    }
}

// check if player input is valid
function check_input(playerSelection) {
    return !(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors");
}

// play game for 5 rounds
function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("rock? paper? scissors?").toLowerCase();
        // if wrong input skip
        if (!check_input(playerSelection)) {
            console.log("Wrong input!");
            continue;
        }
        // play round and keep track of total score
        score += playRound(playerSelection, computerPlay());
    }
    // return final winner
    (score > 0) ? console.log("YOU WIN") : console.log("YOU LOSE");
}

game();