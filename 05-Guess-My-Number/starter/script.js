'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)

document.querySelector('.guess').value = '';
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

// document.querySelector('.number').textContent = secretNumber

function isScoreExist(message) {
    if(score > 1) {
        document.querySelector('.message').textContent = message;
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        // document.querySelector('.message').textContent = '🧨 GAME OVER';
        printMessage('🧨 GAME OVER');

        document.querySelector('.score').textContent = 0;
    }
}

function checkScore() {

    if (score > highScore) {
        highScore = score;

        document.querySelector('.highscore').textContent = highScore;
    }
}

function printMessage(message) {
    document.querySelector('.message').textContent = message;
}

function gameLogic() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        // document.querySelector('.message').textContent = '🎆 No number!';
        printMessage('🎆 No number!');
    } else if(guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        printMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.check').style.pointerEvents = 'none';

        checkScore();

    } else if(guess > secretNumber) {

        isScoreExist('🎈 Too high!');
        
    } else if(guess < secretNumber) isScoreExist('📡 Too low!');
}

document.addEventListener('keypress', e => {
    if (e.keyCode === 13) gameLogic();
});

document.querySelector('.check')
        .addEventListener('click', () => {
            gameLogic();
        });

document.querySelector('.again') 
        .addEventListener('click', () => {
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
            document.querySelector('.number').textContent = '?'
            document.querySelector('.guess').value = '';
            document.querySelector('.message').textContent = 'Start guessing...';
            document.querySelector('.check').style.pointerEvents = 'unset';

            secretNumber = Math.trunc(Math.random() * 20) + 1;
            score = 20;
            document.querySelector('.score').textContent = score;
        });