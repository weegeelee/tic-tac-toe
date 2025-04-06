const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let eidtedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const configOverlayElement = document.getElementById('cofig-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-error');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const startGameElement = document.getElementById('start-game');

const editPlayer1Element = document.getElementById('edit-player-1-bnt');
const editPlayer2Element = document.getElementById('edit-player-2-bnt');
const cancelConfigOverlayElement = document.getElementById('overlay-cancel-btn');
const startGameButtonElement = document.getElementById('start-game-btn');
const playBoardElement = document.getElementById('play-board');

editPlayer1Element.addEventListener('click', openPlayerOverlay);
editPlayer2Element.addEventListener('click', openPlayerOverlay);
cancelConfigOverlayElement.addEventListener('click', closePlayerOverlay);
backdropElement.addEventListener('click', closePlayerOverlay);
formElement.addEventListener('submit', savePlayerName);
startGameButtonElement.addEventListener('click', startPlayBoard);
playBoardElement.addEventListener('click', selectGameField);