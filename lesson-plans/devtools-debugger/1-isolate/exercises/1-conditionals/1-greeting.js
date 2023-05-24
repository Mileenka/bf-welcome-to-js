'use strict';

let input = prompt('enter your name:');
let input2 = prompt('enter your last name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + ' ' + input2 + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
