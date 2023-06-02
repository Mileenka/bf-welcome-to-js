'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

let message = '';
while (true) {
  const userInput = prompt('Please enter something:');
  if (userInput === null) {
    alert('There is no escape!');
    continue;
  }
  if (userInput === '') {
    alert('No empty string allowed');
    continue;
  }
  if (userInput) {
    message = userInput;
    break;
  }
}
let words = message.split(' ');
let newMessage = words
  .map((word) => {
    let characters = word.split('');
    let transformedWord = characters
      .map((character, charIndex) => {
        if (charIndex % 2 === 0) {
          return character.toUpperCase();
        } else {
          return character.toLowerCase();
        }
      })
      .join('');
    return transformedWord;
  })
  .join(' ');
alert(newMessage);
