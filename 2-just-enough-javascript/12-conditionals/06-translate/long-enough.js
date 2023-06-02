'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message (string)

  Test Cases:
    - input: 'hello'
      output: 'long enough'
    - input: 'hi'
      output: 'too short'
    - input: 'apple'
      output: 'long enough'
    - input: ''
      output: 'you canceled :('

*/

const input = prompt('enter anything longer than 5 characters');

let message;

if (input !== null) {
  if (input.length < 5) {
    message = 'too short';
  } else if (input.length > 5) {
    message = 'long enough';
  } else {
    message = 'exactly 5!';
  }
} else {
  message = 'you canceled :(';
}

alert(message);
