function openPlayerOverlay(event) {
    eidtedPlayer = +event.target.dataset.playerid;
    configOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerOverlay() {
    configOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('username').trim();

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'please enter a valid name';
        return; 
    }
    
    const updatedPlayerNameElement = document.getElementById('player-' + eidtedPlayer + '-data');
    updatedPlayerNameElement.children[1].textContent = enteredPlayerName;

    players[eidtedPlayer - 1].name = enteredPlayerName;

    closePlayerOverlay();


}