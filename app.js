function getComputerChoice() {
    let hands = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * hands.length);
    return hands[random];
}

function getHumanChoice() {
    let human = prompt('Choose Rock, Paper, Scissors');
    return human;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) return alert('Draw');
        else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) return alert(`You won! \nHuman: ${++humanScore}`);
        else return alert(`You lost! \nComputer: ${++computerScore}`);
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
    // playGame();
}

function getWinner() {
    if (humanScore > computerScore) {
        alert(`Winner: Human`);
    } else if (computerScore > humanScore) {
        alert(`Winner: Computer`);
    } else {
        alert(`Draw`);
    }
}

// getWinner();