function resetNewGame() {
    startGameElement.style.display = 'none';
    startGameElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!';
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    activePlayerNameElement.textContent = '';
    
    gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            playBoardElement.children[gameBoardIndex].textContent = '';
            playBoardElement.children[gameBoardIndex].classList.remove('disabled'); 
            gameBoardIndex++;
        }
    }
}

function startPlayBoard() {
    if (players[0].name === '' || players[1].name === '') {
        alert('please set a player name');
        return;
    }
    resetNewGame();
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }  
    activePlayerNameElement.textContent = players[activePlayer].name;
}
function selectGameField(event) {
    if (event.target.tagName !== 'LI' || gameIsOver) {
        return;
    }
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');
    
    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    
    const winnerId = checkForWinner();
    if (winnerId !== 0) {
        endGame(winnerId);
    }
    
    currentRound ++;

    switchPlayer();
}

function checkForWinner() {
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }    
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];      
    }
    if (currentRound === 9) {
        return -1;
    }  
    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    startGameElement.style.display = 'block';
    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        startGameElement.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
        startGameElement.firstElementChild.textContent = 'It\'s a draw';
    }    
}

  

    
