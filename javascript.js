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

function playRound(humanChoice, computerChoice) {
    let roundResult;

    if (humanChoice === computerChoice) {
        roundResult = `It's a tie! You both chose ${humanChoice}`;
    } else if (humanChoice == "rock" && computerChoice == "scissors" || 
               humanChoice == "scissors" && computerChoice == "paper" || 
               humanChoice == "paper" && computerChoice == "rock") {
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    return roundResult;
}

function playGame(humanChoice) {
    const result = document.querySelector("#result");

    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    result.textContent = `${roundResult} \nYour score: ${humanScore} \nComputer's score: ${computerScore}`;

    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            result.textContent += "\nYou won the game!";
        } else {
            result.textContent += "\nThe computer has won the game!";
        }
        result.textContent += `\nFinal scores: \nHuman: ${humanScore}, Computer: ${computerScore}`;

        humanScore = 0;
        computerScore = 0;
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
