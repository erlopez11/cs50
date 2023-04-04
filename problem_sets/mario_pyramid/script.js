function constructPyramid(height) {
    let string = '';
    for (let i = 0; i < height; i++) {
        for (let j = 2; j <= height - i; j++) {
            string += ' '
        }
        for (let k = 0; k <= i; k++) {
            string += '#';
        }
        string += '\n';
    }
    return string;
}

function getHeight(height) {
    height = prompt('What height do you want the pyramid to be?');
    return parseInt(height);
}

function printPyramid() {
    let height = getHeight();

    if (height < 1 || height > 8 ) {
        alert('Please enter a height between 1 and 8.');
    } else {
        console.log(constructPyramid(height));
    }
}

printPyramid();