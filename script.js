// Getting divs from HTML
var strStat = document.querySelector(".str")
var strMod = document.querySelector(".str-mod")

var dexStat = document.querySelector(".dex")
var dexMod = document.querySelector(".dex-mod")

var conStat = document.querySelector(".con")
var conMod = document.querySelector(".con-mod")

var intStat = document.querySelector(".int")
var intMod = document.querySelector(".int-mod")

var wisStat = document.querySelector(".wis")
var wisMod = document.querySelector(".wis-mod")

var chaStat = document.querySelector(".cha")
var chaMod = document.querySelector(".cha-mod")



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

// -------------------------------

// Buttons for assigning stats
var strButton = document.querySelector(".str-button");
var dexButton = document.querySelector(".dex-button");
var conButton = document.querySelector(".con-button");
var intButton = document.querySelector(".int-button");
var wisButton = document.querySelector(".wis-button");
var chaButton = document.querySelector(".cha-button");

// Hiding necessary elements
document.querySelector(".assignment-buttons").style.display = "none";

document.querySelector("#assign-stat-text-1").hidden = true;

document.querySelector(".race-selection").style.display = "none";
document.querySelector(".half-elf-assignment-buttons1").style.display = "none";
document.querySelector(".half-elf-assignment-buttons2").style.display = "none";

// ----------------------------------------------

// Function that rolls each stat
function statNumber() {
    // Rolls four six-sided dice
    var diceOne = Math.floor(Math.random() * 6) + 1;
    //console.log(diceOne)
    rollOne.textContent = diceOne;
    var diceTwo = Math.floor(Math.random() * 6) + 1;
    //console.log(diceTwo)
    rollTwo.textContent = diceTwo;
    var diceThree = Math.floor(Math.random() * 6) + 1;
    //console.log(diceThree)
    rollThree.textContent = diceThree;
    var diceFour = Math.floor(Math.random() * 6) + 1;
    //console.log(diceFour)
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
    //console.log(values)

    // Turns array into seperate variables, adds together
    var valOne = values[0];
    //console.log(valOne)
    var valTwo = values[1];
    //console.log(valTwo)
    var valThree = values[2];
    //console.log(valThree)

    var finalStatOne = valOne + valTwo + valThree;
    //console.log(finalStatOne)
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
    // console.log(modifierOne)
    // console.log(modifierOneNum)

    // Turns modifier into one string
    var finalMod = modifierOne + modifierOneNum;
    //console.log(finalMod)
    return finalMod;
}

// ----------------------------------------------

// Functions that roll a stat and determines the modifier and puts them into a box
function statOne() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    firstStat.textContent = finalStatOne;
    modOne.textContent = finalMod;

    rollButton1.style.display = "none";
    counter++
    counterCheck()
}

function statTwo() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    secondStat.textContent = finalStatOne;
    modTwo.textContent = finalMod;

    rollButton2.style.display = "none";
    counter++
    counterCheck()
}

function statThree() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    thirdStat.textContent = finalStatOne;
    modThree.textContent = finalMod;

    rollButton3.style.display = "none";
    counter++
    counterCheck()
}

function statFour() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    fourthStat.textContent = finalStatOne;
    modFour.textContent = finalMod;

    rollButton4.style.display = "none";
    counter++
    counterCheck()
}

function statFive() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    fifthStat.textContent = finalStatOne;
    modFive.textContent = finalMod;

    rollButton5.style.display = "none";
    counter++
    counterCheck()
}

function statSix() {
    var finalStatOne = statNumber()
    var finalMod = modifier(finalStatOne)

    sixthStat.textContent = finalStatOne;
    modSix.textContent = finalMod;

    rollButton6.style.display = "none";
    counter++
    counterCheck()
}


// Checks the value the counter is at, does necessary changes at certain counter values
function counterCheck() {
    if (counter === -1) {
        rollOne.style.display = "none";
        rollTwo.style.display = "none";
        rollThree.style.display = "none";
        rollFour.style.display = "none";
        document.querySelector(".rolls").style.display = "none";

        document.querySelector(".assignment-buttons").style.display = "flex";
    }

    if (counter === -1) {
        document.querySelector("#assign-stat-text-1").hidden = false;
        document.querySelector(".assign-stat-span").textContent = "1";
    }
    if (counter === 0) {
        document.querySelector(".assign-stat-span").textContent = "2";
    }
    if (counter === 1) {
        document.querySelector(".assign-stat-span").textContent = "3";
    }
    if (counter === 2) {
        document.querySelector(".assign-stat-span").textContent = "4";
    }
    if (counter === 3) {
        document.querySelector(".assign-stat-span").textContent = "5";
    }
    if (counter === 4) {
        document.querySelector(".assign-stat-span").textContent = "6";
    }
    if (counter === 5) {
        document.querySelector("#assign-stat-text-1").hidden = true;
        document.querySelector(".rolled-stats").style.display = "none";

        document.querySelector(".race-selection").style.display = "block";
    }
}

// -----------------------------------------------------

var counter = -7;
console.log(counter)

// ------------------------------------------------------

// Assigns stats based on what button is pressed
// Stats are assigned one at a time, from stat 1 to stat 6 in order
strButton.addEventListener("click", strButtonFunction);

function strButtonFunction() {
    counter++
    counterCheck()

    if (counter === 0) {
        var statAssign = firstStat.textContent;
        var modAssign = modOne.textContent;
    } else if (counter === 1) {
        statAssign = secondStat.textContent;
        modAssign = modTwo.textContent;
    } else if (counter === 2) {
        statAssign = thirdStat.textContent;
        modAssign = modThree.textContent;
    } else if (counter === 3) {
        statAssign = fourthStat.textContent;
        modAssign = modFour.textContent;
    } else if (counter === 4) {
        statAssign = fifthStat.textContent;
        modAssign = modFive.textContent;
    } else if (counter === 5) {
        statAssign = sixthStat.textContent;
        modAssign = modSix.textContent;
    }
    console.log(counter)
    console.log(firstStat.textContent)
    console.log(modOne.textContent)
    console.log(statAssign)
    console.log(modAssign)

    assignStr(statAssign, modAssign)

    strButton.style.display = "none";
}

dexButton.addEventListener("click", dexButtonFunction);

function dexButtonFunction() {
    counter++
    counterCheck()

    if (counter === 0) {
        var statAssign = firstStat.textContent;
        var modAssign = modOne.textContent;
    } else if (counter === 1) {
        statAssign = secondStat.textContent;
        modAssign = modTwo.textContent;
    } else if (counter === 2) {
        statAssign = thirdStat.textContent;
        modAssign = modThree.textContent;
    } else if (counter === 3) {
        statAssign = fourthStat.textContent;
        modAssign = modFour.textContent;
    } else if (counter === 4) {
        statAssign = fifthStat.textContent;
        modAssign = modFive.textContent;
    } else if (counter === 5) {
        statAssign = sixthStat.textContent;
        modAssign = modSix.textContent;
    }
    console.log(counter)
    console.log(statAssign)
    console.log(modAssign)

    assignDex(statAssign, modAssign)

    dexButton.style.display = "none";
}

conButton.addEventListener("click", conButtonFunction);

function conButtonFunction() {
    counter++
    counterCheck()

    if (counter === 0) {
        var statAssign = firstStat.textContent;
        var modAssign = modOne.textContent;
    } else if (counter === 1) {
        statAssign = secondStat.textContent;
        modAssign = modTwo.textContent;
    } else if (counter === 2) {
        statAssign = thirdStat.textContent;
        modAssign = modThree.textContent;
    } else if (counter === 3) {
        statAssign = fourthStat.textContent;
        modAssign = modFour.textContent;
    } else if (counter === 4) {
        statAssign = fifthStat.textContent;
        modAssign = modFive.textContent;
    } else if (counter === 5) {
        statAssign = sixthStat.textContent;
        modAssign = modSix.textContent;
    }
    console.log(counter)
    console.log(statAssign)
    console.log(modAssign)

    assignCon(statAssign, modAssign)
    
    conButton.style.display = "none";
}

intButton.addEventListener("click", intButtonFunction);

function intButtonFunction() {
    counter++
    counterCheck()

    if (counter === 0) {
        var statAssign = firstStat.textContent;
        var modAssign = modOne.textContent;
    } else if (counter === 1) {
        statAssign = secondStat.textContent;
        modAssign = modTwo.textContent;
    } else if (counter === 2) {
        statAssign = thirdStat.textContent;
        modAssign = modThree.textContent;
    } else if (counter === 3) {
        statAssign = fourthStat.textContent;
        modAssign = modFour.textContent;
    } else if (counter === 4) {
        statAssign = fifthStat.textContent;
        modAssign = modFive.textContent;
    } else if (counter === 5) {
        statAssign = sixthStat.textContent;
        modAssign = modSix.textContent;
    }
    console.log(counter)
    console.log(statAssign)
    console.log(modAssign)

    assignInt(statAssign, modAssign)
    
    intButton.style.display = "none";
}

wisButton.addEventListener("click", wisButtonFunction);

function wisButtonFunction() {
    counter++
    counterCheck()

    if (counter === 0) {
        var statAssign = firstStat.textContent;
        var modAssign = modOne.textContent;
    } else if (counter === 1) {
        statAssign = secondStat.textContent;
        modAssign = modTwo.textContent;
    } else if (counter === 2) {
        statAssign = thirdStat.textContent;
        modAssign = modThree.textContent;
    } else if (counter === 3) {
        statAssign = fourthStat.textContent;
        modAssign = modFour.textContent;
    } else if (counter === 4) {
        statAssign = fifthStat.textContent;
        modAssign = modFive.textContent;
    } else if (counter === 5) {
        statAssign = sixthStat.textContent;
        modAssign = modSix.textContent;
    }
    console.log(counter)
    console.log(statAssign)
    console.log(modAssign)

    assignWis(statAssign, modAssign)
    
    wisButton.style.display = "none";
}

chaButton.addEventListener("click", chaButtonFunction);

function chaButtonFunction() {
    counter++
    counterCheck()

    if (counter === 0) {
        var statAssign = firstStat.textContent;
        var modAssign = modOne.textContent;
    } else if (counter === 1) {
        statAssign = secondStat.textContent;
        modAssign = modTwo.textContent;
    } else if (counter === 2) {
        statAssign = thirdStat.textContent;
        modAssign = modThree.textContent;
    } else if (counter === 3) {
        statAssign = fourthStat.textContent;
        modAssign = modFour.textContent;
    } else if (counter === 4) {
        statAssign = fifthStat.textContent;
        modAssign = modFive.textContent;
    } else if (counter === 5) {
        statAssign = sixthStat.textContent;
        modAssign = modSix.textContent;
    }
    console.log(counter)
    console.log(statAssign)
    console.log(modAssign)

    assignCha(statAssign, modAssign)
    
    chaButton.style.display = "none";
}

// ------------------------------------------------------

// Functions for assigning rolled stats to stats
function assignStr(x, y) {
    strStat.textContent = x;
    strMod.textContent = y;

    localStorage.setItem("strength-stat", strStat.textContent)
    localStorage.setItem("strength-modifier", strMod.textContent)
}
function assignDex(x, y) {
    dexStat.textContent = x;
    dexMod.textContent = y;

    localStorage.setItem("dexterity-stat", dexStat.textContent)
    localStorage.setItem("dexterity-modifier", dexMod.textContent)
}
function assignCon(x, y) {
    conStat.textContent = x;
    conMod.textContent = y;

    localStorage.setItem("constitution-stat", conStat.textContent)
    localStorage.setItem("constitution-modifier", conMod.textContent)
}
function assignInt(x, y) {
    intStat.textContent = x;
    intMod.textContent = y;

    localStorage.setItem("intelligence-stat", intStat.textContent)
    localStorage.setItem("intelligence-modifier", intMod.textContent)
}
function assignWis(x, y) {
    wisStat.textContent = x;
    wisMod.textContent = y;

    localStorage.setItem("wisdom-stat", wisStat.textContent)
    localStorage.setItem("wisdom-modifier", wisMod.textContent)
}
function assignCha(x, y) {
    chaStat.textContent = x;
    chaMod.textContent = y;

    localStorage.setItem("charisma-stat", chaStat.textContent)
    localStorage.setItem("charisma-modifier", chaMod.textContent)
}

// ---------------------------------------------------------

// ---------------------------------------------------------

// Race buttons and bonuses
document.getElementById("dragonborn-button").addEventListener("click", function() {
    raceStrength(2)
    raceCharisma(1)

    localStorage.setItem("race", "dragonborn")
    statFinish()
});

document.getElementById("dwarf-button").addEventListener("click", function() {
    raceConstitution(2)

    localStorage.setItem("race", "dwarf")
    statFinish()
});

document.getElementById("elf-button").addEventListener("click", function() {
    raceDexterity(2)

    localStorage.setItem("race", "elf")
    statFinish()
});

document.getElementById("gnome-button").addEventListener("click", function() {
    raceIntelligence(2)

    localStorage.setItem("race", "gnome")
    statFinish()
});

document.getElementById("half-elf-button").disabled = true;
document.getElementById("half-elf-button").addEventListener("click", function() {
    raceCharisma(2)

    halfElfStats()
    localStorage.setItem("race", "half-elf")
    // FINISH ME LATER LOL
});

document.getElementById("halfling-button").addEventListener("click", function() {
    raceDexterity(2)

    localStorage.setItem("race", "halfling")
    statFinish()
});

document.getElementById("half-orc-button").addEventListener("click", function() {
    raceStrength(2)
    raceConstitution(1)

    localStorage.setItem("race", "half-orc")
    statFinish()
});

document.getElementById("human-button").addEventListener("click", function() {
    raceStrength(1)
    raceDexterity(1)
    raceConstitution(1)
    raceIntelligence(1)
    raceWisdom(1)
    raceCharisma(1)

    localStorage.setItem("race", "human")
    statFinish()
});

document.getElementById("tiefling-button").addEventListener("click", function() {
    raceCharisma(2)
    raceIntelligence(1)

    localStorage.setItem("race", "tiefling")
    statFinish()
});

// function halfElfStats() {
//     document.querySelector(".half-elf-assignment-buttons1").style.display = "flex";
//     document.querySelector(".half-elf-assignment-buttons2").style.display = "flex";

//     document.getElementById("tiefling-button").addEventListener("click", function() {
//         chaStat.textContent = parseInt(chaStat.textContent) + 2;
//         var modX = parseInt(chaStat.textContent);
//         chaMod.textContent = modifier(modX)
    
//         intStat.textContent = parseInt(intStat.textContent) + 1;
//         var modY = parseInt(intStat.textContent);
//         intMod.textContent = modifier(modY)
    
//         localStorage.setItem("race", "tiefling")
//         statFinish()
//     });
// }

function statFinish() {
    document.querySelector(".race-selection").style.display = "none";

    localStorage.setItem("strength-stat", strStat.textContent)
    localStorage.setItem("strength-modifier", strMod.textContent)

    localStorage.setItem("dexterity-stat", dexStat.textContent)
    localStorage.setItem("dexterity-modifier", dexMod.textContent)

    localStorage.setItem("constitution-stat", conStat.textContent)
    localStorage.setItem("constitution-modifier", conMod.textContent)

    localStorage.setItem("intelligence-stat", intStat.textContent)
    localStorage.setItem("intelligence-modifier", intMod.textContent)

    localStorage.setItem("wisdom-stat", wisStat.textContent)
    localStorage.setItem("wisdom-modifier", wisMod.textContent)

    localStorage.setItem("charisma-stat", chaStat.textContent)
    localStorage.setItem("charisma-modifier", chaMod.textContent)
}


function raceStrength(x) {
    strStat.textContent = parseInt(strStat.textContent) + x;
    var modX = parseInt(strStat.textContent);
    strMod.textContent = modifier(modX)
}

function raceDexterity(x) {
    dexStat.textContent = parseInt(dexStat.textContent) + x;
    var modX = parseInt(dexStat.textContent);
    dexMod.textContent = modifier(modX)
}
function raceConstitution(x) {
    conStat.textContent = parseInt(conStat.textContent) + x;
    var modX = parseInt(conStat.textContent);
    conMod.textContent = modifier(modX)
}
function raceIntelligence(x) {
    intStat.textContent = parseInt(intStat.textContent) + x;
    var modX = parseInt(intStat.textContent);
    intMod.textContent = modifier(modX)
}
function raceWisdom(x) {
    wisStat.textContent = parseInt(wisStat.textContent) + x;
    var modX = parseInt(wisStat.textContent);
    wisMod.textContent = modifier(modX)
}
function raceCharisma(x) {
    chaStat.textContent = parseInt(chaStat.textContent) + x;
    var modX = parseInt(chaStat.textContent);
    chaMod.textContent = modifier(modX)
}    