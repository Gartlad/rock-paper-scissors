
// Computers rock/paper/scissors choice
function getComputerchoice (min, max) {
    let choiceNumber = Math.floor(Math.random() * (max - min + 1) + min);
    
    let properChoice;

    // Assign a value based off the randomly selected number
    switch (choiceNumber) {
        case 1:
            properChoice = "Rock";
            break;
        case 2:
            properChoice = "Paper";
            break;
        case 3:
            properChoice = "Scissors";
            break;
    }

    return properChoice;
}

// Users choice
function getUserChoice () {
    const userChoiceFromPrompt = prompt("Rock, paper or scissors?");
    return userChoiceFromPrompt;
}

// Processes the winner of the round
function playRound (pChoice, cChoice) {

    let bothChoices = `User chose ${pChoice.toUpperCase()} and the computer chose ${cChoice.toUpperCase()}`;

    if (pChoice.toUpperCase() === cChoice.toUpperCase()) {
        console.log(bothChoices);
        console.log("Tie! Nobody wins");
        return "Tie";
    }
    else if (pChoice.toUpperCase() === "ROCK" && cChoice.toUpperCase() === "PAPER") {
        console.log(bothChoices);
        console.log("Computer wins!");
        return "Computer";
    }
    else if (pChoice.toUpperCase() === "PAPER" && cChoice.toUpperCase() === "SCISSORS") {
        console.log(bothChoices);
        console.log("Computer wins!");
        return "Computer";
    }
    else if (pChoice.toUpperCase() === "SCISSORS" && cChoice.toUpperCase() === "ROCK") {
        console.log(bothChoices);
        console.log("Computer wins!");
        return "Computer";
    }
    else {
        console.log(bothChoices);
        console.log("User wins!");
        return "User";
    }

}

function evaluateWinner (userScore, computerScore) {
    if (userScore > computerScore) {
        return "User won the game!!!!!"
    }
    else {
        return "The computer won the game!!!!!"
    }
}

function playGame () {

    // Keeps track of scores
    let humanScore = 0;
    let computerScore = 0;

    while ((humanScore + computerScore) < 5) {

        let pChoice = getUserChoice();
        let cChoice = getComputerchoice(1, 3);

        let resultRound = playRound(pChoice, cChoice);

        switch (resultRound) {
            case "Computer":
                computerScore += 1;
                break;
            case "User":
                humanScore += 1;
                break;
        }
    }

    let winner = evaluateWinner(humanScore, computerScore);
    console.log(winner);
}

playGame()