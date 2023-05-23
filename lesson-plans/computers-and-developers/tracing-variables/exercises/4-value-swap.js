'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/
// declare variable a and initialize value 'y'
let a = 'y';
// declare variable b and initialize value 'x'
let b = 'x';
// declare variable t and initialize value ''
let t = '';
// read variables a, b, t which value is y, x
console.log(a, b, t);
// read variable a
// assign to variable t value of a which is 'y'
t = a;
// read variable b
// assign to variable a value of b which is 'x'
a = b;
// read variable t
// assign to variable b value of t which is 'y'
b = t;
// read variables a, b, t which value is x, y, y
console.log(a, b, t);

// what did you do in this program?
// declare variables and initialize and after overwrite the values
// what are the final values of `a` and `b`?
// a = 'x' and b = 'y'
// how are they changed from the initial values
// they was assign with another value
// is it possible to swap a and b without using t?
// Yes
