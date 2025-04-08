const max = 3;
let playerScore = 0;
let computerScore = 0;

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice(3);

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => playRound(0, getComputerChoice()));

function getPlayerChoice(num) {
    if (result === 0) {
        return ("Rock")
    } else if (result === 1) {
        return ("Paper")
    } else (result === 2)
    return ("Scissors");
}

function getComputerChoice(num) {
    if (result === 0) {
        return ("Rock")
    } else if (result === 1) {
        return ("Paper")
    } else (result === 2)
    return ("Scissors");
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        alert("Its a Tie!")
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
        playerScore++;
        console.log(playerScore)
        alert("You won! " + playerChoice + " beats " + computerChoice + "!")

    } else {
        computerScore++;
        console.log(computerScore)
        alert("You lost! " + computerChoice + " beats " + playerChoice + "!")
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
