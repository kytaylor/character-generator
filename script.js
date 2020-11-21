function statOne() {
    // Rolls four six-sided dice
    var diceOne = Math.floor(Math.random() * 6) + 1;
    console.log(diceOne)
    var diceTwo = Math.floor(Math.random() * 6) + 1;
    console.log(diceTwo)
    var diceThree = Math.floor(Math.random() * 6) + 1;
    console.log(diceThree)
    var diceFour = Math.floor(Math.random() * 6) + 1;
    console.log(diceFour)

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
}

statOne()