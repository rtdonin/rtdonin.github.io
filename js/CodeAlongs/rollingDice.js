// for (var i = 0; i < 100; i++) {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }
var throws = prompt("How many dice are you throwing?")
var numSides = prompt("How many sides does the die have?");

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < throws; i++) {
    console.log(rollDice(numSides));
}