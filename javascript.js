
let playerScore = 0;
let computerScore = 0;

const result = document.querySelector(".result");
const cScore = document.querySelector(".cScore");
const pScore = document.querySelector(".pScore");
const pChoice = document.querySelector(".pChoice");
const cChoice = document.querySelector(".cChoice");


const rock = document.querySelector(".rockButton");
rock.addEventListener("click", () => playRound("Rock", getComputerChoice(3)));

const paper = document.querySelector(".paperButton");
paper.addEventListener("click", () => playRound("Paper", getComputerChoice(3)));

const scissors = document.querySelector(".scissorsButton");
scissors.addEventListener("click", () => playRound("Scissors", getComputerChoice(3)));

const computerChoice = getComputerChoice(3);

function getComputerChoice(max) {
    let result = Math.floor(Math.random() * max)
    if (result === 0) {
        return ("Rock")
    } else if (result === 1) {
        return ("Paper")
    } else (result === 2)
    return ("Scissors");
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        pScore.textContent = "Your Score: " + playerScore;
        cScore.textContent = "Computer Score: " + computerScore;
        pChoice.textContent = "Your Choice: " + playerChoice;
        cChoice.textContent = "Computer Choice: " + computerChoice;
        result.textContent = "It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
        playerScore++;
        pScore.textContent = "Your Score: " + playerScore;
        cScore.textContent = "Computer Score: " + computerScore;
        pChoice.textContent = "Your Choice: " + playerChoice;
        cChoice.textContent = "Computer Choice: " + computerChoice;
        result.textContent = "You won! " + playerChoice + " beats " + computerChoice + "!";

    } else {
        computerScore++;
        pScore.textContent = "Your Score: " + playerScore;
        cScore.textContent = "Computer Score: " + computerScore;
        pChoice.textContent = "Your Choice: " + playerChoice;
        cChoice.textContent = "Computer Choice: " + computerChoice;
        result.textContent = "You lost! " + computerChoice + " beats " + playerChoice + "!";
    }
}


// function playGame() {
//     for (let i = 0; i < 10; i++) {
//         const playerChoice = getPlayerChoice();
//         const computerChoice = getComputerChoice(3);
//         playRound(playerChoice, computerChoice);
//     }
//     let finalScore;
//     if (playerScore > computerScore) {
//         finalScore = alert("You win the game. Final score: Player: " + playerScore + " Computer: " + computerScore)
//     } else if (computerScore > playerScore) {
//         finalScore = alert("You lose the game. Final score: Player: " + playerScore + " Computer: " + computerScore)
//     } else (
//         finalScore = alert("It's a tie. Final score: Player: " + playerScore + " Computer: " + computerScore)
//     )
// }

// playGame()
