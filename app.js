function getComputerChoice() {
    let hands = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * hands.length);
    return hands[random];
}

function getHumanChoice() {
    let human = prompt('Choose rock, paper, scissors');
    return human;
}

let humanScore = 0;
let computerScore = 0;