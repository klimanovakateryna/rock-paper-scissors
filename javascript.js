let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
 
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, scissors?").toLowerCase();

    if (humanChoice == "rock") {
        return "rock";
    } else if (humanChoice == "scissors") {
        return "scissors";
    } else if (humanChoice == "paper") {
        return "paper";
    } else {
        return "Invalid input";
    }
}


function playRound(humanChoice, computerChoice) {
    console.log("Your choice: " + humanChoice);
    console.log("Computer's choice: " + computerChoice);

    let roundResult;

    if (humanChoice === computerChoice) {
        roundResult = `It's a tie! You both chose ${humanChoice}`;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        roundResult = `You win! ${humanChoice} beats ${computerChoice}!`;
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    return roundResult;
}
 
function playGame(){
    for(let i = 0; i <= 5; i++){
        const humanChoice = getHumanChoice();
        if(humanChoice === "Invalid input"){
            console.log("Please enter again");
            i--;
            continue;
        }
        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}`);
        console.log(playRound(humanChoice, computerChoice));
    }
    
    if (humanScore > computerScore) {
        console.log("You won the game!");
        console.log(`Your final score: ${humanScore}`);
        console.log(`Computer's final score: ${computerScore}`);
    } else {
        console.log(`The computer has won with the score of ${computerScore}`);
        console.log(`Your final score: ${humanScore}`);
        console.log(`Computer's final score: ${computerScore}`);
    }
    

    humanScore = 0;
    computerScore = 0;
}
 
playGame();