/* Document Elements */

let currentScoreOne = 0;
let currentScoreTwo = 0;
let rounds = 0;

const calculateBtn = document.querySelector(".calculate-points");
const restartBtn = document.querySelector(".restart");
const inputFieldOne = document.querySelector(".playerOne_text");
const inputFieldTwo = document.querySelector(".playerTwo_text");
const onePoints = document.querySelector(".playerOne_Points");
const twoPoints = document.querySelector(".playerTwo_Points");
const roundNumber = document.querySelector(".round");
const winner = document.querySelector(".winner");
const overlay = document.querySelector(".overlay");



/* Get the two words for game 

function getWordOne(wordOne) {
    wordOne = prompt('Player One, enter your word.');
    return wordOne.toLowerCase();
}

function getWordTwo(wordTwo) {
    wordTwo = prompt('Player Two, enter your word.');
    return wordTwo.toLowerCase();
} */

/* Calculating the points for the word */

function computeScore(word) {
    points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];

    wordPoints = 0;

    for (let i = 0; i < word.length; i++) {
            switch (word[i]) {
                case 'a':
                    wordPoints += points[0];
                    break;
                case 'b':
                    wordPoints += points[1];
                    break;
                case 'c':
                    wordPoints += points[2];
                case 'd':
                    wordPoints += points[3];
                    break;
                case 'e':
                    wordPoints += points[4];
                    break;
                case 'f':
                    wordPoints += points[5];
                    break;
                case 'g':
                    wordPoints += points[6];
                    break;
                case 'h':
                    wordPoints += points[7];
                    break;
                case 'i':
                    wordPoints += points[8];
                    break;
                case 'j':
                    wordPoints += points[9];
                    break;
                case 'k':
                    wordPoints += points[10];
                    break;
                case 'l':
                    wordPoints += points[11];
                    break;
                case 'm':
                    wordPoints += points[12];
                    break;
                case 'n':
                    wordPoints += points[13];
                    break;
                case 'o':
                    wordPoints += points[14];
                    break;
                case 'p':
                    wordPoints += points[15];
                    break;
                case 'q':
                    wordPoints += points[16];
                    break;
                case 'r':
                    wordPoints += points[17];
                    break;
                case 's':
                    wordPoints += points[18];
                    break;
                case 't':
                    wordPoints += points[19];
                    break;
                case 'u':
                    wordPoints += points[20];
                    break;
                case 'v':
                    wordPoints += points[21];
                    break;
                case 'w':
                    wordPoints += points[22];
                    break;
                case 'x':
                    wordPoints += points[23];
                    break;
                case 'y':
                    wordPoints += points[24];
                    break;
                case 'z':
                    wordPoints += points[25];
                    break;
                default:
                    wordPoints += 0;
                    break;
            }
    }
    return wordPoints;
}

/* A Round of Scrabble */

function playRounds() {
    let wordOne = inputFieldOne.value;
    let wordTwo = inputFieldTwo.value;
    let scoreOne = computeScore(wordOne);
    let scoreTwo = computeScore(wordTwo);

    currentScoreOne += scoreOne;
    currentScoreTwo += scoreTwo;
    rounds++;
}

function updateGame() {
    onePoints.textContent = `Player One: ${currentScoreOne}`;
    twoPoints.textContent = `Player Two: ${currentScoreTwo}`;
    roundNumber.textContent = `Round ${rounds}`;
}

function endGame() {
    if (currentScoreOne >= 100 || currentScoreTwo >= 100) {
        overlay.style.display = "flex";
        if (currentScoreOne === currentScoreTwo) {
            winner.textContent = 'It\'s a tie!';
        } else if (currentScoreOne > currentScoreTwo) {
            winner.textContent = 'Player One wins!';
        } else if (currentScoreTwo > currentScoreOne) {
            winner.textContent = 'Player Two wins!';
        }
    }
}

function playScrabble() {
    playRounds()
    inputFieldOne.value = '';
    inputFieldTwo.value = '';
    updateGame()
    endGame()
}

/* Restart Game */

function restartGame() {
    overlay.style.display = "none";
    currentScoreOne = 0;
    currentScoreTwo = 0;
    rounds = 0;
    onePoints.textContent = `Player One: ${currentScoreOne}`;
    twoPoints.textContent = `Player Two: ${currentScoreTwo}`;
    roundNumber.textContent = `Round ${rounds}`;
    inputFieldOne.value = '';
    inputFieldTwo.value = '';
}


calculateBtn.addEventListener('click', playScrabble);
restartBtn.addEventListener('click', restartGame);

