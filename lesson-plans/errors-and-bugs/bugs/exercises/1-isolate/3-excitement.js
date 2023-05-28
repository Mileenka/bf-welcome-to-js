'use strict';

/*
  test cases:
    '' -> ''
    'a' -> 'a!'
    'hello' -> 'h!e!l!l!o!'
    ':)' -> ':!)!'


  experiment 1
    line: 9
    why: To prompt the user to enter some text and store it in the `text` variable.
    trying: To capture user input using the `prompt` function and assign it to the `text` variable.
*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be excited');
}

let excited = '';
for (const character of text) {
  excited += character + '!';
}

alert(excited);
