
let scoreBoard = JSON.parse(localStorage.getItem('ScoreBoard')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

/*   
if (scoreBoard === null) {
scoreBoard = {
    Wins: 0,
    Losses: 0,
    Ties: 0
};
} */

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {

    if (!isAutoPlaying) {
        intervalId = setInterval(() =>  {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }


};

document.querySelector('.rock-btn').addEventListener('click',() => {
    playGame('Rock');
});

document.querySelector('.paper-btn').addEventListener('click',() => {
    playGame('Paper');
});

document.querySelector('.scissors-btn').addEventListener('click',() => {
    playGame('Scissors');
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissors');
    }
});


function playGame(playerMove) {
const computerMove = pickComputerMove();

if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
        result = 'You Lose.';
    } else if (computerMove === 'Paper') {
        result = 'You Win.';
    } else if (computerMove === 'Scissors') {
        result = 'Tie.';
    }

} else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
        result = 'You Win.';
    } else if (computerMove === 'Paper') {
        result = 'Tie.';
    } else if (computerMove === 'Scissors') {
        result = 'You Lose.';
    }
    
} else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
        result = 'Tie.';
    } else if (computerMove === 'Paper') {
        result = 'You Lose.';
    } else if (computerMove === 'Scissors') {
        result = 'You Win.';
    }
}

if (result === 'You Win.') {
    scoreBoard.Wins++;
} else if (result === 'You Lose.') {
    scoreBoard.Losses++;
} else if (result === 'Tie.') {
    scoreBoard.Ties++;
}

localStorage.setItem('ScoreBoard', JSON.stringify(scoreBoard));

document.querySelector('.GameResult').innerHTML = `${result}`;

document.querySelector('.GameMoves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> - Computer <img src="images/${computerMove}-emoji.png" class="move-icon">`;

updateScoreElement();
}

function pickComputerMove() {
let randomNumber = Math.random();
let result = '';
let computerMove = '';

if (randomNumber > 0 && randomNumber < 1 / 3) {
computerMove = 'Rock';
} else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
computerMove = 'Paper';
} else if (randomNumber > 2 / 3 && randomNumber < 1) {
computerMove = 'Scissors';
}

return computerMove;

}

function updateScoreElement() {
document.querySelector('.GameScores').innerHTML = `Wins: ${scoreBoard.Wins},Losses: ${scoreBoard.Losses}, Ties: ${scoreBoard.Ties}`;
};

document.querySelector('.reset-btn').addEventListener('click', () => {
    scoreBoard.Wins = 0;
    scoreBoard.Losses = 0;
    scoreBoard.Ties = 0;
    localStorage.removeItem('ScoreBoard');
    updateScoreElement();
});

document.querySelector('.autoplay-btn').addEventListener('click', () => {
    autoPlay();
});