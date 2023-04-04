/* Get Start and End Population */
let years = 0;

function getStartPop(startSize) {
    startSize = prompt("What is the starting population size?");
    return parseInt(startSize);
}

function getEndPop(endSize) {
    endSize = prompt("What is the end population size?");
    return parseInt(endSize);
} 

/* Population Size Function and Years Function */
function calculatePopSize(size) {
    let population = size + (size / 3) - (size / 4);
    return Math.trunc(population);
}

function calculateYears(startPopulation, endPopulation) {
    while (startPopulation < endPopulation) {
        startPopulation = calculatePopSize(startPopulation);
        years++
    }
    return years
}

/* End Function */

function calculatePopGrowth() {
    let startPopulation = getStartPop();
    let endPopulation = getEndPop();

    if (startPopulation > 9 && endPopulation > startPopulation) {
        console.log(`Start Population = ${startPopulation}`);
        console.log(`End Population = ${endPopulation}`);
        calculateYears(startPopulation, endPopulation);
        console.log(`Years: ${years}`);
    } else {
        alert('Please enter a valid population size.')
    }
}

calculatePopGrowth(); 






