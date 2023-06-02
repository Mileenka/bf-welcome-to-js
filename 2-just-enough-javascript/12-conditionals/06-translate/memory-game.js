'use strict';

/*

  Data In:
    - User input for the thing to remember (string)
    - User input for the guess (string)

  Data Out:
    - Alert message (string)

  Test Cases:
    - Case 1:
      Input: 'apple' (thingToRemember)
      Guess: 'apple'
      Output: 'you win!'
    - Case 2:
      Input: 'banana' (thingToRemember)
      Guess: 'orange'
      Output: 'try again.'
    - Case 3:
      Input: 'car' (thingToRemember)
      Guess: ''
      Output: 'try again.'

*/

let thingToRemember = prompt('enter some text, then remember it.\n\n' + 'if you remember it correctly you win');

if (thingToRemember !== null) {
  let guess = prompt('now try to remember what it was:');
  if (guess !== null) {
    if (guess === thingToRemember) {
      alert('you win!');
    } else {
      alert('try again.');
    }
  }
} 

alert('good bye');
