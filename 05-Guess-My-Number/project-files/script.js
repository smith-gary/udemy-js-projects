'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.number').textContent = 13);

// console.log(document.querySelector('.score').textContent = 11);

// console.log(document.querySelector('.guess').value = 23);

let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    // no input

    if (!guess) {
        // document.querySelector('.message').textContent = 'Gotta enter a number....';

        displayMessage("Gotta enter a number...0 doesn't count");

        // player wins

    } else if (guess === number) {
        // document.querySelector('.message').textContent = 'Look at you, you expert guesser!';

        displayMessage('Look at you, you expert guesser!');

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = number;

        if (score > highscore) {
            highscore = score;

            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== number) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > number ? 'Too high...' : 'Too Low...';

            displayMessage(guess > number ? 'Too high...' : 'Too Low...');

            score--;

            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You Lost!'

            displayMessage('You Lost!');

            document.querySelector('.score').textContent = 0;
        }
    }
});

// replay the game without reloading window
document.querySelector('.again').addEventListener('click', function() {

    score = 20;

    number = Math.trunc(Math.random() * 20) + 1;
    console.log(number);

    // document.querySelector('.message').textContent = 'Start guessing...';

    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
});