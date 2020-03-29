// These JavaScript comments are instructions.
// Follow them step by step.
// When asked, write code to complete the task described.

// Example: 0. FOR ONE TO SEVEN
// ============================
// Write a for loop that loops through the numbers 1 through 7.
// Print each number to the JavaScript console.
// Save your changes.
// Open javascript/practice/03-for-loops/index.html in your browser, open the JavaScript console, and confirm the result.
// (I'll write the code for this one.)

console.log("FOR ONE TO SEVEN");
for (var n = 1; n <= 7; n++) {
    console.log(n);
}

// 1. FOR ONE TO TEN
// =================
// Write a for loop that loops through the numbers 1 through 10.
// Print each number to the JavaScript console.
console.log("FOR ONE TO TEN");
// Write your code here:
for (var i = 1; i <= 10; i++){
    console.log(i);
}


// 2. COUNT BY TWOS FROM TWO TO TWELVE
// ===================================
// Write a for loop that loops through the numbers 2 through 12.
// Hint: Increment by 2 instead of 1 (n = n + 2 versus n++).
// Print each number to the JavaScript console. You should see:
// --------------------------------
// COUNT BY TWOS FROM TWO TO TWELVE
// 2
// 4
// 6
// 8
// 10
// 12
console.log("COUNT BY TWOS FROM TWO TO TWELVE");
// Write your code here:
for (var i = 2; i <= 12; i += 2){
    console.log(i);
}


// 3. COUNT BACKWARD FROM SIX
// ==========================
// Write a for loop that loops from 6 to 0, counting backward.
// Hint: Decrement instead of increment (n-- versus n++).
// Print each number to the JavaScript console. You should see:
// -----------------------
// COUNT BACKWARD FROM SIX
// 6
// 5
// 4
// 3
// 2
// 1
// 0
console.log("COUNT BACKWARD FROM SIX");
// Write your code here:
for (var i = 6; i >= 0; i--){
    console.log(i);
}


// 4. SUM EVENS
// ============
// You're given two variables with numeric values:

var limit = 10; // We stop looping when we reach this number.
var sum = 0;    // We add even numbers to this variable.

// Write a for loop that loops from 0 to limit.
// If the current number is even, add it to sum. Otherwise, ignore it.
// Try changing the value of limit and confirm your sums are correct.
// When limit equals 4, sum equals 6 (2 + 4).
// When limit equals 10, sum equals 30 (2 + 4 + 6 + 8 + 10).
// When limit equals 8, sum equals 20 (2 + 4 + 6 + 8).
// What happens if you set limit to a negative number?
console.log("SUM EVENS");
// Write your code here:
for (var i = 0; i <= limit; i++){
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log("limit = %s, sum = %s", limit, sum);

// 5. FIND A FAVORITE NUMBER
// =========================
// You're given two variables with numeric values:

var winniesFavoriteNumber = 53; // Winnie's favorite number
var kaisFavoriteNumber = 44;    // Kai's favorite number

// Write a for loop that loops until it reaches either winniesFavoriteNumber 
// or kaisFavoriteNumber and then stop.
// Print the final number to the JavaScript console.
// Try changing the value of winniesFavoriteNumber and kaisFavoriteNumber.
// Try adding a third, or forth, or fifth favorite number!
console.log("FIND A FAVORITE NUMBER");
// Write your code here:
var num;
for (var i = 0; i <= winniesFavoriteNumber && i <= kaisFavoriteNumber; i++){
    num = i;
}
console.log(num);

// CHALLENGE: WHILE LOOPS
// ======================
// Try solving the five tasks above with a while loop in place of a for loop.
console.log("Challenge #1");

var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("Challenge #2");

var j = 2;
while(j <= 12){
    console.log(j);
    j += 2;
}

console.log("Challenge #3");

var k = 6;
while (k >= 0) {
    console.log(k);
    k--;
}

console.log("Challenge #4");

var limit2 = 10; // We stop looping when we reach this number.
var sum2 = 0;    // We add even numbers to this variable.
var l = 0;
while (l <= limit2){
    if (l % 2 == 0) {
        sum2 += l;
    }
    l++;
}
console.log("limit2 = %s, sum2 = %s", limit, sum);

console.log("Challenge #5");
var num;
var m = 0;
while (m <= winniesFavoriteNumber && m <= kaisFavoriteNumber){
    num = m;
    m++;
}
console.log(num);
/**********************************
 * The Software Guild
 * Copyright (C) 2019 Wiley edu LLC - All Rights Reserved
 *********************************/