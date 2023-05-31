'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line: 8
    why: To prompt the user to enter something that is expected to be 5 characters long.
    trying: To capture user input using the `prompt` function and store it in the `input` variable.
*/

let input = prompt('enter something 5 characters long');

if (input === null || input === '') {
  alert(':(');
} else if (input.length < 5) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}
