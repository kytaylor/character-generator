// Getting divs from HTML
var rollOne = document.querySelector(".roll1");
var rollTwo = document.querySelector(".roll2");
var rollThree = document.querySelector(".roll3");
var rollFour = document.querySelector(".roll4");

var firstStat = document.querySelector(".finalStat1");
var modOne = document.querySelector(".finalStatMod1");

var secondStat = document.querySelector(".finalStat2");
var modTwo = document.querySelector(".finalStatMod2");

var thirdStat = document.querySelector(".finalStat3");
var modThree = document.querySelector(".finalStatMod3");

var fourthStat = document.querySelector(".finalStat4");
var modFour = document.querySelector(".finalStatMod4");

var fifthStat = document.querySelector(".finalStat5");
var modFive = document.querySelector(".finalStatMod5");

var sixthStat = document.querySelector(".finalStat6");
var modSix = document.querySelector(".finalStatMod6");

// Buttons to roll each stat
var rollButton1 = document.querySelector(".r1-button");
var rollButton2 = document.querySelector(".r2-button");
var rollButton3 = document.querySelector(".r3-button");
var rollButton4 = document.querySelector(".r4-button");
var rollButton5 = document.querySelector(".r5-button");
var rollButton6 = document.querySelector(".r6-button");


// Button event listeners
rollButton1.addEventListener("click", statOne);
rollButton2.addEventListener("click", statTwo);
rollButton3.addEventListener("click", statThree);
rollButton4.addEventListener("click", statFour);
rollButton5.addEventListener("click", statFive);
rollButton6.addEventListener("click", statSix);

// Function for determining stats
// function statOne() {
//     // Rolls four six-sided dice
//     var diceOne = Math.floor(Math.random() * 6) + 1;
//     console.log(diceOne)
//     rollOne.textContent = diceOne;
//     var diceTwo = Math.floor(Math.random() * 6) + 1;
//     console.log(diceTwo)
//     rollTwo.textContent = diceTwo;
//     var diceThree = Math.floor(Math.random() * 6) + 1;
//     console.log(diceThree)
//     rollThree.textContent = diceThree;
//     var diceFour = Math.floor(Math.random() * 6) + 1;
//     console.log(diceFour)
//     rollFour.textContent = diceFour;

//     // Adds the three highest dice values to an array
//     var values = [];

//     if (diceOne <= diceTwo && diceOne <= diceThree && diceOne <= diceFour) {
//         values = values.concat(diceTwo);
//         values = values.concat(diceThree);
//         values = values.concat(diceFour);
//     } else if (diceTwo <= diceOne && diceTwo <= diceThree && diceTwo <= diceFour) {
//         values = values.concat(diceOne);
//         values = values.concat(diceThree);
//         values = values.concat(diceFour);
//     } else if (diceThree <= diceOne && diceThree <= diceTwo && diceThree <= diceFour) {
//         values = values.concat(diceOne);
//         values = values.concat(diceTwo);
//         values = values.concat(diceFour);
//     } else if (diceFour <= diceOne && diceFour <= diceTwo && diceFour <= diceThree) {
//         values = values.concat(diceOne);
//         values = values.concat(diceTwo);
//         values = values.concat(diceThree);
//     }
//     console.log(values)

//     // Turns array into seperate variables, adds together
//     var valOne = values[0];
//     console.log(valOne)
//     var valTwo = values[1];
//     console.log(valTwo)
//     var valThree = values[2];
//     console.log(valThree)

//     var finalStatOne = valOne + valTwo + valThree;
//     console.log(finalStatOne)
//     firstStat.textContent = finalStatOne;

//     // Determines stat modifier based on final stat
//     if (finalStatOne === 2 || finalStatOne === 3) {
//         var modifierOne = "-";
//         var modifierOneNum = 4;
//     } else if (finalStatOne === 4 || finalStatOne === 5) {
//         var modifierOne = "-";
//         var modifierOneNum = 3;
//     } else if (finalStatOne === 6 || finalStatOne === 7) {
//         var modifierOne = "-";
//         var modifierOneNum = 2;
//     } else if (finalStatOne === 8 || finalStatOne === 9) {
//         var modifierOne = "-";
//         var modifierOneNum = 1;
//     } else if (finalStatOne === 10 || finalStatOne === 11) {
//         var modifierOne = "+";
//         var modifierOneNum = 0;
//     } else if (finalStatOne === 12 || finalStatOne === 13) {
//         var modifierOne = "+";
//         var modifierOneNum = 1;
//     } else if (finalStatOne === 14 || finalStatOne === 15) {
//         var modifierOne = "+";
//         var modifierOneNum = 2;
//     } else if (finalStatOne === 16 || finalStatOne === 17) {
//         var modifierOne = "+";
//         var modifierOneNum = 3;
//     } else if (finalStatOne === 18 || finalStatOne === 19) {
//         var modifierOne = "+";
//         var modifierOneNum = 4;
//     } else if (finalStatOne === 20) {
//         var modifierOne = "+";
//         var modifierOneNum = 5;
//     }
//     console.log(modifierOne)
//     console.log(modifierOneNum)

//     // Turns modifier into one string
//     var finalMod = modifierOne + modifierOneNum;
//     console.log(finalMod)
//     modOne.textContent = finalMod;
// }

// ----------------------------------------------


// Function that rolls each stat
function statNumber() {
    // Rolls four six-sided dice
    var diceOne = Math.floor(Math.random() * 6) + 1;
    console.log(diceOne)
    rollOne.textContent = diceOne;
    var diceTwo = Math.floor(Math.random() * 6) + 1;
    console.log(diceTwo)
    rollTwo.textContent = diceTwo;
    var diceThree = Math.floor(Math.random() * 6) + 1;
    console.log(diceThree)
    rollThree.textContent = diceThree;
    var diceFour = Math.floor(Math.random() * 6) + 1;
    console.log(diceFour)
    rollFour.textContent = diceFour;

    // Adds the three highest dice values to an array
    var values = [];

    if (diceOne <= diceTwo && diceOne <= diceThree && diceOne <= diceFour) {
        values = values.concat(diceTwo);
        values = values.concat(diceThree);
        values = values.concat(diceFour);
    } else if (diceTwo <= diceOne && diceTwo <= diceThree && diceTwo <= diceFour) {
        values = values.concat(diceOne);
        values = values.concat(diceThree);
        values = values.concat(diceFour);
    } else if (diceThree <= diceOne && diceThree <= diceTwo && diceThree <= diceFour) {
        values = values.concat(diceOne);
        values = values.concat(diceTwo);
        values = values.concat(diceFour);
    } else if (diceFour <= diceOne && diceFour <= diceTwo && diceFour <= diceThree) {
        values = values.concat(diceOne);
        values = values.concat(diceTwo);
        values = values.concat(diceThree);
    }
    console.log(values)

    // Turns array into seperate variables, adds together
    var valOne = values[0];
    console.log(valOne)
    var valTwo = values[1];
    console.log(valTwo)
    var valThree = values[2];
    console.log(valThree)

    var finalStatOne = valOne + valTwo + valThree;
    console.log(finalStatOne)
    return finalStatOne
}

// Function that setermines the stat modifier
function modifier(finalStatOne) {
    if (finalStatOne === 2 || finalStatOne === 3) {
        var modifierOne = "-";
        var modifierOneNum = 4;
    } else if (finalStatOne === 4 || finalStatOne === 5) {
        var modifierOne = "-";
        var modifierOneNum = 3;
    } else if (finalStatOne === 6 || finalStatOne === 7) {
        var modifierOne = "-";
        var modifierOneNum = 2;
    } else if (finalStatOne === 8 || finalStatOne === 9) {
        var modifierOne = "-";
        var modifierOneNum = 1;
    } else if (finalStatOne === 10 || finalStatOne === 11) {
        var modifierOne = "+";
        var modifierOneNum = 0;
    } else if (finalStatOne === 12 || finalStatOne === 13) {
        var modifierOne = "+";
        var modifierOneNum = 1;
    } else if (finalStatOne === 14 || finalStatOne === 15) {
        var modifierOne = "+";
        var modifierOneNum = 2;
    } else if (finalStatOne === 16 || finalStatOne === 17) {
        var modifierOne = "+";
        var modifierOneNum = 3;
    } else if (finalStatOne === 18 || finalStatOne === 19) {
        var modifierOne = "+";
        var modifierOneNum = 4;
    } else if (finalStatOne === 20) {
        var modifierOne = "+";
        var modifierOneNum = 5;
    }
    console.log(modifierOne)
    console.log(modifierOneNum)

    // Turns modifier into one string
    var finalMod = modifierOne + modifierOneNum;
    console.log(finalMod)
    return finalMod;
}

// ----------------------------------------------

// Functions that roll a stat and determines the modifier and puts them into a box
function statOne() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    firstStat.textContent = finalStatOne;
    modOne.textContent = finalMod;
}

function statTwo() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    secondStat.textContent = finalStatOne;
    modTwo.textContent = finalMod;
}

function statThree() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    thirdStat.textContent = finalStatOne;
    modThree.textContent = finalMod;
}

function statFour() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    fourthStat.textContent = finalStatOne;
    modFour.textContent = finalMod;
}

function statFive() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    fifthStat.textContent = finalStatOne;
    modFive.textContent = finalMod;
}

function statSix() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    sixthStat.textContent = finalStatOne;
    modSix.textContent = finalMod;
}