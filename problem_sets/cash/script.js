function getChangeAmount(change) {
    change =prompt('What is the amount of chnage needed?')
    return parseInt(change);
}
let change = getChangeAmount();

/* Find the number of Quarters */

function calculateQuarters(cents) {
    if (cents >= 25 && cents <= 49) {
        change -= 25;
        return 1;
    } else if (cents >= 50 && cents <= 74) {
        change -= 50;
        return 2
    } else if (cents >= 75 && cents <= 99) {
        change -= 75;
        return 3;
    } else {
        change -= 0;
        return 0;
    }
};

/* Find the number of Dimes */

function calculateDimes(cents) {
    if (cents >= 10 && cents <= 19) {
        change -= 10;
        return 1;
    } else if (cents >= 20 && cents <= 29) {
        change -= 20;
        return 2;
    } else {
        change -= 0;
        return 0;
    }
};

/* Find the number of Nickles */

function calculateNickles(cents) {
    if (cents >= 5 && cents <= 9) {
        change -= 5;
        return 1;
    } else {
        change -= 0;
        return 0;
    }
}

function calculatePennies(cents) {
    if (cents === 1) {
        change -= 1;
        return 1;
    } else if (cents === 2) {
        change -= 2;
        return 2;
    } else if (cents === 3) {
        change -= 3;
        return 3;
    } else if (cents === 4) {
        change -= 4;
        return 4;
    } else {
        change -= 0;
        return 0;
    }
};

function calculateChange() {

    if (change >= 1 && change <= 99) {
        let quarters = calculateQuarters(change);
        let dimes = calculateDimes(change);
        let nickles = calculateNickles(change);
        let pennies = calculatePennies(change);
    
        console.log(`Quarters: ${quarters}`);
        console.log(`Dimes: ${dimes}`)
        console.log(`Nickles: ${nickles}`);
        console.log(`Pennies: ${pennies}`);
    } else {
        console.log('Please enter a valid number of change.');
    }
}

calculateChange(change);

