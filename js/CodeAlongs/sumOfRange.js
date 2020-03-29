// var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
// var sum = 0;
// var newElement = prompt("Enter a number of your choice:");
// newElement = parseInt(newElement);

// testArray.push(newElement);

// for (var position = 0; position < testArray.length; position++){
//     sum += testArray[position];
// }

// console.log("The sum of the " + testArray + " is: " + sum + ".");

// Challenge!

var testArray2 = [];
var sum2 = 0;

for (var i = 0; i < 5; i++) {
    newElement2 = prompt("Enter a number.");
    newElement2 = parseInt(newElement2);

    testArray2.push(newElement2);
}

for (var position = 0; position < testArray2.length; position++){
    sum2 += testArray2[position];
}

console.log("The sum of the " + testArray2 + " is: " + sum2 + ".");

