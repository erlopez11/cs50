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
    alphaLower = 'abcdefghijklmnopqrstuvwxyz';
    alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    specialChar = ' .,;:!&';
    cipherText = '';

  for (let i = 0; i < message.length; i++) {
      for (let p = 0; p < specialChar.length; p++) {
        if (message[i] === specialChar[p]) {
          cipherText += specialChar[p];
        }
      }
    if (message[i] === message[i].toUpperCase()) {
      for (let j = 0; j < alphaUpper.length; j++) {
        if(message[i] === alphaUpper[j]) {
          cipherText += alphaUpper[(j + key) % 26];
        }
      }
    } else {
      for (let m = 0; m < alphaLower.length; m++) {
        if (message[i] === alphaLower[m]) {
          cipherText += alphaLower[(m + key) % 26];
        }
      }
    }
  }
  return cipherText;
}

// The Complete Cypher Function //

function makeCipher() {
  let key = getKey();
  let plainText = getMessage();
  let cipherText = rotate(plainText, key);


  console.log(`Key: ${key}`);
  console.log(`Plain Text: ${plainText}`);
  console.log(`Cipher Text: ${cipherText}`);
  
}

makeCipher();