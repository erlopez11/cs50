/* Get the two words for game */

function getWordOne(wordOne) {
    wordOne = prompt('Player One, enter your word.');
    return wordOne.toLowerCase();
}

function getWordTwo(wordTwo) {
    wordTwo = prompt('Player Two, enter your word.');
    return wordTwo.toLowerCase();
}

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

function playScrabble() {
    let wordOne = getWordOne();
    let wordTwo = getWordTwo();

    let scoreOne = computeScore(wordOne);
    let scoreTwo = computeScore(wordTwo);

    console.log(`Player One: ${wordOne}`);
    console.log(`Player Two: ${wordTwo}`);

    if (scoreOne > scoreTwo) {
        console.log('Player One is the winner!');
    } else if (scoreTwo > scoreOne) {
        console.log('Player Two is the winner!');
    } else {
        console.log('It\'s a tie!');
    }
}

playScrabble();

