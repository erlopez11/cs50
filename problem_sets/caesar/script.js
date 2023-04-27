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
                console.log(cypherLetter);
                cypherText += cypherLetter;
            } 
        }
    }
    return cypherText;
}

console.log(rotate('hello.', 1));