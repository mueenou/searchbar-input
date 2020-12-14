const footballPlayers = [
    'cristiano ronaldo',
    'lionel messi',
    'ronaldinho',
    'zinedine zidane',
    'ronaldo',
    'fabien barthez',
    'karim benzema',
    'zlatan ibrahimovic',
    'david beckham',
    'paul pogba',
    'kylian mbappé',
    'kingsley coman',
    'blaise matuidi',
    'antoine griezmann'
]
const seachInputValue = '';

const body = document.querySelector('body');
const playersDiv = document.querySelector('.players-container');

function displayPlayers(foundPlayer) {
    playersDiv.innerHTML = "";
    console.log(foundPlayer)
    foundPlayer.forEach((player) => {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = player;
        ul.appendChild(li);
        playersDiv.appendChild(ul)
        li.addEventListener('click', (e) => searchPlayer(e))
        playersDiv.addEventListener('blur', () => {
            playersDiv.innerHTML = "";
        })
    })
}

function searchPlayer(e) {
    // Afficher la card du joueur recherché
    console.log(`show the card of ${e.target.textContent}`)
    playersDiv.innerHTML = "";
}
function filterPlayers() {
    if(searchInputValue.length === 0) {
        playersDiv.innerHTML = "";
        displayPlayers([]);
    } else {
        const foundPlayer = footballPlayers.filter((player) => player.indexOf(searchInputValue.toLowerCase()) !== -1)
        if(foundPlayer) {
            displayPlayers(foundPlayer)
        }
    }
}
function handleInputValue(e) {
    searchInputValue = e.target.value
    console.log(searchInputValue)
}

const searchInput = document.querySelector('input');
const searchButton = document.querySelector('button');

// searchButton.addEventListener('click', search())
searchInput.addEventListener('input', (e) => {
    handleInputValue(e);
    filterPlayers()
});




