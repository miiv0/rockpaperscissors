
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const result = document.querySelector(".result");
const cScore = document.querySelector(".cScore");
const pScore = document.querySelector(".pScore");
const pChoice = document.querySelector(".pChoice");
const cChoice = document.querySelector(".cChoice");

const rounds = document.querySelector(".rounds");
const winner = document.querySelector(".winner");


const rock = document.querySelector(".rockButton");
rock.addEventListener("click", () => playRound("Rock", getComputerChoice(3)));

const paper = document.querySelector(".paperButton");
paper.addEventListener("click", () => playRound("Paper", getComputerChoice(3)));

const scissors = document.querySelector(".scissorsButton");
scissors.addEventListener("click", () => playRound("Scissors", getComputerChoice(3)));

const computerChoice = getComputerChoice(3);

function newGame() {
    location.reload(true);
}

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
        roundCount++;
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
        pChoice.textContent = playerChoice;
        cChoice.textContent = computerChoice;
        rounds.textContent = "Rounds Played: " + roundCount;
        result.textContent = "It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
        playerScore++;
        roundCount++;
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
        pChoice.textContent = playerChoice;
        cChoice.textContent = computerChoice;
        rounds.textContent = "Rounds Played: " + roundCount;
        result.textContent = "You won! " + playerChoice + " beats " + computerChoice + "!";

    } else {
        computerScore++;
        roundCount++;
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
        pChoice.textContent = playerChoice;
        cChoice.textContent = computerChoice;
        rounds.textContent = "Rounds Played: " + roundCount;
        result.textContent = "You lost! " + computerChoice + " beats " + playerChoice + "!";
    }
    if (playerScore >= 5) {
        winner.textContent = "You are the Winner!";
        setTimeout(newGame, 2000)
    } else if (computerScore >= 5) {
        winner.textContent = "You Lose!";
        setTimeout(newGame, 2000)
    }
}
