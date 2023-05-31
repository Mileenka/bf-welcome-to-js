'use strict';

/*
  test cases:
    null -> (do not exit the loop)
    '' -> (do not exit the loop)
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line: 
    why: To prompt the user to enter something and store the input in the `input` variable.
    trying: To capture user input using the `prompt` function.

*/

let message = '';

let input = null;
while (!input) {
  input = prompt('Enter something');

    message = 'you entered "' + input + '"';
  }


alert(message);