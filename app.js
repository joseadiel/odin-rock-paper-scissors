function getComputerChoice() {
    let hands = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * hands.length);
    return hands[random];
}