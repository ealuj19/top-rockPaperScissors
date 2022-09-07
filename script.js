//  Function that will return the computer's choice (Rock, Paper, or Scissors)
function computerSelection () {
    let compChoice = Math.floor(Math.random() * 100);
    if (compChoice >= 0 && compChoice <= 33) {
        return "Rock";
    } if (compChoice >= 34 && compChoice <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Function that returns only the first letter capitalized
function firstLetterUpper (str) {
    capitalizedString = str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
    return capitalizedString;
}

// Function that takes user move and returns only first letter capitalized
function playerSelection () {
    let userChoice = prompt("Rock, Paper, Scissors...")
    userChoice = firstLetterUpper(userChoice);
    return userChoice;
}

// Function that plays a single round of Rock, Paper, Scissors
function playRound (computerSelection, playerSelection) {
    let roundResult;
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            roundResult = "You win!";
        } else if (computerSelection === "Rock") {
            roundResult = "Its a tie!";
        } else {
            roundResult = "You lose!";
        }
        return roundResult;
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            roundResult = "You win!";
        } else if (computerSelection === "Paper") {
            roundResult = "Its a tie!";
        } else {
            roundResult = "You lose!"
        }
        return roundResult;
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            roundResult = "You win!";
        } else if (computerSelection === "Scissors") {
            roundResult = "Its a tie!";
        } else {
            roundResult = "You lose!";
        }
        return roundResult;
    } else {
        return "That is not an option! Try again.";
    }
}

// Function that plays a Rock, Paper, Scissors game of best to 5
function game() {
    let userScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let roundOutcome = playRound(computerSelection(), playerSelection());
        if (roundOutcome == "You win!") {
            userScore += 1;
            if (userScore === 3) {
                console.log("You won the game!");
                break;
            } else {
                console.log(roundOutcome + ` You ${userScore} : Computer ${computerScore}`);
            }
        } else if (roundOutcome == "You lose!") {
            computerScore += 1;
            if (computerScore === 3) {
                console.log("The computer won the game!");
                break;
            } else {
                console.log(roundOutcome + ` You ${userScore} : Computer ${computerScore}`);
            }
        } else {
            i -= 1;
            console.log(roundOutcome + ` The score is still: You ${userScore} : Computer ${computerScore}`)
        }
    }
}

game();