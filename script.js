const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['superman', 'doomsday', 'batman', 'godzilla'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </span>
            `).join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '');
    if(innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You Won! 😃';
        popup.style.display = 'flex';
    }
}

function updateWrongLettersEl() {

}

function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000)
}

window.addEventListener('keydown', e => {
    if(e.code >= 'KeyA' && e.code <= 'KeyZ') {
        const letter = e.key;
        if(selectedWord.includes(letter)) {
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            }
            else {
                showNotification();
            }
        }
        else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLettersEl();
            }
            else {
                showNotification();
            }
        }
    }
})

displayWord();
