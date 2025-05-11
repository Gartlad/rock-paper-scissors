
// Computers rock/paper/scissors choice
function getComputerchoice (min, max) {
    let choiceNumber = Math.floor(Math.random() * (max - min + 1) + min);
    
    let properChoice;
    
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

    console.log(properChoice)
}

getComputerchoice(1, 3)