const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const sciccors = document.getElementById('sciccors');

const humanResult = document.getElementById('human-result');
const computerResult = document.getElementById('computer-result');
const humanPoints = document.getElementById('human-points');
const computerPoints = document.getElementById('computer-points');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let hands = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * hands.length);
    return hands[random];
}

function getWinner (human, computer) {
    if (human === computer) return 'draw';
    else if (
        (human === 'Rock' && computer === 'Scissors') ||
        (human === 'Paper' && computer === 'Rock') ||
        (human == 'Scissors' && computer === 'Paper')
    ) return 'humnan';
    else return 'computer';
};

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(humanChoice, computerChoice);

    humanResult.textContent = humanChoice;
    computerResult.textContent = computerChoice;

    if (winner === 'humnan') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    humanPoints.textContent = `Human: ${humanScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
}

rock.addEventListener('click', () => playRound('Rock'));
paper.addEventListener('click', () => playRound('Paper'));
sciccors.addEventListener('click', () => playRound('Sciccors'));