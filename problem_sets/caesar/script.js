// Ask for Key value //
function getKey(number) {
    number = prompt('Enter the key you would like to use.');
    return parseInt(number);
}

// Ask for plaintext message //
function getMessage(message) {
    message = prompt('Enter your message.');
    return message;
};

// Rotates Letters in Message //
function rotate(message, key) {
    alphabet = 'abcdefghijklmnopqrstuvwxyz';

    cypherText = '';

    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (message[i] === alphabet[j]) {
                cypherLetter = alphabet[(j + key) % 26];
                cypherText += cypherLetter;
            } 
        }
    }
    return cypherText;
}



//Possible alternative function? //

function rotate2(message, key) {
    alphaLower = 'abcdefghijklmnopqrstuvwxyz';
    alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    speacialChar = ' .,;:!&';
    cypherText = '';

    for (let i = 0; i < message.length; i++) {
        if (message[i] === message[i].toUpperCase()) {
            for (let j = 0; j < alphaUpper.length; j++) {
                if(message[i] === alphaUpper[j]) {
                    cypherText += alphaUpper[(j + key) % 26];
                }
            }
        } else if (message[i] === message[i].toLowerCase()) {
            for (let m = 0; m < alphaLower.length; m++) {
                if (message[i] === alphaLower[m]) {
                    cypherText += alphaLower[(m + key) % 26];
                }
            }
        } else if (message[i] !== alphaUpper.toUpperCase() && message[i] !== alphaLower.toLowerCase()) {
            for (let p = 0; p < speacialChar.length; p++) {
                if (message[i] === speacialChar[p]) {
                    cypherText += speacialChar[p];
                }
            }
        }
    }
    return cypherText;
}

console.log(rotate2('hEllo WoRlD!', 1));