'use strict';

/*
  test cases:
    '' -> '|'
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'

  experiment 1
    line: 9
    why: To prompt the user to enter some text and store it in the `text` variable.
    trying: To capture user input using the `prompt` function and assign it to the `text` variable.
*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let mirrored = '';
for (const character of text) {
  mirrored = character + '|' + mirrored + character;
}

alert(mirrored);