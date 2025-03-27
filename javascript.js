
const max = 3;

function getComputerChoice(max) {               // gets a random number from (0, 1, 2) and associates it with rock paper or scissors
    const result = Math.floor(Math.random() * max)
    if (result === 0) {
        return ("Rock")
    } else if (result === 1) {
        return ("Paper")
    } else (result === 2)
    return ("Scissors");
}
console.log(getComputerChoice(3))
