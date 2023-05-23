'use strict';
// declare variable a and initialize value '*'
let a = '*';
// let a = '<>';
// let a = '|-|';
// let a = '';
// another variable b is declared and initialized with an empty string.
let b = '';
// read variable b
// check the length of variable b
// read variable a
// check the length of variable a
// initiates a while loop that continues as long as the length of b is less than three times the length of a.
// In other words, the loop will run until b is three times as long as a.
// Within the loop, the value of b is updated by concatenating the existing value of b with the value of a.
// This concatenation is done using the + operator. As a result, b grows by the length of a in each iteration of the loop.
while (b.length < a.length * 3) {
  b = b + a;
}
// read the value of b which will be a string consisting of three consecutive occurrences of the value stored in a.
console.log(b);
