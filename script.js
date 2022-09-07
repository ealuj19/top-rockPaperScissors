/*  
Make a function that will return the computer's choice (Rock, Paper, or Scissors)
    Declare a variable that will contain a randomly generated number 0-99
    If the variable is 0-33 return Rock
    If the variable is 34-66 return Paper
    If the variable is 67-99 (else) return Scissors
*/
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
/*
Create a variable that accepts a string input from user
Create a function that takes the user input and returns the first letter capitalized
    Take first character of the string and capitalize it
    Take remainder of string and make lowercase
    Return the new string
*/
function firstLetterUpper (str) {
    capitalizedString = str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
    return capitalizedString;
}

function playerSelection () {
    let userChoice = prompt("Rock, Paper, Scissors...")
    userChoice = firstLetterUpper(userChoice);
    return userChoice;
}
/*
Create a function that takes the computer's choice and user's choice as parameters
    If user's choice is Rock
        If computer's choice is Scissors return "You win!"
        Else, return "You lose!"
    If User's choice is Paper
        If computer's choice is Rock return "You win!"
        Else, return "You lose!"
    Else (User's choice is Scissors)
        If computer's choice is Paper return "You win!"
        Else, return "You lose!"
*/
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

console.log(playRound(computerSelection(), playerSelection()));