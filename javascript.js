const max = 3;
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {                    // gets player choice and converts it to lowercase, then displays correct capitalization so no errors occur
    const result = prompt("Choose Rock, Paper, or Scissors")
    if (result.toLowerCase() === "rock") {
        return ("Rock")
    } else if (result.toLowerCase() === "paper") {
        return ("Paper")
    } else if (result.toLowerCase() === "scissors") {
        return ("Scissors")
    }
}

function getComputerChoice(num) {               // gets a random number from (0, 1, 2) and associates it with rock paper or scissors
    const result = Math.floor(Math.random() * num)
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

function playGame() {
    for (let i = 0; i < 10; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice(3);
        playRound(playerChoice, computerChoice);
    }
    let finalScore;
    if (playerScore > computerScore) {
        finalScore = alert("You win the game. Final score: Player: " + playerScore + " Computer: " + computerScore)
    } else if (computerScore > playerScore) {
        finalScore = alert("You lose the game. Final score: Player: " + playerScore + " Computer: " + computerScore)
    } else (
        finalScore = alert("It's a tie. Final score: Player: " + playerScore + " Computer: " + computerScore)
    )
}

playGame()